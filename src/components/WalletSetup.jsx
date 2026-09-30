import { useMfaEnrollment, usePrivy } from '@privy-io/react-auth'
import { useState } from 'preact/hooks'
import { loadWalletPreferences, saveWalletPreferences } from '../lib/walletPreferences.js'
import { FirstRunSetup } from './FirstRunSetup.jsx'

export function WalletSetup ({ user, children }) {
  const { user: privyUser } = usePrivy()
  const { showMfaEnrollmentModal } = useMfaEnrollment()
  const [preferences, setPreferences] = useState(() => loadWalletPreferences(user.id))
  const updatePreferences = (next) => setPreferences(saveWalletPreferences(user.id, next))
  return preferences.onboardingCompleted
    ? children({ preferences, updatePreferences })
    : <FirstRunSetup mfaEnabled={(privyUser || user)?.mfaMethods?.length > 0} onMfa={showMfaEnrollmentModal} preferences={preferences} onComplete={updatePreferences} />
}
