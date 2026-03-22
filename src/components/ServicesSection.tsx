import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    category: "APPLICATION MANAGED SERVICES",
    title: "D365 & SAP AMS",
    desc: "End-to-end support for Dynamics 365 F&O and SAP S/4HANA post go-live. Incident management, change management, process normalisation, integration monitoring, and automation.",
    tags: ["D365 F&O", "SAP S/4HANA", "Business Central", "Salesforce"],
  },
  {
    category: "CLOUD & INFRASTRUCTURE",
    title: "Azure & Cloud Ops",
    desc: "Daily/weekly/monthly Azure, SharePoint, backup, DR, and automation health checks. SQL DBA services including alerts, backups, performance tuning, and database health oversight.",
    tags: ["Azure", "SQL DBA", "SharePoint", "Backup & DR"],
  },
  {
    category: "DATA & ANALYTICS",
    title: "Microsoft Fabric & Power BI",
    desc: "Microsoft Fabric service health, ADF housekeeping, failed-job monitoring. Power BI report optimisation, enhancements, deployments, and refresh management.",
    tags: ["Microsoft Fabric", "Power BI", "ADF", "Databricks"],
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-20 md:py-28 bg-[hsl(220_30%_8%)]">
      <div className="container" ref={ref}>
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-0.5 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Managed Services
            </span>
          </div>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] text-balance mb-5 ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            After go-live, the real work begins.
          </h2>
          <p
            className={`text-[hsl(215_20%_65%)] text-lg leading-relaxed text-pretty ${
              isVisible ? "animate-reveal-up delay-100" : "opacity-0"
            }`}
          >
            Nextgenlytics Application Managed Services keep your ERP, data platform and cloud
            infrastructure operating at enterprise standard — with offshore efficiency.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative bg-[hsl(220_25%_12%)] border border-[hsl(220_20%_18%)] rounded-2xl p-7 md:p-8 transition-all duration-300 hover:border-[hsl(220_20%_25%)] hover:shadow-[0_8px_32px_hsl(220_40%_4%/0.6)] hover:-translate-y-0.5 active:scale-[0.99] ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 2) * 100}ms` }}
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[hsl(215_20%_50%)] mb-4 block">
                {s.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
              <p className="text-[hsl(215_20%_60%)] text-sm leading-relaxed mb-6 text-pretty">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1.5 rounded-md bg-[hsl(220_25%_16%)] text-[hsl(215_20%_65%)] border border-[hsl(220_20%_20%)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
