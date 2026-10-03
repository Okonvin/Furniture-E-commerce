import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { parsePrice, formatPrice } from "./products";
import PageHero from "./PageHero";
import Reveal from "./Reveal";
import { FeatureStrip } from "./shop";

const COUNTRIES = ["Sri Lanka", "India", "Indonesia", "Malaysia", "Singapore"];
const PROVINCES = [
  "Western Province",
  "Central Province",
  "Southern Province",
  "Northern Province",
  "Eastern Province",
];

function Checkout() {
  const { items, clearCart } = useCart();
  const navigate = useNavigate();
  const [payment, setPayment] = useState("bank");

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
        <PageHero title="Checkout" showLogo />
        <section className="w-[80%] mx-auto py-24 text-center">
          <Reveal>
            <h1 className="text-2xl font-bold text-[#3A3A3A] mb-4">Your cart is empty</h1>
            <p className="text-[#898989] mb-6">Add something to your cart before checking out.</p>
            <Link
              to="/shop"
              className="inline-block bg-[#B88E2F] text-white px-8 py-3 font-semibold hover:bg-[#a07b28] transition-colors"
            >
              Browse Shop
            </Link>
          </Reveal>
        </section>
        <FeatureStrip/>
      </>
    );
  }

  const inputClass =
    "border border-[#D9D9D9] rounded-2xl px-5 py-4 outline-none focus:border-[#B88E2F] transition-colors w-full";

  return (
    <>
      <PageHero title="Checkout" showLogo />

      <section className="w-[90%] lg:w-[80%] mx-auto py-14">
        <form
          onSubmit={handlePlaceOrder}
          className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-14 items-start"
        >

          {/* ---------- Billing details ---------- */}
          <Reveal className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-[#3A3A3A] mb-2">Billing details</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-medium text-[#3A3A3A]">First Name</label>
                <input required className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-[#3A3A3A]">Last Name</label>
                <input required className={inputClass} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-[#3A3A3A]">Company Name (Optional)</label>
              <input className={inputClass} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-[#3A3A3A]">Country / Region</label>
              <select defaultValue={COUNTRIES[0]} className={`${inputClass} cursor-pointer`}>
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-[#3A3A3A]">Street address</label>
              <input required className={inputClass} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-[#3A3A3A]">Town / City</label>
              <input required className={inputClass} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-[#3A3A3A]">Province</label>
              <select defaultValue={PROVINCES[0]} className={`${inputClass} cursor-pointer`}>
                {PROVINCES.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-[#3A3A3A]">ZIP code</label>
              <input required className={inputClass} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-[#3A3A3A]">Phone</label>
              <input required type="tel" className={inputClass} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-[#3A3A3A]">Email address</label>
              <input required type="email" className={inputClass} />
            </div>

            <textarea
              placeholder="Additional information"
              rows={3}
              className={`${inputClass} resize-none`}
            />
          </Reveal>

          {/* ---------- Order summary + payment ---------- */}
          <Reveal delay={150} className="flex flex-col gap-6">

            <div className="flex items-center justify-between font-bold text-[#3A3A3A] text-lg">
              <span>Product</span>
              <span>Subtotal</span>
            </div>

            <div className="flex flex-col divide-y divide-[#E4E4E4] border-t border-[#E4E4E4]">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-4">
                  <span className="text-[#898989]">
                    {item.name} <span className="text-[#B0B0B0]">x {item.quantity}</span>
                  </span>
                  <span className="text-[#3A3A3A]">
                    {formatPrice(parsePrice(item.price) * item.quantity)}
                  </span>
                </div>
              ))}

              <div className="flex items-center justify-between py-4">
                <span className="text-[#3A3A3A]">Subtotal</span>
                <span className="text-[#3A3A3A]">{formatPrice(subtotal)}</span>
              </div>

              <div className="flex items-center justify-between py-4">
                <span className="font-bold text-[#3A3A3A]">Total</span>
                <span className="font-bold text-[#B88E2F] text-lg">{formatPrice(subtotal)}</span>
              </div>
            </div>

            {/* Payment methods */}
            <div className="flex flex-col gap-4 pt-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  checked={payment === "bank"}
                  onChange={() => setPayment("bank")}
                  className="w-4 h-4 accent-[#3A3A3A] cursor-pointer"
                />
                <span className={`font-semibold ${payment === "bank" ? "text-[#3A3A3A]" : "text-[#898989]"}`}>
                  Direct Bank Transfer
                </span>
              </label>
              {payment === "bank" && (
                <p className="text-sm text-[#898989] leading-relaxed pl-7 -mt-2">
                  Make your payment directly into our bank account. Please use your Order ID
                  as the payment reference. Your order will not be shipped until the funds
                  have cleared in our account.
                </p>
              )}

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  checked={payment === "cod"}
                  onChange={() => setPayment("cod")}
                  className="w-4 h-4 accent-[#3A3A3A] cursor-pointer"
                />
                <span className={`font-semibold ${payment === "cod" ? "text-[#3A3A3A]" : "text-[#898989]"}`}>
                  Cash On Delivery
                </span>
              </label>
              {payment === "cod" && (
                <p className="text-sm text-[#898989] leading-relaxed pl-7 -mt-2">
                  Pay with cash when your order is delivered to your address.
                </p>
              )}
            </div>

            <p className="text-sm text-[#3A3A3A] leading-relaxed pt-2">
              Your personal data will be used to support your experience throughout this
              website, to manage access to your account, and for other purposes described in
              our <span className="font-bold">privacy policy.</span>
            </p>

            <button
              type="submit"
              className="w-fit mx-auto mt-2 px-14 py-4 rounded-full border border-[#3A3A3A] font-semibold text-[#3A3A3A] hover:bg-[#3A3A3A] hover:text-white transition-colors cursor-pointer"
            >
              Place order
            </button>
          </Reveal>
        </form>
      </section>
      <FeatureStrip/>
    </>
  );
}

export default Checkout;
