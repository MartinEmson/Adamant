"use client";
import Link from "next/link";
import Image from "next/image";
import AdamantText from "../assets/adamant-text.svg";
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
    <nav className=" text-black px-6 py-8">
      <div className="flex items-center justify-between">
        {/* Logo SVG placeholder */}
        <div className="h-auto w-64">
          <Image src={AdamantText} alt="Adamant Logo" className="w-48 h-auto" />
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 items-center text-lg">
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
            <a href="tel:+46123456789" className="hover:underline text-lg">
              070-713 60 87
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
            070-713 60 87
          </a>
        </div>
      )}
    </nav>
  );
}
