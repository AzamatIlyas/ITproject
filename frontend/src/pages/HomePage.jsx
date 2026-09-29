import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function HomePage() {
  const { isAuthenticated, user } = useAuth()

  return (
    <div className="page">
      <section className="hero-panel">
        <p className="eyebrow">KBTU · Indoor Navigation</p>
        <h1>CampusTap</h1>
        <p className="lede">
          Indoor Wayfinding Navigation System specially for KBTU — find buildings,
          rooms, and routes across campus.
        </p>

        {isAuthenticated ? (
          <div className="hero-actions">
            <p className="welcome-line">
              Signed in as <strong>{user.first_name} {user.last_name}</strong>
            </p>
            <div className="actions">
              <Link className="btn" to="/profile">
                Open profile
              </Link>
            </div>
          </div>
        ) : (
          <div className="actions">
            <Link className="btn" to="/login">
              Sign in with KBTU
            </Link>
          </div>
        )}
      </section>
    </div>
  )
}
