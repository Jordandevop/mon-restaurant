import { createContext, useContext, useState, useMemo, useEffect } from "react";
import products from "../data/product";

export const FilterContext = createContext();

const ITEMS_PER_PAGE = 6;

export function FilterProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, maxPrice, selectedTag, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory("");
    setMaxPrice("");
    setSelectedTag("");
    setSearchQuery("");
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCategory = selectedCategory
        ? p.category === selectedCategory
        : true;
      const matchPrice = maxPrice ? p.price <= Number(maxPrice) : true;
      const matchTag = selectedTag ? p.tags.includes(selectedTag) : true;
      const matchQuery = searchQuery
        ? p.name.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      return matchCategory && matchPrice && matchTag && matchQuery;
    });
  }, [selectedCategory, maxPrice, selectedTag, searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(()=>{
    const start = (currentPage -1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  },[filteredProducts, currentPage])

  const value = {
    selectedCategory,
    setSelectedCategory,
    maxPrice,
    setMaxPrice,
    selectedTag,
    setSelectedTag,
    searchQuery,
    setSearchQuery,
    clearFilters,
    filteredProducts,
    paginatedProducts,
    currentPage, setCurrentPage,
    totalPages,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}


