// src/pages/Blogs.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBlogs, Blog } from "../data/firebaseblogs";
import { motion } from "framer-motion";

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      setLoading(true);
      const data = await fetchBlogs();
      setBlogs(data);
      setTimeout(() => setLoading(false), 300); // small delay for smoothness
    };
    loadBlogs();
  }, []);

  // 💫 Shimmer effect styles
  const shimmerClass =
    "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

  // 🌀 Skeleton loader (with shimmer)
  if (loading) {
    return (
      <section className="py-32 bg-white text-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
              Enpure Insights & Education
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Learn about water purification, health, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`rounded-3xl bg-slate-100 shadow-md overflow-hidden ${shimmerClass}`}
              >
                <div className="w-full h-[500px] bg-slate-200"></div>
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-slate-300 rounded w-1/3"></div>
                  <div className="h-6 bg-slate-300 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-300 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ❌ No blogs found
  if (blogs.length === 0) {
    return (
      <section className="py-32 text-center text-slate-700">
        <h2 className="text-3xl font-light mb-4">No Blogs Found</h2>
        <p className="text-slate-500">Please check back later.</p>
      </section>
    );
  }

  // ✅ Blogs loaded — smooth fade-in
  return (
    <motion.section
      className="py-32 bg-white text-slate-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            Enpure Insights & Education
          </h2>
          <p className="text-xl text-slate-600 font-light">
            Learn about water purification, health, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="no-box-styling overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden group rounded-3xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110 rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="text-blue-400 text-sm mb-2">{blog.readTime}</div>
                <h3 className="text-2xl font-semibold mb-3">{blog.title}</h3>
                <p className="text-slate-600 mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>

                <Link
                  to={`/blogs/${blog.slug}`}
                  className="text-blue-600 hover:text-blue-900 font-medium transition-colors duration-200"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Blogs;
