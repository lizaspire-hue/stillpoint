import Link from "next/link"

export default function AuthErrorPage() {
  return (
    <main className="auth-shell">
      <div className="auth-card">
        <p className="eyebrow">Innerly studio</p>
        <h1>Something went wrong</h1>
        <div className="auth-error">
          We couldn&apos;t complete that sign-in. The link may have expired or already been used.
        </div>
        <p className="auth-alt">
          <Link href="/auth/login">Try again</Link>
        </p>
      </div>
    </main>
  )
}
