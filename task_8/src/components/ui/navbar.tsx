"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const currentDate = new Date();
      setCurrentDateTime(
        currentDate.toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };

    updateDateTime();
    const timerID = setInterval(updateDateTime, 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <header className="text-gray-700 bg-gray-100 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <span className="font-semibold">{currentDateTime}</span>
        <nav className="flex space-x-4">
          {["Home", "About", "Blog", "Contact"].map((page) => (
            <Link
              key={page}
              href={`/${page.toLowerCase()}`}
              className="hover:text-purple-700 transition duration-200"
            >
              {page}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
