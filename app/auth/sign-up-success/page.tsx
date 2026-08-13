import Link from "next/link"

export default function SignUpSuccessPage() {
  return (
    <main className="auth-shell">
      <div className="auth-card">
        <p className="eyebrow">Innerly studio</p>
        <h1>Check your inbox</h1>
        <div className="auth-note">
          We&apos;ve sent a confirmation link to your email. Confirm it, then sign in to reach the dashboard.
        </div>
        <p className="auth-alt">
          <Link href="/auth/login">Back to sign in</Link>
        </p>
      </div>
    </main>
  )
}
