import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { formatINR, products } from "@/lib/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
});

function CheckoutPage() {
  const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const shipping = subtotal > 0 ? 499 : 0;
  const total = subtotal + shipping;

  const itemMap = useMemo(
    () => Object.fromEntries(products.map((product) => [product.slug, product])),
    [],
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!items.length) return;
    setSubmitted(true);
    clearCart();
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-5 py-12">
        <nav className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-wood">
            Home
          </Link>{" "}
          / Checkout
        </nav>

        <h1 className="mt-4 text-4xl font-medium">Checkout</h1>

        {items.length === 0 && !submitted ? (
          <div className="mt-8 rounded-2xl border border-border bg-card p-8 text-center">
            <p className="text-lg font-medium">Your cart is empty.</p>
            <p className="mt-2 text-sm text-muted-foreground">Add a piece to begin checkout.</p>
            <Link to="/" className="btn-solid mt-6 inline-flex">
              Continue shopping
            </Link>
          </div>
        ) : submitted ? (
          <div className="mt-8 rounded-2xl border border-border bg-card p-8">
            <p className="text-2xl font-medium">Order placed successfully.</p>
            <p className="mt-3 text-muted-foreground">
              Thanks, {form.name || "friend"}. We’ll call you at {form.phone || "your number"} to confirm your order.
            </p>
            <Link to="/" className="btn-solid mt-6 inline-flex">
              Back to shopping
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border bg-card p-6">
              <div>
                <h2 className="text-xl font-medium">Shipping details</h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm text-muted-foreground">
                  Full name
                  <input
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    required
                    className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2 text-foreground outline-none focus:ring-2 focus:ring-ring"
                  />
                </label>
                <label className="text-sm text-muted-foreground">
                  Phone
                  <input
                    value={form.phone}
                    onChange={(event) => setForm({ ...form, phone: event.target.value })}
                    required
                    className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2 text-foreground outline-none focus:ring-2 focus:ring-ring"
                  />
                </label>
              </div>

              <label className="block text-sm text-muted-foreground">
                Email
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2 text-foreground outline-none focus:ring-2 focus:ring-ring"
                />
              </label>

              <label className="block text-sm text-muted-foreground">
                Address
                <textarea
                  value={form.address}
                  onChange={(event) => setForm({ ...form, address: event.target.value })}
                  required
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2 text-foreground outline-none focus:ring-2 focus:ring-ring"
                />
              </label>

              <button type="submit" className="btn-solid w-full hover:bg-wood-deep">
                Place order
              </button>
            </form>

            <aside className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-xl font-medium">Your cart</h2>
              <div className="mt-5 space-y-4">
                {items.map((item) => {
                  const product = itemMap[item.slug];
                  return (
                    <div key={item.id} className="flex gap-3 rounded-xl border border-border p-3">
                      <img src={product?.image ?? item.image} alt={item.name} className="h-20 w-20 rounded-lg object-cover" />
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.finish} · {item.size}
                        </p>
                        <div className="mt-2 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 rounded-full border border-border px-2 py-1 text-sm">
                            <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 text-lg leading-none">
                              −
                            </button>
                            <span>{item.quantity}</span>
                            <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 text-lg leading-none">
                              +
                            </button>
                          </div>
                          <button type="button" onClick={() => removeItem(item.id)} className="text-xs text-muted-foreground hover:text-wood">
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="text-right text-sm font-medium">{formatINR(item.price * item.quantity)}</div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 space-y-2 border-t border-border pt-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatINR(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? "Free" : formatINR(shipping)}</span>
                </div>
                <div className="flex items-center justify-between text-base font-semibold">
                  <span>Total</span>
                  <span>{formatINR(total)}</span>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
      <SiteFooter />
    </div>
  );
}
