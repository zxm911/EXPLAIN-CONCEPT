import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type LightboxImage = { src: string; alt: string; category?: string };

export function Lightbox({
  images,
  index,
  onClose,
  onNav,
}: {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNav: (next: number) => void;
}) {
  useEffect(() => {
    if (index === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNav((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [index, images.length, onClose, onNav]);

  if (index === null) return null;
  const img = images[index];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl animate-fade-up">
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-6 top-6 rounded-full border border-border/60 p-2 text-foreground hover:bg-surface"
      >
        <X size={20} />
      </button>
      <button
        onClick={() => onNav((index - 1 + images.length) % images.length)}
        aria-label="Previous"
        className="absolute left-4 rounded-full border border-border/60 p-2 hover:bg-surface md:left-8"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={() => onNav((index + 1) % images.length)}
        aria-label="Next"
        className="absolute right-4 rounded-full border border-border/60 p-2 hover:bg-surface md:right-8"
      >
        <ChevronRight size={22} />
      </button>
      <figure className="mx-auto flex max-h-[90vh] max-w-6xl flex-col items-center gap-4 px-12">
        <img
          src={img.src}
          alt={img.alt}
          className="max-h-[78vh] w-auto rounded-sm object-contain shadow-elegant"
        />
        <figcaption className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {img.category ? `${img.category} · ` : ""}
          {index + 1} / {images.length}
        </figcaption>
      </figure>
    </div>
  );
}
