"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4  text-white shadow-md">
      {/* Logo */}
      <div className="text-2xl ">Games</div>

      {/* Hamburger Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md  transition"
      >
        <Menu size={28} />
      </button>
    </nav>
  );
}
