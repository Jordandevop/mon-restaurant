# 🍽 Mon Restaurant

Application React de commande en ligne pour un restaurant fictif, réalisée dans le cadre d'un exercice de formation.

## 🚀 Lancer le projet
```bash
npm install
npm run dev
```

## 🛠 Stack technique

- **React + Vite**
- **React Bootstrap** — composants UI
- **CSS Modules** — styles scopés par composant
- **react-toastify** — notifications

## 📁 Structure
```
src/
  components/
    Header/        # Hero avec parallax et animation d'entrée
    Navbar/        # Navigation + toggle dark mode
    Sidebar/       # Filtres (catégorie, prix, tags, recherche)
    Product/       # Card produit avec gestion quantité
    Cart/          # Panier Offcanvas
    Footer/
  context/
    FilterContext  # Filtres + pagination
    CartContext    # Panier (useReducer)
    FavoritesContext # Favoris
    ThemeContext   # Dark mode
  data/
    product.js     # Données produits
  reducers/
    cartReducers.js
```

## ✅ Fonctionnalités

### Filtres
- Filtrage par catégorie, tag, prix maximum et recherche textuelle
- Pagination (6 produits par page)
- Clic sur un tag d'un produit pour filtrer directement
- Bouton "Effacer les filtres"

### Panier
- Ajout / suppression / modification de quantité
- Si quantité = 1 et on décrémente → suppression automatique
- Prix total calculé dynamiquement
- Bouton "Vider le panier" avec confirmation
- Géré avec `useReducer`

### Bonus
- Favoris ❤️ accessibles dans la sidebar
- Toast de confirmation à chaque ajout panier
- Dark mode ☀️ / 🌙
- Animations d'entrée en cascade (header, navbar, sidebar, produits)
- Contrôles quantité directement sur la card produit

## 💡 Choix techniques

 — les filtres et le panier étant utilisés dans de nombreux composants, centraliser l'état dans des contextes dédiés évite de faire passer les props à travers plusieurs niveaux.

**useReducer pour le panier** — la logique du panier (ajouter, décrémenter, supprimer, vider) est suffisamment complexe pour justifier un reducer plutôt qu'un simple useState.

**CSS Modules** — chaque composant a son propre fichier `.module.css` pour éviter les conflits de classes, avec des variables globales centralisées dans `index.css`.

**Offcanvas plutôt que Modal pour le panier** — le panier est une zone de travail persistante qui peut contenir beaucoup d'articles. L'Offcanvas prend toute la hauteur de l'écran et laisse percevoir la page derrière, contrairement à une modal qui bloque l'expérience.