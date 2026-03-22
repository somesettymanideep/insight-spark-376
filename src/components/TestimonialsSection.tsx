import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "NextGenLytics reduced our D365 migration timeline from 18 months to under 9. The BlueGecko platform's automated profiling caught data quality issues we'd have missed entirely.",
    name: "Marcus van den Berg",
    company: "VP Operations, Meridian Logistics",
  },
  {
    quote: "Their AI-native approach to data transformation isn't marketing — it's genuinely embedded in every phase. We saved 35% on our SAP S/4HANA migration budget.",
    name: "Priya Ramanathan",
    company: "CTO, Aether Manufacturing",
  },
  {
    quote: "The combination of Amsterdam leadership and India delivery gave us enterprise quality at mid-market pricing. Our real-time analytics dashboard transformed how we make decisions.",
    name: "Elena Kowalski",
    company: "Head of Data, Solaris Financial",
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl" ref={ref}>
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Testimonials</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            What Our Clients Say
          </h2>
        </div>

        <div className={`relative bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-lg ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <Quote className="w-10 h-10 text-accent/30 mb-4" />
          <div className="min-h-[120px]">
            <p className="text-lg md:text-xl text-foreground leading-relaxed text-pretty">
              "{testimonials[active].quote}"
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div>
              <div className="font-semibold text-foreground">{testimonials[active].name}</div>
              <div className="text-sm text-muted-foreground">{testimonials[active].company}</div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActive((p) => (p - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 active:scale-95 transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-primary-foreground" />
              </button>
              <button
                onClick={() => setActive((p) => (p + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 active:scale-95 transition-all"
              >
                <ChevronRight className="w-5 h-5 text-primary-foreground" />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? "bg-primary w-6" : "bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
