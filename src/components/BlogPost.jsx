import { useParams, Link } from "react-router-dom";
import { User, Calendar, Tag, ChevronRight } from "lucide-react";
import { getPostBySlug } from "./blogPosts";
import PageHero from "./PageHero";
import Reveal from "./Reveal";
import { FeatureStrip } from "./Shop"

function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <>
        <section className="w-[80%] mx-auto py-24 text-center">
          <Reveal>
            <h1 className="text-3xl font-bold text-[#3A3A3A] mb-4">Post not found</h1>
            <p className="text-[#898989] mb-6">This post doesn't exist or may have been removed.</p>
            <Link
              to="/blog"
              className="inline-block bg-[#B88E2F] text-white px-8 py-3 font-semibold hover:bg-[#a07b28] transition-colors"
            >
              Back to Blog
            </Link>
          </Reveal>
        </section>
        <FeatureStrip/>
      </>
    );
  }

  return (
    <>
      <PageHero title={post.title} showLogo />

      <section className="w-[90%] lg:w-[70%] mx-auto py-14">
        <div className="flex items-center gap-2 text-sm text-[#898989] mb-6">
          <Link to="/blog" className="hover:text-[#B88E2F] transition-colors">Blog</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="truncate">{post.title}</span>
        </div>

        <Reveal className="w-full aspect-[16/9] bg-[#F9F1E7] overflow-hidden mb-8">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </Reveal>

        <Reveal delay={100} className="flex flex-wrap items-center gap-6 text-sm text-[#898989] mb-6">
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
        </Reveal>

        <Reveal delay={150} className="flex flex-col gap-5 text-[#616161] leading-relaxed">
          <p>{post.excerpt}</p>
          <p>{post.excerpt}</p>
          <p>{post.excerpt}</p>
        </Reveal>

        <Reveal delay={250} className="mt-10 pt-6 border-t border-[#E4E4E4]">
          <Link
            to="/blog"
            className="inline-block border border-[#3A3A3A] text-[#3A3A3A] px-8 py-3 font-semibold hover:bg-[#3A3A3A] hover:text-white transition-colors"
          >
            Back to Blog
          </Link>
        </Reveal>
      </section>
      <FeatureStrip/>
    </>
  );
}

export default BlogPost;
