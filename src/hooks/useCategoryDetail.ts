import { useQuery } from "@tanstack/react-query";
import { getCategoryById } from "@/api/category";
import type { Category } from "@/types";

export const useCategoryDetail = (id: string) => {
  return useQuery<Category>({
    queryKey: ["category", id],
    queryFn: () => getCategoryById(id),
    enabled: !!id,
  })
}