import { ChevronDown, Globe2, GripVertical } from 'lucide-preact'
import { useRef } from 'preact/hooks'
import { useI18n } from '../i18n/index.jsx'
import { getNetworkLogoUrl } from '../lib/chains.js'
import { getWalletNetworks, reorderNetwork, toggleNetwork } from '../lib/walletPreferences.js'
import { TariIcon } from './TariWallet.jsx'

export function NetworkSettings ({ preferences, onChange, error }) {
  const { t } = useI18n()
  return <details className='settings-networks'>
    <summary className='settings-preference-row security-preferences'>
      <span className='security-preferences-icon' aria-hidden='true'><Globe2 size={18} /></span>
      <span className='security-preferences-copy'><strong>{t('setup.networks')}</strong><span>{t('setup.networkHint')}</span></span>
      <ChevronDown className='settings-networks-chevron' size={18} aria-hidden='true' />
    </summary>
    <div className='settings-network-options'>
      <NetworkPreferences preferences={preferences} onChange={onChange} />
      {error && <p className='swap-error' role='alert'>{error}</p>}
    </div>
  </details>
}

export function NetworkPreferences ({ preferences, onChange }) {
  const { t } = useI18n()
  const dragging = useRef(null)
  const current = useRef(preferences)
  current.current = preferences
  const move = (key, target) => {
    const next = reorderNetwork(current.current, key, target)
    current.current = next
    onChange(next)
  }
  return <section className='network-preferences'>
    <h3>{t('setup.networks')}</h3><p>{t('setup.networkHint')}</p>
    <div className='network-preferences-list'>{getWalletNetworks(preferences, false).map((network, index, all) => {
      const enabled = preferences.enabledNetworks.includes(network.key)
      return <div className='network-preferences-row' data-network-key={network.key} key={network.key}>
        {network.family === 'tari' ? <TariIcon /> : <img className='network-logo network-logo-sm' src={getNetworkLogoUrl(network.id)} alt='' referrerPolicy='no-referrer' />}
        <span className='network-preferences-name'>{network.name}</span>
        <button type='button' className={enabled ? 'settings-toggle active' : 'settings-toggle'} role='switch' aria-checked={enabled} aria-label={t('setup.enableNetwork', { network: network.name })} disabled={enabled && preferences.enabledNetworks.length === 1} onClick={() => onChange(toggleNetwork(preferences, network.key))}><span aria-hidden='true' /></button>
        <button type='button' className='network-preferences-grip' aria-label={t('setup.reorderNetwork', { network: network.name })} title={t('setup.reorderHint')} onKeyDown={(event) => {
          if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return
          event.preventDefault()
          const target = all[index + (event.key === 'ArrowUp' ? -1 : 1)]
          if (target) move(network.key, target.key)
        }} onPointerDown={(event) => {
          if (event.button !== 0) return
          dragging.current = network.key
          event.currentTarget.setPointerCapture(event.pointerId)
        }} onPointerMove={(event) => {
          if (!dragging.current) return
          const row = document.elementFromPoint(event.clientX, event.clientY)?.closest('[data-network-key]')
          if (row && row.closest('.network-preferences') === event.currentTarget.closest('.network-preferences')) move(dragging.current, row.dataset.networkKey)
        }} onPointerUp={() => { dragging.current = null }} onPointerCancel={() => { dragging.current = null }}><GripVertical size={18} aria-hidden='true' /></button>
      </div>
    })}</div>
    <span className='network-preferences-help'>{t('setup.reorderHint')}</span>
  </section>
}
