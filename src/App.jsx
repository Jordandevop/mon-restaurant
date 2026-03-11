import { Container, Row, Col} from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Sidebar from "./components/Sidebar/Sidebar";
import products from "./data/product";
import { useState } from "react";
import ProductCard from "./components/Product/ProductCard";
import CartPanel from "./components/Cart/CartPanel";

const allCategories = products.map((p) => p.category)
const CATEGORIES = [...new Set(allCategories)]

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  

  const filteredProducts = products.filter((p) => {
    const matchCategory = selectedCategory
      ? p.category === selectedCategory
      : true;
    const matchPrice = maxPrice ? p.price <= Number(maxPrice) : true;
    const matchTag = selectedTag ? p.tags.includes(selectedTag) : true;
    const matchQuery = searchQuery ? p.name.toLowerCase().includes(searchQuery.toLowerCase()) : true;
    return matchCategory && matchPrice && matchTag && matchQuery;
  });

  const [cartItems, setCartItems] = useState([])
const [isCartOpen, setIsCartOpen] = useState(false)

// Ajouter au panier
const handleAddToCart = (product) => {
  const alreadyInCart = cartItems.find((item) => item.id === product.id)

  if (alreadyInCart) {
    setCartItems(cartItems.map((item) =>
      item.id === product.id ? { ...item, qty: item.qty + 1 } : item
    ))
  } else {
    setCartItems([...cartItems, { ...product, qty: 1 }])
  }
}

// Supprimer du panier
const handleRemoveFromCart = (productId) => {
  setCartItems(cartItems.filter((item) => item.id !== productId))
}

  return (
    <>
      <Header 
      onOpenCart={() => setIsCartOpen(true)}
  cartCount={cartItems.reduce((sum, item) => sum + item.qty, 0)}
  />
      <NavbarComponent />

      <Container className="mt-3">
  
</Container>

      <Container className="my-4">
        <Row>
          <Col xs={3}>
            <Sidebar
              categories={CATEGORIES}
              selectedCategory={selectedCategory}
              maxPrice={maxPrice}
              selectedTag={selectedTag}
              onCategoryChange={setSelectedCategory}
              onPriceChange={setMaxPrice}
              onTagChange={setSelectedTag}
              onSearchQueryChange={setSearchQuery}
            />
          </Col>
          <Col xs={9}>
            <Row xs={1} sm={2} md={3} className="g-3">
              {filteredProducts.length === 0 ? (
                <p className="text-muted text-center mt-4">
                  Aucun produit trouvé.
                </p>
              ) : (
                filteredProducts.map((product) => (
                  <Col key={product.id}>
                    <ProductCard product={product} onAddToCart={handleAddToCart} />
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
  onRemove={handleRemoveFromCart}
/>
    </>
  );
}

export default App;
