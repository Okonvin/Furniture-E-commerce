import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { useCart } from "./CartContext";
import { parsePrice, formatPrice } from "./products";
import PageHero from "./PageHero";
import { FeatureStrip } from "./Shop";

function Cart() {
  const { items, removeFromCart, updateQuantity, itemCount } = useCart();

  const subtotal = items.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <>
        <PageHero title="Cart" showLogo />
        <section className="w-[80%] mx-auto py-24 text-center">
          <h1 className="text-3xl font-bold text-[#3A3A3A] mb-4">Your cart is empty</h1>
          <p className="text-[#898989] mb-6">Looks like you haven't added anything yet.</p>
          <Link
            to="/shop"
            className="inline-block bg-[#B88E2F] text-white px-8 py-3 font-semibold hover:bg-[#a07b28] transition-colors"
          >
            Browse Shop
          </Link>
        </section>
        <FeatureStrip/>
      </>
    );
  }

  return (
    <>
      <PageHero title="Cart" showLogo />

      <section className="w-[90%] lg:w-[80%] mx-auto py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">

          {/* ---------- Product table ---------- */}
          <div>
            {/* Header row - desktop only */}
            <div className="hidden lg:grid grid-cols-[100px_1fr_160px_140px_140px_40px] items-center bg-[#F9F1E7] px-6 py-4 text-sm font-semibold text-[#3A3A3A]">
              <span>Product</span>
              <span></span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
              <span></span>
            </div>

            <div className="flex flex-col divide-y divide-[#E4E4E4]">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 lg:grid-cols-[100px_1fr_160px_140px_140px_40px] items-center gap-4 lg:gap-0 py-6"
                >
                  {/* Image */}
                  <Link to={`/shop/${item.slug}`} className="w-20 h-20 bg-[#F9F1E7] flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </Link>

                  {/* Name */}
                  <Link
                    to={`/shop/${item.slug}`}
                    className="text-[#3A3A3A] font-medium hover:text-[#B88E2F] transition-colors"
                  >
                    {item.name}
                  </Link>

                  {/* Price */}
                  <span className="text-[#898989]">{item.price}</span>

                  {/* Quantity */}
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, Math.max(1, Number(e.target.value) || 1))
                    }
                    className="w-16 text-center border border-[#D9D9D9] py-2 outline-none"
                  />

                  {/* Subtotal */}
                  <span className="text-[#3A3A3A] font-medium">
                    {formatPrice(parsePrice(item.price) * item.quantity)}
                  </span>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-[#B88E2F] hover:text-[#a07b28] transition-colors cursor-pointer w-fit"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- Cart Totals ---------- */}
          <div className="bg-[#F9F1E7] p-8 flex flex-col gap-6">
            <h2 className="text-xl font-bold text-[#3A3A3A] text-center">Cart Totals</h2>

            <div className="flex items-center justify-between border-b border-[#D9D9D9] pb-4">
              <span className="text-[#3A3A3A]">Subtotal</span>
              <span className="text-[#898989]">{formatPrice(subtotal)}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#3A3A3A] font-semibold">Total</span>
              <span className="text-[#B88E2F] font-bold text-lg">{formatPrice(subtotal)}</span>
            </div>

            <button className="mx-auto mt-2 px-10 py-3 rounded-full border border-[#3A3A3A] font-semibold text-[#3A3A3A] hover:bg-[#3A3A3A] hover:text-white transition-colors cursor-pointer">
              Check Out
            </button>
          </div>

        </div>
      </section>
      <FeatureStrip/>
    </>
  );
}

export default Cart;
