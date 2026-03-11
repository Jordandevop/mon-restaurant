import { createContext, useContext, useState, useMemo } from "react";
import products from "../data/product";


const FilterContext = createContext();

export function FilterProvider({children}){
    const [selectedCategory, setSelectedCategory] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [selectedTag, setSelectedTag] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const clearFilters =() =>{
        setSelectedCategory("");
        setMaxPrice("");
        setSelectedTag("");
        setSearchQuery("");
    };

    const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCategory = selectedCategory ? p.category === selectedCategory : true;
      const matchPrice = maxPrice ? p.price <= Number(maxPrice) : true;
      const matchTag = selectedTag ? p.tags.includes(selectedTag) : true;
      const matchQuery = searchQuery
        ? p.name.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      return matchCategory && matchPrice && matchTag && matchQuery;
    });
  }, [selectedCategory, maxPrice, selectedTag, searchQuery]);

    const value ={
        selectedCategory, setSelectedCategory,
        maxPrice, setMaxPrice,
        selectedTag, setSelectedTag,
        searchQuery, setSearchQuery,
        clearFilters,
        filteredProducts
    };

    return (
        <FilterContext.Provider value= {value}>
            {children}
        </FilterContext.Provider>
    )

}

export const useFilters = () => useContext(FilterContext);