import logo from '../image/kbtu-logo.png'

export default function KbtuLogo({ className = '', alt = 'Kazakh-British Technical University' }) {
  return (
    <img
      src={logo}
      alt={alt}
      className={`kbtu-logo ${className}`.trim()}
    />
  )
}
