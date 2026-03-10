import { Card } from 'react-bootstrap'
import Button from './Button'

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card className="h-100 rounded-0">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.alt}
        style={{ height: '180px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">

        {/* Nom + Prix */}
        <div className="d-flex justify-content-between mb-2">
          <Card.Title className="fs-6 fw-semibold mb-0">{product.name}</Card.Title>
          <span className="fw-semibold">{product.price} €</span>
        </div>

        {/* Tags */}
        <div className="d-flex flex-wrap gap-1 mb-3">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="border rounded-pill px-2 py-0"
              style={{ fontSize: '0.75rem', color: '#555' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bouton en bas */}
        <div className="mt-auto">
          <Button onClick={() => onAddToCart(product)} />
        </div>

      </Card.Body>
    </Card>
  )
}

export default ProductCard