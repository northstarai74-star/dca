import { Link } from "@tanstack/react-router";
import { rooms } from "@/lib/products";

export function SiteHeader() {
  return (
    <>
      <div className="bg-ink text-paper/85 text-[11px] sm:text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2">
          <p>Free delivery above ₹15,000 · 10-year joinery warranty · No-cost EMI from ₹2,499/mo</p>
          <p className="hidden sm:block text-paper/55">Handcrafted in India</p>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-border bg-paper/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link to="/" className="font-display text-2xl font-semibold">
            Grain <span className="text-wood">&amp;</span> Joinery
          </Link>
          <nav className="hidden items-center gap-7 text-sm lg:flex">
            {rooms.map((room) => (
              <Link
                key={room.slug}
                to="/shop/$room"
                params={{ room: room.slug }}
                className="text-foreground/75 transition-colors hover:text-wood"
                activeProps={{ className: "text-wood" }}
              >
                {room.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-5 text-sm text-foreground/75">
            <span className="hidden sm:inline">Wishlist</span>
            <span className="relative">
              Cart
              <span className="absolute -right-3 -top-2 grid size-4 place-items-center rounded-full bg-wood text-[10px] font-semibold text-paper">
                2
              </span>
            </span>
          </div>
        </div>
      </header>
    </>
  );
}
