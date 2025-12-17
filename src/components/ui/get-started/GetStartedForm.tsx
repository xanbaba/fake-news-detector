import {type FormEvent, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import GoogleSignInButton from '../GoogleSignInButton'
import {sendSignInLinkToEmail} from "@/services/authService.ts"
import type {User} from "firebase/auth"

export default function GetStartedForm() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)

        // 1. Configure actionCodeSettings with your app URL
        // 2. Use sendSignInLinkToEmail(email, actionCodeSettings) from authService
        // 3. On success: setIsSubmitted(true) and store email in localStorage
        // 4. On error: setError() with appropriate message
        // Documentation: https://firebase.google.com/docs/auth/web/email-link-auth

        try {
            await sendSignInLinkToEmail(email)
            setIsSubmitted(true)
            window.localStorage.setItem('emailForSignIn', email)

        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to send verification email')
        } finally {
            setIsLoading(false)
        }
    }

    if (isSubmitted) {
        return (
            <div className="space-y-4 sm:space-y-6 text-center">
                <div className="rounded-xl bg-primary/10 border border-primary/30 p-4 sm:p-6">
                    <div className="flex justify-center mb-3 sm:mb-4">
                        <span className="material-symbols-outlined text-primary text-4xl sm:text-5xl">mark_email_read</span>
                    </div>
                    <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">Check your email</h3>
                    <p className="text-white/70 text-xs sm:text-sm">
                        We've sent a verification link to <span className="text-primary font-medium break-all">{email}</span>
                    </p>
                    <p className="text-white/60 text-xs mt-2 sm:mt-3">
                        Click the link in the email to complete your sign-in
                    </p>
                </div>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary hover:text-white/80 text-xs sm:text-sm font-medium transition-colors"
                >
                    Use a different email
                </button>
            </div>
        )
    }

    const handleGoogleSuccess = (user: User) => {
        console.log('Google sign-in successful:', user)
        navigate('/')
    }

    const handleGoogleError = (error: Error) => {
        console.error('Google sign-in failed:', error)
        setError(error.message)
    }

    return (
        <form className="space-y-4 sm:space-y-6" onSubmit={onSubmit}>
            <GoogleSignInButton onSuccess={handleGoogleSuccess} onError={handleGoogleError} />

            <div className="relative">
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase tracking-widest text-white/50">
                    <span className="bg-background-dark/70 px-2 sm:px-3">Or continue with email</span>
                </div>
            </div>

            <div>
                <label className="text-white/80 text-xs sm:text-sm font-medium" htmlFor="email">
                    Email Address
                </label>
                <div className="mt-1.5 sm:mt-2 relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600 z-1">
            <span className="material-symbols-outlined !text-lg sm:!text-xl">mail</span>
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
                        className="form-input w-full rounded-xl border-none input-glass-effect text-gray-600 placeholder:text-gray-400 py-2.5 sm:py-3 pl-9 sm:pl-10 pr-4 text-sm sm:text-base focus:ring-2 focus:ring-inset focus:ring-primary transition-all"
                    />
                </div>
            </div>

            {error && (
                <div className="rounded-xl bg-red-500/10 border border-red-500/30 p-2.5 sm:p-3">
                    <p className="text-red-400 text-xs sm:text-sm">{error}</p>
                </div>
            )}

            <div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="flex w-full justify-center rounded-xl bg-primary px-4 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-white shadow-lg shadow-primary/30 hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? 'Sending...' : 'Continue'}
                </button>
            </div>

            <p className="text-center text-white/60 text-[10px] sm:text-xs">
                By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
        </form>
    )
}
