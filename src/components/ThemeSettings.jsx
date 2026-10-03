import { Moon, Sun } from 'lucide-preact'
import { useEffect, useState } from 'preact/hooks'
import { useI18n } from '../i18n/index.jsx'
import { setThemePreference, themeOptions, themePreference } from '../lib/theme.js'

export function ThemeSettings () {
  const { t } = useI18n()
  const [preference, setPreference] = useState(themePreference)
  useEffect(() => {
    const update = () => setPreference(themePreference())
    window.addEventListener('outruna-theme-changed', update)
    return () => window.removeEventListener('outruna-theme-changed', update)
  }, [])
  const Icon = preference === 'dark' ? Moon : Sun
  return <div className='settings-preference-row security-preferences theme-settings'>
    <span className='security-preferences-icon' aria-hidden='true'><Icon size={18} /></span>
    <span className='security-preferences-copy'><strong>{t('theme.title')}</strong><span>{t('theme.description')}</span></span>
    <select aria-label={t('theme.title')} value={preference} onChange={(event) => setThemePreference(event.currentTarget.value)}>{themeOptions.map((value) => <option key={value} value={value}>{t(`theme.${value}`)}</option>)}</select>
  </div>
}
