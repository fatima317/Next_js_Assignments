'use client';

import Link from 'next/link';

const posts = [
  {
    id: "1",
    title: 'HealthTech Insights',
    description:
      'Exploring the intersection of technology and healthcare, from groundbreaking innovations to practical solutions improving patient care.',
  },
  // Add other posts...
];

export default function Posts() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="mb-6">
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p className="text-gray-700">{post.description}</p>
          <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}
