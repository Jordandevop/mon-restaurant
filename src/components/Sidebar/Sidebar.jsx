import SidebarBlock from "./SidebarBlock";
import { Form, Badge, InputGroup } from "react-bootstrap";
import { useFilters } from '../../context/useFilter';
import styles from './Sidebar.module.css';
import {useFavorites} from '../../context/useFavorites';
import {useCart} from '../../context/useCart'

const CATEGORIES = [
  "Burger",
  "Pizza",
  "Kebab",
  "Poulet frit",
  "Accompagnements",
  "Desserts",
  "Boissons",
];
const TAGS = [
  "Agneau",
  "Tomate",
  "Boeuf",
  "Emmental",
  "Poulet",
  "Crêpe",
  "Cornichons",
  "Champignons",
  "Oignons",
  "Chantilly",
  "Menu",
  "Frites",
];

const Sidebar = () => {
  const {
    selectedCategory, setSelectedCategory,
    maxPrice, setMaxPrice,
    selectedTag, setSelectedTag,
    searchQuery, setSearchQuery,
    clearFilters
  } = useFilters();

  const {favorites, toggleFavorite} = useFavorites();
  const {addToCart}= useCart();
  return (
    <aside className={styles.sidebar}>
      {/* Bloc Catégories */}
      <SidebarBlock title="Catégorie">
        {CATEGORIES.map((cat) => (
          <div
            key={cat}
            onClick={() => setSelectedCategory(cat === selectedCategory ? "" : cat)}
            className="px-3 py-2 border-bottom"
            style={{
              cursor: "pointer",
              fontSize: '0.9rem',
              backgroundColor: selectedCategory === cat ? 'var(--brand-light)' : 'var(--bg)',
              color: selectedCategory === cat ? 'var(--brand-dark)' : 'var(--dark)',
              fontWeight: selectedCategory === cat ? '600' : '400',
              borderLeft: selectedCategory === cat ? '3px solid var(--brand)' : '3px solid transparent',
              transition: 'all 0.15s',
            }}
            onMouseEnter={e => { if (selectedCategory !== cat) e.currentTarget.style.backgroundColor = 'var(--brand-light)' }}
            onMouseLeave={e => { if (selectedCategory !== cat) e.currentTarget.style.backgroundColor = 'var(--bg)' }}
          >
            {cat}
          </div>
        ))}
      </SidebarBlock>

      {/* Bloc Recherche */}
      <SidebarBlock>
        <InputGroup className="p-2">
          <InputGroup.Text className="border-0 bg-transparent" style={{ fontSize: '0.85rem' }}>🔍</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Rechercher..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-0 shadow-none"
            style={{ fontSize: '0.9rem' }}
          />
        </InputGroup>
      </SidebarBlock>

      {/* Bloc Prix */}
      <SidebarBlock>
        <div className="d-flex align-items-center px-3 py-2">
          <span className="me-2" style={{ color: 'var(--brand)', fontWeight: 600 }}>€</span>
          <Form.Control
            type="number"
            placeholder="Prix max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="border-0 p-0 shadow-none"
            style={{ fontSize: '0.9rem' }}
          />
        </div>
      </SidebarBlock>

      {/* Bloc Tags */}
      <SidebarBlock title="Ingrédients">
        <div className="d-flex flex-wrap gap-1 p-2">
          {TAGS.map((tag) => (
            <Badge
              key={tag}
              pill
              bg={selectedTag === tag ? undefined : "light"}
              text={selectedTag === tag ? "white" : "dark"}
              className="border fw-normal"
              style={{
                fontSize: "0.72rem",
                cursor: "pointer",
                backgroundColor: selectedTag === tag ? 'var(--brand)' : undefined,
                borderColor: selectedTag === tag ? 'var(--brand)' : 'var(--border)',
              }}
              onClick={() => setSelectedTag(tag === selectedTag ? "" : tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </SidebarBlock>

      {/* Bloc Favoris — visible seulement si y'a des favoris */}
      {favorites.length > 0 && (
        <SidebarBlock title={`Favoris ❤️ (${favorites.length})`}>
          {favorites.map(product => (
            <div
              key={product.id}
              className="d-flex align-items-center gap-2 px-3 py-2 border-bottom"
              style={{ fontSize: '0.85rem' }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '36px', height: '36px', objectFit: 'cover', borderRadius: '4px' }}
              />
              <span style={{ flex: 1, fontWeight: 500, color: 'var(--dark)' }}>
                {product.name}
              </span>
              <button
                onClick={() => addToCart(product)}
                style={{
                  background: 'var(--brand)', color: 'var(--bg)',
                  border: 'none', borderRadius: '4px',
                  padding: '2px 8px', fontSize: '0.75rem', cursor: 'pointer',
                }}
              >
                🛒
              </button>
              <button
                onClick={() => toggleFavorite(product)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px' }}
              >
                ✕
              </button>
            </div>
          ))}
        </SidebarBlock>
      )}

      <button
        className="btn btn-sm w-100"
        style={{ color: 'var(--brand)', borderColor: 'var(--brand)', background: 'var(--bg)' }}
        onClick={clearFilters}
      >
        ✕ Effacer les filtres
      </button>
    </aside>
  );
};

export default Sidebar;
