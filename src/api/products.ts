import api from "@/lib/axios";
import type { Product } from "@/types";

export const getAllProducts = async (): Promise<Product[]> => {
  const res = await api.get("/products")
  return res.data
}

export const getProductById = async (id: string): Promise<Product> => {
  const res = await api.get(`/products/${id}`)
  return res.data
}