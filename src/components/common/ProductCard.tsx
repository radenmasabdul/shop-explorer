import { useState } from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  className?: string;
}

function getValidImage(images: string[]): string | null {
  const img = images.find(
    (i) =>
      i && !i.includes("[") && (i.startsWith("http") || i.startsWith("//")),
  );
  return img ?? null;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);
  const imgSrc = getValidImage(product.images);

  return (
    <Link
      to={`/products/${product.id}`}
      className={`product-card group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">

        {imgSrc && !imgError ? (
          <img
            src={imgSrc}
            alt={product.title}
            className="product-card-image h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground">
            <svg
              className="h-16 w-16 opacity-30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                strokeWidth="1.5"
              />
              <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5" />
              <path d="M21 15l-5-5L5 21" strokeWidth="1.5" />
            </svg>
          </div>
        )}

        <div className="absolute left-3 top-3">
          <Badge
            variant="secondary"
            className="text-[10px] font-semibold backdrop-blur-sm bg-background/80"
          >
            {product.category?.name ?? "General"}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        <p className="line-clamp-2 text-xs text-muted-foreground leading-relaxed">
          {product.description}
        </p>
        <div className="mt-auto pt-3">
          <span className="text-lg font-bold text-primary font-mono">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
    </Link>
  );
}
