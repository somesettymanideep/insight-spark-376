import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useCountUp } from "@/hooks/use-count-up";

const stats = [
  { end: 70, suffix: "%", label: "Faster delivery", desc: "avg. across migration programmes", color: "bg-accent" },
  { end: 90, suffix: "%", label: "Data accuracy", desc: "vs manual validation baseline", color: "bg-[hsl(90_60%_45%)]" },
  { end: 40, suffix: "%", label: "Cost reduction", desc: "estimate", color: "bg-primary" },
  { end: 6, suffix: "+", label: "Platform coverage", desc: "ERP systems supported", color: "bg-destructive" },
];

export default function StatsSection() {
  const { ref, isVisible } = useScrollReveal(0.15);
  const counters = stats.map((s) => useCountUp(s.end, 2000));

  return (
    <section className="relative py-16 md:py-24 bg-secondary overflow-hidden">
      {/* Decorative dots & shapes */}
      <DotGrid className="absolute top-6 left-8 opacity-10" rows={4} cols={5} color="hsl(var(--primary))" />
      <DotGrid className="absolute bottom-10 right-12 opacity-[0.07]" rows={3} cols={4} color="hsl(var(--primary))" />
      <DotGrid className="absolute top-1/2 left-1/3 -translate-y-1/2 opacity-[0.05]" rows={3} cols={3} color="hsl(var(--primary))" />

      {/* Colored shapes */}
      <div className="absolute top-10 right-1/4 w-3 h-3 rounded-full bg-accent/15" />
      <div className="absolute top-20 left-16 w-2.5 h-2.5 rounded-sm bg-primary/10 rotate-45" />
      <div className="absolute bottom-16 left-1/4 w-3.5 h-3.5 rounded-full bg-accent/10" />
      <div className="absolute bottom-24 right-20 w-2 h-2 rounded-full bg-primary/15" />

      <div className="container relative" ref={ref}>
        {/* Headline */}
        <div className={`text-center max-w-2xl mx-auto mb-12 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] text-foreground text-balance">
            Being the best by working with the best
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
            NextGenLytics is a global provider of unique end-to-end consulting
            solutions in the{" "}
            <span className="font-semibold text-primary">enterprise applications</span>,{" "}
            <span className="font-semibold text-primary">AI</span>, and{" "}
            <span className="font-semibold text-primary">cloud</span> space.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center rounded-xl bg-card border border-border/60 px-5 py-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${150 + i * 120}ms` }}
            >
              <div className={`w-12 h-1 rounded-full mb-5 ${stat.color}`} />
              <div ref={counters[i].ref}>
                <span className="text-4xl md:text-5xl font-bold font-heading text-primary tabular-nums">
                  {counters[i].count}
                  {stat.suffix}
                </span>
              </div>
              <p className="mt-3 font-semibold text-foreground text-sm">{stat.label}</p>
              <p className="mt-1 text-xs text-muted-foreground leading-snug">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Tiny dot-grid SVG component */
function DotGrid({
  className = "",
  rows = 3,
  cols = 4,
  color = "currentColor",
}: {
  className?: string;
  rows?: number;
  cols?: number;
  color?: string;
}) {
  const gap = 12;
  const r = 2;
  const w = (cols - 1) * gap + r * 2;
  const h = (rows - 1) * gap + r * 2;
  const dots: React.ReactNode[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      dots.push(
        <circle key={`${row}-${col}`} cx={r + col * gap} cy={r + row * gap} r={r} fill={color} />
      );
    }
  }
  return (
    <svg width={w} height={h} className={className} aria-hidden="true">
      {dots}
    </svg>
  );
}
