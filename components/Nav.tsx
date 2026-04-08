"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "The Reason", href: "/the-reason" },
  { label: "Travel", href: "/travel" },
  { label: "Payments", href: "/payments" },
  {
    label: "Family Tree",
    href: "https://docs.google.com/spreadsheets/d/1zjpaDJG4jJCBjAl3XtU9I1laCvMeyaVszIFRaqJeof0/edit?usp=sharing",
  },
  { label: "Itinerary", href: "/itinerary" },
  { label: "Connect", href: "/connect" },
];

export default function Nav() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gold-300/20 bg-charcoal/60 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16">
            <Image
              src={`${basePath}/images/sunny-side-logo.png`}
              alt="The Sunny-Side Hoskins Family Reunion Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <p className="font-serif text-gold-200 leading-tight">The Sunny-Side</p>
            <p className="text-xs text-white/80 tracking-[0.2em] uppercase">Hoskins Family Reunion</p>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-6 text-sm text-white/90">
          {navLinks.map((link) =>
            link.href.startsWith("http") ? (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold-300 transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-gold-300 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
