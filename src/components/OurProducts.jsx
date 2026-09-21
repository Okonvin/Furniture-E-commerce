import ProductCard from "./ProductCard";

const products = [
  { image: "/assets/Image-sec2_1.png", badge: "-30%", badgeColor: "#E97171", name: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000" },
  { image: "/assets/Image-sec2_2.png", name: "Leviosa", description: "Stylish cafe chair", price: "Rp 2.500.000" },
  { image: "/assets/Image-sec2_3.png", badge: "-50%", badgeColor: "#E97171", name: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000" },
  { image: "/assets/Image-sec2_4.png", badge: "New", badgeColor: "#2EC1AC", name: "Respira", description: "Out door bar table and stool", price: "Rp 500.000" },
  { image: "/assets/Image-sec2_5.png", name: "Grifo", description: "Night lamp", price: "Rp 1.500.000" },
  { image: "/assets/Image-sec2_6.png", badge: "New", badgeColor: "#2EC1AC", name: "Muggo", description: "Small mug", price: "Rp 150.000" },
  { image: "/assets/Image-sec2_7.png", badge: "-50%", badgeColor: "#E97171", name: "Pingky", description: "Cute bed set", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000" },
  { image: "/assets/Image-sec2_8.png", badge: "New", badgeColor: "#2EC1AC", name: "Potty", description: "Minimalist flower pot", price: "Rp 500.000" },
];

function OurProducts() {
  return (
    <section className="w-[73%] mx-auto my-12 ">
      <h1 className="text-center text-3xl font-bold lg:text-4xl sm:text-3xl">Our Products</h1>

      <div className="mt-8 grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>

      <button className="py-3 px-16 border-[#B88E2F] border-1 text-[#B88E2F] text-[16px] font-semibold block my-5 mx-auto hover:text-[#ffff] hover:bg-[#B88E2F] transition-colors cursor-pointer">Show More</button>
    </section>
  );
}

export default OurProducts;
