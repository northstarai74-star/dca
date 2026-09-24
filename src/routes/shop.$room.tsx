import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProductCard } from "@/components/site/ProductCard";
import { productsByRoom, rooms, type RoomSlug } from "@/lib/products";

export const Route = createFileRoute("/shop/$room")({
  loader: ({ params }) => {
    const room = rooms.find((r) => r.slug === params.room);
    if (!room) throw notFound();
    return { room };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.room.name ?? "Shop";
    const description = `Shop solid wood ${name.toLowerCase()} furniture — ${
      loaderData?.room.blurb ?? ""
    }. Free delivery, 10-year warranty and free installation.`;
    return {
      meta: [
        { title: `${name} Furniture — Grain & Joinery` },
        { name: "description", content: description },
        { property: "og:title", content: `${name} Furniture — Grain & Joinery` },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: RoomPage,
});

function RoomPage() {
  const { room } = Route.useLoaderData();
  const items = productsByRoom(room.slug as RoomSlug);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-5 py-12">
        <nav className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-wood">
            Home
          </Link>{" "}
          / {room.name}
        </nav>
        <h1 className="mt-4 text-4xl font-medium">{room.name} furniture</h1>
        <p className="mt-2 max-w-lg text-muted-foreground">{room.blurb}</p>

        <div className="mt-8 flex flex-wrap gap-2 text-sm">
          {["All", "Under ₹50,000", "Solid teak", "Ready to ship", "New arrivals"].map((filter, i) => (
            <span
              key={filter}
              className={
                i === 0
                  ? "rounded-full bg-ink px-4 py-2 font-medium text-paper"
                  : "rounded-full border border-border bg-card px-4 py-2 text-muted-foreground"
              }
            >
              {filter}
            </span>
          ))}
        </div>

        {items.length ? (
          <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {items.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-muted-foreground">New pieces for this room land next month.</p>
        )}
      </div>
      <SiteFooter />
    </div>
  );
}
