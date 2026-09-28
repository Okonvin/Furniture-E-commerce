import { Link } from "react-router-dom";
import { Trash2, Minus, Plus } from "lucide-react";
import { useCart } from "./CartContext";
import { parsePrice, formatPrice } from "./products";
import PageHero from "./PageHero";


function Cart() {
  const { items, removeFromCart, updateQuantity, itemCount } = useCart();

  const subtotal = items.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <>
      <PageHero title="Cart" showLogo/>
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
      </>
    );
  }

  return (
    <>
      <PageHero title="Cart" showLogo/>
      <section className="w-[90%] lg:w-[80%] mx-auto py-10">
        <h1 className="text-3xl font-bold text-[#3A3A3A] mb-8">Your Cart ({itemCount})</h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">

          {/* Line items */}
          <div className="flex flex-col divide-y divide-[#E4E4E4] border-t border-b border-[#E4E4E4]">
            {items.map((item) => (
              <div key={item.id} className="flex flex-wrap sm:flex-nowrap items-center gap-4 py-6">
                <Link to={`/shop/${item.slug}`} className="w-20 h-20 flex-shrink-0 bg-[#F4F5F7]">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </Link>

                <div className="flex-1 min-w-[140px]">
                  <Link
                    to={`/shop/${item.slug}`}
                    className="font-semibold text-[#3A3A3A] hover:text-[#B88E2F] transition-colors"
                  >
                    {item.name}
                  </Link>
                  <p className="text-sm text-[#898989]">{item.price}</p>
                </div>

                <div className="flex items-center border border-[#D9D9D9]">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-9 h-9 flex items-center justify-center hover:bg-[#F9F1E7] transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-9 h-9 flex items-center justify-center hover:bg-[#F9F1E7] transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <span className="w-28 text-right font-semibold text-[#3A3A3A]">
                  {formatPrice(parsePrice(item.price) * item.quantity)}
                </span>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-[#B0B0B0] hover:text-[#E97171] transition-colors cursor-pointer"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="bg-[#F9F1E7] p-6 sm:p-8 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-[#3A3A3A]">Order Summary</h2>

            <div className="flex items-center justify-between text-[#616161]">
              <span>Subtotal</span>
              <span className="font-semibold text-[#3A3A3A]">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between text-[#616161]">
              <span>Shipping</span>
              <span className="font-semibold text-[#3A3A3A]">Calculated at checkout</span>
            </div>

            <div className="border-t border-[#D9D9D9] pt-4 flex items-center justify-between">
              <span className="font-bold text-[#3A3A3A]">Total</span>
              <span className="font-bold text-lg text-[#3A3A3A]">{formatPrice(subtotal)}</span>
            </div>

            <button className="bg-[#B88E2F] text-white py-3.5 font-semibold hover:bg-[#a07b28] transition-colors cursor-pointer mt-2">
              Checkout
            </button>

            <Link
              to="/shop"
              className="text-center text-sm text-[#898989] hover:text-[#B88E2F] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
