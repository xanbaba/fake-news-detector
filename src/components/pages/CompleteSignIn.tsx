import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import AuthCard from '../ui/AuthCard.tsx'
import {checkIsSignInWithEmailLink, completeSignInWithEmailLink} from "@/services/authService.ts"

export default function CompleteSignIn() {
    const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'promptEmail'>('loading')
    const [errorMessage, setErrorMessage] = useState('')
    const [email, setEmail] = useState('')
    const [retryTrigger, setRetryTrigger] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        const completeSignIn = async () => {
            // 1. Get the current URL with window.location.href
            // 2. Check if it's a valid sign-in link using checkIsSignInWithEmailLink(url) from auth service
            // 3. Get the email from localStorage.getItem('emailForSignIn')
            // 4. If no email, prompt user for it
            // 5. Use completeSignInWithEmailLink(email, emailLink) from authService to complete sign-in
            // 6. On success: clear localStorage, setStatus('success'), then navigate('/')
            // 7. On error: setStatus('error') with appropriate message

            const verificationLink = window.location.href

            if (checkIsSignInWithEmailLink(verificationLink)) {
                const email = window.localStorage.getItem('emailForSignIn')
                if (!email) {
                    setStatus('promptEmail')
                    return
                }
                try {
                    await completeSignInWithEmailLink(email, verificationLink)
                    setStatus('success')
                    navigate('/')
                } catch (err) {
                    setStatus("error")
                    setErrorMessage(err instanceof Error ? err.message : 'Failed to complete sign-in')
                }
            }
        }


        void completeSignIn()
    }, [navigate, retryTrigger])

    return (
        <div className="flex items-center justify-center py-8">
            <div className="w-full max-w-md mx-auto p-4">
                <AuthCard>
                    <div className="text-center space-y-6">
                        {status === 'loading' && (
                            <>
                                <div className="flex justify-center">
                                    <div
                                        className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
                                </div>
                                <h2 className="text-white text-2xl font-bold">Completing sign-in...</h2>
                                <p className="text-white/70">Please wait while we verify your email</p>
                            </>
                        )}

                        {status === 'success' && (
                            <>
                                <div className="flex justify-center">
                                    <span
                                        className="material-symbols-outlined text-green-500 text-6xl">check_circle</span>
                                </div>
                                <h2 className="text-white text-2xl font-bold">Sign-in successful!</h2>
                                <p className="text-white/70">Redirecting you to the app...</p>
                            </>
                        )}

                        {status === 'error' && (
                            <>
                                <div className="flex justify-center">
                                    <span className="material-symbols-outlined text-red-500 text-6xl">error</span>
                                </div>
                                <h2 className="text-white text-2xl font-bold">Sign-in failed</h2>
                                <p className="text-white/70">{errorMessage}</p>
                                <button
                                    onClick={() => navigate('/get-started')}
                                    className="flex w-full justify-center rounded-xl bg-primary px-4 py-3 text-base font-bold text-white shadow-lg shadow-primary/30 hover:opacity-90 transition-opacity"
                                >
                                    Try Again
                                </button>
                            </>
                        )}

                        {status === 'promptEmail' && (
                            <>
                                <h2 className="text-white text-2xl font-bold mb-4">Confirm your email</h2>
                                <p className="text-white/70 mb-6">Please enter your email address to complete
                                    sign-in</p>

                                <form className="space-y-6" onSubmit={(e) => {
                                    e.preventDefault()
                                    if (email.trim()) {
                                        window.localStorage.setItem('emailForSignIn', email)
                                        setStatus('loading')
                                        setRetryTrigger(prev => prev + 1)
                                    }
                                }}>
                                    <div className="text-left">
                                        <label className="text-white/80 text-sm font-medium" htmlFor="email">
                                            Email Address
                                        </label>
                                        <div className="mt-2 relative">
                                            <span
                                                className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600 z-1">
                                                <span className="material-symbols-outlined !text-xl">mail</span>
                                            </span>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="you@example.com"
                                                className="form-input w-full rounded-xl border-none input-glass-effect text-gray-600 placeholder:text-gray-400 py-3 pl-10 pr-4 focus:ring-2 focus:ring-inset focus:ring-primary transition-all"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-xl bg-primary px-4 py-3 text-base font-bold text-white shadow-lg shadow-primary/30 hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        Confirm
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </AuthCard>
            </div>
        </div>
    )
}

