import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProductCard } from "@/components/site/ProductCard";
import { products, rooms } from "@/lib/products";
import hero from "@/assets/hero-living.jpg";
import dining from "@/assets/product-dining.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grain & Joinery — Solid Wood Furniture for Indian Homes" },
      {
        name: "description",
        content:
          "Handcrafted solid teak, oak and sheesham furniture. Free delivery, 10-year joinery warranty, no-cost EMI and free installation across India.",
      },
      { property: "og:title", content: "Grain & Joinery — Solid Wood Furniture" },
      {
        property: "og:description",
        content:
          "Shop sofas, beds, dining tables and storage in solid wood. Delivered and installed across 18 Indian cities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const trust = [
  { n: "01", title: "Free delivery", copy: "On orders above ₹15,000" },
  { n: "02", title: "10-year warranty", copy: "On frames and joinery" },
  { n: "03", title: "No-cost EMI", copy: "3 to 12 months, from ₹2,499" },
  { n: "04", title: "Free installation", copy: "Assembled by our own team" },
];

const reviews = [
  {
    stars: 5,
    quote: "The Karla sofa arrived assembled and the teak grain is nicer in person. Worth every rupee.",
    who: "Ananya R. · Bengaluru",
  },
  {
    stars: 5,
    quote: "Delivery was on time and the team installed it in under an hour. Genuinely solid joinery.",
    who: "Rohit M. · Pune",
  },
  {
    stars: 4,
    quote: "Beautiful sideboard and the EMI made it easy. Would love a few more finish options.",
    who: "Sneha K. · Kochi",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative">
        <img
          src={hero}
          alt="Living room with a solid teak sofa and oak coffee table"
          width={1600}
          height={1104}
          className="h-[520px] w-full object-cover lg:h-[620px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/35 to-transparent" />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-7xl items-end px-5 pb-14">
            <div className="max-w-xl text-paper">
              <p className="eyebrow text-ochre">The 2026 Solid Wood Collection</p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.02] sm:text-5xl lg:text-6xl">
                Furniture that ages like a good story.
              </h1>
              <p className="mt-5 max-w-md text-paper/80">
                Hand-joined teak, oak and sheesham — built to be inherited, not replaced.
              </p>
              <div className="mt-8">
                <Link
                  to="/shop/$room"
                  params={{ room: "living" }}
                  className="btn-solid bg-paper text-ink hover:bg-ochre"
                >
                  Shop the collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <p className="eyebrow">Shop by room</p>
        <h2 className="mt-3 text-3xl font-medium sm:text-4xl">Start where you live.</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {rooms.map((room) => (
            <Link
              key={room.slug}
              to="/shop/$room"
              params={{ room: room.slug }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={room.image}
                alt={room.name}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
              <div className="absolute bottom-0 p-4 text-paper">
                <p className="font-display text-xl">{room.name}</p>
                <p className="text-xs text-paper/70">{room.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">Bestsellers</p>
              <h2 className="mt-3 text-3xl font-medium sm:text-4xl">Most loved this season.</h2>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={dining}
            alt="Solid oak dining table"
            loading="lazy"
            className="aspect-square w-full rounded-2xl object-cover"
          />
          <div>
            <p className="eyebrow">The solid wood edit</p>
            <h2 className="mt-3 text-3xl font-medium sm:text-4xl">Run a palm along the grain.</h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Every piece is cut from single-origin timber, joined without shortcuts and finished by hand.
              No veneers, no particle board.
            </p>
            <ul className="mt-7 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="size-1.5 rounded-full bg-wood" /> FSC-certified teak, oak and sheesham
              </li>
              <li className="flex items-center gap-3">
                <span className="size-1.5 rounded-full bg-wood" /> Hand-oiled, low-VOC finishes
              </li>
              <li className="flex items-center gap-3">
                <span className="size-1.5 rounded-full bg-wood" /> Dovetail and mortise joinery
              </li>
            </ul>
            <Link
              to="/shop/$room"
              params={{ room: "dining" }}
              className="btn-solid mt-8 hover:bg-wood-deep"
            >
              Explore solid wood
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-10 lg:grid-cols-4">
          {trust.map((item) => (
            <div key={item.n} className="flex items-start gap-3">
              <span className="font-display text-lg text-wood">{item.n}</span>
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <p className="eyebrow">From our customers</p>
        <h2 className="mt-3 text-3xl font-medium sm:text-4xl">4.8 from 2,300+ homes.</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.who} className="rounded-2xl border border-border bg-card p-7">
              <div className="text-sm text-ochre">{"★".repeat(review.stars)}</div>
              <blockquote className="mt-4 font-display text-lg leading-snug">{review.quote}</blockquote>
              <figcaption className="mt-5 text-sm text-muted-foreground">{review.who}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
