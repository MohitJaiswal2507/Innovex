"use client";

import { useRef, useState } from "react";

declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

/** Prototype form: validates in the browser and never sends data anywhere. */
export default function RegisterForm() {
  const [done, setDone] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  return (
    <div className="callout min-w-0">
      <h2 id="form-h">Registration form (demo)</h2>
      <p><strong>Prototype:</strong> this form does not send or store any data.</p>
      <form
        aria-labelledby="form-h"
        className="grid max-w-[640px] gap-3.5"
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
          // GA4 key event hook for Milestone II (only fires if gtag is installed).
          window.gtag?.("event", "register_click", { event_category: "registration", event_label: "demo_form" });
          setTimeout(() => resultRef.current?.focus(), 0);
        }}
      >
        {[
          { label: "Full name", name: "name", type: "text", auto: "name" },
          { label: "College", name: "college", type: "text", auto: "organization" },
          { label: "Email", name: "email", type: "email", auto: "email" },
        ].map((f) => (
          <label key={f.name} className="grid gap-1.5 font-semibold">
            {f.label}
            <input name={f.name} type={f.type} autoComplete={f.auto} required className="rounded-xl border border-[#a9adc4] bg-white px-3 py-2.5 font-normal" />
          </label>
        ))}
        <label className="grid gap-1.5 font-semibold">
          Year of study
          <select name="year" className="rounded-xl border border-[#a9adc4] bg-white px-3 py-2.5 font-normal">
            {["1st year", "2nd year", "3rd year", "4th year", "PG"].map((y) => <option key={y}>{y}</option>)}
          </select>
        </label>
        <label className="grid gap-1.5 font-semibold">
          Main event
          <select name="event" className="rounded-xl border border-[#a9adc4] bg-white px-3 py-2.5 font-normal">
            {["24-Hour Hackathon", "Code Sprint", "Project Expo", "Workshops only", "Talks only"].map((y) => <option key={y}>{y}</option>)}
          </select>
        </label>
        <button type="submit" className="btn btn-primary">Submit (demo)</button>
        <p className="text-sm text-muted">Nothing is sent. In a real deployment this would connect to a registration service.</p>
      </form>
      {done && (
        <div ref={resultRef} tabIndex={-1} role="status" className="callout-info mt-3">
          <p className="m-0"><strong>Demo complete.</strong> This is a class prototype, so no registration was created.</p>
        </div>
      )}
    </div>
  );
}
