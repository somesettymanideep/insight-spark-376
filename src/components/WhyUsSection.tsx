import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { TrendingUp, Expand, Zap, Shield } from "lucide-react";

const reasons = [
  { icon: TrendingUp, title: "Data-Driven Decisions", desc: "Every recommendation backed by rigorous analysis and measurable outcomes." },
  { icon: Expand, title: "Scalable Solutions", desc: "Architectures that grow with your business from prototype to enterprise scale." },
  { icon: Zap, title: "Real-Time Insights", desc: "Live dashboards and streaming analytics for immediate operational visibility." },
  { icon: Shield, title: "Secure Architecture", desc: "GDPR-compliant, SOC2-ready infrastructure with auto PII detection and masking." },
];

export default function WhyUsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="why-us" className="py-20 md:py-28 section-alt">
      <div className="container" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Why Choose Us</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Structural Advantages That Deliver Results
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`text-center p-7 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-5">
                <r.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
