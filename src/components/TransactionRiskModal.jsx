import { ShieldAlert, X } from 'lucide-preact'
import { useEffect, useRef } from 'preact/hooks'
import { T, useI18n } from '../i18n/index.jsx'

function getRiskLevel (risk, loading) {
  if (loading) return 'loading'
  const level = String(risk?.level || '').toLowerCase()
  return ['info', 'warning', 'danger', 'forbidden'].includes(level) ? level : 'info'
}

export function TransactionRiskModal ({
  risk,
  loading,
  confirmed,
  onConfirmedChange,
  onCancel,
  onContinue
}) {
  const { t } = useI18n()
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!loading && !risk) return undefined

    closeButtonRef.current?.focus()
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onCancel()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [loading, onCancel, risk])

  if (!loading && !risk) return null

  const level = getRiskLevel(risk, loading)
  const blocking = level === 'forbidden' || Boolean(risk?.blocking)
  const requiresConfirmation = Boolean(risk?.requiresConfirmation) && !blocking

  return (
    <div className='risk-modal-backdrop' role='presentation' onClick={onCancel}>
      <section
        className={`risk-modal risk-modal--${level}`}
        role='dialog'
        aria-modal='true'
        aria-labelledby='transaction-risk-title'
        aria-describedby='transaction-risk-description'
        onClick={(event) => event.stopPropagation()}
      >
        <div className='wallet-dialog-handle' aria-hidden='true' />
        <header className='wallet-dialog-header'>
          <span className='wallet-dialog-header-icon risk-modal-header-icon'><ShieldAlert size={21} /></span>
          <div className='wallet-dialog-heading'>
            <h2 id='transaction-risk-title'><T id='risk.title'>Transaction risk</T></h2>
            <p id='transaction-risk-description'><T id='risk.subtitle'>Review the risks before you continue</T></p>
          </div>
          <button ref={closeButtonRef} className='wallet-icon-button wallet-dialog-close' type='button' onClick={onCancel} aria-label={t('risk.close')}>
            <X size={17} />
          </button>
        </header>

        <div className='wallet-dialog-body risk-modal-body'>
          {loading
            ? (
              <div className='risk-modal-loading' aria-live='polite'>
                <span className='wallet-loading-spinner' aria-hidden='true' />
                <strong><T id='risk.checking'>Checking transaction...</T></strong>
                <p><T id='risk.checkingDescription'>Running a transaction risk check before sending.</T></p>
              </div>
              )
            : (
              <>
                <div className={`risk-modal-summary risk-modal-summary--${level}`}>
                  <strong>{risk.title || <T id='risk.title'>Transaction risk</T>}</strong>
                  <p>
                    {blocking
                      ? <T id='risk.blocked'>This transaction was blocked by the risk engine.</T>
                      : <T id='risk.summary'>This transaction may involve risks to your funds or assets. Only continue if you understand what may happen.</T>}
                  </p>
                </div>

                <div className={`risk-modal-details risk-modal-details--${level}`}>
                  <strong><T id='risk.whatCouldGoWrong'>What could go wrong?</T></strong>
                  {risk.reasons?.length
                    ? (
                      <ul>
                        {risk.reasons.map((reason) => <li key={reason}>{reason}</li>)}
                      </ul>
                      )
                    : <p><T id='risk.noReason'>No detailed reason returned.</T></p>}
                </div>

                {requiresConfirmation
                  ? (
                    <label className='risk-confirmation'>
                      <input
                        type='checkbox'
                        checked={Boolean(confirmed)}
                        onChange={(event) => onConfirmedChange(event.currentTarget.checked)}
                      />
                      <span><T id='risk.confirmation'>I understand the risks and want to continue.</T></span>
                    </label>
                    )
                  : null}
              </>
              )}
        </div>

        {!loading
          ? (
            <footer className='wallet-dialog-footer risk-modal-actions'>
              <button className='wallet-button wallet-button--secondary wallet-button--full' type='button' onClick={onCancel}>
                <T id='risk.goBack'>Go back</T>
              </button>
              {!blocking
                ? (
                  <button
                    className={`wallet-button wallet-button--${requiresConfirmation ? 'danger' : 'primary'} wallet-button--full`}
                    type='button'
                    onClick={onContinue}
                    disabled={requiresConfirmation && !confirmed}
                  >
                    <T id={requiresConfirmation ? 'risk.continueAnyway' : 'risk.continueSend'}>Continue to send</T>
                  </button>
                  )
                : null}
            </footer>
            )
          : null}
      </section>
    </div>
  )
}
