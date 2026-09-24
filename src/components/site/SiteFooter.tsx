import { Link } from "@tanstack/react-router";
import { rooms } from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper/75">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl text-paper">Grain &amp; Joinery</p>
          <p className="mt-3 max-w-xs text-sm text-paper/55">
            Solid wood furniture for Indian homes. Made in small batches in Jaipur and Kochi, delivered and
            installed across 18 cities.
          </p>
        </div>
        <div>
          <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-paper/45">Shop</p>
          <ul className="space-y-2 text-sm">
            {rooms.map((room) => (
              <li key={room.slug}>
                <Link
                  to="/shop/$room"
                  params={{ room: room.slug }}
                  className="transition-colors hover:text-ochre"
                >
                  {room.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-paper/45">Support</p>
          <ul className="space-y-2 text-sm text-paper/70">
            <li>Delivery &amp; installation</li>
            <li>Warranty &amp; care</li>
            <li>EMI, UPI &amp; COD</li>
            <li>Call: +1 (775) 775 9248</li>
            <li>WhatsApp: +91 98000 00000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-paper/45 sm:flex-row">
          <p>© 2026 Grain &amp; Joinery Furniture Co.</p>
          <p>COD · UPI · Cards · No-cost EMI</p>
        </div>
      </div>
    </footer>
  );
}
