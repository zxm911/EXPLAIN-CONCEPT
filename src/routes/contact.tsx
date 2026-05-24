import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Instagram, MessageCircle, Phone, MapPin, Music2, Send, Check } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book Explain Concept" },
      { name: "description", content: "Reach out via WhatsApp, phone, Instagram or the booking form. Studio at 4-3 Ilo Awela Rd, Ota 112104, Ogun State, Nigeria." },
      { property: "og:title", content: "Contact — Explain Concept" },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: MessageCircle, label: "WhatsApp", value: CONTACT.whatsappNumber, href: CONTACT.whatsappLink, accent: true },
  { icon: Phone, label: "Call", value: CONTACT.callNumber, href: CONTACT.callLink },
  { icon: Instagram, label: "Instagram", value: CONTACT.instagram, href: CONTACT.instagramLink },
  { icon: Music2, label: "TikTok", value: CONTACT.tiktok, href: CONTACT.tiktokLink },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", event: "Wedding", date: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Oluya! I'd like to book a shoot.%0A%0AName: ${form.name}%0AEmail: ${form.email}%0AType: ${form.event}%0ADate: ${form.date}%0A%0A${form.message}`;
    window.open(`${CONTACT.whatsappLink}?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="relative bg-gradient-hero pt-40 pb-20">
        <div className="bg-gradient-glow absolute inset-0 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">Get in touch</p>
          <h1 className="font-display text-6xl md:text-8xl text-balance leading-[0.9]">
            Let's make it <span className="italic text-primary glow-text">happen.</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Drop your details below and I'll get back within 24 hours — or message me directly on any of the channels.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          {/* CHANNELS */}
          <div className="lg:col-span-2 space-y-4">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover-lift flex items-center gap-5 rounded-sm border p-5 transition ${
                  c.accent ? "border-primary/50 bg-primary/10" : "border-border bg-surface/40"
                }`}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <c.icon size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.label}</div>
                  <div className="font-display text-xl">{c.value}</div>
                </div>
              </a>
            ))}

            <a
              href={CONTACT.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift block rounded-sm border border-border bg-surface/40 p-5"
            >
              <div className="flex items-center gap-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Studio</div>
                  <div className="font-display text-xl">{CONTACT.location}</div>
                  <div className="mt-1 text-xs text-primary">Open on Google Maps →</div>
                </div>
              </div>
            </a>

            <div className="overflow-hidden rounded-sm border border-border">
              <iframe
                title="Studio location"
                src="https://www.google.com/maps?q=4-3+Ilo+Awela+Rd+Ota+112104+Ogun+State+Nigeria&output=embed"
                width="100%"
                height="280"
                style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(0.7)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={submit} className="lg:col-span-3 space-y-6 rounded-sm border border-border/60 bg-surface/30 p-8 md:p-10">
            <h2 className="font-display text-4xl">Send a brief</h2>
            <p className="text-sm text-muted-foreground">Fill this in and I'll open WhatsApp with your details pre-filled.</p>

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Shoot type</label>
                <select
                  value={form.event}
                  onChange={(e) => setForm({ ...form, event: e.target.value })}
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none"
                >
                  <option>Wedding</option>
                  <option>Portrait</option>
                  <option>Fashion / Editorial</option>
                  <option>Commercial / Brand</option>
                  <option>Event</option>
                </select>
              </div>
              <Field label="Preferred date" type="date" value={form.date} onChange={(v) => setForm({ ...form, date: v })} />
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Tell me about your vision</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none"
                placeholder="Location, mood, references, anything you'd like me to know..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-3 rounded-sm bg-primary py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground shadow-glow hover:opacity-90 md:w-auto md:px-10"
            >
              {sent ? <><Check size={16}/> Sent via WhatsApp</> : <><Send size={16}/> Send brief</>}
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}

function Field({
  label, value, onChange, type = "text", required = false,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none"
      />
    </div>
  );
}
