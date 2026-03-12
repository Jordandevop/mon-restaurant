import styles from './Header.module.css'

import Cart from '../Cart/Cart'
import { useEffect, useRef } from 'react';

const Header = ({onOpenCart, cartCount}) => {
  const heroRef = useRef(null);

  useEffect (()=>{
    const handleScroll =()=>{
      if (heroRef.current){
        heroRef.current.style.backgroundPositionY = `${window.scrollY * 0.4}px`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  },[])
  return (
   <header ref={heroRef} className={styles.headerHero}>
  <div className={styles.headerOverlay} />
  <div className="d-flex flex-column align-items-center">
    <h1 className={styles.headerTitle}>Mon Restaurant</h1>
    <p className={styles.headerSubtitle}>Cuisine faite maison</p>
  </div>
  <div className={styles.headerCartWrapper}>
    <Cart onOpenCart={onOpenCart} cartCount={cartCount} />
  </div>
</header>
  );
};

export default Header;