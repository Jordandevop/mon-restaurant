import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
     <footer className="footer">
      <p className="footer-text">
        © {currentYear} Mon Restaurant — Tous droits réservés
      </p>
    </footer>
    
  )
}

export default Footer
