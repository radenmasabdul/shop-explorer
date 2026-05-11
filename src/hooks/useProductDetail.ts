import { useQuery } from "@tanstack/react-query";
import { getProductById } from "@/api/products";
import type { Product } from "@/types";

export const useProductDetail = (id: string) => {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
  })
}