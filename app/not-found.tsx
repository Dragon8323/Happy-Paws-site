import Link from "next/link";
import PawIcon from "./components/PawIcon";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center sm:py-32">
      <PawIcon className="h-14 w-14 text-brand-blue/25" />
      <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-brand-blue">
        404
      </p>
      <h1 className="mt-2 text-3xl font-bold text-brand-dark sm:text-4xl">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-4 leading-relaxed text-brand-dark/60">
        The page you&apos;re looking for may have been moved or doesn&apos;t
        exist. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-brand-blue px-7 py-3.5 text-sm font-semibold text-white transition duration-200 hover:scale-[1.03] hover:bg-brand-dark active:scale-[0.98]"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-brand-blue px-7 py-3.5 text-sm font-semibold text-brand-blue transition duration-200 hover:scale-[1.03] hover:bg-brand-blue hover:text-white active:scale-[0.98]"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
