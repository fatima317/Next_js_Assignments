import React from "react";
import BlogCard from "@/components/ui/blogCard";

const posts = [
  {
    id: "1",
    title: "HealthTech Insights",
    description:
      "Exploring the intersection of technology and healthcare, from groundbreaking innovations to practical solutions improving patient care.",
    date: "2025-01-01",
    imageUrl: "/HealthTech_Insights_Logo.jpg",
  },
  {
    id: "2",
    title: "Modern Medicine Blog",
    description:
      "Delve into the latest advancements in medical science, healthcare policies, and wellness practices for a healthier tomorrow.",
    date: "2025-01-01",
    imageUrl: "/HealthTech_Insights_Logo.jpg",
  },
  // Additional posts...
];

export default function Mega() {
  return (
    <section className="my-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        The Digital Health Revolution: A New Era in Medicine
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <BlogCard key={post.id} post={post} isDarkBackground={index % 2 === 0} />
        ))}
      </div>
    </section>
  );
}
