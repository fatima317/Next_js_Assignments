"use client";

import { useRouter } from "next/navigation";
import './/style.css';

export default function Home() {
  const router = useRouter();

  const navItems = [
    { label: "Go to About Page", path: "/About" },
    { label: "Go to Contact Page", path: "/Contact" },
    { label: "Go to Footer Page", path: "/Footer" },
  ];

  return (
    <div className="home-container">
      <h1 className="home-heading">
        Welcome to the HomePage
      </h1>
      <p className="home-paragraph">
        This is the default home page.
      </p>
      <nav className="home-nav">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => router.push(item.path)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
