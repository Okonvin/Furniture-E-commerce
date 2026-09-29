import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {ChevronRight,} from "lucide-react";
import ProductCard from "./ProductCard";
import { allProducts, categories, parsePrice } from "./products";

// ---------- Hero ----------
function ShopHero() {
  return (
    <section className="w-full h-[286px] flex flex-col items-center justify-center gap-4 bg-[url('/assets/hero-banner.png')] bg-cover bg-center bg-no-repeat">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A3A3A]">Shop</h1>
      <div className="flex items-center gap-2 text-sm sm:text-base text-[#3A3A3A] font-medium">
        <Link to="/" className="hover:text-[#B88E2F] transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-[#3A3A3A]/70">Shop</span>
      </div>
    </section>
  );
}

// ---------- Toolbar (filter toggle, grid/list, show, sort) ----------
function ShopToolbar({
  view, setView, filterOpen, setFilterOpen,
  sortBy, setSortBy, itemsPerPage, setItemsPerPage,
  startIndex, endIndex, totalResults,
}) {
  return (
    <div className="w-full bg-[#F9F1E7] py-6">
      <div className="w-[90%] lg:w-[73%] mx-auto flex flex-wrap items-center justify-between gap-4">

        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 text-sm sm:text-base font-medium cursor-pointer"
          >
            <img src="/icons/filter.svg" alt="" className="w-7 h-7" />
            Filter
          </button>

          <button
            onClick={() => setView("grid")}
            className={`p-1 cursor-pointer ${view === "grid" ? "text-[#B88E2F]" : "text-[#3A3A3A]"}`}
            aria-label="Grid view"
          >
            <img src="/icons/grid-big.svg" alt="" className="w-7 h-7" />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-1 cursor-pointer ${view === "list" ? "text-[#B88E2F]" : "text-[#3A3A3A]"}`}
            aria-label="List view"
          >
            <img src="/icons/view-list.svg" alt="" className="w-7 h-7" />
          </button>

          <span className="hidden sm:inline-block w-px h-6 bg-[#9F9F9F]"></span>

          <p className="text-sm sm:text-base">
            Showing {startIndex}&ndash;{endIndex} of {totalResults} results
          </p>
        </div>

        <div className="flex items-center gap-4 sm:gap-8 text-sm sm:text-base">
          <div className="flex items-center gap-3">
            <span>Show</span>
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="bg-white px-3 py-2 outline-none cursor-pointer"
            >
              <option value={8}>8</option>
              <option value={16}>16</option>
              <option value={32}>32</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <span>Short by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white px-3 py-2 outline-none cursor-pointer"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A-Z</option>
            </select>
          </div>
        </div>

      </div>
    </div>
  );
}

// ---------- Filter panel (category checkboxes) ----------
function FilterPanel({ selected, onToggle }) {
  return (
    <div className="w-[90%] lg:w-[73%] mx-auto mt-4 p-4 bg-[#F9F1E7] flex flex-wrap gap-4">
      {categories.map((cat) => (
        <label key={cat} className="flex items-center gap-2 text-sm font-medium capitalize cursor-pointer">
          <input
            type="checkbox"
            checked={selected.includes(cat)}
            onChange={() => onToggle(cat)}
            className="accent-[#B88E2F] w-4 h-4 cursor-pointer"
          />
          {cat}
        </label>
      ))}
    </div>
  );
}

// ---------- Pagination ----------
function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-3 my-10">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-12 h-12 flex items-center justify-center font-semibold transition-colors cursor-pointer ${
            page === currentPage
              ? "bg-[#B88E2F] text-white"
              : "bg-[#F9F1E7] text-[#3A3A3A] hover:bg-[#B88E2F] hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-6 h-12 flex items-center justify-center font-semibold bg-[#F9F1E7] text-[#3A3A3A] hover:bg-[#B88E2F] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}

// ---------- Feature strip ----------
const features = [
  { icon: "/icons/trophy.svg", title: "High Quality", desc: "crafted from top materials" },
  { icon: "/icons/guarantee.svg", title: "Warranty Protection", desc: "Over 2 years" },
  { icon: "/icons/shipping.svg", title: "Free Shipping", desc: "Order over 150 $" },
  { icon: "/icons/cs.svg", title: "24 / 7 Support", desc: "Dedicated support" },
];

export function FeatureStrip() {
  return (
    <section className="w-full bg-[#FAF3EA] py-12">
      <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map(({ icon, title, desc }) => (
          <div key={title} className="flex items-center justify-center lg:justify-start gap-4">
            <img src={icon} alt="" className="w-10 h-10 text-[#3A3A3A] flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg text-[#3A3A3A]">{title}</h3>
              <p className="text-[#3A3A3A]/70 text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- Main Shop page ----------
function Shop() {
  const [view, setView] = useState("grid");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
    setCurrentPage(1);
  };

  const filtered = useMemo(() => {
    let list = selectedCategories.length
      ? allProducts.filter((p) => selectedCategories.includes(p.category))
      : allProducts;

    if (sortBy === "price-asc") {
      list = [...list].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortBy === "price-desc") {
      list = [...list].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else if (sortBy === "name-asc") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [selectedCategories, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = filtered.length === 0 ? 0 : (safePage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(safePage * itemsPerPage, filtered.length);
  const pageItems = filtered.slice((safePage - 1) * itemsPerPage, safePage * itemsPerPage);

  return (
    <>
      <ShopHero />

      <ShopToolbar
        view={view}
        setView={setView}
        filterOpen={filterOpen}
        setFilterOpen={setFilterOpen}
        sortBy={sortBy}
        setSortBy={(value) => { setSortBy(value); setCurrentPage(1); }}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={(value) => { setItemsPerPage(value); setCurrentPage(1); }}
        startIndex={startIndex}
        endIndex={endIndex}
        totalResults={filtered.length}
      />

      {filterOpen && (
        <FilterPanel selected={selectedCategories} onToggle={toggleCategory} />
      )}

      <section className="w-[90%] lg:w-[73%] mx-auto my-12">
        <div
          className={
            view === "grid"
              ? "grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4"
              : "grid grid-cols-1 gap-6"
          }
        >
          {pageItems.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <Pagination
          currentPage={safePage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </section>

      <FeatureStrip />
    </>
  );
}

export default Shop;
