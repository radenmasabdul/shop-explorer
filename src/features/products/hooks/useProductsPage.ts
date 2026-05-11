import { useState, useMemo, useCallback } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useProducts } from "@/hooks/useProducts";
import { useCategory } from "@/hooks/useCategory";

export function useProductsPage() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const debouncedSearch = useDebounce(searchInput, 400);

  const { data: productsData, isLoading, isError } = useProducts();
  const { data: categories } = useCategory();

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  },[]);

  const products = useMemo(() => {
    if (!productsData) return [];

    return productsData.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());

      const matchesCategory =
        selectedCategory === "all"
          ? true
          : String(product.category?.id) === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [productsData, debouncedSearch, selectedCategory]);

  return {
    searchInput,
    setSearchInput,
    selectedCategory,
    setSelectedCategory,
    productsData,
    isLoading,
    isError,
    categories,
    handleSearch,
    products,
  }
}