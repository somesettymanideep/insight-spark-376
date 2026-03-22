import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Check } from "lucide-react";

const reasons = [
  {
    number: "01",
    label: "SPEED",
    stat: "9 mo.",
    statColor: "text-foreground",
    substat: "vs. 18-month industry average",
    headline: "AI embedded in delivery — not added after.",
    body: "BlueGecko automates the phases that consume the most time in every migration programme — source profiling, field mapping, ETL generation, and data quality validation. Each stage runs 60–80% faster than manual delivery.",
    bullets: [
      "Profiling: 60–70% faster",
      "Mapping: 65% faster",
      "ETL generation: 70–80% faster",
      "Quality validation: 90% automated",
    ],
  },
  {
    number: "02",
    label: "COST",
    stat: "30–40%",
    statColor: "text-accent",
    substat: "below Dutch SI market day rates",
    headline: "India ECC — a structural cost advantage, not a compromise.",
    body: "Our India Extended Capability Centre is not a back-office workaround. It is a deliberate structural advantage — explicitly governed, transparently priced, and culturally aligned with European delivery standards.",
    bullets: [
      "100% offshore AMS delivery capability",
      "Named team, transparent governance model",
      "Live managed services client in production",
    ],
  },
  {
    number: "03",
    label: "RISK",
    stat: "100%",
    statColor: "text-[hsl(160_60%_45%)]",
    substat: "human-approved AI actions — auditable",
    headline: "Governed AI — every action traceable, every approval logged.",
    body: "BlueGecko's Multi-Agent Supervisor Architecture means AI proposes, humans approve. No autonomous transformations. No black-box outputs. Every field map, every ETL, every quality check is logged with a full audit trail.",
    bullets: [
      "Human approval at every AI action",
      "Full source-to-target audit trail",
      "Auto GDPR/PII detection and masking",
    ],
  },
];

export default function WhyUsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[hsl(220_30%_10%)]">
      <div className="container" ref={ref}>
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 md:mb-20 ${
            isVisible ? "animate-reveal-up" : "opacity-0"
          }`}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 font-heading">
            Why NextGenLytics
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.08] text-white text-balance font-heading">
            Three reasons companies choose us for ERP migrations.
          </h2>
          <p className="mt-5 text-[hsl(215_15%_60%)] leading-relaxed max-w-2xl mx-auto text-pretty">
            Not claims. Structural realities that translate into faster
            delivery, lower cost, and less risk on your programme — every time.
          </p>
        </div>

        {/* Staggered card layout */}
        <div className="space-y-6">
          {reasons.map((r, i) => {
            const isEven = i % 2 === 1;
            return (
              <div
                key={r.number}
                className={`grid md:grid-cols-[auto_1fr] items-stretch gap-0 rounded-2xl border border-[hsl(215_20%_18%)] bg-[hsl(220_25%_13%)] overflow-hidden transition-all duration-300 hover:border-[hsl(215_20%_25%)] hover:shadow-[0_8px_32px_hsl(220_30%_5%/0.5)] hover:-translate-y-0.5 active:scale-[0.99] ${
                  isVisible ? "animate-reveal-up" : "opacity-0"
                } ${isEven ? "md:direction-rtl" : ""}`}
                style={{ animationDelay: `${150 + i * 150}ms` }}
              >
                {/* Stat side */}
                <div
                  className={`flex flex-col justify-center p-7 md:p-10 md:w-72 lg:w-80 border-b md:border-b-0 ${
                    isEven
                      ? "md:border-l border-[hsl(215_20%_18%)] md:order-2"
                      : "md:border-r border-[hsl(215_20%_18%)]"
                  }`}
                  style={{ direction: "ltr" }}
                >
                  <p className="text-xs font-semibold tracking-widest text-[hsl(160_60%_45%)] mb-5 font-heading">
                    {r.number} — {r.label}
                  </p>
                  <p
                    className={`text-5xl md:text-6xl font-bold font-heading leading-none ${r.statColor}`}
                  >
                    {r.stat}
                  </p>
                  <p className="text-sm text-[hsl(215_15%_50%)] mt-2">
                    {r.substat}
                  </p>
                </div>

                {/* Content side */}
                <div
                  className={`p-7 md:p-10 flex flex-col justify-center ${
                    isEven ? "md:order-1" : ""
                  }`}
                  style={{ direction: "ltr" }}
                >
                  <h3 className="text-lg md:text-xl font-bold text-white leading-snug mb-3">
                    {r.headline}
                  </h3>
                  <p className="text-sm text-[hsl(215_15%_55%)] leading-relaxed mb-6 max-w-xl text-pretty">
                    {r.body}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm">
                        <Check className="w-4 h-4 text-[hsl(160_60%_45%)] shrink-0 mt-0.5" />
                        <span className="text-[hsl(215_15%_70%)]">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
