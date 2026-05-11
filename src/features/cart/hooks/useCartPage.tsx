import { useCartStore } from "@/stores/cart-store";
import { TAX_RATE } from "@/lib/utils";

export function useCartPage(){
  const {
    items,
    incrementQty,
    decrementQty,
    removeItem,
    clearCart,
    getSubtotal,
  } = useCartStore();

  const subtotal = getSubtotal();
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return {
    items,
    incrementQty,
    decrementQty,
    removeItem,
    clearCart,
    subtotal,
    tax,
    total
  }
}