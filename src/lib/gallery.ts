import wedding1 from "@/assets/gallery-wedding-1.jpg";
import wedding2 from "@/assets/gallery-wedding-2.jpg";
import portrait1 from "@/assets/gallery-portrait-1.jpg";
import portrait2 from "@/assets/gallery-portrait-2.jpg";
import fashion1 from "@/assets/gallery-fashion-1.jpg";
import fashion2 from "@/assets/gallery-fashion-2.jpg";
import commercial1 from "@/assets/gallery-commercial-1.jpg";
import commercial2 from "@/assets/gallery-commercial-2.jpg";
import event1 from "@/assets/gallery-event-1.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";
import heroFashion from "@/assets/hero-fashion.jpg";

export type Category = "Weddings" | "Portraits" | "Fashion" | "Commercial" | "Events";

export type Photo = {
  src: string;
  alt: string;
  category: Category;
  span?: "tall" | "wide" | "normal";
};

export const PHOTOS: Photo[] = [
  { src: heroWedding, alt: "Bride in indigo light", category: "Weddings", span: "tall" },
  { src: wedding1, alt: "Wedding ceremony confetti", category: "Weddings", span: "normal" },
  { src: fashion1, alt: "Fashion editorial in indigo", category: "Fashion", span: "tall" },
  { src: portrait1, alt: "Studio portrait", category: "Portraits", span: "normal" },
  { src: commercial2, alt: "Commercial brand portrait", category: "Commercial", span: "tall" },
  { src: event1, alt: "Reception ballroom", category: "Events", span: "wide" },
  { src: portrait2, alt: "Family portrait golden hour", category: "Portraits", span: "normal" },
  { src: fashion2, alt: "Magazine cover style", category: "Fashion", span: "normal" },
  { src: commercial1, alt: "Luxury product photography", category: "Commercial", span: "normal" },
  { src: wedding2, alt: "Couple at sunset", category: "Weddings", span: "normal" },
  { src: heroFashion, alt: "Bold editorial portrait", category: "Fashion", span: "tall" },
];
