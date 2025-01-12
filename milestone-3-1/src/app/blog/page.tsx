import React from "react";
import BlogCard from "@/components/ui/blogCard";

const blogs = [
  {image:"/main_Chatgpt_plugin_cover.png",
    date: "16 January 2024",
    title: "ChatGPT Plugin Development: Features and Benefits for Business",
    description: "Explore the process of crafting a ChatGPT plugin tailored precisely to meet your unique business...",
    path:"/blog/ChatGPT Plugin Development: Features and Benefits for Business",
   },
   {image:"/thumb_LLMs_0.png",
    date: "07 May 2024",
    title: "What are large language models: a complete guide",
    description: "Get your large language model definition straight: in this article, we cover the concept of LLMs, their...",
    path:"/blog/What are large language models: a complete guide",
   },
   {image:"/thumb_LLMs__Open_Sources.png",
    date: "09 May 2024",
    title: "Top 7 Open-Source LLMs for 2024",
    description: "Here, we break down everything you need to know about open-source LLM models",
    path:"/blog/Top 7 Open-Source LLMs for 2024",
   },
];

const posts = [
  {image:"/thumb_Patient_portal_app.png",
    date: "14 May 2020",
    title: "What is an Online Patient Portal and Why Your Clinic Needs One?",
    description: "Find out how an online patient portal app can streamline the work and engage patients in health...",
    path:"/blog/what-is-online-patient-portal",
   },
   {image:"/main_Telehealth_Illustration.png",
    date: "09 January 2024",
    title: "Telehealth App Development in 2024: Benefits, Tech Stack & Cost",
    description: "Learn about Telehealth App Development in 2023, discover its advantages, explore the tech stack,...",
    path:"/blog/Telehealth App Development in 2024: Benefits, Tech Stack & Cost",
   },
   {image:"/thumb_Educational_Website.png",
    date: "10 August 2023",
    title: "How to Create Best Education Website Design: Features and Tips",
    description: "Education website design essentials: Uncover top tips and strategies to create the best user-...",
    path:"/blog/How to Create Best Education Website Design: Features and Tips",
   },
]

export default function Blog() {
  return (
    <section className="py-20">
      <h1 className="text-5xl font-bold text-left px-28 mb-12 py-6">
      Blog
      </h1>
      <h2 className="text-3xl font-bold text-left px-28 py-4">
      Featured Posts
      </h2>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 px-28 py-8 gap-12 mb-4">
        {blogs.map((blog) => (
          <a key={blog.path} href={`/blog/${blog.path}`} className="group block bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
             <BlogCard blog={blog} />
          </a>
        ))}
      </div>
      <h2 className="text-3xl font-bold text-left px-28 py-4">
      Latest Posts
      </h2>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 px-28 py-8 gap-12 mb-4">
        {posts.map((post) => (
          <a key={post.path} href={`/blog/${post.path}`} className="group block bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <BlogCard blog={post} />
       </a>
        ))}
      </div>
    </section>
  );
}
