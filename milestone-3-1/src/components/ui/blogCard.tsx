import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface BlogCardProps {
  blog: {
    image: string;
    date: string;
    path: string;
    title: string;
    description: string;
  };
}

export default function BlogCard({blog}: BlogCardProps) {
  return (
    <div className="w-full">
      <Card
      className={"flex flex-col hover:bg-gray-700 shadow-lg hover:text-white transition-shadow-xl duration-300"} style={{width:"380px", height:"520px"}}>
      <Image
        src={blog.image}
        alt={blog.title}
        width={820}
        height={440}
        className="rounded-t-lg object-cover"
      />
      <CardTitle className="text-xl font-bold mt-4 p-6">{blog.title}</CardTitle>
      <CardContent>
        <p className="text-lg font-medium">{blog.description}</p>
        <p className="text-sm mt-4 text-gray-500">
          Published on: {new Date(blog.date).toLocaleDateString()}
        </p>
      </CardContent>
    </Card>
    </div>
  );
}
