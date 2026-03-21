import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Search, BarChart3, Wrench, Send, RefreshCcw } from "lucide-react";

const steps = [
  { icon: Search, title: "Discover", desc: "Assess your data landscape and define objectives" },
  { icon: BarChart3, title: "Analyze", desc: "Profile data quality and identify transformation needs" },
  { icon: Wrench, title: "Build", desc: "Develop automated pipelines and AI-driven solutions" },
  { icon: Send, title: "Deliver", desc: "Deploy, validate, and go live with confidence" },
  { icon: RefreshCcw, title: "Optimize", desc: "Continuous improvement and managed services" },
];

export default function ProcessSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="process" className="py-20 md:py-28 section-alt">
      <div className="container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Our Process</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            A Proven Framework for Success
          </h2>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-border" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className={`relative text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-card border-2 border-primary/20 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <s.icon className="w-8 h-8 text-primary" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
