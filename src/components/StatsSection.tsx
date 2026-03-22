import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useCountUp } from "@/hooks/use-count-up";

const stats = [
  { end: 28, suffix: "+", label: "Years", desc: "delivering solutions for leading companies", color: "bg-accent" },
  { end: 92, suffix: "%", label: "Customer approval", desc: "rating", color: "bg-[hsl(90_60%_45%)]" },
  { end: 550, suffix: "+", label: "Active clients", desc: "across five continents", color: "bg-primary" },
];


export default function StatsSection() {
  const { ref, isVisible } = useScrollReveal(0.15);
  const counters = stats.map((s) => useCountUp(s.end, 2000));

  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      {/* Decorative dots & shapes */}
      <DotGrid className="absolute top-6 left-8 opacity-30" rows={4} cols={5} color="hsl(var(--primary))" />
      <DotGrid className="absolute bottom-10 right-12 opacity-20" rows={3} cols={4} color="hsl(var(--accent))" />
      <DotGrid className="absolute top-1/2 left-1/3 -translate-y-1/2 opacity-15" rows={3} cols={3} color="hsl(var(--destructive))" />

      {/* Colored shapes */}
      <div className="absolute top-10 right-1/4 w-3 h-3 rounded-full bg-accent/40" />
      <div className="absolute top-20 left-16 w-2.5 h-2.5 rounded-sm bg-primary/30 rotate-45" />
      <div className="absolute bottom-16 left-1/4 w-3.5 h-3.5 rounded-full bg-destructive/25" />
      <div className="absolute bottom-24 right-20 w-2 h-2 rounded-full bg-primary/35" />
      <div className="absolute top-1/3 right-10 w-2.5 h-2.5 rounded-sm bg-accent/30 rotate-12" />
      <div className="absolute bottom-8 left-12 w-2 h-2 rounded-sm bg-[hsl(90_60%_45%/0.35)] rotate-45" />

      <div
        className="container relative grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        ref={ref}
      >
        {/* Left – headline + description */}
        <div className={isVisible ? "animate-reveal-up" : "opacity-0"}>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] text-foreground text-balance">
            Being the best by working with the best
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-md text-pretty">
            NextGenLytics is a global provider of unique end-to-end consulting
            solutions in the{" "}
            <span className="font-semibold text-primary">enterprise applications</span>,{" "}
            <span className="font-semibold text-primary">AI</span>, and{" "}
            <span className="font-semibold text-primary">cloud</span> space.
          </p>
        </div>

        {/* Right – stat cards */}
        <div className="flex flex-col gap-5">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-center gap-5 rounded-xl bg-card border border-border/50 shadow-sm px-6 py-5 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${150 + i * 120}ms` }}
            >
              {/* Big number */}
              <div className="flex items-center gap-4 shrink-0" ref={counters[i].ref}>
                <span className="text-4xl md:text-5xl font-bold font-heading text-foreground tabular-nums">
                  {counters[i].count}
                  {stat.suffix}
                </span>
                <div className={`w-1 h-10 rounded-full ${stat.color}`} />
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-muted-foreground leading-snug">
                <span className="font-semibold text-foreground">{stat.label}</span>{" "}
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dark metrics banner */}
      <div
        className="container mt-16"
        ref={darkRef}
      >
        <div className="rounded-2xl bg-[hsl(220_50%_12%)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 px-2 py-4">
          {darkStats.map((stat, i) => (
            <div
              key={stat.note}
              className={`flex flex-col items-center text-center px-6 py-8 ${
                darkVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div ref={darkCounters[i].ref}>
                <span className={`text-5xl md:text-6xl font-bold font-heading ${stat.textColor}`}>
                  {darkCounters[i].count}{stat.suffix}
                </span>
              </div>
              <p className="mt-4 text-sm text-white/80 leading-relaxed max-w-[220px]">
                {stat.desc}
              </p>
              <span className="mt-3 text-xs text-white/40 tracking-wide">
                {stat.note}
              </span>
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
