import styles from './Footer.module.css'


const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <p className={styles.footerBrand}>Mon Restaurant</p>
      <p className={styles.footerText}>
        © {currentYear} — Tous droits réservés ·
      </p>
    </footer>
  )
}

export default Footer
