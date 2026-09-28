import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ChevronRight,
  Star,
  Plus,
  Minus,
  Check,
} from "lucide-react";
import { getProductBySlug, allProducts } from "./products";
import ProductCard from "./ProductCard";
import { useCart } from "./CartContext";

// lucide-react doesn't ship brand/logo icons, so these are small inline SVGs.
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}
function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}
function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 3H21.7l-6.1 7 7.18 9.9h-5.62l-4.4-5.8-5.04 5.8H2.9l6.53-7.5L2.6 3h5.76l3.98 5.3L18.9 3Zm-.98 15.2h1.56L7.16 4.7H5.49l12.43 13.5Z" />
    </svg>
  );
}

// Deterministic pseudo rating/review-count so each product looks different
// but stays stable across renders (swap for real review data later).
function ratingFor(id) {
  const avg = Math.min(5, 3.6 + ((id * 7) % 14) / 10);
  const count = 18 + ((id * 11) % 90);
  return { avg: Math.round(avg * 10) / 10, count };
}

const sampleReviews = [
  {
    name: "Amara O.",
    rating: 5,
    date: "3 weeks ago",
    comment:
      "Better in person than in photos. Assembly took about twenty minutes and it feels genuinely solid, not flat-pack flimsy.",
  },
  {
    name: "Daniel K.",
    rating: 4,
    date: "1 month ago",
    comment:
      "Exactly what I wanted for the space. Only reason it's not five stars is the delivery took a few days longer than quoted.",
  },
  {
    name: "Priya S.",
    rating: 5,
    date: "2 months ago",
    comment:
      "The finish is lovely and it's held up well with daily use. Would buy again without a second thought.",
  },
];

// Placeholder variant options - not tied to real product data yet.
const SIZE_OPTIONS = ["L", "XL", "XS"];
const COLOR_OPTIONS = [
  { name: "Purple", hex: "#8886C7" },
  { name: "Black", hex: "#1C1C1C" },
  { name: "Gold", hex: "#B88E2F" },
];

const RELATED_INITIAL = 4;
const RELATED_EXPANDED = 8;

function StarRow({ rating, size = "w-4 h-4" }) {
  const rounded = Math.round(rating);
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={size}
          fill={n <= rounded ? "#B88E2F" : "none"}
          stroke={n <= rounded ? "#B88E2F" : "#B0B0B0"}
        />
      ))}
    </div>
  );
}

function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(SIZE_OPTIONS[0]);
  const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[0].name);
  const [activeTab, setActiveTab] = useState("description");
  const [added, setAdded] = useState(false);
  const [showAllRelated, setShowAllRelated] = useState(false);
  const reviewsRef = useRef(null);

  useEffect(() => {
    setQuantity(1);
    setSelectedSize(SIZE_OPTIONS[0]);
    setSelectedColor(COLOR_OPTIONS[0].name);
    setActiveTab("description");
    setAdded(false);
    setShowAllRelated(false);
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!product) {
    return (
      <section className="w-[80%] mx-auto py-24 text-center">
        <h1 className="text-3xl font-bold text-[#3A3A3A] mb-4">Product not found</h1>
        <p className="text-[#898989] mb-6">
          The product you're looking for doesn't exist or may have been removed.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-[#B88E2F] text-white px-8 py-3 font-semibold hover:bg-[#a07b28] transition-colors"
        >
          Back to Shop
        </Link>
      </section>
    );
  }

  const { id, image, name, description, price, oldPrice, badge, badgeColor, category } = product;
  const { avg, count } = ratingFor(id);

  // Related products: same category first, then fill with others. Deduped.
  const candidates = [
    ...allProducts.filter((p) => p.category === category && p.id !== id),
    ...allProducts.filter((p) => p.id !== id && p.category !== category),
  ];
  const uniqueRelated = candidates.filter(
    (p, i, arr) => arr.findIndex((x) => x.id === p.id) === i
  );
  const visibleRelated = uniqueRelated.slice(
    0,
    showAllRelated ? RELATED_EXPANDED : RELATED_INITIAL
  );
  const hasMoreRelated = uniqueRelated.length > RELATED_INITIAL;

  const jumpToReviews = () => {
    setActiveTab("reviews");
    reviewsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleAddToCart = () => {
    addToCart({ id, slug, image, name, price }, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const sku = `SS${String(id).padStart(3, "0")}`;
  const tags = [
    category.charAt(0).toUpperCase() + category.slice(1),
    "Furniture",
    "Home",
    "Shop",
  ];

  return (
    <>
      {/* Breadcrumb bar */}
      <div className="w-full bg-[#F9F1E7] py-6">
        <div className="w-[90%] lg:w-[80%] mx-auto flex items-center gap-3 text-sm">
          <Link to="/" className="text-[#898989] hover:text-[#B88E2F] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 text-[#9F9F9F]" />
          <Link to="/shop" className="text-[#898989] hover:text-[#B88E2F] transition-colors">Shop</Link>
          <span className="w-px h-4 bg-[#9F9F9F] mx-1"></span>
          <span className="text-[#3A3A3A] font-medium truncate">{name}</span>
        </div>
      </div>

      {/* Main fold */}
      <section className="w-[90%] lg:w-[80%] mx-auto py-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_1fr] gap-10 lg:gap-16 items-start">

        {/* ---------- Image showcase ---------- */}
        <div className="lg:sticky lg:top-6 flex flex-col-reverse sm:flex-row gap-4">
          {/* Thumbnails (same image, placeholder for a real multi-angle gallery) */}
          <div className="flex sm:flex-col gap-3">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                className={`w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-xl border transition-colors cursor-pointer bg-[#F9F1E7] ${
                  i === 0 ? "border-[#B88E2F]" : "border-transparent hover:border-[#B88E2F]/50"
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover rounded-xl" />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="relative flex-1 aspect-square  overflow-hidden rounded-xl">
            <img
              src={image}
              alt={name}
              className="w-[600px] h-[500px] object-cover rounded-xl transition-transform duration-500 hover:scale-105"
            />
            {badge && (
              <span
                className="absolute top-5 right-5 w-14 h-14 rounded-full text-white font-bold text-sm flex items-center justify-center shadow-md"
                style={{ backgroundColor: badgeColor }}
              >
                {badge}
              </span>
            )}
          </div>
        </div>

        {/* ---------- Details ---------- */}
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#3A3A3A] leading-tight">{name}</h1>

          <span className="text-2xl text-[#898989] font-medium">{price}</span>
          {oldPrice && (
            <span className="text-base text-[#B0B0B0] line-through -mt-4">{oldPrice}</span>
          )}

          <button onClick={jumpToReviews} className="flex items-center gap-4 w-fit cursor-pointer">
            <StarRow rating={avg} size="w-5 h-5" />
            <span className="w-px h-4 bg-[#9F9F9F]"></span>
            <span className="text-sm text-[#898989] hover:text-[#B88E2F] transition-colors">
              {count} Customer Review{count !== 1 ? "s" : ""}
            </span>
          </button>

          <p className="text-[#898989] leading-relaxed">{description}.</p>

          {/* Size picker (placeholder - not tied to real inventory) */}
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#898989]">Size</span>
            <div className="flex gap-3">
              {SIZE_OPTIONS.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 rounded-lg font-medium text-sm transition-colors cursor-pointer ${
                    selectedSize === size
                      ? "bg-[#B88E2F] text-white"
                      : "bg-[#F9F1E7] text-[#3A3A3A] hover:bg-[#f0e2c8]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color picker (placeholder - not tied to real inventory) */}
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#898989]">Color</span>
            <div className="flex gap-3">
              {COLOR_OPTIONS.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  aria-label={c.name}
                  className={`w-8 h-8 rounded-full cursor-pointer transition-transform ${
                    selectedColor === c.name ? "ring-2 ring-offset-2 ring-[#3A3A3A] scale-105" : ""
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>

          {/* Quantity + actions */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-3">
            <div className="flex items-center rounded-xl border border-[#D9D9D9]">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-11 h-12 flex items-center justify-center hover:bg-[#F9F1E7] rounded-l-xl transition-colors cursor-pointer"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-10 text-center font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-11 h-12 flex items-center justify-center hover:bg-[#F9F1E7] rounded-r-xl transition-colors cursor-pointer"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={added}
              className={`flex-1 flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold transition-colors cursor-pointer ${
                added
                  ? "bg-[#2EC1AC] text-white"
                  : "border border-[#3A3A3A] text-[#3A3A3A] hover:bg-[#3A3A3A] hover:text-white"
              }`}
            >
              {added ? (
                <>
                  <Check className="w-5 h-5" />
                  Added to Cart
                </>
              ) : (
                "Add To Cart"
              )}
            </button>

            <button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#3A3A3A] border border-[#3A3A3A] hover:bg-[#3A3A3A] hover:text-white transition-colors cursor-pointer">
              <Plus className="w-4 h-4" />
              Compare
            </button>
          </div>

          {/* SKU / Category / Tags / Share */}
          <div className="flex flex-col gap-3 text-sm pt-6 mt-2 border-t border-[#D9D9D9]">
            <div className="flex gap-3">
              <span className="w-24 text-[#898989]">SKU</span>
              <span className="text-[#898989]">:</span>
              <span className="text-[#3A3A3A]">{sku}</span>
            </div>
            <div className="flex gap-3">
              <span className="w-24 text-[#898989]">Category</span>
              <span className="text-[#898989]">:</span>
              <span className="text-[#3A3A3A] capitalize">{category}</span>
            </div>
            <div className="flex gap-3">
              <span className="w-24 text-[#898989]">Tags</span>
              <span className="text-[#898989]">:</span>
              <span className="text-[#3A3A3A]">{tags.join(", ")}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-24 text-[#898989]">Share</span>
              <span className="text-[#898989]">:</span>
              <div className="flex items-center gap-2">
                <button className="w-7 h-7 rounded-full bg-[#3A3A3A] text-white flex items-center justify-center hover:bg-[#B88E2F] transition-colors cursor-pointer">
                  <FacebookIcon className="w-3.5 h-3.5" />
                </button>
                <button className="w-7 h-7 rounded-full bg-[#3A3A3A] text-white flex items-center justify-center hover:bg-[#B88E2F] transition-colors cursor-pointer">
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </button>
                <button className="w-7 h-7 rounded-full bg-[#3A3A3A] text-white flex items-center justify-center hover:bg-[#B88E2F] transition-colors cursor-pointer">
                  <TwitterIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Tabs: Description / Additional Information / Reviews ---------- */}
      <section ref={reviewsRef} className="w-[90%] lg:w-[80%] mx-auto py-10">
        <div className="flex items-center justify-center gap-10 border-b border-[#E4E4E4]">
          <button
            onClick={() => setActiveTab("description")}
            className={`pb-4 font-semibold cursor-pointer transition-colors ${
              activeTab === "description" ? "text-[#3A3A3A]" : "text-[#898989] hover:text-[#3A3A3A]"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("info")}
            className={`pb-4 font-semibold cursor-pointer transition-colors ${
              activeTab === "info" ? "text-[#3A3A3A]" : "text-[#898989] hover:text-[#3A3A3A]"
            }`}
          >
            Additional Information
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-4 font-semibold cursor-pointer transition-colors ${
              activeTab === "reviews" ? "text-[#3A3A3A]" : "text-[#898989] hover:text-[#3A3A3A]"
            }`}
          >
            Reviews [{count}]
          </button>
        </div>

        {activeTab === "description" && (
          <div className="max-w-3xl mx-auto pt-8 flex flex-col items-center text-center gap-4 text-[#616161] leading-relaxed">
            <p>
              {description}. Every piece in this collection is chosen for how it wears over
              time, not just how it looks on day one.
            </p>
            <p className="text-left">
              Dimensions and care instructions are included with delivery. If it's not the
              right fit for your space, our returns process is straightforward within 30 days
              of delivery.
            </p>

            <div className="flex items-center justify-center gap-7 mt-5">
              <img src="/assets/desc-img_1.png" alt="" className="rounded-xl w-full max-w-sm object-cover" />
              <img src="/assets/desc-img_2.png" alt="" className="rounded-xl w-full max-w-sm object-cover" />
            </div>
          </div>
        )}

        {activeTab === "info" && (
          <div className="max-w-3xl mx-auto pt-8 flex flex-col divide-y divide-[#E4E4E4] text-sm">
            {[
              ["Material", "Solid wood frame, upholstered cushions"],
              ["Category", category],
              ["Assembly", "Required, tools included"],
              ["Weight", "18 kg"],
            ].map(([label, value]) => (
              <div key={label} className="flex py-3">
                <span className="w-40 text-[#898989] capitalize">{label}</span>
                <span className="text-[#3A3A3A] capitalize">{value}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="max-w-3xl mx-auto pt-8 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-[#3A3A3A]">{avg}</span>
              <div>
                <StarRow rating={avg} size="w-5 h-5" />
                <p className="text-sm text-[#898989] mt-1">Based on {count} reviews</p>
              </div>
            </div>

            <div className="flex flex-col divide-y divide-[#E4E4E4]">
              {sampleReviews.map((review) => (
                <div key={review.name} className="py-6 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#3A3A3A]">{review.name}</span>
                    <span className="text-sm text-[#B0B0B0]">{review.date}</span>
                  </div>
                  <StarRow rating={review.rating} size="w-4 h-4" />
                  <p className="text-[#616161] leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ---------- Related Products ---------- */}
      <section className="w-[90%] lg:w-[80%] mx-auto py-14 border-t border-[#E4E4E4]">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#3A3A3A] mb-8 text-center">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleRelated.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>

        {hasMoreRelated && (
          <button
            onClick={() => setShowAllRelated((s) => !s)}
            className="py-3 px-16 rounded-xl border-[#B88E2F] border text-[#B88E2F] text-[16px] font-semibold block my-5 mx-auto hover:text-white hover:bg-[#B88E2F] transition-colors cursor-pointer"
          >
            {showAllRelated ? "Show Less" : "Show More"}
          </button>
        )}
      </section>
    </>
  );
}

export default ProductDetail;