import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Monitor, Cloud, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Monitor,
    category: "APPLICATION MANAGED SERVICES",
    title: "D365 & SAP AMS",
    desc: "End-to-end support for Dynamics 365 F&O and SAP S/4HANA post go-live. Incident management, change management, process normalisation, integration monitoring, and automation.",
    tags: ["D365 F&O", "SAP S/4HANA", "Business Central", "Salesforce"],
  },
  {
    icon: Cloud,
    category: "CLOUD & INFRASTRUCTURE",
    title: "Azure & Cloud Ops",
    desc: "Daily/weekly/monthly Azure, SharePoint, backup, DR, and automation health checks. SQL DBA services including alerts, backups, performance tuning, and database health oversight.",
    tags: ["Azure", "SQL DBA", "SharePoint", "Backup & DR"],
    featured: true,
  },
  {
    icon: BarChart3,
    category: "DATA & ANALYTICS",
    title: "Microsoft Fabric & Power BI",
    desc: "Microsoft Fabric service health, ADF housekeeping, failed-job monitoring. Power BI report optimisation, enhancements, deployments, and refresh management.",
    tags: ["Microsoft Fabric", "Power BI", "ADF", "Databricks"],
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-20 md:py-28 section-alt">
      <div className="container" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Managed Services
            </span>
            <span className="w-8 h-0.5 bg-accent" />
          </div>
          <h2
            className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-[1.1] text-balance ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            After go-live, the real work begins.
          </h2>
          <p
            className={`mt-4 text-muted-foreground text-lg leading-relaxed text-pretty ${
              isVisible ? "animate-reveal-up delay-100" : "opacity-0"
            }`}
          >
            Nextgenlytics keeps your ERP, data platform and cloud infrastructure operating at enterprise standard.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative bg-card rounded-2xl border border-border/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 active:scale-[0.99] overflow-hidden ${
                s.featured ? "ring-2 ring-primary/20" : ""
              } ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
              style={{ animationDelay: `${(i + 2) * 100}ms` }}
            >
              {/* Accent top bar */}
              <div className={`h-1 w-full ${s.featured ? "bg-primary" : "bg-accent"}`} />

              <div className="p-7 md:p-8 flex flex-col h-full">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${
                  s.featured
                    ? "bg-primary/10 group-hover:bg-primary/15"
                    : "bg-accent/10 group-hover:bg-accent/20"
                }`}>
                  <s.icon className={`w-6 h-6 transition-colors duration-300 ${
                    s.featured ? "text-primary" : "text-accent"
                  }`} />
                </div>

                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3 block">
                  {s.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 text-pretty flex-1">
                  {s.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
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
