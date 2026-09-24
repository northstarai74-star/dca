import { useState } from "react";
import { createFileRoute, notFound, Link, useNavigate } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProductCard } from "@/components/site/ProductCard";
import { useCart } from "@/lib/cart";
import { discountPercent, formatINR, getProduct, products } from "@/lib/products";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const title = p ? `${p.name} — Grain & Joinery` : "Product — Grain & Joinery";
    const description = p ? p.summary : "Solid wood furniture, handcrafted in India.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [finish, setFinish] = useState(product.finishes[0]);
  const [size, setSize] = useState(product.sizes[0]);
  const [pincode, setPincode] = useState("");
  const [eta, setEta] = useState<string | null>(null);

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  const checkDelivery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(pincode)) {
      setEta("Enter a valid 6-digit pincode.");
      return;
    }
    const days = 7 + (Number(pincode.slice(-1)) % 8);
    setEta(`Delivered and installed in about ${days} days to ${pincode}.`);
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-5 py-10">
        <nav className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-wood">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/shop/$room" params={{ room: product.room }} className="hover:text-wood">
            {product.room}
          </Link>{" "}
          / {product.name}
        </nav>

        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <div>
            <img
              src={product.image}
              alt={product.name}
              width={1008}
              height={1008}
              className="w-full rounded-2xl object-cover"
            />
            <div className="mt-3 grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={product.image}
                  alt={`${product.name} view ${i + 1}`}
                  loading="lazy"
                  className="aspect-square w-full rounded-xl object-cover opacity-80"
                />
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">{product.category}</p>
            <h1 className="mt-2 text-4xl font-medium">{product.name}</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              <span className="text-ochre">★</span> {product.rating} · {product.reviewCount} reviews
            </p>
            <p className="mt-5 text-2xl font-semibold">
              {formatINR(product.price)}{" "}
              <span className="text-base font-normal text-muted-foreground line-through">
                {formatINR(product.mrp)}
              </span>{" "}
              <span className="text-base font-semibold text-wood">-{discountPercent(product)}%</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Inclusive of taxes · No-cost EMI from {formatINR(Math.round(product.price / 12))}/month
            </p>

            <p className="mt-6 max-w-md text-muted-foreground">{product.summary}</p>

            <div className="mt-7">
              <p className="text-sm font-medium">Finish: {finish}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.finishes.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFinish(f)}
                    className={
                      f === finish
                        ? "rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper"
                        : "rounded-full border border-border bg-card px-4 py-2 text-sm"
                    }
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <p className="text-sm font-medium">Size: {size}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={
                      s === size
                        ? "rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper"
                        : "rounded-full border border-border bg-card px-4 py-2 text-sm"
                    }
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                className="btn-solid hover:bg-wood-deep"
                onClick={() => {
                  addItem(
                    {
                      slug: product.slug,
                      name: product.name,
                      image: product.image,
                      price: product.price,
                      finish,
                      size,
                    },
                    1,
                  );
                }}
              >
                Add to cart
              </button>
              <button
                className="btn-outline hover:bg-muted"
                onClick={() => {
                  addItem(
                    {
                      slug: product.slug,
                      name: product.name,
                      image: product.image,
                      price: product.price,
                      finish,
                      size,
                    },
                    1,
                  );
                  navigate({ to: "/checkout" });
                }}
              >
                Buy now
              </button>
            </div>

            <form onSubmit={checkDelivery} className="mt-8 rounded-2xl border border-border bg-card p-5">
              <label htmlFor="pincode" className="text-sm font-medium">
                Check delivery &amp; installation
              </label>
              <div className="mt-3 flex gap-2">
                <input
                  id="pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter pincode"
                  inputMode="numeric"
                  maxLength={6}
                  className="w-full rounded-full border border-input bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
                <button type="submit" className="btn-solid hover:bg-wood-deep">
                  Check
                </button>
              </div>
              {eta && <p className="mt-3 text-sm text-muted-foreground">{eta}</p>}
            </form>

            <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
              {product.dimensions.map((d) => (
                <div key={d.label} className="flex justify-between border-b border-border pb-2">
                  <dt className="text-muted-foreground">{d.label}</dt>
                  <dd className="font-medium">{d.value}</dd>
                </div>
              ))}
              <div className="flex justify-between border-b border-border pb-2">
                <dt className="text-muted-foreground">Material</dt>
                <dd className="text-right font-medium">{product.material}</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <dt className="text-muted-foreground">Warranty</dt>
                <dd className="text-right font-medium">{product.warranty}</dd>
              </div>
            </dl>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-medium">Complete the room</h2>
          <div className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}
