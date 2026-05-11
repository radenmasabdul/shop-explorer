import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductDetail } from "@/hooks/useProductDetail";
import { useCartStore } from "@/stores/cart-store";
import { toast } from "sonner";

export function useProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeImg, setActiveImg] = useState<number>(0);
  const [isPending, setIsPending] = useState<boolean>(false);
  const { addItem, removeItem, items } = useCartStore();

  const {
    data: product,
    isLoading,
    isError,
  } = useProductDetail(id ?? "");

  const validImages =
    product?.images?.filter(
      (img) =>
        img &&
        !img.includes("[") &&
        (img.startsWith("http") || img.startsWith("//")),
    ) ?? [];

  const isInCart = product
    ? items.some((item) => item.product.id === product.id)
    : false;

  const addToCart = async () => {
    if (!product) return;

    try {
      setIsPending(true);

      addItem(product);

      await new Promise((resolve) =>
        setTimeout(resolve, 500),
      );

      toast.success("Product added to cart");
    } catch {
      removeItem(product.id);

      toast.error("Failed to add product");
    } finally {
      setIsPending(false);
    }
  };

  return {
    navigate,
    product,
    isLoading,
    isError,
    activeImg,
    setActiveImg,
    validImages,
    isInCart,
    isPending,
    addToCart,
  }
}