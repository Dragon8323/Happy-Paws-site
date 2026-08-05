import Image from "next/image";
import Link from "next/link";
import PawIcon from "./PawIcon";
import { navLinks, siteConfig } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/happy-paws-logo.png"
              alt="Happy Paws Animal Clinic"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full"
            />
            <span className="text-lg font-bold text-white">Happy Paws</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed">{siteConfig.tagline}.</p>
          <a
            href={siteConfig.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Happy Paws Animal Clinic on Facebook"
            className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-teal hover:text-brand-dark"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M13.5 22v-8.5H16l.5-3.5h-3V7.8c0-1 .3-1.8 1.8-1.8H16.6V3c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.6H7v3.5h2.6V22h3.9z" />
            </svg>
          </a>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-brand-teal">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-brand-teal">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-brand-teal break-all">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.address}</li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Opening Hours</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {siteConfig.hours.map((h) => (
              <li key={h.days} className="flex justify-center gap-4 sm:justify-between">
                <span>{h.days}</span>
                <span className="text-white/60">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-center text-center text-xs text-white/50">
          <span className="flex items-center gap-1.5">
            <PawIcon className="h-3.5 w-3.5" /> © {new Date().getFullYear()} Happy Paws Animal Clinic. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
