import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductCard from "./components/Product/ProductCard";
import CartPanel from "./components/Cart/CartPanel";
import { useFilters } from "./context/useFilter";
import { useCart } from "./context/useCart";
import { useEffect, useState } from "react";
import styles from './App.module.css';
import { toast } from 'react-toastify'; 

function App() {
  const { filteredProducts, paginatedProducts, currentPage, setCurrentPage, totalPages } = useFilters();
  const { cartCount, isCartOpen, setIsCartOpen, cartItems, addToCart, removeOne, deleteItem } = useCart();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  const handleAddToCart = (product) => { 
    addToCart(product);
    toast.success(`${product.name} ajouté au panier 🛒`);
  };

  return (
    <>
      <Header onOpenCart={() => setIsCartOpen(true)} cartCount={cartCount} />
      <NavbarComponent />
      <Container className="my-4">
        <Row>
          <Col xs={3}><Sidebar /></Col>
          <Col xs={9}>
            <Row
              xs={1} sm={2} md={3}
              className={`g-3 ${hasLoaded ? styles.gridVisible : styles.gridHidden}`}
            >
              {filteredProducts.length === 0 ? (
                <p className="text-muted text-center mt-4">Aucun produit trouvé.</p>
              ) : (
                paginatedProducts.map((product) => (
                  <Col key={product.id}>
                    <ProductCard
                      product={product}
                      onAddToCart={handleAddToCart} 
                    />
                  </Col>
                ))
              )}
            </Row>
          </Col>
        </Row>

        {totalPages > 1 && (
          <div className="d-flex justify-content-center gap-2 mt-4">
            <Button
              variant="outline-secondary"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
            >
              ← Précédent
            </Button>
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i + 1}
                variant={currentPage === i + 1 ? "dark" : "outline-secondary"}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
            <Button
              variant="outline-secondary"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
            >
              Suivant →
            </Button>
          </div>
        )}
      </Container>

      <Footer />
      <CartPanel
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onRemove={deleteItem}
        onDecrease={removeOne}
        onAdd={addToCart}
      />
    </>
  );
}

export default App;