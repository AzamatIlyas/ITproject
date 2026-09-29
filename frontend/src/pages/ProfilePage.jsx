import { useAuth } from '../context/AuthContext'

export default function ProfilePage() {
  const { user, refreshProfile } = useAuth()

  return (
    <div className="page narrow">
      <header className="page-header">
        <h1>Profile</h1>
        <p className="muted">Your student account details</p>
      </header>

      <div className="surface">
        <dl className="profile-grid">
          <div>
            <dt>First name</dt>
            <dd>{user?.first_name}</dd>
          </div>
          <div>
            <dt>Last name</dt>
            <dd>{user?.last_name}</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>{user?.email}</dd>
          </div>
        </dl>

        <button type="button" className="btn secondary" onClick={refreshProfile}>
          Refresh
        </button>
      </div>
    </div>
  )
}
