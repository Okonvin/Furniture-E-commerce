import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { useCompare } from "./CompareContext";
import PageHero from "./PageHero";
import { FeatureStrip } from "./Shop";

function Comparison() {
  const { items, removeFromCompare } = useCompare();

  return (
    <>
        <PageHero title="Comparison" />

        <section className="w-[90%] lg:w-[80%] mx-auto py-14">
            {items.length === 0 ? (
            <div className="text-center py-10">
                <h1 className="text-2xl font-bold text-[#3A3A3A] mb-4">Nothing to compare yet</h1>
                <p className="text-[#898989] mb-6">
                Hover a product and click "Compare" to add it here - you can compare several
                products side by side.
                </p>
                <Link
                to="/shop"
                className="inline-block bg-[#B88E2F] text-white px-8 py-3 font-semibold hover:bg-[#a07b28] transition-colors"
                >
                Browse Shop
                </Link>
            </div>
            ) : (
            <div className="overflow-x-auto">
                <div
                className="grid gap-6 min-w-[600px]"
                style={{ gridTemplateColumns: `repeat(${items.length}, minmax(200px, 1fr))` }}
                >
                {items.map((item) => (
                    <div key={item.id} className="flex flex-col gap-3 border border-[#E4E4E4] p-4">
                    <button
                        onClick={() => removeFromCompare(item.id)}
                        className="self-end w-6 h-6 rounded-full bg-[#F4F4F4] hover:bg-[#E4E4E4] flex items-center justify-center cursor-pointer"
                        aria-label={`Remove ${item.name} from comparison`}
                    >
                        <X className="w-3.5 h-3.5 text-[#3A3A3A]" />
                    </button>

                    <Link to={`/shop/${item.slug}`} className="w-full aspect-square bg-[#F9F1E7]">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </Link>

                    <Link
                        to={`/shop/${item.slug}`}
                        className="font-semibold text-[#3A3A3A] hover:text-[#B88E2F] transition-colors"
                    >
                        {item.name}
                    </Link>

                    <span className="text-[#898989]">{item.price}</span>
                    <span className="text-sm text-[#898989] capitalize">Category: {item.category}</span>
                    </div>
                ))}
                </div>
            </div>
            )}
        </section>
        <FeatureStrip/>
    </>
  );
}

export default Comparison;
