import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ArrowRight } from "lucide-react";
import about from "@/assets/about-photographer.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Explain Concept" },
      { name: "description", content: "The story behind Explain Concept — a Nigerian photographer obsessed with light, emotion and the unposed in-between." },
      { property: "og:title", content: "About — Explain Concept" },
    ],
  }),
  component: AboutPage,
});

const credits = ["Vogue Africa shortlist", "BellaNaija Weddings", "Lagos Fashion Week", "Kacial Perfumes", "House of Tara", "Schick Magazine"];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="relative bg-gradient-hero pt-40 pb-20">
        <div className="bg-gradient-glow absolute inset-0 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">The lens behind the work</p>
          <h1 className="font-display text-6xl md:text-8xl text-balance leading-[0.9]">
            Hi, I'm <span className="italic text-primary glow-text">Oluya.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="sticky top-32 aspect-[3/4] overflow-hidden rounded-sm shadow-elegant">
              <img src={about} alt="Photographer at work" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-8 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a Nigerian photographer based at <span className="text-foreground">4-3 Ilo Awela Rd, Ota 112104, Ogun State, Nigeria</span>, and I've spent the last eight years chasing one thing: <span className="text-foreground">the moment right before someone notices the camera.</span>
            </p>
            <p>
              What started as a hobby with a borrowed DSLR turned into a studio shooting weddings, magazine editorials, family portraits and brand campaigns. My work lives in the space between cinematic and intimate — bold indigo light, deep shadows, and faces you'll remember.
            </p>
            <p>
              I shoot Sony mirrorless with a kit built for low light, and I edit every frame myself. No bots, no outsourcing — just craft.
            </p>

            <div className="border-t border-border/50 pt-8">
              <h2 className="font-display text-3xl text-foreground">My philosophy</h2>
              <p className="mt-3">
                Photography should make you feel something. If it doesn't move you, it doesn't ship. Simple as that.
              </p>
            </div>

            <div className="border-t border-border/50 pt-8">
              <h2 className="font-display text-3xl text-foreground">Featured in & worked with</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {credits.map((c) => (
                  <span key={c} className="rounded-full border border-border bg-surface/50 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-foreground">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-border/50 pt-8">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground shadow-glow hover:opacity-90"
              >
                Work with me
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
