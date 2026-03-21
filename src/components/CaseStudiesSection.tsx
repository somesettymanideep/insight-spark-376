import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    title: "D365 F&O AMS — Live Client",
    problem: "Legacy ERP system causing data silos and delayed reporting across 14 business units.",
    solution: "Full D365 Finance & Operations migration with BlueGecko automated data profiling.",
    result: "70% faster migration, 90% automated data validation",
  },
  {
    title: "SAP S/4HANA Migration",
    problem: "Manual data mapping consuming 60% of project timeline with high error rates.",
    solution: "AI-driven field mapping and ETL generation reducing manual effort dramatically.",
    result: "65% faster mapping, 40% cost reduction",
  },
  {
    title: "Cross-Platform Analytics Hub",
    problem: "Fragmented data across Salesforce, SAP, and custom systems preventing unified reporting.",
    solution: "Cloud data warehouse with real-time connectors and predictive analytics layer.",
    result: "Real-time insights, 3x faster decision cycles",
  },
];

export default function CaseStudiesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="cases" className="py-20 md:py-28">
      <div className="container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Case Studies</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Proven Results Across Industries
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div
              key={c.title}
              className={`group relative bg-card rounded-2xl border border-border/50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="h-2 bg-gradient-to-r from-primary to-accent" />
              <div className="p-7">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-foreground text-lg leading-tight">{c.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 ml-2" />
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-foreground">Challenge: </span>
                    <span className="text-muted-foreground">{c.problem}</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Solution: </span>
                    <span className="text-muted-foreground">{c.solution}</span>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <span className="font-semibold text-primary">{c.result}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
