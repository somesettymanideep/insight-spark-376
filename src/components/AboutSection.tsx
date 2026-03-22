import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useCountUp } from "@/hooks/use-count-up";
import hugoImg from "@/assets/hugo-cooijmans.jpg";

const stats = [
  { label: "Founded in Amsterdam", value: 2022, suffix: "" },
  { label: "Specialists across NL and India", value: 35, suffix: "+" },
  { label: "Years BlueGecko in development", value: 2, suffix: "+" },
  { label: "Offices — AMS, Hyderabad, Lucknow", value: 3, suffix: "" },
];

const team = [
  {
    name: "Hugo Cooijmans",
    role: "Co-Founder & SAP Lead",
    bio: "Founding figure of the Dutch SAP SI ecosystem. Decades of SAP programme leadership across major NL enterprises.",
    image: hugoImg,
  },
];

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 1800);
  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-primary font-heading">
        {count}{suffix}
      </div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 md:py-28 section-alt">
      <div className="container" ref={ref}>
        {/* Two-column layout: About (8col) | Team (4col) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 items-start">

          {/* LEFT — About Us (8 columns) */}
          <div className={`md:col-span-8 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">About Us</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
              About Nextgenlytics
            </h2>
            <p className="mt-2 text-lg text-primary font-medium">
              Founded by people who have run these programmes.
            </p>

            <div className={`mt-6 space-y-4 text-muted-foreground leading-relaxed text-pretty ${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
              <p>
                Nextgenlytics was founded in Amsterdam in 2022 by data and ERP professionals with collective careers at Tier-1 system integrators. We understand the structural inefficiencies in enterprise migration programmes because we delivered them for two decades — and we built BlueGecko to eliminate them.
              </p>
              <p>
                Our team of 35+ specialists combines Amsterdam-based programme leadership with India offshore delivery — an onshore-offshore model that maintains European standards at 30–40% below Dutch SI rates. BlueGecko has been in active development for 2+ years and is in production on live migration programmes.
              </p>
            </div>

            {/* Stats row */}
            <div className={`mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 ${isVisible ? "animate-reveal-up delay-300" : "opacity-0"}`}>
              {stats.map((s) => (
                <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
              ))}
            </div>
          </div>

          {/* RIGHT — Founding Team (4 columns) */}
          <div className={`md:col-span-4 ${isVisible ? "animate-reveal-up delay-300" : "opacity-0"}`}>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Leadership
            </span>
            <h3 className="mt-3 text-2xl md:text-3xl font-bold text-foreground text-balance">
              Founding Team
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-pretty">
              Former Tier-1 SI professionals with SAP, D365, data engineering, and AI backgrounds.
            </p>

            <div className="mt-6 space-y-5">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="group bg-card rounded-2xl border border-border/50 shadow-lg shadow-primary/5 overflow-hidden transition-shadow hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-foreground font-heading">{member.name}</h4>
                    <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
