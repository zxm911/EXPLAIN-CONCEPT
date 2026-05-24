import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Lightbox } from "@/components/Lightbox";
import { PHOTOS, type Category } from "@/lib/gallery";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Explain Concept Photography" },
      { name: "description", content: "Selected wedding, portrait, fashion editorial and brand work by Explain Concept." },
      { property: "og:title", content: "Portfolio — Explain Concept" },
    ],
  }),
  component: PortfolioPage,
});

const FILTERS: ("All" | Category)[] = ["All", "Weddings", "Portraits", "Fashion", "Commercial", "Events"];

function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [active, setActive] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? PHOTOS : PHOTOS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="relative bg-gradient-hero pt-40 pb-20">
        <div className="bg-gradient-glow absolute inset-0 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">The archive</p>
          <h1 className="font-display text-6xl md:text-8xl text-balance leading-[0.9]">
            Every frame, a <span className="italic text-primary glow-text">moment.</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            A curated look at recent commissions across weddings, portraits, fashion and brand work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition ${
                filter === f
                  ? "border-primary bg-primary text-primary-foreground shadow-glow"
                  : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {filtered.map((p, i) => (
            <button
              key={p.src + i}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-sm bg-surface ${
                p.span === "tall" ? "row-span-2 aspect-[3/4]" : p.span === "wide" ? "col-span-2 aspect-[16/9]" : "aspect-square"
              }`}
            >
              <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 rounded-full bg-background/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                {p.category}
              </span>
            </button>
          ))}
        </div>
      </section>

      <Lightbox
        images={filtered.map((p) => ({ src: p.src, alt: p.alt, category: p.category }))}
        index={active}
        onClose={() => setActive(null)}
        onNav={setActive}
      />

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
