import SidebarBlock from "./SidebarBlock";
import { Form, Badge, InputGroup} from "react-bootstrap";

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

const Sidebar = ({
  selectedCategory,
  maxPrice,
  onCategoryChange,
  onPriceChange,
  selectedTag,
  onTagChange,
  searchQuery,
  onSearchQueryChange
}) => {
  return (
    <aside style={{ width: "220px", flexShrink: 0 }}>
      {/* Bloc Catégories */}
      <SidebarBlock title="Catégorie">
        {CATEGORIES.map((cat) => (
          <div
            key={cat}
            onClick={() =>
              onCategoryChange(cat === selectedCategory ? "" : cat)
            }
            className="px-3 py-2 border-bottom"
            style={{
              cursor: "pointer",
              fontSize: "0.9rem",
              backgroundColor: selectedCategory === cat ? "#f0f0f0" : "white",
              fontWeight: selectedCategory === cat ? "600" : "normal",
            }}
          >
            {cat}
          </div>
        ))}
      </SidebarBlock>

      {/* Bloc Prix */}
      <SidebarBlock>
        <div className="d-flex align-items-center px-3 py-2">
          <span className="text-muted me-2">€</span>
          <Form.Control
            type="number"
            placeholder="Filtrer par prix"
            value={maxPrice}
            onChange={(e) => onPriceChange(e.target.value)}
            className="border-0 p-0 shadow-none"
            style={{ fontSize: "0.9rem" }}
          />
        </div>
      </SidebarBlock>

      <SidebarBlock>
        <InputGroup>
    <InputGroup.Text>🔍</InputGroup.Text>
    <Form.Control
      type="text"
      placeholder="Rechercher un produit..."
      value={searchQuery}
      onChange={(e) => onSearchQueryChange(e.target.value)}
    />
  </InputGroup>
      </SidebarBlock>

      {/* Bloc Tags */}
      <SidebarBlock>
        <div className="d-flex flex-wrap gap-1 p-2">
          {TAGS.map((tag) => (
            <Badge
              key={tag}
              pill
              bg={selectedTag === tag ? "dark" : "light"} 
              text={selectedTag === tag ? "white" : "dark"} 
              className="border fw-normal"
              style={{ fontSize: "0.75rem", cursor: "pointer" }}
              onClick={() => onTagChange(tag === selectedTag ? "" : tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </SidebarBlock>
    </aside>
  );
};

export default Sidebar;
