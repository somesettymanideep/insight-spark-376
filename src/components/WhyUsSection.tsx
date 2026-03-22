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
        {/* Header */}
        <div
          className={`max-w-3xl mb-12 md:mb-16 ${
            isVisible ? "animate-reveal-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.08] text-white text-balance font-heading">
            Three reasons companies choose us for ERP migrations.
          </h2>
          <p className="mt-5 text-[hsl(215_15%_60%)] leading-relaxed max-w-2xl text-pretty">
            Not claims. Structural realities that translate into faster
            delivery, lower cost, and less risk on your programme — every time.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.number}
              className={`rounded-2xl border border-[hsl(215_20%_18%)] bg-[hsl(220_25%_13%)] p-7 md:p-8 flex flex-col ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${150 + i * 120}ms` }}
            >
              {/* Tag */}
              <p className="text-xs font-semibold tracking-widest text-[hsl(160_60%_45%)] mb-6 font-heading">
                {r.number} — {r.label}
              </p>

              {/* Big stat */}
              <p
                className={`text-4xl md:text-5xl font-bold font-heading leading-none ${r.statColor}`}
              >
                {r.stat}
              </p>
              <p className="text-sm text-[hsl(215_15%_50%)] mt-2 mb-7">
                {r.substat}
              </p>

              {/* Headline */}
              <h3 className="text-base font-bold text-white leading-snug mb-3">
                {r.headline}
              </h3>

              {/* Body */}
              <p className="text-sm text-[hsl(215_15%_55%)] leading-relaxed mb-6 text-pretty">
                {r.body}
              </p>

              {/* Bullets */}
              <ul className="mt-auto space-y-2.5">
                {r.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-[hsl(160_60%_45%)] shrink-0 mt-0.5" />
                    <span className="text-[hsl(215_15%_70%)]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
