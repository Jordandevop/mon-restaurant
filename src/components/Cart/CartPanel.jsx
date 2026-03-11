import { Offcanvas, ListGroup, Button } from "react-bootstrap";

const CartPanel = ({ isOpen, items, onClose, onRemove, onAdd, onDecrease }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <Offcanvas show={isOpen} onHide={onClose} placement="end">
      <Offcanvas.Header closeButton style={{ borderBottom: '2px solid var(--brand-light)' }}>
        <Offcanvas.Title style={{ fontFamily: "'Playfair Display', serif" }}>🛒 Mon Panier</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        {items.length === 0 ? (
          <div className="text-center mt-5">
            <div style={{ fontSize: '3rem' }}>🍽</div>
            <p className="text-muted mt-2">Votre panier est vide</p>
          </div>
        ) : (
          <>
            <ListGroup variant="flush">
              {items.map((item) => (
                <ListGroup.Item
                  key={item.id}
                  className="d-flex justify-content-between align-items-center px-0"
                >
                  <div style={{ flex: 1 }}>
                    <div className="fw-semibold" style={{ fontSize: '0.9rem' }}>{item.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {item.price} € / unité
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-2 me-3">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => onDecrease(item.id)}
                      style={{ width: '28px', height: '28px', padding: '0', lineHeight: 1 }}
                    >
                      −
                    </Button>
                    <span className="fw-bold" style={{ minWidth: '20px', textAlign: 'center' }}>
                      {item.qty}
                    </span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => onAdd(item)}
                      style={{ width: '28px', height: '28px', padding: '0', lineHeight: 1 }}
                    >
                      +
                    </Button>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <span className="fw-bold" style={{ color: 'var(--brand)', minWidth: '55px', textAlign: 'right' }}>
                      {(item.qty * item.price).toFixed(2)} €
                    </span>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => onRemove(item.id)}
                      style={{ width: '28px', height: '28px', padding: '0', lineHeight: 1 }}
                    >
                      ✕
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>

            <div
              className="d-flex justify-content-between fw-bold mt-4 px-2 py-3 rounded"
              style={{ background: 'var(--brand-light)', fontSize: '1.05rem' }}
            >
              <span>Total</span>
              <span style={{ color: 'var(--brand)' }}>{total.toFixed(2)} €</span>
            </div>

            <Button
              className="w-100 mt-3 fw-semibold"
              style={{ backgroundColor: 'var(--brand)', borderColor: 'var(--brand)' }}
            >
              Commander
            </Button>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartPanel;
