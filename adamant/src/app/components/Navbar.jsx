"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Hem" },
    { href: "/tjanster", label: "Våra tjänster" },
  ];

  return (
    <nav className="bg-gray-800 text-white px-6 py-8">
      <div className="flex items-center justify-between">
        {/* Logo SVG placeholder */}
        <div className="h-8 w-8">
          {/* Replace with your own SVG */}
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-white">
            <circle cx="50" cy="50" r="40" />
          </svg>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:underline ${
                  pathname === link.href ? "underline font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {/* Phone number */}
          <li>
            <a href="tel:+46123456789" className="font-medium hover:underline">
              012-345 6789
            </a>
          </li>
        </ul>
      </div>


      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:underline ${
                pathname === link.href ? "underline font-semibold" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+46123456789"
            className="font-medium hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            012-345 6789
          </a>
        </div>
      )}
    </nav>
  );
}
