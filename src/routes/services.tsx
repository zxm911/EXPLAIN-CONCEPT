import { createFileRoute } from "@tanstack/react-router";
import { Heart, Camera, Sparkles, Check } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { CONTACT } from "@/lib/contact";
import wedding1 from "@/assets/gallery-wedding-1.jpg";
import portrait1 from "@/assets/gallery-portrait-1.jpg";
import fashion1 from "@/assets/gallery-fashion-1.jpg";
import commercial2 from "@/assets/gallery-commercial-2.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Explain Concept Photography" },
      {
        name: "description",
        content:
          "Wedding, portrait, fashion editorial and brand photography packages tailored to your story.",
      },
      { property: "og:title", content: "Services — Explain Concept" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Heart,
    name: "Weddings & Events",
    image: wedding1,
    desc: "Full-day documentary coverage that captures the laughter, tears and quiet glances in between.",
    includes: [
      "Pre-wedding consultation",
      "Up to 10 hours coverage",
      "300+ retouched images",
      "Online gallery & USB delivery",
      "Optional second shooter",
    ],
  },
  {
    icon: Camera,
    name: "Portraits",
    image: portrait1,
    desc: "Studio or on-location sessions for individuals, couples, families and seniors.",
    includes: [
      "1–2 hour session",
      "Wardrobe guidance",
      "30+ retouched images",
      "Private online gallery",
      "Print release",
    ],
  },
  {
    icon: Camera,
    name: "Children & Birthday",
    image: commercial2,
    desc: "Playful, memorable sessions for kids and milestone birthdays.",
    includes: [
      "Fun location or studio setup",
      "Age-appropriate direction",
      "25+ retouched images",
      "Private online gallery",
      "Print release",
    ],
  },
  {
    icon: Sparkles,
    name: "Fashion & Editorial",
    image: fashion1,
    desc: "Magazine-grade imagery for models, designers, magazines and creative directors.",
    includes: [
      "Mood-board collaboration",
      "Full studio setup",
      "Hair & makeup coordination",
      "Premium retouching",
      "Usage rights included",
    ],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="relative bg-gradient-hero pt-40 pb-20">
        <div className="bg-gradient-glow absolute inset-0 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">What I offer</p>
          <h1 className="font-display text-6xl md:text-8xl text-balance leading-[0.9]">
            Tailored to your <span className="italic text-primary glow-text">story.</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Every package starts with a free consultation. Pricing is shaped around your vision,
            scope and timeline.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="space-y-24">
          {services.map((s, i) => (
            <article
              key={s.name}
              className={`grid gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <s.icon size={20} />
                </div>
                <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[0.95]">{s.name}</h2>
                <p className="mt-4 text-lg text-muted-foreground">{s.desc}</p>
                <ul className="mt-8 space-y-3">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check size={16} className="mt-1 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex w-fit items-center gap-2 rounded-sm bg-primary px-6 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground shadow-glow hover:opacity-90"
                >
                  Request a quote
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
