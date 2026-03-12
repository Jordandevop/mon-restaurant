import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./Cart.module.css";

const Cart = ({ onOpenCart, cartCount }) => {
  return (
    <button className={styles.cartBtn} onClick={onOpenCart}>
      <FontAwesomeIcon icon={faCartShopping} />
      {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
    </button>
  );
};

export default Cart;
