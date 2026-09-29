import { useNavigate, Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { parsePrice, formatPrice } from "./products";
import PageHero from "./PageHero";
import { FeatureStrip } from "./Shop";

function Checkout() {
  const { items, clearCart } = useCart();
  const navigate = useNavigate();

  const subtotal = items.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (items.length === 0) return;
    clearCart();
    alert("Order placed! Thank you for shopping with Furniro.");
    navigate("/");
  };

  if (items.length === 0) {
    return (
      <>
        <PageHero title="Checkout" />
        <section className="w-[80%] mx-auto py-24 text-center">
          <h1 className="text-2xl font-bold text-[#3A3A3A] mb-4">Your cart is empty</h1>
          <p className="text-[#898989] mb-6">Add something to your cart before checking out.</p>
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
      <PageHero title="Checkout" />

      <section className="w-[90%] lg:w-[80%] mx-auto py-14">
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">

          {/* Billing details */}
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold text-[#3A3A3A] mb-2">Billing Details</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input required placeholder="First Name" className="border border-[#D9D9D9] px-4 py-3 outline-none focus:border-[#B88E2F]" />
              <input required placeholder="Last Name" className="border border-[#D9D9D9] px-4 py-3 outline-none focus:border-[#B88E2F]" />
            </div>

            <input required placeholder="Street Address" className="border border-[#D9D9D9] px-4 py-3 outline-none focus:border-[#B88E2F]" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input required placeholder="Town / City" className="border border-[#D9D9D9] px-4 py-3 outline-none focus:border-[#B88E2F]" />
              <input required placeholder="ZIP Code" className="border border-[#D9D9D9] px-4 py-3 outline-none focus:border-[#B88E2F]" />
            </div>

            <input required type="tel" placeholder="Phone" className="border border-[#D9D9D9] px-4 py-3 outline-none focus:border-[#B88E2F]" />
            <input required type="email" placeholder="Email Address" className="border border-[#D9D9D9] px-4 py-3 outline-none focus:border-[#B88E2F]" />
          </div>

          {/* Order summary */}
          <div className="bg-[#F9F1E7] p-8 flex flex-col gap-4 mt-14">
            <h2 className="text-xl font-bold text-[#3A3A3A] mb-2">Your Order</h2>

            <div className="flex flex-col divide-y divide-[#D9D9D9]">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-3 text-sm">
                  <span className="text-[#3A3A3A]">{item.name} x {item.quantity}</span>
                  <span className="text-[#898989]">
                    {formatPrice(parsePrice(item.price) * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-[#D9D9D9] pt-4 font-bold">
              <span className="text-[#3A3A3A]">Total</span>
              <span className="text-[#B88E2F] text-lg">{formatPrice(subtotal)}</span>
            </div>

            <button
              type="submit"
              className="mt-2 py-3.5 rounded-full border border-[#3A3A3A] font-semibold text-[#3A3A3A] hover:bg-[#3A3A3A] hover:text-white transition-colors cursor-pointer"
            >
              Place Order
            </button>
          </div>
        </form>
      </section>
      <FeatureStrip/>
    </>
  );
}

export default Checkout;
