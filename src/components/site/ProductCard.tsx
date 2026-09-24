import { Link } from "@tanstack/react-router";
import { discountPercent, formatINR, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link to="/product/$slug" params={{ slug: product.slug }} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-card">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1008}
          height={1008}
          className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-2.5 py-1 text-[11px] font-semibold text-wood-deep">
          -{discountPercent(product)}%
        </span>
      </div>
      <div className="mt-4">
        <h3 className="font-display text-lg leading-tight">{product.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {product.category} · {product.finishes[0]}
        </p>
        <p className="mt-2 text-sm">
          <span className="font-semibold">{formatINR(product.price)}</span>{" "}
          <span className="text-muted-foreground line-through">{formatINR(product.mrp)}</span>
        </p>
      </div>
    </Link>
  );
}
