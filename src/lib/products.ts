import sofa from "@/assets/product-sofa.jpg";
import dining from "@/assets/product-dining.jpg";
import bed from "@/assets/product-bed.jpg";
import living from "@/assets/hero-living.jpg";

export type Product = {
  slug: string;
  name: string;
  room: RoomSlug;
  category: string;
  price: number;
  mrp: number;
  image: string;
  material: string;
  finishes: string[];
  sizes: string[];
  dimensions: { label: string; value: string }[];
  warranty: string;
  rating: number;
  reviewCount: number;
  summary: string;
};

export type RoomSlug = "living" | "bedroom" | "dining" | "study" | "kids";

export const rooms: { slug: RoomSlug; name: string; blurb: string; image: string }[] = [
  { slug: "living", name: "Living", blurb: "Sofas, coffee tables, TV units", image: living },
  { slug: "bedroom", name: "Bedroom", blurb: "Beds, wardrobes, bedsides", image: bed },
  { slug: "dining", name: "Dining", blurb: "Tables, chairs, crockery units", image: dining },
  { slug: "study", name: "Study", blurb: "Desks, chairs, bookshelves", image: sofa },
  { slug: "kids", name: "Kids", blurb: "Bunk beds, study tables, storage", image: bed },
];

export const products: Product[] = [
  {
    slug: "karla-teak-sofa",
    name: "Karla Teak Sofa",
    room: "living",
    category: "Sofa",
    price: 184900,
    mrp: 231000,
    image: sofa,
    material: "Solid Burma teak, linen upholstery",
    finishes: ["Natural Teak", "Honey", "Walnut"],
    sizes: ["2 Seater", "3 Seater", "L-Shape"],
    dimensions: [
      { label: "Width", value: "198 cm" },
      { label: "Depth", value: "86 cm" },
      { label: "Height", value: "78 cm" },
      { label: "Seat height", value: "42 cm" },
    ],
    warranty: "10 years on frame and joinery",
    rating: 4.8,
    reviewCount: 214,
    summary:
      "A low, generous three-seater with an exposed teak frame and removable linen cushions. Mortise-and-tenon joinery, hand-oiled finish.",
  },
  {
    slug: "aarav-dining-table",
    name: "Aarav Round Dining Table",
    room: "dining",
    category: "Dining Table",
    price: 96500,
    mrp: 118000,
    image: dining,
    material: "Solid oak, natural oil finish",
    finishes: ["Natural Oak", "Smoked Oak"],
    sizes: ["4 Seater · 110 cm", "6 Seater · 140 cm"],
    dimensions: [
      { label: "Diameter", value: "140 cm" },
      { label: "Height", value: "75 cm" },
      { label: "Top thickness", value: "4 cm" },
      { label: "Seats", value: "6 people" },
    ],
    warranty: "10 years on frame and joinery",
    rating: 4.7,
    reviewCount: 138,
    summary:
      "A pedestal round table cut from single-origin oak. Sold as a table or with six matching chairs.",
  },
  {
    slug: "nila-cane-bed",
    name: "Nila Cane Bed",
    room: "bedroom",
    category: "Bed",
    price: 118000,
    mrp: 139000,
    image: bed,
    material: "Solid ash frame, hand-woven cane headboard",
    finishes: ["Natural", "Dark Walnut"],
    sizes: ["Queen", "King"],
    dimensions: [
      { label: "Width", value: "193 cm" },
      { label: "Length", value: "212 cm" },
      { label: "Headboard height", value: "104 cm" },
      { label: "Storage", value: "Optional hydraulic" },
    ],
    warranty: "10 years on frame and joinery",
    rating: 4.9,
    reviewCount: 302,
    summary:
      "A low platform bed with a curved cane headboard, woven by hand in Jaipur. Available with hydraulic storage.",
  },
  {
    slug: "meera-study-desk",
    name: "Meera Study Desk",
    room: "study",
    category: "Desk",
    price: 42900,
    mrp: 52400,
    image: dining,
    material: "Solid sheesham, matte lacquer",
    finishes: ["Honey", "Walnut"],
    sizes: ["120 cm", "150 cm"],
    dimensions: [
      { label: "Width", value: "120 cm" },
      { label: "Depth", value: "60 cm" },
      { label: "Height", value: "75 cm" },
      { label: "Drawers", value: "2" },
    ],
    warranty: "5 years on frame and joinery",
    rating: 4.6,
    reviewCount: 87,
    summary: "A compact writing desk with two soft-close drawers and a cable cut-out.",
  },
  {
    slug: "rohan-bookshelf",
    name: "Rohan Bookshelf",
    room: "study",
    category: "Storage",
    price: 38200,
    mrp: 44900,
    image: sofa,
    material: "Solid acacia",
    finishes: ["Natural", "Charcoal"],
    sizes: ["4 Tier", "5 Tier"],
    dimensions: [
      { label: "Width", value: "90 cm" },
      { label: "Depth", value: "35 cm" },
      { label: "Height", value: "180 cm" },
      { label: "Shelves", value: "5" },
    ],
    warranty: "5 years on frame and joinery",
    rating: 4.5,
    reviewCount: 64,
    summary: "An open five-tier shelf with adjustable middle shelves and a wall anchor kit.",
  },
  {
    slug: "kaveri-sideboard",
    name: "Kaveri Sideboard",
    room: "living",
    category: "TV Unit",
    price: 72900,
    mrp: 85800,
    image: dining,
    material: "Solid sheesham, brass handles",
    finishes: ["Walnut", "Natural"],
    sizes: ["150 cm", "180 cm"],
    dimensions: [
      { label: "Width", value: "180 cm" },
      { label: "Depth", value: "45 cm" },
      { label: "Height", value: "62 cm" },
      { label: "Doors", value: "3" },
    ],
    warranty: "10 years on frame and joinery",
    rating: 4.7,
    reviewCount: 121,
    summary: "A long, low sideboard with three soft-close doors and a cable channel at the back.",
  },
  {
    slug: "tara-bunk-bed",
    name: "Tara Bunk Bed",
    room: "kids",
    category: "Kids Bed",
    price: 68500,
    mrp: 79900,
    image: bed,
    material: "Solid mango wood, child-safe finish",
    finishes: ["Natural", "Sage"],
    sizes: ["Single over Single"],
    dimensions: [
      { label: "Width", value: "104 cm" },
      { label: "Length", value: "198 cm" },
      { label: "Height", value: "158 cm" },
      { label: "Ladder", value: "Included" },
    ],
    warranty: "5 years on frame and joinery",
    rating: 4.6,
    reviewCount: 45,
    summary: "A sturdy bunk with full-height guard rails and a fixed ladder, finished in non-toxic oil.",
  },
  {
    slug: "sahil-wardrobe",
    name: "Sahil Two-Door Wardrobe",
    room: "bedroom",
    category: "Wardrobe",
    price: 94500,
    mrp: 112000,
    image: sofa,
    material: "Solid sheesham with ply carcass",
    finishes: ["Honey", "Walnut"],
    sizes: ["2 Door", "3 Door"],
    dimensions: [
      { label: "Width", value: "120 cm" },
      { label: "Depth", value: "58 cm" },
      { label: "Height", value: "200 cm" },
      { label: "Drawers", value: "2 internal" },
    ],
    warranty: "10 years on frame and joinery",
    rating: 4.4,
    reviewCount: 73,
    summary: "A two-door wardrobe with a hanging rail, four shelves and two internal drawers.",
  },
];

export const formatINR = (value: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(
    value,
  );

export const discountPercent = (p: Product) => Math.round(((p.mrp - p.price) / p.mrp) * 100);

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const productsByRoom = (room: RoomSlug) => products.filter((p) => p.room === room);
