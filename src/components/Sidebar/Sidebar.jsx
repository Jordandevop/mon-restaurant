import SidebarBlock from "./SidebarBlock";
import { Form, Badge, InputGroup } from "react-bootstrap";
import { useFilters } from '../../context/useFilter';
import styles from './Sidebar.module.css';

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
