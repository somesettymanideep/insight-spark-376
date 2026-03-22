import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Zap, TrendingDown, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    number: "01",
    label: "Speed",
    stat: "9 mo.",
    substat: "vs. 18-month industry average",
    headline: "AI embedded in delivery — not added after.",
    body: "BlueGecko automates source profiling, field mapping, ETL generation, and data quality validation. Each stage runs 60–80% faster than manual delivery.",
    metrics: [
      { value: "60–70%", label: "Faster profiling" },
      { value: "65%", label: "Faster mapping" },
      { value: "80%", label: "Faster ETL" },
      { value: "90%", label: "Auto validation" },
    ],
  },
  {
    icon: TrendingDown,
    number: "02",
    label: "Cost",
    stat: "30–40%",
    substat: "below Dutch SI market day rates",
    headline: "A structural cost advantage, not a compromise.",
    body: "Our India Extended Capability Centre is a deliberate structural advantage — explicitly governed, transparently priced, and culturally aligned with European delivery standards.",
    metrics: [
      { value: "100%", label: "Offshore AMS" },
      { value: "Named", label: "Team model" },
      { value: "Live", label: "Client in prod" },
      { value: "Full", label: "Transparency" },
    ],
  },
  {
    icon: ShieldCheck,
    number: "03",
    label: "Risk",
    stat: "100%",
    substat: "human-approved AI actions — auditable",
    headline: "Governed AI — every action traceable.",
    body: "BlueGecko's Multi-Agent Supervisor Architecture means AI proposes, humans approve. Every field map, every ETL, every quality check is logged with a full audit trail.",
    metrics: [
      { value: "Human", label: "Approval gate" },
      { value: "Full", label: "Audit trail" },
      { value: "Auto", label: "PII detection" },
      { value: "GDPR", label: "Compliant" },
    ],
  },
];

export default function WhyUsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="why-us" className="py-20 md:py-28 section-alt">
      <div className="container" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Why NextGenLytics
            </span>
            <span className="w-8 h-0.5 bg-accent" />
          </div>
          <h2
            className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-[1.1] text-balance ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            Three reasons companies choose us for ERP migrations.
          </h2>
          <p
            className={`mt-4 text-muted-foreground text-lg leading-relaxed text-pretty ${
              isVisible ? "animate-reveal-up delay-100" : "opacity-0"
            }`}
          >
            Not claims. Structural realities that translate into faster delivery, lower cost, and less risk — every time.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-8">
          {reasons.map((r, i) => {
            const isReversed = i % 2 === 1;
            return (
              <div
                key={r.number}
                className={`group bg-card rounded-2xl border border-border/60 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-0.5 active:scale-[0.995] ${
                  isVisible ? "animate-reveal-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${(i + 2) * 120}ms` }}
              >
                <div className={`grid md:grid-cols-[340px_1fr] ${isReversed ? "md:[direction:rtl]" : ""}`}>
                  {/* Left — Big stat panel */}
                  <div
                    className="relative bg-primary p-8 md:p-10 flex flex-col justify-center overflow-hidden"
                    style={{ direction: "ltr" }}
                  >
                    {/* Decorative circle */}
                    <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-white/5" />
                    <div className="absolute -left-8 -bottom-8 w-24 h-24 rounded-full bg-white/5" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                          <r.icon className="w-5 h-5 text-accent" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/60">
                          {r.number} — {r.label}
                        </span>
                      </div>
                      <p className="text-5xl md:text-6xl font-bold text-primary-foreground leading-none mb-2">
                        {r.stat}
                      </p>
                      <p className="text-sm text-primary-foreground/60">{r.substat}</p>
                    </div>
                  </div>

                  {/* Right — Content */}
                  <div className="p-7 md:p-10 flex flex-col justify-center" style={{ direction: "ltr" }}>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground leading-snug mb-3">
                      {r.headline}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-xl text-pretty">
                      {r.body}
                    </p>

                    {/* Mini metrics grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {r.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="text-center p-3 rounded-xl bg-secondary/80 border border-border/40"
                        >
                          <div className="text-lg font-bold text-primary leading-none mb-1">
                            {m.value}
                          </div>
                          <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
