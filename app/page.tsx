import Image from "next/image";
import Link from "next/link";
import PawIcon from "./components/PawIcon";
import Reveal from "./components/Reveal";
import ServiceImagePlaceholder from "./components/ServiceImagePlaceholder";
import { services, siteConfig, testimonials } from "@/lib/site-data";

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.5c-.3 0-.6.06-.9.2L4.7 4.5c-.7.3-1.2 1-1.2 1.8v5.1c0 5.3 3.6 9.9 8.5 11.3.4.1.8.1 1.2 0 4.9-1.4 8.5-6 8.5-11.3V6.3c0-.8-.5-1.5-1.2-1.8L12.9 1.7c-.3-.14-.6-.2-.9-.2Zm4 8-4.6 4.6a.9.9 0 0 1-1.27 0L7.6 11.6a.9.9 0 1 1 1.27-1.27l2.02 2.02 3.96-3.96A.9.9 0 1 1 16 9.5Z"
      />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm.9 5a.9.9 0 1 0-1.8 0v5.2c0 .27.1.53.31.72l3.5 3.2a.9.9 0 1 0 1.22-1.33L12.9 11.8V7Z"
      />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22s7.5-7.4 7.5-13a7.5 7.5 0 1 0-15 0C4.5 14.6 12 22 12 22Zm0-9.5a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Z"
      />
    </svg>
  );
}

function CrossIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1.1 5.4v3.5h3.5a1.1 1.1 0 1 1 0 2.2h-3.5v3.5a1.1 1.1 0 1 1-2.2 0v-3.5H7.4a1.1 1.1 0 1 1 0-2.2h3.5V7.4a1.1 1.1 0 1 1 2.2 0Z"
      />
    </svg>
  );
}

const trustPoints = [
  { title: "Trusted Since 2008", detail: "Caring for private patients and strays across Malta for over 15 years.", icon: ShieldIcon },
  { title: "Saturday Hours Available", detail: "Open six days a week to fit around your schedule.", icon: ClockIcon },
  { title: "Conveniently Located", detail: "Easy to find and reach in Il-Marsa, Malta.", icon: PinIcon },
  { title: "In-House Pharmacy", detail: "Medication and care essentials, all under one roof.", icon: CrossIcon },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-blue to-brand-teal">
        <PawIcon className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rotate-12 text-white/10" />
        <PawIcon className="pointer-events-none absolute -bottom-16 left-[-4rem] h-72 w-72 -rotate-12 text-white/10" />
        <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-24 sm:py-32">
          <div className="max-w-2xl">
            <div className="flex items-start gap-3 sm:gap-4">
              <PawIcon className="mt-1 h-9 w-9 flex-none text-white sm:mt-2 sm:h-[52px] sm:w-[52px]" />
              <h1 className="text-[32px] font-bold leading-tight text-white sm:text-[50px]">
                Helping People to
                <br />
                Help Animals
                <PawIcon className="ml-2 inline-block h-7 w-7 align-middle text-white sm:ml-3 sm:h-11 sm:w-11" />
              </h1>
            </div>
            <p className="mt-5 text-[20px] leading-relaxed text-white/85 sm:hidden">
              At Happy Paws Animal Clinic, we treat every patient like
              family. From routine wellness checks to surgery, our team is
              here to help you help your animal.
            </p>
            <p className="mt-5 hidden text-[20px] leading-relaxed text-white/85 sm:block">
              At Happy Paws Animal Clinic, we treat every patient
              <br />
              like family. From routine wellness checks to surgery,
              <br />
              our team is here to help you help your animal.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 sm:justify-start">
              <Link
                href="/contact"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-dark transition duration-200 hover:scale-[1.03] hover:bg-brand-light active:scale-[0.98]"
              >
                Book an Appointment
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition duration-200 hover:scale-[1.03] hover:bg-white/10 active:scale-[0.98]"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
          <div className="hidden flex-none overflow-hidden rounded-full shadow-2xl ring-4 ring-white/80 lg:block lg:h-56 lg:w-56 xl:h-64 xl:w-64">
            <Image
              src="/hero-vet-dog.jpg"
              alt="Our team caring for a happy dog"
              width={256}
              height={256}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-light">
        <Reveal className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point.title} className="flex items-start gap-3">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <point.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-brand-dark">{point.title}</p>
                <p className="mt-1 text-sm text-brand-dark/60">{point.detail}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-brand-dark">How We Can Help</h2>
            <p className="mt-3 text-brand-dark/60">
              From everyday wellness to specialist care, here&apos;s what we offer your pet.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((service) => service.featured)
              .map((service, i) => (
                <div key={service.slug} className="flex flex-col items-center text-center">
                  {service.image ? (
                    <div className="relative h-48 w-full overflow-hidden rounded-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <ServiceImagePlaceholder index={i} />
                  )}
                  <h3 className="mt-5 text-lg font-bold text-brand-dark">{service.title}</h3>
                </div>
              ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="rounded-full border border-brand-blue px-7 py-3.5 text-sm font-semibold text-brand-blue transition duration-200 hover:scale-[1.03] hover:bg-brand-blue hover:text-white active:scale-[0.98]"
            >
              See All Services
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-brand-blue px-7 py-3.5 text-sm font-semibold text-white transition duration-200 hover:scale-[1.03] hover:bg-brand-dark active:scale-[0.98]"
            >
              Book an Appointment
            </Link>
          </div>
        </Reveal>
      </section>

      {/* About snippet */}
      <section className="bg-brand-light">
        <Reveal className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-2">
          <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-brand-teal to-brand-blue p-8 sm:p-10">
            <Image
              src="/happy-paws-logo.png"
              alt="Happy Paws Animal Clinic"
              width={320}
              height={320}
              className="h-64 w-64 rounded-full sm:h-80 sm:w-80"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-brand-dark">About Happy Paws</h2>
            <p className="mt-4 leading-relaxed text-brand-dark/70">
              Happy Paws Animal Clinic is a veterinary practice in Il-Marsa, Malta,
              built around a simple idea: helping people help animals. Whether
              you&apos;re coming in for a routine check-up or something more
              involved, our team takes the time to explain what your pet needs and
              why.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm font-semibold text-brand-blue transition-colors hover:text-brand-dark"
            >
              Learn more about our clinic →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-brand-dark">What Pet Owners Say</h2>
            <p className="mt-3 text-brand-dark/60">Real reviews from Happy Paws clients on Facebook.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="relative flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-brand-light p-8 transition duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-3 h-20 w-20 text-brand-blue/10"
                >
                  <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H4.83c0-1.3 1.05-2.35 2.34-2.35V6Zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83h-4.02c0-1.3 1.05-2.35 2.34-2.35V6Z" />
                </svg>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-teal text-sm font-bold text-white">
                    {t.initials}
                  </span>
                  <div>
                    <figcaption className="font-semibold text-brand-dark">{t.name}</figcaption>
                    <p className="text-xs text-brand-dark/50">{t.pet}</p>
                  </div>
                  <span className="ml-auto flex items-center gap-1 rounded-full bg-brand-blue/10 px-2.5 py-1 text-xs font-medium text-brand-blue">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
                      <path d="M13.5 22v-8.5H16l.5-3.5h-3V7.8c0-1 .3-1.8 1.8-1.8H16.6V3c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.6H7v3.5h2.6V22h3.9z" />
                    </svg>
                    Recommends
                  </span>
                </div>
                <blockquote className="mt-5 text-sm leading-relaxed text-brand-dark/70">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </figure>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-dark">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Book a Visit?</h2>
          <p className="max-w-xl text-white/70">
            Reach out today — call us, message us on Facebook, or send a booking
            request and we&apos;ll get back to you.
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
