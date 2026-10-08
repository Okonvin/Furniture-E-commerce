import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, Calendar, Tag } from "lucide-react";
import { blogPosts, blogCategories } from "./blogPosts";
import PageHero from "./PageHero";
import Reveal from "./Reveal";
import Pagination from "./Pagination";
import { FeatureStrip } from "./Shop";

const POSTS_PER_PAGE = 3;
const RECENT_COUNT = 5;

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const filtered = search
    ? blogPosts.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    : blogPosts;

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const pagePosts = filtered.slice(
    (safePage - 1) * POSTS_PER_PAGE,
    safePage * POSTS_PER_PAGE
  );
  const recentPosts = blogPosts.slice(0, RECENT_COUNT);

  return (
    <>
      <PageHero title="Blog" showLogo />

      <section className="w-[90%] lg:w-[80%] mx-auto py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14 items-start">

          {/* ---------- Post list ---------- */}
          <div className="flex flex-col gap-14">
            {pagePosts.length === 0 ? (
              <p className="text-[#898989]">No posts match "{search}".</p>
            ) : (
              pagePosts.map((post, i) => (
                <Reveal key={post.id} delay={i * 100} className="flex flex-col gap-5">
                  <Link to={`/blog/${post.slug}`} className="w-full aspect-[16/9] bg-[#F9F1E7] block overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </Link>

                  <div className="flex flex-wrap items-center gap-6 text-sm text-[#898989]">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-2 capitalize">
                      <Tag className="w-4 h-4" />
                      {post.category}
                    </span>
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-2xl font-bold text-[#3A3A3A] hover:text-[#B88E2F] transition-colors"
                  >
                    {post.title}
                  </Link>

                  <p className="text-[#898989] leading-relaxed">{post.excerpt}</p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-[#3A3A3A] font-medium w-fit border-b border-[#3A3A3A] pb-0.5 hover:text-[#B88E2F] hover:border-[#B88E2F] transition-colors"
                  >
                    Read more
                  </Link>
                </Reveal>
              ))
            )}

            {filtered.length > POSTS_PER_PAGE && (
              <Pagination
                currentPage={safePage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </div>

          {/* ---------- Sidebar ---------- */}
          <div className="flex flex-col gap-12">

            <Reveal>
              <div className="relative">
                <input
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Search posts..."
                  className="w-full border border-[#D9D9D9] px-4 py-3 pr-12 outline-none focus:border-[#B88E2F] transition-colors"
                />
                <Search className="w-4 h-4 text-[#898989] absolute right-4 top-1/2 -translate-y-1/2" />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="text-xl font-bold text-[#3A3A3A] mb-5">Categories</h2>
              <div className="flex flex-col divide-y divide-[#E4E4E4]">
                {blogCategories.map(({ name, count }) => (
                  <div key={name} className="flex items-center justify-between py-3 text-[#898989] capitalize">
                    <span>{name}</span>
                    <span>{count}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="text-xl font-bold text-[#3A3A3A] mb-5">Recent Posts</h2>
              <div className="flex flex-col gap-5">
                {recentPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}`} className="flex items-center gap-4 group">
                    <div className="w-16 h-16 bg-[#F9F1E7] flex-shrink-0 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-medium text-[#3A3A3A] group-hover:text-[#B88E2F] transition-colors leading-snug">
                        {post.title}
                      </p>
                      <p className="text-sm text-[#B0B0B0] mt-1">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </section>
      <FeatureStrip/>
    </>
  );
}

export default Blog;
