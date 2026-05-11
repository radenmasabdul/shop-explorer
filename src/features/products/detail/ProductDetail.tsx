import { Link } from "react-router-dom";
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPrice } from "@/lib/utils";
import { useProductDetailPage } from "../hooks/useProductDetailPage";

export default function ProductDetail() {
  const {
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
  } = useProductDetailPage();

  if (isError) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <AlertCircle className="h-12 w-12 text-destructive" />

        <p className="font-medium">Product not found</p>

        <Button variant="outline" onClick={() => navigate("/")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="transition-colors hover:text-foreground">
          Products
        </Link>

        <span>/</span>

        {isLoading ? (
          <Skeleton className="h-4 w-32" />
        ) : (
          <span className="max-w-xs line-clamp-1 font-medium text-foreground">
            {product?.title}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
            {isLoading ? (
              <Skeleton className="h-full w-full" />
            ) : validImages.length > 0 ? (
              <>
                <img
                  src={validImages[activeImg]}
                  alt={product?.title}
                  className="h-full w-full object-cover transition-opacity duration-300"
                />

                {validImages.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setActiveImg(
                          (p) =>
                            (p - 1 + validImages.length) % validImages.length,
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-1.5 shadow-md transition-colors hover:bg-background"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>

                    <button
                      onClick={() =>
                        setActiveImg((p) => (p + 1) % validImages.length)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-1.5 shadow-md transition-colors hover:bg-background"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </>
                )}
              </>
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                No image
              </div>
            )}
          </div>

          {validImages.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {validImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                    activeImg === i ? "border-primary" : "border-border"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-5">
          {isLoading ? (
            <>
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-10 w-32" />

              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>

              <Skeleton className="h-12 w-full" />
            </>
          ) : product ? (
            <>
              <div>
                <Badge variant="secondary" className="mb-3">
                  {product.category?.name}
                </Badge>

                <h1 className="font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                  {product.title}
                </h1>
              </div>

              <div className="font-mono text-3xl font-bold text-primary">
                {formatPrice(product.price)}
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              <Button
                size="lg"
                onClick={addToCart}
                disabled={isPending || isInCart}
                className={`w-full gap-2 text-base font-semibold ${
                  isInCart ? "bg-green-600 hover:bg-green-700" : ""
                }`}
              >
                {isInCart ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    Added to Cart
                  </>
                ) : isPending ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                    Adding...
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </>
                )}
              </Button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
