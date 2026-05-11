import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "@/pages/products/Products";
import ProductDetail from "@/pages/products/details/ProductDetail";
import Cart from "@/pages/cart/Cart";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}