import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "@/api/category";
import type { Category } from "@/types";

export const useCategory = () => {
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  })
}