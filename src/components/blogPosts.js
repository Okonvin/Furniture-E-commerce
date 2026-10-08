function slugify(title) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.";

const rawPosts = [
  { title: "Going all-in with millennial design", image: "/assets/Blog-img_1.png", category: "wood", date: "14 Oct 2022" },
  { title: "Exploring new ways of decorating", image: "/assets/Blog-img_2.png", category: "handmade", date: "14 Oct 2022" },
  { title: "Handmade pieces that took time to make", image: "/assets/Blog-img_3.png", category: "wood", date: "14 Oct 2022" },
  { title: "Modern home in Milan", image: "/assets/Blog-img_4.png", category: "design", date: "10 Oct 2022" },
  { title: "Colorful office redesign", image: "/assets/Blog-img_5.png", category: "interior", date: "08 Oct 2022" },
  { title: "Crafting with reclaimed wood", image: "/assets/Blog-img_6.png", category: "crafts", date: "05 Oct 2022" },
  { title: "Minimalist furniture trends for 2024", image: "/assets/Blog-img_7.png", category: "design", date: "02 Oct 2022" },
  { title: "Small space, big style", image: "/assets/Blog-img_8.png", category: "design", date: "28 Sep 2022" },
  { title: "The art of handmade pottery", image: "/assets/Blog-img_1.png", category: "handmade", date: "24 Sep 2022" },
];

export const blogPosts = rawPosts.map((post, i) => ({
  ...post,
  id: i + 1,
  slug: `${slugify(post.title)}-${i + 1}`,
  author: "Admin",
  excerpt: LOREM,
}));

export const blogCategories = Object.entries(
  blogPosts.reduce((counts, post) => {
    counts[post.category] = (counts[post.category] || 0) + 1;
    return counts;
  }, {})
).map(([name, count]) => ({ name, count }));

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug);
}
