'use client';

import React from 'react';
import CommentSection from '@/components/ui/commentsection';
import { useRouter } from 'next/router';

const posts = [
  {
    id: "1",
    title: 'HealthTech Insights',
    description:
      'Exploring the intersection of technology and healthcare, from groundbreaking innovations to practical solutions improving patient care.',
    image: "/HealthTech_Insights_Logo.jpg",
  },
  // Add other posts...
];

export default function Post({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { id } = params;
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-gray-600">Oops! Post not found.</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.image && (
        <img src={post.image} alt={post.title} className="rounded-lg mb-6" />
      )}
      <p className="text-lg leading-relaxed mb-6">{post.description}</p>
      <CommentSection postId={post.id} />
    </div>
  );
}
