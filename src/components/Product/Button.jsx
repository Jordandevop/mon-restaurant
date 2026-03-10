import { Button as BsButton } from 'react-bootstrap'

const Button = ({ onClick }) => {
  return (
    <BsButton
      variant="outline-secondary"
      size="sm"
      className="w-100"
      onClick={onClick}
    >
      Ajouter au panier
    </BsButton>
  )
}

export default Button