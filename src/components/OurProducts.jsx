import ProductCard from "./ProductCard";
import { allProducts } from "./products";
import Reveal from "./Reveal";

// First 8 unique products (indices 0-7 of allProducts map 1:1 to the
// 8 real base products before the placeholder-repeat kicks in).
const featured = allProducts.slice(0, 8);

function OurProducts() {
  return (
      <Reveal>
        <section className="w-[73%] mx-auto my-12 ">
          <h1 className="text-center text-3xl font-bold lg:text-4xl sm:text-3xl">Our Products</h1>

          <div className="mt-8 grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product, i) => (
              <Reveal key={product.id} delay={i * 80}>
                <ProductCard key={product.id} {...product} />
              </Reveal>
            ))}
          </div>

          <button className="py-3 px-16 border-[#B88E2F] border-1 text-[#B88E2F] text-[16px] font-semibold block my-5 mx-auto hover:text-[#ffff] hover:bg-[#B88E2F] transition-colors cursor-pointer">
            Show More

          </button>
        </section>
      </Reveal>
  );
}

export default OurProducts;
