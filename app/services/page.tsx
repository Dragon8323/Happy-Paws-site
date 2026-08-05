import type { Metadata } from "next";
import Link from "next/link";
import PawIcon from "../components/PawIcon";
import Reveal from "../components/Reveal";
import { services, specialistServices, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services — Happy Paws Animal Clinic",
  description:
    "Veterinary services at Happy Paws Animal Clinic in Il-Marsa, Malta: consultations, vaccinations, surgery, diagnostics, homeopathy and more.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page intro */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-blue to-brand-teal">
        <PawIcon className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rotate-12 text-white/10" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center sm:py-24">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Our Services</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            From everyday wellness to surgery, here&apos;s how the Happy Paws team
            can help your pet.
          </p>
        </div>
      </section>

      {/* Discount note */}
      <div className="bg-brand-teal/10">
        <p className="mx-auto max-w-6xl px-6 py-3 text-center text-sm font-medium text-brand-dark">
          💙 We offer discounted prices for cat feeders and sanctuary animals.
        </p>
      </div>

      {/* Services grid */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="flex items-center gap-4 rounded-xl border border-black/5 bg-brand-light p-5 transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <PawIcon className="h-5 w-5" />
              </span>
              <span className="font-semibold text-brand-dark">{service.title}</span>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Specialist / by-appointment services */}
      <section className="bg-brand-light">
        <Reveal className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-brand-dark">
              Specialist Care, By Appointment
            </h2>
            <p className="mt-3 text-brand-dark/60">
              These services are offered by appointment with specific practitioners.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {specialistServices.map((s) => (
              <div key={s.title} className="rounded-2xl bg-white p-6 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
                <h3 className="font-bold text-brand-dark">{s.title}</h3>
                <p className="mt-2 text-sm text-brand-dark/60">{s.practitioner}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-brand-dark/60">
            Exotic animal visits are also available with Dr. Steve Mercieca, DVM
            — Monday &amp; Friday, 9:00–12:00. Please call ahead.
          </p>
        </Reveal>
      </section>

      {/* Emergency care */}
      <section className="bg-brand-light">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-7 w-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5c0-1.1.9-2 2-2h2.2c.5 0 1 .3 1.2.8l1.2 3a1.3 1.3 0 0 1-.4 1.5l-1.6 1.3a12.5 12.5 0 0 0 6 6l1.3-1.6c.4-.4 1-.5 1.5-.4l3 1.2c.5.2.8.7.8 1.2V19a2 2 0 0 1-2 2h-1C9.6 21 3 14.4 3 6V5z" />
            </svg>
          </span>
          <h2 className="text-3xl font-bold text-brand-dark">Emergency Care, Any Time</h2>
          <p className="max-w-xl text-brand-dark/60">
            Pet emergencies don&apos;t keep office hours — neither do we. Call us
            any time, day or night, and our team will help you.
          </p>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white transition duration-200 hover:scale-[1.03] hover:bg-brand-dark active:scale-[0.98]"
          >
            Call {siteConfig.phone}
          </a>
        </Reveal>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-dark">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Book a Visit?</h2>
          <p className="max-w-xl text-white/70">
            Reach out today and our team will find a time that works for you and
            your pet.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-brand-teal px-8 py-3.5 text-sm font-semibold text-brand-dark transition duration-200 hover:scale-[1.03] hover:bg-white active:scale-[0.98]"
          >
            Book an Appointment
          </Link>
        </Reveal>
      </section>
    </>
  );
}
