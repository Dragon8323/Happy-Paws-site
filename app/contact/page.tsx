import type { Metadata } from "next";
import PawIcon from "../components/PawIcon";
import BookingForm from "../components/BookingForm";
import Reveal from "../components/Reveal";
import { faqs, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact & Book an Appointment — Happy Paws Animal Clinic",
  description:
    "Book an appointment or get in touch with Happy Paws Animal Clinic in Il-Marsa, Malta. Call, email, or send a booking request.",
};

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  siteConfig.mapsQuery
)}&output=embed`;

export default function ContactPage() {
  return (
    <>
      {/* Page intro */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-blue to-brand-teal">
        <PawIcon className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rotate-12 text-white/10" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center sm:py-24">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Book an Appointment
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            Tell us a bit about your pet and what they need — we&apos;ll get
            back to you to confirm a time.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="grid grid-cols-1 gap-14 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-2xl border border-black/5 bg-brand-light p-8">
            <BookingForm />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-bold text-brand-dark">Call or Email</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="font-medium text-brand-blue transition-colors hover:text-brand-dark"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-medium text-brand-blue transition-colors hover:text-brand-dark break-all"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li className="text-brand-dark/70">{siteConfig.address}</li>
                <li>
                  <a
                    href={siteConfig.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-brand-blue transition-colors hover:text-brand-dark"
                  >
                    Message us on Facebook
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-dark">Opening Hours</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {siteConfig.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-4">
                    <span className="text-brand-dark/70">{h.days}</span>
                    <span className="font-medium text-brand-dark">{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-brand-dark/50">
                Emergencies: call {siteConfig.phone} any time, day or night.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Map */}
      <section className="bg-brand-light">
        <Reveal className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Find Us</h2>
          <p className="mt-2 text-center text-brand-dark/60">{siteConfig.address}</p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-black/5">
            <iframe
              title="Happy Paws Animal Clinic location"
              src={mapSrc}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-10">
            {faqs.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
                  {group.category}
                </h3>
                <div className="mt-4 divide-y divide-black/10 rounded-2xl border border-black/10">
                  {group.items.map((item) => (
                    <details key={item.question} className="group p-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg font-medium text-brand-dark transition-colors hover:text-brand-blue">
                        {item.question}
                        <span className="flex-none text-brand-blue transition-transform group-open:rotate-45">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-brand-dark/70">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
