import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
const Cart = () => {
  return (
    <button className="cart-btn">
      <FontAwesomeIcon icon={faCartShopping} />
    </button>
  )
}

export default Cart
