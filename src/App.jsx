import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductCard from "./components/Product/ProductCard";
import CartPanel from "./components/Cart/CartPanel";
import { useFilters } from "./context/FilterContext";
import { useCart } from "./context/CartContext";


function App() {
  const { filteredProducts } = useFilters();
  const { cartCount, isCartOpen, setIsCartOpen, cartItems, addToCart, removeOne, deleteItem } = useCart();

  return (
    <>
      <Header onOpenCart={() => setIsCartOpen(true)} cartCount={cartCount} />
      <NavbarComponent />
      <Container className="my-4">
        <Row>
          <Col xs={3}><Sidebar /></Col>
          <Col xs={9}>
            <Row xs={1} sm={2} md={3} className="g-3">
              {filteredProducts.length === 0 ? (
                <p className="text-muted text-center mt-4">Aucun produit trouvé.</p>
              ) : (
                filteredProducts.map((product) => (
                  <Col key={product.id}>
                    <ProductCard product={product} onAddToCart={addToCart} />
                  </Col>
                ))
              )}
            </Row>
          </Col>
        </Row>
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

export default App