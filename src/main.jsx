import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { FilterProvider } from "./context/FilterContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FilterProvider>
      <CartProvider>
        <FavoritesProvider>
          <ThemeProvider>
        <App />
        <ToastContainer
          position="bottom-right"
          autoClose={2500}
          toastStyle={{
            background: "#1A1A1A",
            color: "#FAFAFA",
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            borderLeft: "4px solid var(--accent)",
          }}
        />
        </ThemeProvider>
        </FavoritesProvider>
      </CartProvider>
    </FilterProvider>
  </StrictMode>,
);
