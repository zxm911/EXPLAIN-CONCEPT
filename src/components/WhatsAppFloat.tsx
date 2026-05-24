import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export function WhatsAppFloat() {
  return (
    <a
      href={CONTACT.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-4 text-primary-foreground shadow-glow transition-all hover:scale-105"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-primary animate-glow-pulse opacity-40" />
      <MessageCircle size={20} />
      <span className="hidden text-xs uppercase tracking-[0.18em] sm:inline">Book Now</span>
    </a>
  );
}
