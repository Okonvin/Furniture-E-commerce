import { useState } from "react";
import { Link } from "react-router-dom";
import { Share2, Heart, ArrowRightLeft, Check } from "lucide-react";
import { useCart } from "./CartContext";

function ProductCard({ id, slug, image, badge, badgeColor, name, description, price, oldPrice }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault(); // stop this button click from also triggering the <Link> below it
    addToCart({ id, slug, image, name, price }, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group relative w-full bg-[#F4F5F7] overflow-hidden font-sans">

      {/* Clickable area -> product detail page */}
      <Link to={`/shop/${slug}`} className="block">
        <div className="relative w-full h-80">
          <img src={image} alt={name} className="w-full h-full object-cover" />

          {badge && (
            <span
              className="absolute top-5 right-5 w-12 h-12 rounded-full text-white font-bold text-sm flex items-center justify-center z-10"
              style={{ backgroundColor: badgeColor }}
            >
              {badge}
            </span>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-2xl font-bold text-[#3A3A3A] mb-1">{name}</h3>
          <p className="text-[#898989] text-sm mb-2">{description}</p>

          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-[#3A3A3A]">{price}</span>
            {oldPrice && (
              <span className="text-sm text-[#B0B0B0] line-through">{oldPrice}</span>
            )}
          </div>
        </div>
      </Link>

      {/* Hover overlay. The background stays pointer-events-none at all
          times so it never blocks clicks meant for the Link above -
          only the buttons inside it (pointer-events-auto) are clickable. */}
      <div className="absolute inset-0 bg-[#3A3A3A]/70 flex flex-col items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">

        <button
          onClick={handleAdd}
          className={`pointer-events-auto flex items-center gap-2 font-semibold py-3 px-9 text-base transition-colors duration-200 cursor-pointer ${
            added
              ? "bg-[#2EC1AC] text-white"
              : "bg-white text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white"
          }`}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              Added
            </>
          ) : (
            "Add to cart"
          )}
        </button>

        <div className="flex items-center gap-4 text-white text-sm font-semibold pointer-events-auto">
          <button className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors cursor-pointer">
            <Share2 className="w-4 h-4" />
            Share
          </button>
          <button className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors cursor-pointer">
            <ArrowRightLeft className="w-4 h-4" />
            Compare
          </button>
          <button className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors cursor-pointer">
            <Heart className="w-4 h-4" />
            Like
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
