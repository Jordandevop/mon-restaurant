import { Button as BsButton } from 'react-bootstrap'

const Button = ({ onClick }) => {
  return (
    <BsButton
      size="sm"
      className="w-100 fw-semibold"
      style={{ backgroundColor: 'var(--brand)', borderColor: 'var(--brand)', color: 'var(--bg)' }}
      onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--brand-dark)'}
      onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--brand)'}
      onClick={onClick}
    >
      Ajouter au panier
    </BsButton>
  )
}

export default Button
