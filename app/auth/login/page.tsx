"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError("Invalid email or password.")
      setLoading(false)
      return
    }
    router.push("/admin")
    router.refresh()
  }

  return (
    <main className="auth-shell">
      <div className="auth-card">
        <p className="eyebrow">Strong Point studio</p>
        <h1>Sign in</h1>
        <p className="auth-sub">Access the library dashboard to add meditations, yoga, music and movement.</p>
        <form onSubmit={handleLogin}>
          {error && (
            <div className="auth-error" role="alert">
              {error}
            </div>
          )}
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
        <p className="auth-alt">
          Need a studio account? <Link href="/auth/sign-up">Create one</Link>
        </p>
      </div>
    </main>
  )
}
