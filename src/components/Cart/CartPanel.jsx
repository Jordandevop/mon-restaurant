import { useState } from "react";
import { Offcanvas, ListGroup, Modal } from "react-bootstrap";
import { useCart } from "../../context/Cartcontext";
import styles from "./CartPanel.module.css";

const CartPanel = ({ isOpen, items, onClose, onRemove, onAdd, onDecrease }) => {
  const { clearCart } = useCart();
  const [showConfirm, setShowConfirm] = useState(false);
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <Offcanvas show={isOpen} onHide={onClose} placement="end" className={styles.offcanvas}>
        <Offcanvas.Header closeButton className={styles.header}>
          <Offcanvas.Title className={styles.title}>
            🛒 Mon Panier
            {items.length > 0 && (
              <span className={styles.badge}>
                {items.reduce((s, i) => s + i.qty, 0)}
              </span>
            )}
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className={styles.body}>
          {items.length === 0 ? (
            <div className={styles.empty}>
              <div className={styles.emptyIcon}>🍽</div>
              <p className={styles.emptyTitle}>Votre panier est vide</p>
              <p className={styles.emptyText}>Ajoutez des produits pour commencer</p>
            </div>
          ) : (
            <>
              <div className={styles.list}>
                <ListGroup variant="flush">
                  {items.map((item) => (
                    <ListGroup.Item key={item.id} className={styles.item}>
                      <img src={item.image} alt={item.name} className={styles.itemImage} />
                      <div className={styles.itemInfo}>
                        <div className={styles.itemName}>{item.name}</div>
                        <div className={styles.itemPrice}>{item.price} € / unité</div>
                        <div className={styles.itemControls}>
                          <div className={styles.qtyWrapper}>
                            <button className={styles.qtyBtn} onClick={() => onDecrease(item.id)}>−</button>
                            <span className={styles.qty}>{item.qty}</span>
                            <button className={styles.qtyBtn} onClick={() => onAdd(item)}>+</button>
                          </div>
                          <div className={styles.itemRight}>
                            <span className={styles.itemTotal}>
                              {(item.qty * item.price).toFixed(2)} €
                            </span>
                            <button className={styles.deleteBtn} onClick={() => onRemove(item.id)}>✕</button>
                          </div>
                        </div>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>

              <div className={styles.footer}>
                <div className={styles.totalRow}>
                  <span className={styles.totalLabel}>Total</span>
                  <span className={styles.totalAmount}>{total.toFixed(2)} €</span>
                </div>
                <button className={styles.btnOrder}>COMMANDER</button>
                <button className={styles.btnClear} onClick={() => setShowConfirm(true)}>
                  🗑 Vider le panier
                </button>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>

      <Modal show={showConfirm} onHide={() => setShowConfirm(false)} centered size="sm">
        <Modal.Body className={styles.modalBody}>
          <div className={styles.modalIcon}>🗑</div>
          <p className={styles.modalTitle}>Vider le panier ?</p>
          <p className={styles.modalText}>Tous les articles seront supprimés.</p>
          <div className={styles.modalActions}>
            <button className={styles.btnCancel} onClick={() => setShowConfirm(false)}>Annuler</button>
            <button className={styles.btnConfirm} onClick={() => { clearCart(); setShowConfirm(false); }}>Confirmer</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CartPanel;