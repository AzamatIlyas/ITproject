import { createContext, useContext, useEffect, useState } from 'react'
import { getUserProfile, loginUser, logoutUser } from '../services/userService'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadProfile()
  }, [])

  async function loadProfile() {
    setLoading(true)
    setError('')
    try {
      const profile = await getUserProfile()
      setUser(profile)
    } catch {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  async function login(email, password) {
    setError('')
    await loginUser({ email, password })
    const profile = await getUserProfile()
    setUser(profile)
    return profile
  }

  async function logout() {
    setError('')
    try {
      await logoutUser()
    } finally {
      setUser(null)
    }
  }

  const value = {
    user,
    loading,
    error,
    setError,
    isAuthenticated: Boolean(user),
    login,
    logout,
    refreshProfile: loadProfile,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
