import { Card } from 'react-bootstrap';
import Button from './Button';
import { useFilters } from "../../context/useFilter";
import { useFavorites } from "../../context/useFavorites"; 
import {useCart} from '../../context/useCart'
import styles from './ProductCard.module.css';

const ProductCard = ({ product, onAddToCart }) => {
  const { setSelectedTag } = useFilters();
  const { toggleFavorite, isFavorite } = useFavorites(); 
  const {cartItems, removeOne} = useCart();
  const favorite = isFavorite(product.id);

   const cartItem = cartItems.find(item => item.id === product.id);
  const qty = cartItem ? cartItem.qty : 0;

  return (
    <div className={styles.cardWrapper}>
     <Card className="h-100 shadow-sm border-0">
        {/* Image + bouton favori */}
        <div style={{ position: "relative" }}>
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.alt}
            style={{ height: '180px', objectFit: 'cover' }}
          />
          <button
            onClick={() => toggleFavorite(product)}
            className={styles.favoriteBtn}
          >
            {favorite ? "❤️" : "🤍"}
          </button>
        </div>

        <Card.Body className="d-flex flex-column">
          {/* Nom + Prix */}
          <div className="d-flex justify-content-between mb-2">
            <Card.Title className="fs-6 fw-semibold mb-0">{product.name}</Card.Title>
            <span className="fw-bold" style={{ color: 'var(--brand)' }}>{product.price} €</span>
          </div>

          {/* Tags */}
         <div className={styles.tagsWrapper}>
  {product.tags.map((tag) => (
    <span
      key={tag}
      onClick={() => setSelectedTag(tag)}
      className="px-2 py-0 rounded-pill"
      style={{ fontSize: '0.7rem', background: 'var(--brand-light)', color: 'var(--brand-dark)', border: '1px solid #f0c8b0', cursor: 'pointer', height: 'fit-content' }}
    >
      {tag}
    </span>
  ))}
</div>

          <div className={`mt-auto ${styles.cartControls}`}>
            {qty === 0 ? (
              // Pas encore dans le panier → bouton simple
              <button
                onClick={() => onAddToCart(product)}
                className={styles.btnAddToCart}
              >
                🛒 Ajouter
              </button>
            ) : (
              // Déjà dans le panier → affiche − qty +
              <div className={styles.qtyControls}>
                <button
                  onClick={() => removeOne(product.id)}
                  className={styles.qtyBtn}
                >
                  −
                </button>
                <span className={styles.qty}>{qty}</span>
                <button
                  onClick={() => onAddToCart(product)}
                  className={styles.qtyBtn}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;