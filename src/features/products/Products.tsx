import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductCard } from "@/components/common/ProductCard";
import { ProductCardSkeleton } from "@/components/common/ProductCardSkeleton";
import { PackageSearch, Search, SlidersHorizontal } from "lucide-react";
import { useProductsPage } from "./hooks/useProductsPage";

export default function Products() {
  const {
    searchInput,
    selectedCategory,
    setSelectedCategory,
    isLoading,
    isError,
    categories,
    handleSearch,
    products,
  } = useProductsPage();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-10 text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Explore <span className="text-primary">Products</span>
        </h1>
        <p className="mt-3 text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
          Discover thousands of products across all categories. Find exactly
          what you're looking for.
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={searchInput}
            onChange={handleSearch}
            className="pl-9"
          />
        </div>
        <div className="flex items-center gap-2 sm:w-52">
          <SlidersHorizontal className="h-4 w-4 text-muted-foreground shrink-0" />
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories?.map((cat) => (
                <SelectItem key={cat.id} value={String(cat.id)}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {!isLoading && products && (
        <p className="mb-4 text-sm text-muted-foreground">
          {products.length === 0
            ? "No products found"
            : `Showing ${products.length} product${products.length !== 1 ? "s" : ""}`}
        </p>
      )}

      {isError && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <PackageSearch className="h-12 w-12 text-muted-foreground/50 mb-4" />
          <p className="text-muted-foreground font-medium">
            Failed to load products.
          </p>
          <p className="text-sm text-muted-foreground">
            Check your connection and try again.
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {isLoading
          ? Array.from({ length: 15 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))
          : products?.map((product) => (
              <ProductCard key={product.id} product={product} className="animate-card"/>
            ))}
      </div>

      {!isLoading && products?.length === 0 && !isError && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <PackageSearch className="h-12 w-12 text-muted-foreground/50 mb-4" />
          <p className="font-medium text-foreground">No products found</p>
          <p className="text-sm text-muted-foreground mt-1">
            Try a different search term or category
          </p>
        </div>
      )}
    </div>
  );
}
