import { Link, NavLink, useLocation } from 'react-router-dom'
import KbtuLogo from './KbtuLogo'
import { useAuth } from '../context/AuthContext'

const AUTH_PATHS = ['/login']

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth()
  const { pathname } = useLocation()

  if (AUTH_PATHS.includes(pathname)) {
    return null
  }

  async function handleLogout() {
    try {
      await logout()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <KbtuLogo className="kbtu-logo-nav" alt="KBTU" />
        <span className="brand-text">
          <strong>CampusTap</strong>
          <span>Indoor Wayfinding</span>
        </span>
      </Link>

      <nav className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        {isAuthenticated ? (
          <>
            <NavLink to="/profile">Profile</NavLink>
            <button type="button" className="link-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>

      {user && (
        <span className="user-chip">
          {user.first_name} {user.last_name}
        </span>
      )}
    </header>
  )
}
