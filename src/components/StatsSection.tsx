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
    <section className="py-16 md:py-24 bg-background">
      <div
        className="container grid md:grid-cols-2 gap-12 md:gap-16 items-center"
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
    </section>
  );
}
