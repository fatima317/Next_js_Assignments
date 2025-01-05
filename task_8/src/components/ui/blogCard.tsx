import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
  };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
        isDarkBackground ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={300}
        height={200}
        className="rounded-t-lg object-cover w-full"
      />
      <CardTitle className="text-lg font-bold mt-4">{post.title}</CardTitle>
      <CardContent className="mt-2">
        <p className="line-clamp-3">{post.description}</p>
        <p className="text-sm mt-2 text-gray-500">
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
      </CardContent>
      <div className="mt-4">
        <Link href={`/posts/${post.id}`} className="btn-primary w-full text-center">
          Read More
        </Link>
      </div>
    </Card>
  );
}
