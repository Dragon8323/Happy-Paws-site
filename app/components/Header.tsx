"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/site-data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-2">
        <Link href="/" className="flex items-center gap-2 sm:gap-3" onClick={() => setMenuOpen(false)}>
          <Image
            src="/happy-paws-logo.png"
            alt="Happy Paws Animal Clinic"
            width={96}
            height={96}
            className="h-14 w-14 flex-none rounded-full sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
            priority
          />
          <span className="hidden whitespace-nowrap text-lg font-bold text-brand-dark sm:block">
            Happy Paws
          </span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex lg:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative whitespace-nowrap text-base font-medium transition-colors hover:text-brand-blue ${
                  isActive ? "text-brand-blue" : "text-brand-dark"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 origin-center bg-brand-blue transition-transform duration-300 ease-out ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden whitespace-nowrap rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:scale-[1.03] hover:bg-brand-dark active:scale-[0.98] sm:inline-block"
          >
            Book an Appointment
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-dark md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-black/5 bg-white px-6 py-4 md:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-lg px-2 py-2.5 text-base font-medium hover:bg-brand-light ${
                  isActive ? "bg-brand-light text-brand-blue" : "text-brand-dark"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full bg-brand-blue px-5 py-2.5 text-center text-sm font-semibold text-white transition duration-200 active:scale-[0.98]"
          >
            Book an Appointment
          </Link>
        </nav>
      )}
    </header>
  );
}
