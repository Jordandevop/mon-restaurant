import { createContext, useContext, useState } from "react";

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

    const value ={
        selectedCategory, setSelectedCategory,
        maxPrice, setMaxPrice,
        selectedTag, setSelectedTag,
        searchQuery, setSearchQuery,
        clearFilters
    };

    return (
        <FilterContext.Provider value= {value}>
            {children}
        </FilterContext.Provider>
    )

}

export const useFilters = () => useContext(FilterContext);