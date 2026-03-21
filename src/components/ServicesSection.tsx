import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { BarChart3, Eye, Brain, Cloud, LineChart, Database } from "lucide-react";

const services = [
  { icon: BarChart3, title: "Data Analytics", desc: "Turn raw data into strategic insights with custom analytics pipelines and reporting frameworks." },
  { icon: Eye, title: "Data Visualization", desc: "Interactive dashboards and visual storytelling that make complex data accessible to every stakeholder." },
  { icon: LineChart, title: "Business Intelligence", desc: "End-to-end BI solutions that connect your data sources, KPIs, and decision-making processes." },
  { icon: Brain, title: "AI & Predictive Analytics", desc: "Machine learning models and predictive engines that forecast trends and automate decisions." },
  { icon: Cloud, title: "Cloud Data Solutions", desc: "Scalable cloud architectures for data warehousing, ETL pipelines, and real-time processing." },
  { icon: Database, title: "ERP Data Migration", desc: "AI-native migration from SAP, D365, Infor, and legacy systems with 70% faster delivery." },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-20 md:py-28 section-alt">
      <div className="container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">What We Do</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Enterprise-Grade Analytics Services
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            From data migration to predictive intelligence, we deliver the full spectrum of analytics capabilities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative bg-card rounded-2xl p-7 shadow-sm hover:shadow-xl hover:shadow-primary/5 border border-border/50 transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <s.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
