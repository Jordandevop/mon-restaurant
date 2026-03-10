import './Header.css'
import Cart from '../Cart/Cart'

const Header = () => {
  return (
    <header className="header-hero">
      <div className="header-overlay" />
      <h1 className="header-title">Mon Restaurant</h1>
      <div className="header-cart-wrapper">
        <Cart />
      </div>
    </header>
  );
};

export default Header;