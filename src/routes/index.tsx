import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Camera, Heart, Sparkles, Star, Quote } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { CONTACT } from "@/lib/contact";
import heroWedding from "@/assets/hero-wedding.jpg";
import heroFashion from "@/assets/hero-fashion.jpg";
import wedding1 from "@/assets/gallery-wedding-1.jpg";
import portrait2 from "@/assets/gallery-portrait-2.jpg";
import fashion2 from "@/assets/gallery-fashion-2.jpg";
import commercial1 from "@/assets/gallery-commercial-1.jpg";
import event1 from "@/assets/gallery-event-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Explain Concept — Ota Photographer & Photography Studio" },
      { name: "description", content: "Award-worthy wedding, portrait, fashion and brand photography in Ota. Book your shoot today with Explain Concept." },
      { name: "keywords", content: "Explain Concept, photographer Ota, Ota photographer, wedding photography, portrait photography, fashion photography, brand photography" },
    ],
  }),
  component: HomePage,
});

const featured = [
  { src: heroWedding, alt: "Bride in indigo light", tag: "Bridal" },
  { src: fashion2, alt: "Magazine cover style", tag: "Editorial" },
  { src: wedding1, alt: "Wedding confetti", tag: "Weddings" },
  { src: portrait2, alt: "Family portrait", tag: "Portraits" },
  { src: commercial1, alt: "Luxury product", tag: "Commercial" },
  { src: event1, alt: "Reception ballroom", tag: "Events" },
];

const services = [
  { icon: Heart, name: "Weddings & Events", desc: "Cinematic storytelling for the day everything changes." },
  { icon: Camera, name: "Portraits", desc: "Individual, family and couple sessions, in studio or on location." },
  { icon: Sparkles, name: "Fashion & Editorial", desc: "Magazine-grade looks for models, designers and creatives." },
  { icon: Star, name: "Commercial / Brand", desc: "Product, lifestyle and campaign work that converts." },
];

const testimonials = [
  { quote: "He didn't just take pictures — he captured the soul of our wedding day. Every frame still gives us chills.", name: "Chiamaka & Tobi", role: "Bride & Groom" },
  { quote: "The most professional shoot I've ever been part of. The indigo aesthetic is unreal.", name: "Ifeoma Okonkwo", role: "Model" },
  { quote: "Our brand campaign performed 3x better thanks to his imagery. Will book again and again.", name: "Kacial Perfumes", role: "Lifestyle Brand" },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-hero pt-32">
        <div className="bg-gradient-glow absolute inset-0 pointer-events-none" />
        <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-12 lg:grid-cols-12 lg:gap-8 lg:px-10">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-surface/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
              Now booking 2026 sessions
            </p>
            <h1 className="font-display text-[15vw] leading-[0.85] text-balance md:text-[9vw] lg:text-[7.5rem] animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Photography
              <br />
              <span className="italic text-primary glow-text">that speaks</span>
              <br />
              louder.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground animate-fade-up" style={{ animationDelay: "0.25s" }}>
              I'm <span className="text-foreground">Explain Concept</span> — a Nigerian photographer crafting cinematic weddings, fashion editorials, portraits and brand stories you'll never scroll past.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground shadow-glow transition hover:opacity-90"
              >
                Book a session
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-3 rounded-sm border border-border bg-transparent px-7 py-4 text-sm uppercase tracking-[0.2em] text-foreground transition hover:border-primary hover:bg-surface/40"
              >
                View portfolio
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground animate-fade-up" style={{ animationDelay: "0.55s" }}>
              <div><div className="font-display text-3xl text-foreground">500+</div>shoots delivered</div>
              <div className="h-12 w-px bg-border" />
              <div><div className="font-display text-3xl text-foreground">8 yrs</div>behind the lens</div>
              <div className="h-12 w-px bg-border hidden sm:block" />
              <div className="hidden sm:block"><div className="font-display text-3xl text-foreground">100%</div>love it or reshoot</div>
            </div>
          </div>

          <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm shadow-elegant">
              <img
                src={heroWedding}
                alt="Bride in dramatic indigo lighting"
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-10 hidden aspect-[3/4] w-40 overflow-hidden rounded-sm border-4 border-background shadow-glow md:block">
              <img src={heroFashion} alt="Editorial portrait" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -top-6 -right-6 hidden rounded-sm border border-border bg-surface/80 px-4 py-3 backdrop-blur md:block">
              <p className="font-display text-2xl text-primary">★ 4.98</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">from 200+ clients</p>
            </div>
          </div>
        </div>

        {/* MARQUEE */}
        <div className="relative mt-12 overflow-hidden border-y border-border/40 bg-surface/30 py-6">
          <div className="animate-marquee flex whitespace-nowrap gap-16">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-16 font-display text-3xl text-muted-foreground/70">
                <span>Weddings</span><span className="text-primary">✦</span>
                <span>Editorial</span><span className="text-primary">✦</span>
                <span>Portraits</span><span className="text-primary">✦</span>
                <span>Brand Stories</span><span className="text-primary">✦</span>
                <span>Events</span><span className="text-primary">✦</span>
                <span>Lifestyle</span><span className="text-primary">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED GRID */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">Selected work</p>
            <h2 className="font-display text-5xl md:text-7xl text-balance leading-[0.95]">Stories in <span className="italic text-primary">frames.</span></h2>
          </div>
          <Link to="/portfolio" className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:text-primary">
            See full portfolio <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {featured.map((p, i) => {
            const layout = [
              "col-span-12 md:col-span-7 aspect-[4/3]",
              "col-span-12 md:col-span-5 aspect-[4/5]",
              "col-span-6 md:col-span-4 aspect-square",
              "col-span-6 md:col-span-4 aspect-square",
              "col-span-12 md:col-span-4 aspect-[4/5] md:aspect-square",
              "col-span-12 md:col-span-7 aspect-[16/9]",
            ][i];
            return (
              <Link
                key={p.src}
                to="/portfolio"
                className={`group relative overflow-hidden rounded-sm bg-surface ${layout}`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 rounded-full bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  {p.tag}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="relative border-t border-border/40 bg-surface/30 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">What I do</p>
            <h2 className="font-display text-5xl md:text-6xl text-balance leading-[0.95]">Four lenses. One vision.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.name}
                to="/services"
                className="group hover-lift relative flex flex-col gap-6 rounded-sm border border-border/60 bg-background p-8"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <s.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-2xl">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
                <ArrowRight size={18} className="mt-auto text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">Words from clients</p>
          <h2 className="font-display text-5xl md:text-6xl text-balance leading-[0.95]">Loved by the people in front of my lens.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="hover-lift relative rounded-sm border border-border/60 bg-surface/50 p-8">
              <Quote size={28} className="mb-6 text-primary" />
              <blockquote className="text-lg leading-relaxed text-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-6 border-t border-border/40 pt-4">
                <div className="font-display text-xl">{t.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border/40 bg-gradient-hero py-32">
        <div className="bg-gradient-glow absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="font-display text-5xl md:text-7xl text-balance leading-[0.95]">
            Your story deserves a <span className="italic text-primary glow-text">cinematic</span> frame.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Slots fill fast. Reach out today and let's plan something unforgettable together.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground shadow-glow hover:opacity-90">
              Message on WhatsApp <ArrowRight size={16} />
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm border border-border px-7 py-4 text-sm uppercase tracking-[0.2em] hover:border-primary">
              Send a brief
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
