import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = ({ onOpenCart, cartCount }) => {
  return (
    <button className="cart-btn" onClick={onOpenCart}>
      <FontAwesomeIcon icon={faCartShopping} />
      {cartCount > 0 && (
        <span className="cart-badge">{cartCount}</span>
      )}
    </button>
  )
}

export default Cart