"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navItems = [
    { label: "Go to About Page", path: "/About" },
    { label: "Go to Contact Page", path: "/Contact" },
    { label: "Go to Footer Page", path: "/Footer" },
  ];

  return (
    <div className="flex flex-col justify-between h-screen">
      <h1 className="text-4xl font-bold text-blue-950 text-center">
        Welcome to the HomePage
      </h1>
      <p className="text-xl text-gray-500 text-center">
        This is the default home page.
      </p>
      <nav className="flex flex-col bg-blue-900 text-white font-bold text-center">
        {navItems.map((item, index) => (
          <button
            key={index}
            className="py-2 px-4 rounded hover:bg-blue-800 transition-colors"
            onClick={() => router.push(item.path)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
