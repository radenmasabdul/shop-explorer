import api from "@/lib/axios";
import type { Category } from "@/types";

export const getAllCategories = async (): Promise<Category[]> => {
  const res = await api.get("/categories")
  return res.data
}

export const getCategoryById = async (id: string): Promise<Category> => {
  const res = await api.get(`/categories/${id}`)
  return res.data
}