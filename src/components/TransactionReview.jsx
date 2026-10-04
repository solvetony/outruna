import { useCallback, useEffect, useRef, useState } from 'preact/hooks'
import { formatAddress } from '../lib/format.js'
import { useI18n } from '../i18n/index.jsx'
import { TransactionRiskModal } from './TransactionRiskModal.jsx'
import { assertReviewedTransaction, createReview, reviewPolicy } from '../lib/transactions/review.js'
import { recentRecipients } from '../lib/transactions/recipients.js'
import { checkTransactionRisk } from '../lib/rabby/transactionRisk.js'

export function useTransactionReview (userId, checkRisk = checkTransactionRisk) {
  const [current, setCurrent] = useState(null)
  const pending = useRef(null)
  const generation = useRef(0)
  const finish = useCallback((approved) => {
    const operation = pending.current
    pending.current = null
    setCurrent(null)
    if (!operation) return
    if (approved) operation.resolve()
    else operation.reject(new Error('safety.cancelled'))
  }, [])
  useEffect(() => {
    setCurrent(null)
    return () => { generation.current++; pending.current?.reject(new Error('safety.cancelled')); pending.current = null }
  }, [userId])
  const reviewTransaction = useCallback(async (tx, context = {}) => {
    if (pending.current) throw new Error('safety.busy')
    const review = createReview(tx, context, recentRecipients(userId))
    Object.freeze(tx)
    const epoch = generation.current
    let operation
    const approval = new Promise((resolve, reject) => { operation = { resolve, reject }; pending.current = operation })
    setCurrent({ review, loading: true, risk: null })
    checkRisk({ tx: review.raw, fromAddress: review.raw.from, context }).then((risk) => {
      if (pending.current === operation) setCurrent({ review, loading: false, risk })
    }).catch(() => { if (pending.current === operation) finish(false) })
    await approval
    if (epoch !== generation.current) throw new Error('safety.cancelled')
    assertReviewedTransaction(review, tx)
    return review
  }, [userId, finish, checkRisk])
  return { reviewTransaction, dialog: current && <TransactionReview key={current.review.fingerprint} {...current} onCancel={() => finish(false)} onContinue={() => finish(true)} /> }
}

function TransactionReview ({ review, loading, risk, onCancel, onContinue }) {
  const { t } = useI18n()
  const [confirmed, setConfirmed] = useState(false)
  const { action } = review
  const warnings = review.warnings
  const normalized = risk && { ...risk, ...reviewPolicy(review, risk), title: t(`safety.${risk.level}`) }
  const row = (label, value) => <div className='detail-row'><span>{t(`safety.${label}`)}</span><strong className='transaction-review-value'>{value}</strong></div>
  return <TransactionRiskModal risk={normalized} loading={loading} confirmed={confirmed} onConfirmedChange={setConfirmed} onCancel={onCancel} onContinue={onContinue}
    confirmationText={[...warnings.map((warning) => t(`safety.ack_${warning}`)), ...(risk?.requiresConfirmation ? [t('risk.confirmation')] : [])].join(' ')}>
    <div className='transaction-review'>
      <h3>{t(`safety.${action.type}`)}</h3>
      {row('network', review.network.name)}
      {row(action.type === 'approve' ? 'spender' : 'recipient', <span title={action.recipient} aria-label={action.recipient}>{formatAddress(action.recipient, 10, 8)}</span>)}
      {action.type !== 'swap' && row('amount', `${action.unlimited ? t('safety.unlimitedAmount') : action.amount} ${action.asset.symbol}`)}
      {action.type !== 'swap' && action.asset.decimals == null && <p>{t('safety.rawUnits')}</p>}
      {action.type === 'swap' && <>{row('spend', review.context.amountIn)}{row('expected', review.context.expectedOut || t('tari.unavailable'))}{row('provider', review.context.provider)}<p>{t('safety.quoteOnly')}</p></>}
      {review.fees && row('fee', review.fees)}
      {review.context.outrunaFee && row('outrunaFee', review.context.outrunaFee)}
      {review.poisoning?.exact && <p>{t('safety.knownRecipient')}</p>}
      {warnings.map((warning) => <p className='swap-error' key={warning}>{t(`safety.${warning}`)}</p>)}
      {review.poisoning?.similar && <details><summary>{t('safety.compare')}</summary>{row('knownRecipient', review.poisoning.similar.address)}{row('recipient', review.poisoning.entered)}</details>}
      <details><summary>{t('safety.advanced')}</summary>{row('recipient', review.raw.to)}{row('rawValue', review.raw.value)}<code className='transaction-review-data'>{review.raw.data}</code></details>
    </div>
  </TransactionRiskModal>
}
