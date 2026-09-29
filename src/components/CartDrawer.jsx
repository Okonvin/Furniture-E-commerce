import { Link } from "react-router-dom";
import { X, ShoppingBag } from "lucide-react";
import { useCart } from "./CartContext";
import { parsePrice, formatPrice } from "./products";

function CartDrawer({ open, onClose }) {
  const { items, removeFromCart } = useCart();

  const subtotal = items.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-[700px] w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E4E4E4]">
          <h2 className="text-xl font-bold text-[#3A3A3A]">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-[#3A3A3A] hover:text-[#B88E2F] transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="text-[#898989] text-center mt-10">Your cart is empty.</p>
          ) : (
            <div className="flex flex-col divide-y divide-[#E4E4E4]">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-4">
                  <Link
                    to={`/shop/${item.slug}`}
                    onClick={onClose}
                    className="w-16 h-16 bg-[#F9F1E7] flex-shrink-0"
                  >
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/shop/${item.slug}`}
                      onClick={onClose}
                      className="font-medium text-[#3A3A3A] hover:text-[#B88E2F] transition-colors block truncate"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-[#898989]">
                      {item.quantity} x{" "}
                      <span className="text-[#B88E2F] font-medium">{item.price}</span>
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-6 h-6 rounded-full bg-[#F4F4F4] hover:bg-[#E4E4E4] flex items-center justify-center flex-shrink-0 cursor-pointer"
                    aria-label={`Remove ${item.name}`}
                  >
                    <X className="w-3.5 h-3.5 text-[#3A3A3A]" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-[#E4E4E4] flex flex-col gap-4">
            <div className="flex items-center justify-between font-semibold text-[#3A3A3A]">
              <span>Subtotal</span>
              <span className="text-[#B88E2F]">{formatPrice(subtotal)}</span>
            </div>

            <div className="flex items-center justify-center gap-2 flex-wrap">
              <Link
                to="/cart"
                onClick={onClose}
                className="px-4 py-2 rounded-full border border-[#3A3A3A] text-sm font-semibold text-[#3A3A3A] hover:bg-[#3A3A3A] hover:text-white transition-colors"
              >
                Cart
              </Link>
              <Link
                to="/checkout"
                onClick={onClose}
                className="px-4 py-2 rounded-full border border-[#3A3A3A] text-sm font-semibold text-[#3A3A3A] hover:bg-[#3A3A3A] hover:text-white transition-colors"
              >
                Checkout
              </Link>
              <Link
                to="/comparison"
                onClick={onClose}
                className="px-4 py-2 rounded-full border border-[#3A3A3A] text-sm font-semibold text-[#3A3A3A] hover:bg-[#3A3A3A] hover:text-white transition-colors"
              >
                Comparison
              </Link>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}

export default CartDrawer;
