import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import caseManufacturing from "@/assets/case-manufacturing.jpg";
import caseProfessional from "@/assets/case-professional-services.jpg";
import caseGovernance from "@/assets/case-data-governance.jpg";

const cases = [
  {
    image: caseManufacturing,
    industry: "Manufacturing",
    tag: "AX 2012 → SAP S/4HANA",
    title: "Multi-plateau ERP transformation for a leading European bed manufacturer",
    stats: [
      { value: "4", label: "Countries" },
      { value: "250+", label: "Locations" },
      { value: "40+", label: "KPIs live" },
      { value: "20+", label: "Month prog." },
    ],
  },
  {
    image: caseProfessional,
    industry: "Professional Services",
    tag: "D365 F&O AMS",
    title: "AMS transition for a global technology talent and digital services leader",
    stats: [
      { value: "70+", label: "Legal entities" },
      { value: "9", label: "Countries" },
      { value: "6", label: "ISVs" },
      { value: "0", label: "Incidents" },
    ],
  },
  {
    image: caseGovernance,
    industry: "Data Governance",
    tag: "BlueGecko · AI Governance",
    title: "Enterprise AI/Data governance architecture for a multi-system transformation",
    stats: [
      { value: "6", label: "Domains" },
      { value: "100%", label: "Human AI" },
      { value: "Auto", label: "PII detect" },
      { value: "Full", label: "Audit trail" },
    ],
  },
];

export default function CaseStudiesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="cases" className="py-20 md:py-28 bg-background">
      <div className="container" ref={ref}>
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Case Studies
            </span>
          </div>
          <h2
            className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-[1.1] text-balance mb-4 ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            Enterprise transformation programmes delivered.
          </h2>
          <p
            className={`text-muted-foreground text-lg leading-relaxed text-pretty ${
              isVisible ? "animate-reveal-up delay-100" : "opacity-0"
            }`}
          >
            From manufacturing to global professional services — three distinct engagements, one consistent delivery model.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((c, i) => (
            <div
              key={c.title}
              className={`group relative bg-card rounded-2xl border border-border/60 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 active:scale-[0.99] ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 2) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.industry}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {c.industry}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-accent/15 text-accent border border-accent/20">
                    {c.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-foreground leading-snug mb-6 text-pretty min-h-[3rem]">
                  {c.title}
                </h3>

                <div className="grid grid-cols-4 gap-3 pt-5 border-t border-border/50">
                  {c.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-lg md:text-xl font-bold text-primary leading-none mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
