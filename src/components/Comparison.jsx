import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Star } from "lucide-react";
import { useCompare } from "./CompareContext";
import { useCart } from "./CartContext";
import { allProducts, ratingFor } from "./products";
import PageHero from "./PageHero";
import { FeatureStrip } from "./Shop";


// Placeholder spec data - product catalog has no real spec sheet yet,
// so these are generated deterministically per product (same approach as
// ratingFor) just so the comparison table has something real to show.
// Replace with actual spec fields on products once generated.
const SPEC_SECTIONS = [
  {
    title: "General",
    rows: [
      { label: "Sales Package", value: (p) => `1 ${p.category} set` },
      { label: "Model Number", value: (p) => `TF${String(p.id).padStart(4, "0")}GRBL` },
      { label: "Secondary Material", value: () => "Solid Wood" },
      { label: "Configuration", value: () => "L-shaped" },
      { label: "Upholstery Material", value: () => "Fabric + Cotton" },
      { label: "Upholstery Color", value: () => "Bright Grey & Lion" },
    ],
  },
  {
    title: "Product",
    rows: [
      { label: "Filling Material", value: (p) => (p.id % 2 === 0 ? "Foam" : "Matte") },
      { label: "Finish Type", value: () => "Bright Grey & Lion" },
      { label: "Adjustable Headrest", value: (p) => (p.id % 2 === 0 ? "Yes" : "No") },
      { label: "Maximum Load Capacity", value: (p) => `${260 + (p.id % 5) * 10} KG` },
      { label: "Origin of Manufacture", value: () => "India" },
    ],
  },
  {
    title: "Dimensions",
    rows: [
      { label: "Width", value: () => "265.32 cm" },
      { label: "Height", value: () => "76 cm" },
      { label: "Depth", value: () => "167.76 cm" },
      { label: "Weight", value: (p) => `${40 + (p.id % 6) * 5} KG` },
      { label: "Seat Height", value: () => "41.52 cm" },
      { label: "Leg Height", value: () => "5.46 cm" },
    ],
  },
  {
    title: "Warranty",
    rows: [
      { label: "Warranty Summary", value: (p) => `${p.id % 2 === 0 ? "1" : "1.2"} Year Manufacturing Warranty` },
      { label: "Warranty Service Type", value: () => "For warranty claims or any product related issues, please email support@furniro.com" },
      { label: "Covered in Warranty", value: () => "Warranty against manufacturing defects" },
      {
        label: "Not Covered in Warranty",
        value: () =>
          "The warranty does not cover damages due to usage of the product beyond its intended use, and wear & tear in the natural course of product usage.",
      },
      { label: "Domestic Warranty", value: (p) => (p.id % 2 === 0 ? "1 Year" : "3 Months") },
    ],
  },
];

function MiniStars({ rating }) {
  const rounded = Math.round(rating);
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className="w-3.5 h-3.5"
          fill={n <= rounded ? "#B88E2F" : "none"}
          stroke={n <= rounded ? "#B88E2F" : "#B0B0B0"}
        />
      ))}
    </div>
  );
}

function Comparison() {
  const { items, removeFromCompare, addToCompare } = useCompare();
  const { addToCart } = useCart();
  const [addedMap, setAddedMap] = useState({});

  const availableToAdd = allProducts.filter(
    (p) => !items.some((item) => item.id === p.id)
  );

  const handleAddProduct = (e) => {
    const id = Number(e.target.value);
    e.target.value = "";
    if (!id) return;
    const product = allProducts.find((p) => p.id === id);
    if (product) {
      addToCompare({
        id: product.id,
        slug: product.slug,
        name: product.name,
        image: product.image,
        price: product.price,
        category: product.category,
      });
    }
  };

  const handleAddToCart = (item) => {
    addToCart({ id: item.id, slug: item.slug, image: item.image, name: item.name, price: item.price }, 1);
    setAddedMap((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => setAddedMap((prev) => ({ ...prev, [item.id]: false })), 1500);
  };

  const columnTemplate = `240px repeat(${items.length}, minmax(220px, 1fr)) 220px`;

  return (
    <>
      <PageHero title="Comparison" showLogo />

      <section className="w-[90%] mx-auto py-14">
        {items.length === 0 ? (
          <div className="text-center py-10">
            <h1 className="text-2xl font-bold text-[#3A3A3A] mb-4">Nothing to compare yet</h1>
            <p className="text-[#898989] mb-6">
              Hover a product and click "Compare" to add it here - you can compare several
              products side by side.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-[#B88E2F] text-white px-8 py-3 font-semibold hover:bg-[#a07b28] transition-colors"
            >
              Browse Shop
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <div style={{ minWidth: `${240 + items.length * 220 + 220}px` }}>

              {/* ---------- Header row ---------- */}
              <div className="grid gap-6 pb-8 border-b border-[#E4E4E4]" style={{ gridTemplateColumns: columnTemplate }}>
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-bold text-[#3A3A3A] leading-snug">
                    Go to Product page for more Products
                  </h1>
                  <Link to="/shop" className="text-sm text-[#3A3A3A] underline w-fit hover:text-[#B88E2F] transition-colors">
                    View More
                  </Link>
                </div>

                {items.map((item) => {
                  const { avg, count } = ratingFor(item.id);
                  return (
                    <div key={item.id} className="flex flex-col gap-3">
                      <div className="relative w-full aspect-square bg-[#F9F1E7]">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        <button
                          onClick={() => removeFromCompare(item.id)}
                          className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/90 hover:bg-white flex items-center justify-center cursor-pointer shadow-sm"
                          aria-label={`Remove ${item.name} from comparison`}
                        >
                          <X className="w-3.5 h-3.5 text-[#3A3A3A]" />
                        </button>
                      </div>

                      <Link
                        to={`/shop/${item.slug}`}
                        className="font-bold text-lg text-[#3A3A3A] hover:text-[#B88E2F] transition-colors"
                      >
                        {item.name}
                      </Link>
                      <span className="text-[#3A3A3A]">{item.price}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-[#3A3A3A]">{avg}</span>
                        <MiniStars rating={avg} />
                        <span className="text-xs text-[#898989] border-l border-[#D9D9D9] pl-2">
                          {count} Review{count !== 1 ? "s" : ""}
                        </span>
                      </div>
                    </div>
                  );
                })}

                <div className="flex flex-col gap-3">
                  <h2 className="font-bold text-[#3A3A3A]">Add A Product</h2>
                  <select
                    onChange={handleAddProduct}
                    defaultValue=""
                    disabled={availableToAdd.length === 0}
                    className="bg-[#B88E2F] text-white font-semibold px-4 py-3 outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="" disabled>
                      {availableToAdd.length === 0 ? "No more products" : "Choose a Product"}
                    </option>
                    {availableToAdd.map((p) => (
                      <option key={p.id} value={p.id} className="text-[#3A3A3A]">
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* ---------- Spec sections ---------- */}
              {SPEC_SECTIONS.map((section) => (
                <div key={section.title}>
                  <div className="grid gap-6 pt-8" style={{ gridTemplateColumns: columnTemplate }}>
                    <h2 className="text-xl font-bold text-[#3A3A3A]">{section.title}</h2>
                    {items.map((item) => <span key={item.id} />)}
                    <span />
                  </div>

                  {section.rows.map((row) => (
                    <div
                      key={row.label}
                      className="grid gap-6 py-4 border-b border-[#F0F0F0]"
                      style={{ gridTemplateColumns: columnTemplate }}
                    >
                      <span className="text-[#3A3A3A]">{row.label}</span>
                      {items.map((item) => (
                        <span key={item.id} className="text-[#616161] leading-relaxed">
                          {row.value(item)}
                        </span>
                      ))}
                      <span />
                    </div>
                  ))}
                </div>
              ))}

              {/* ---------- Add to cart row ---------- */}
              <div className="grid gap-6 pt-8" style={{ gridTemplateColumns: columnTemplate }}>
                <span />
                {items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleAddToCart(item)}
                    disabled={addedMap[item.id]}
                    className={`px-6 py-3 font-semibold transition-colors cursor-pointer ${
                      addedMap[item.id]
                        ? "bg-[#2EC1AC] text-white"
                        : "bg-[#B88E2F] text-white hover:bg-[#a07b28]"
                    }`}
                  >
                    {addedMap[item.id] ? "Added" : "Add To Cart"}
                  </button>
                ))}
                <span />
              </div>
            </div>
          </div>
        )}
      </section>
      <FeatureStrip/>
    </>
  );
}

export default Comparison;
