import React from 'react';
import BlogCard from "@/components/ui/blogCard";

export default function Hero() {
  const blogs = [
    {image: "/main_Chatgpt_plugin_cover.png",
      date: "16 January 2024",
      title: "ChatGPT Plugin Development: Features and Benefits for Business",
      description: "Explore the process of crafting a ChatGPT plugin tailored precisely to meet your unique business...",
      path: "ChatGPT Plugin Development: Features and Benefits for Business",
    },
    {image: "/thumb_LLMs_0.png",
      date: "07 May 2024",
      title: "What are large language models: a complete guide",
      description: "Get your large language model definition straight: in this article, we cover the concept of LLMs, their...",
      path: "What are large language models: a complete guide",
    },
    {image: "/thumb_LLMs__Open_Sources.png",
      date: "09 May 2024",
      title: "Top 7 Open-Source LLMs for 2024",
      description: "Here, we break down everything you need to know about open-source LLM models",
      path: "Top 7 Open-Source LLMs for 2024",
    },
  ];

  return (
    <section>
      {/* Hero Section */}
      <div className='bg-gradient-to-b from-black to-purple-950 py-20'>
        <h1 className='text-5xl text-white font-extrabold text-center mb-6'>Welcome to Our Blog</h1>
        <p className='text-3xl text-white font-semibold text-center mb-6'>
          Your go-to resource for insightful articles on technology, software development, and more.
        </p>
      </div>

      {/* Blog Section */}
      <div className='py-20'>
        <h2 className='text-3xl text-black font-bold mb-4 px-28'>Featured Articles</h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 px-28 py-8 gap-12 mb-4">
          {blogs.map((blog) => (
            <a key={blog.path} href={`/blog/${blog.path}`} className="group block bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <BlogCard blog={blog} />
            </a>
          ))}
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="text-center mt-8">
        <a
          href="/blog"
          className="bg-purple-950 text-white py-3 px-6 rounded-full font-semibold text-lg hover:bg-purple-800 transition-colors duration-200"
        >
          Explore More Articles
        </a>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-100 p-8 text-center mt-16">
        <h3 className="text-2xl text-black font-semibold mb-4">Stay Updated with Our Latest Articles</h3>
        <form className="flex justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 w-64 border border-gray-300 rounded-full"
          />
          <button type="submit" className="bg-purple-950 text-white py-3 px-6 rounded-full font-semibold hover:bg-purple-800 transition-colors duration-200">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
