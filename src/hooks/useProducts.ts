import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/api/products";
import type { Product } from "@/types";

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getAllProducts,
  })
}