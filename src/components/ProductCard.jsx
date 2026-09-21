import { Link } from "react-router-dom";
import { Share2, Heart, ArrowRightLeft } from "lucide-react";

function ProductCard({ image, badge, badgeColor, name, description, price, oldPrice }) {
  return (
    <div className="group relative w-full bg-[#F4F5F7] overflow-hidden font-sans">

      {/* Image Container */}
      <div className="relative w-full h-80">
        <img
          src={image}
          alt="img"
          className="w-full h-full object-cover"
        />

        {/* Badge */}
        {badge && (
          <span
            className="absolute top-5 right-5 w-12 h-12 rounded-full text-white font-bold text-sm flex items-center justify-center z-10"
            style={{ backgroundColor: badgeColor }}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Product Details */}
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

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-[#3A3A3A]/70 flex flex-col items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">

        <button className="bg-white text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white font-semibold py-3 px-9 text-base transition-colors duration-200">
          Add to cart
        </button>

        <div className="flex items-center gap-4 text-white text-sm font-semibold">
          <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
            <Share2 className="w-4 h-4" />
            Share
          </Link>
          <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
            <ArrowRightLeft className="w-4 h-4" />
            Compare
          </Link>
          <Link to="/" className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
            <Heart className="w-4 h-4" />
            Like
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
