function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export const baseProducts = [
  { image: "/assets/Image-sec2_1.png", badge: "-30%", badgeColor: "#E97171", name: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", category: "chair" },
  { image: "/assets/Image-sec2_2.png", name: "Leviosa", description: "Stylish cafe chair", price: "Rp 2.500.000", category: "chair" },
  { image: "/assets/Image-sec2_3.png", badge: "-50%", badgeColor: "#E97171", name: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", category: "sofa" },
  { image: "/assets/Image-sec2_4.png", badge: "New", badgeColor: "#2EC1AC", name: "Respira", description: "Out door bar table and stool", price: "Rp 500.000", category: "outdoor" },
  { image: "/assets/Image-sec2_5.png", name: "Grifo", description: "Night lamp", price: "Rp 1.500.000", category: "lighting" },
  { image: "/assets/Image-sec2_6.png", badge: "New", badgeColor: "#2EC1AC", name: "Muggo", description: "Small mug", price: "Rp 150.000", category: "decor" },
  { image: "/assets/Image-sec2_7.png", badge: "-50%", badgeColor: "#E97171", name: "Pingky", description: "Cute bed set", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", category: "bedroom" },
  { image: "/assets/Image-sec2_8.png", badge: "New", badgeColor: "#2EC1AC", name: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", category: "decor" },
  { image: "/assets/product-img_1.png", name: "Muggo", description: "Small mug", price: "Rp 1.500.000", category: "decor" },
  { image: "/assets/product-img_2.png", name: "Muggo", description: "Small mug", price: "Rp 1.500.000", category: "decor" },
  { image: "/assets/product-img_3.png", name: "Casaliving Wood", description: "Stylish cafe chair", price: "Rp 270,000.00", category: "chair" },
  { image: "/assets/product-img_4.png", name: "Muggo", description: "Small mug", price: "Rp 270,000.00", category: "decor" },
  { image: "/assets/product-img_5.png", name: "Muggo", description: "Small mug", price: "Rp 100,000.00", category: "decor" },
  { image: "/assets/product-img_6.png", name: "Asgaard sofa", description: "Small mug", price: "Rp 250,000.00", category: "decor" },
];

// Placeholder: repeats the 8 base products to fill 32 items so the shop
// grid + pagination have something real to work with. Each repeat gets
// "-<index>" appended to its slug to stay unique. Once you have 32 real,
// distinct products, drop the index suffix.
export const allProducts = Array.from({ length: 32 }, (_, i) => {
  const base = baseProducts[i % baseProducts.length];
  return {
    ...base,
    id: i + 1,
    slug: `${slugify(base.name)}-${i + 1}`,
  };
});

export const categories = [...new Set(baseProducts.map((p) => p.category))];

export function parsePrice(price) {
  return Number(price.replace(/[^\d]/g, ""));
}

export function formatPrice(amount) {
  return `Rp ${amount.toLocaleString("id-ID")}`;
}

export function getProductBySlug(slug) {
  return allProducts.find((p) => p.slug === slug);
}


// Deterministic pseudo rating/review-count so each product looks different
// but stays stable across renders (swap for real review data later).
export function ratingFor(id){
  const avg = Math.min(5, 3.6 + ((id * 7) % 14) / 10);
  const count = 18 + ((id * 11) % 90);
  return { avg: Math.round(avg * 10) / 10, count };
}
