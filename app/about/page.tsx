import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PawIcon from "../components/PawIcon";
import Reveal from "../components/Reveal";
import { team } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us — Happy Paws Animal Clinic",
  description:
    "Meet Happy Paws Animal Clinic, a veterinary practice in Il-Marsa, Malta, dedicated to helping people help animals.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page intro */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-blue to-brand-teal">
        <PawIcon className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rotate-12 text-white/10" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center sm:py-24">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">About Happy Paws</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            Helping people help animals, in Il-Marsa, Malta.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <Reveal>
          <h2 className="text-3xl font-bold text-brand-dark">Our Story</h2>
          <div className="mt-6 space-y-5 leading-relaxed text-brand-dark/70">
            <p>
              Since 2008, Happy Paws Animal Clinic has been caring for both
              private patients and stray animals in Il-Marsa, Malta, with a
              simple idea at heart: helping people help animals through
              affordable veterinary care.
            </p>
            <p>
              Whether you&apos;re coming in for a routine check-up, a dental
              clean, or something more involved like surgery, our goal is
              always the same — take good care of your pet, and take the time
              to explain what&apos;s going on and why.
            </p>
            <p>
              We know a visit to the vet can be stressful, both for pets and for
              the people who love them. That&apos;s why our team focuses on calm,
              patient, respectful care at every step — from the first phone call
              to the follow-up after treatment.
            </p>
            <p>
              We&apos;re also proud to support local animal rescue organisations
              and welcome cats looking for a new home to find their people through
              our clinic.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Team */}
      <section className="bg-brand-light">
        <Reveal className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-brand-dark">Our Team</h2>
            <p className="mt-3 text-brand-dark/60">
              The people looking after your pet at Happy Paws.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-teal text-2xl font-bold text-white">
                    {member.initials}
                  </span>
                )}
                <p className="mt-4 font-bold text-brand-dark">{member.name}</p>
                <p className="mt-1 text-sm text-brand-dark/60">{member.title}</p>
                {member.note && (
                  <p className="mt-2 text-xs leading-relaxed text-brand-dark/50">
                    {member.note}
                  </p>
                )}
              </div>
            ))}
          </div>
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
