"use client";

import { useState, type FormEvent } from "react";
import { services, siteConfig } from "@/lib/site-data";

const inputClasses =
  "w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm text-brand-dark placeholder:text-brand-dark/40 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue";
const labelClasses = "mb-1.5 block text-sm font-medium text-brand-dark";

export default function BookingForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const phone = data.get("phone") as string;
    const email = data.get("email") as string;
    const petName = data.get("petName") as string;
    const petType = data.get("petType") as string;
    const service = data.get("service") as string;
    const date = data.get("date") as string;
    const time = data.get("time") as string;
    const notes = data.get("notes") as string;

    const subject = `Appointment Request — ${petName || "Pet"} (${name})`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      `Pet name: ${petName}`,
      petType ? `Pet type: ${petType}` : null,
      `Service: ${service}`,
      date ? `Preferred date: ${date}` : null,
      time ? `Preferred time: ${time}` : null,
      notes ? `Notes: ${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={labelClasses}>Your Name *</label>
        <input id="name" name="name" type="text" required className={inputClasses} />
      </div>
      <div>
        <label htmlFor="phone" className={labelClasses}>Phone *</label>
        <input id="phone" name="phone" type="tel" required className={inputClasses} />
      </div>
      <div>
        <label htmlFor="email" className={labelClasses}>Email</label>
        <input id="email" name="email" type="email" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="petName" className={labelClasses}>Pet&apos;s Name</label>
        <input id="petName" name="petName" type="text" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="petType" className={labelClasses}>Pet Type</label>
        <input id="petType" name="petType" type="text" placeholder="Dog, cat…" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="service" className={labelClasses}>Service</label>
        <select id="service" name="service" className={inputClasses} defaultValue="General / Not sure">
          <option>General / Not sure</option>
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
          <option>Emergency</option>
        </select>
      </div>
      <div>
        <label htmlFor="date" className={labelClasses}>Preferred Date</label>
        <input id="date" name="date" type="date" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="time" className={labelClasses}>Preferred Time</label>
        <input id="time" name="time" type="time" className={inputClasses} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="notes" className={labelClasses}>Anything else we should know?</label>
        <textarea id="notes" name="notes" rows={4} className={inputClasses} />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white transition duration-200 hover:scale-[1.03] hover:bg-brand-dark active:scale-[0.98]"
        >
          Send Request
        </button>
        <p className="mt-3 text-xs text-brand-dark/50">
          This opens your email app with your request pre-filled, ready to send
          to {siteConfig.email}.
        </p>
        {sent && (
          <p className="mt-2 text-sm font-medium text-brand-blue">
            Your email app should now be open — just hit send!
          </p>
        )}
      </div>
    </form>
  );
}
