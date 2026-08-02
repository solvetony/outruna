import { T } from '../i18n/index.jsx'

export function AddressRiskBadge ({ loading, risk, confirmed, onConfirm }) {
  if (loading) {
    return (
      <div className='risk-card risk-card--loading'>
        <T id='risk.checkingAddress'>Checking address reputation...</T>
      </div>
    )
  }

  if (!risk) return null

  if (risk.level === 'unavailable') {
    return (
      <div className='risk-card risk-card--muted'>
        <T id='risk.unavailableAddress'>Risk check unavailable. Double-check the address before sending.</T>
      </div>
    )
  }

  if (risk.level === 'safe') {
    return (
      <div className='risk-card risk-card--safe'>
        {risk.title}
      </div>
    )
  }

  if (risk.level === 'info') {
    return (
      <div className='risk-card risk-card--info'>
        {risk.title}
        {risk.hasPreviousTransfer ? <> - <T id='risk.previousTransfer'>Previous transfer found</T></> : ''}
      </div>
    )
  }

  if (risk.level === 'warning') {
    return (
      <div className='risk-card risk-card--warning'>
        <strong>{risk.title}</strong>
        {risk.reasons?.length ? <p>{risk.reasons.join('. ')}</p> : null}
      </div>
    )
  }

  if (risk.level === 'danger') {
    return (
      <div className='risk-card risk-card--danger'>
        <strong>{risk.title}</strong>
        {risk.reasons?.length ? <p>{risk.reasons.join('. ')}</p> : null}
        {!confirmed
          ? (
            <button type='button' onClick={onConfirm}>
              <T id='risk.acknowledgeAddress'>I understand the address risk</T>
            </button>
            )
          : <span><T id='risk.acknowledged'>Address risk acknowledged</T></span>}
      </div>
    )
  }

  if (risk.level === 'forbidden') {
    return (
      <div className='risk-card risk-card--danger'>
        <strong>{risk.title}</strong>
        {risk.reasons?.length ? <p>{risk.reasons.join('. ')}</p> : null}
        <span><T id='risk.sendingBlocked'>Sending to this address is blocked.</T></span>
      </div>
    )
  }

  return (
    <div className='risk-card risk-card--muted'>
      <T id='risk.unknownAddress'>Unknown address. Reputation data not found.</T>
    </div>
  )
}
