import KbtuLogo from './KbtuLogo'

export default function AuthShell({ title, subtitle, children }) {
  return (
    <div className="auth-screen">
      <div className="auth-bg" aria-hidden="true">
        <svg className="auth-geo" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <g fill="none" stroke="rgba(0,43,92,0.08)" strokeWidth="1.5">
            <polygon points="120,90 180,55 240,90 240,160 180,195 120,160" />
            <polygon points="980,120 1035,88 1090,120 1090,184 1035,216 980,184" />
            <rect x="70" y="520" width="90" height="90" rx="18" transform="rotate(-12 115 565)" />
            <rect x="1020" y="540" width="110" height="110" rx="22" transform="rotate(18 1075 595)" />
            <circle cx="220" cy="680" r="42" />
            <circle cx="860" cy="700" r="28" />
            <polygon points="540,40 590,70 590,130 540,160 490,130 490,70" />
            <polygon points="780,480 830,450 880,480 880,540 830,570 780,540" />
            <rect x="980" y="280" width="70" height="70" rx="14" transform="rotate(-8 1015 315)" />
            <circle cx="160" cy="300" r="22" />
            <polygon points="420,620 470,590 520,620 520,680 470,710 420,680" />
          </g>
        </svg>
      </div>

      <button type="button" className="lang-switch" aria-label="Language">
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M3.5 12h17M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
        EN
        <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true">
          <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </button>

      <div className="auth-layout">
        <section className="auth-brand">
          <KbtuLogo className="kbtu-logo-hero" />
          <h1>CampusTap</h1>
          <p>Indoor Wayfinding Navigation System specially for KBTU</p>
        </section>

        <section className="auth-panel">
          <div className="auth-card">
            <header className="auth-card-header">
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </header>

            {children}

            <div className="auth-card-footer">
              <a href="#agreement">User Agreement</a>
              <a href="#policy">Personal Data Processing Policy</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
