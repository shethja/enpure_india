import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import parse, { domToReact } from "html-react-parser";
import { fetchBlogs, Blog } from "../data/firebaseblogs";
import { motion } from "framer-motion";

// Import blog assets
import microClustering from "../assets/microClustering.png";
import whyAlkalineWater from "../assets/whyAlkalineWater.png";
import iodizedAlkalineMinerals from "../assets/iodizedAlkalineMinerals.png";
import howBodyNeutralize from "../assets/howBodyBalance.png";
import whyEnpureWater from "../assets/whyEnpureWater.png";

// Map images
const imageMap: Record<string, string> = {
  microClustering,
  whyAlkalineWater,
  iodizedAlkalineMinerals,
  howBodyNeutralize,
  whyEnpureWater,
};

const BlogPosts = () => {
  const { slug } = useParams();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const loadBlogs = async () => {
      setLoading(true);
      const data = await fetchBlogs();
      setBlogs(data);
      const foundBlog = data.find((b) => b.slug === slug) || null;
      setBlog(foundBlog);
      setTimeout(() => setLoading(false), 200); // small delay for smoothness
    };
    loadBlogs();
  }, [slug]);

  const allowedTags = ["strong", "em", "b", "i", "u", "h2", "h3", "p", "ol", "li", "img"];

  // ✅ Safe HTML rendering
  function SafeContent({ html }: { html: string }) {
    const replacedHtml = html.replace(/\{(.*?)\}/g, (_, key) => imageMap[key] || "");
    return (
      <div className="text-lg text-slate-700 leading-relaxed space-y-6">
        {parse(replacedHtml, {
          replace: (domNode: any) => {
            if (domNode.name && !allowedTags.includes(domNode.name)) {
              return <>{domToReact(domNode.children)}</>;
            }
            if (domNode.name === "img" && domNode.attribs?.src) {
              const { src, alt } = domNode.attribs;
              return (
                <img
                  src={src}
                  alt={alt || ""}
                  className="w-auto h-[500px] max-w-3xl mx-auto my-8 rounded-2xl shadow-md object-contain"
                  loading="lazy"
                />
              );
            }
          },
        })}
      </div>
    );
  }

  // 🌀 Loading state (smooth UX)
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse text-slate-500 text-lg">Loading blog...</div>
      </div>
    );
  }

  // ❌ Blog not found (after loading)
  if (!blog) {
    return (
      <div className="py-32 text-center text-slate-700">
        <h2 className="text-3xl font-light mb-4">Blog Not Found</h2>
        <Link to="/blogs" className="text-blue-600 font-medium hover:text-blue-900">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  // ✅ Blog found — smooth fade-in
  return (
    <>
      <Helmet>
        <title>{blog.metaTitle}</title>
        <meta name="description" content={blog.metaDescription} />
        <meta name="keywords" content={blog.keywords?.join(", ")} />

        {/* Open Graph */}
        <meta property="og:title" content={blog.metaTitle} />
        <meta property="og:description" content={blog.metaDescription} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:title" content={blog.metaTitle} />
        <meta name="twitter:description" content={blog.metaDescription} />
        <meta name="twitter:image" content={blog.image} />
      </Helmet>

      <motion.article
        className="py-32 bg-white text-slate-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto rounded-3xl object-cover mb-10"
          />
          <div className="text-blue-500 text-md mb-3">
            {blog.date} • {blog.readTime}
          </div>
          <h1 className="text-5xl font-light mb-3">{blog.title}</h1>

          <p className="text-slate-800 italic text-base mb-6">
            {blog.metaDescription}
          </p>

          <SafeContent html={blog.content} />

          <div className="mt-10">
            <Link to="/blogs" className="text-blue-600 font-medium hover:text-blue-900">
              ← Back to All Blogs
            </Link>
          </div>
        </div>
      </motion.article>
    </>
  );
};

export default BlogPosts;
