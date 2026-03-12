import { Card } from 'react-bootstrap'
import Button from './Button'
import {useFilters} from "../../context/FilterContext"

const ProductCard = ({ product, onAddToCart }) => {
  const {setSelectedTag} = useFilters()
  return (
    <Card className="h-100 shadow-sm border-0" style={{ borderRadius: '10px', overflow: 'hidden', transition: 'transform 0.2s, box-shadow 0.2s' }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)'
      }}
    >
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
          <span className="fw-bold" style={{ color: 'var(--brand)' }}>{product.price} €</span>
        </div>

        {/* Tags */}
        <div className="d-flex flex-wrap gap-1 mb-3">
          {product.tags.map((tag) => (
            <span
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className="px-2 py-0 rounded-pill"
              style={{ fontSize: '0.7rem', background: 'var(--brand-light)', color: 'var(--brand-dark)', border: '1px solid #f0c8b0', cursor: 'pointer', }}
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
