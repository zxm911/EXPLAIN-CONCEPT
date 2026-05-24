import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, MessageCircle, Music2 } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border/50 bg-surface/30">
      <div className="bg-gradient-glow absolute inset-x-0 top-0 h-px" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <h3 className="font-display text-4xl text-balance leading-[0.95]">
            Let's create something
            <span className="block text-primary glow-text">unforgettable.</span>
          </h3>
          <p className="mt-6 max-w-md text-muted-foreground">
            Available for weddings, editorials, portraits and brand campaigns across Nigeria and beyond.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm uppercase tracking-[0.18em] text-primary-foreground shadow-glow transition hover:opacity-90"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href={CONTACT.callLink}
              className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm uppercase tracking-[0.18em] text-foreground transition hover:border-primary"
            >
              <Phone size={16} /> Call
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Navigate</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary">Portfolio</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Reach out</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={CONTACT.instagramLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                <Instagram size={14} /> {CONTACT.instagram}
              </a>
            </li>
            <li>
              <a href={CONTACT.tiktokLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                <Music2 size={14} /> {CONTACT.tiktok}
              </a>
            </li>
            <li>
              <a href={CONTACT.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-primary">
                <MapPin size={14} className="mt-1 shrink-0" />
                <span>{CONTACT.location}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 px-6 py-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground lg:px-10">
        © {new Date().getFullYear()} {CONTACT.brand}. All frames reserved.
      </div>
    </footer>
  );
}
