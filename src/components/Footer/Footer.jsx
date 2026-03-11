import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <p className="footer-brand">Mon Restaurant</p>
      <p className="footer-text">
        © {currentYear} — Tous droits réservés ·
      </p>
    </footer>
  )
}

export default Footer
