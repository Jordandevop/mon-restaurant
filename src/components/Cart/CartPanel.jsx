import { Offcanvas, ListGroup, Button } from 'react-bootstrap'

const CartPanel = ({ isOpen, items, onClose, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <Offcanvas show={isOpen} onHide={onClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>🛒 Mon Panier</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        {items.length === 0 ? (
          <p className="text-muted text-center mt-4">Votre panier est vide</p>
        ) : (
          <>
            <ListGroup variant="flush">
              {items.map((item) => (
                <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="fw-semibold">{item.name}</div>
                    <div className="text-muted" style={{ fontSize: '0.85rem' }}>
                      {item.qty} × {item.price} €
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="fw-bold">{item.qty * item.price} €</span>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => onRemove(item.id)}
                    >
                      ✕
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>

            {/* Total */}
            <div className="d-flex justify-content-between fw-bold mt-4 px-2">
              <span>Total</span>
              <span>{total} €</span>
            </div>

            <Button variant="dark" className="w-100 mt-3">
              Commander
            </Button>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default CartPanel