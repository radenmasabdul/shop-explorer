import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Tag } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCartPage } from "./hooks/useCartPage";

export default function Cart() {
  const {
    items,
    incrementQty,
    decrementQty,
    removeItem,
    clearCart,
    subtotal,
    tax,
    total
  } = useCartPage();

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-6 px-4 py-24 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted">
          <ShoppingBag className="h-10 w-10 text-muted-foreground" />
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">
            Your cart is empty
          </h2>
          <p className="mt-2 text-muted-foreground text-sm">
            Looks like you haven't added anything yet.
          </p>
        </div>
        <Link to="/">
          <Button size="lg" className="cursor-pointer">
            <ArrowLeft className="h-4 w-4" />
            Start Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">
            Your Cart
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {items.length} item{items.length !== 1 ? "s" : ""} in your cart
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearCart}
          className="text-muted-foreground hover:text-destructive cursor-pointer"
        >
          <Trash2 className="h-4 w-4" />
          Clear all
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-3">
          {items.map((item) => {
            const img = item.product.images?.find(
              (i) => i && !i.includes("[") && i.startsWith("http"),
            );
            return (
              <div
                key={item.product.id}
                className="flex gap-4 rounded-2xl border border-border bg-card p-4 animate-fade-up"
              >
                <Link
                  to={`/products/${item.product.id}`}
                  className="shrink-0 h-20 w-20 overflow-hidden rounded-xl bg-muted"
                >
                  {img ? (
                    <img
                      src={img}
                      alt={item.product.title}
                      className="h-full w-full object-cover hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground text-xs">
                      No img
                    </div>
                  )}
                </Link>

                <div className="flex flex-1 flex-col gap-1 min-w-0">
                  <Link
                    to={`/products/${item.product.id}`}
                    className="line-clamp-2 text-sm font-semibold text-foreground hover:text-primary transition-colors leading-snug"
                  >
                    {item.product.title}
                  </Link>
                  <span className="text-xs text-muted-foreground">
                    {item.product.category?.name}
                  </span>
                  <div className="mt-auto flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-1 rounded-lg border border-border">
                      <button
                        onClick={() => decrementQty(item.product.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-l-lg hover:bg-muted transition-colors cursor-pointer"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => incrementQty(item.product.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-r-lg hover:bg-muted transition-colors cursor-pointer"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-primary">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors cursor-pointer"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mt-2 cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Continue Shopping
          </Link>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 space-y-4">
            <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
              <Tag className="h-4 w-4 text-primary" />
              Order Summary
            </h2>

            <div className="space-y-2 text-sm">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex justify-between text-muted-foreground"
                >
                  <span className="line-clamp-1 flex-1 mr-2">
                    {item.product.title} ×{item.quantity}
                  </span>
                  <span className="shrink-0 font-mono">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-mono">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax (10%)</span>
                <span className="font-mono">{formatPrice(tax)}</span>
              </div>
            </div>

            <div className="border-t border-border pt-3 flex justify-between items-center">
              <span className="font-display font-bold text-foreground">
                Total
              </span>
              <span className="font-mono text-xl font-bold text-primary">
                {formatPrice(total)}
              </span>
            </div>

            <Button size="lg" className="w-full font-semibold cursor-pointer">
              Checkout
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Secure checkout · Free returns
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
