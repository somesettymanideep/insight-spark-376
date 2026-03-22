import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import hugoImg from "@/assets/hugo-cooijmans.jpg";

const team = [
  {
    name: "Hugo Cooijmans",
    role: "Co-Founder & SAP Lead",
    bio: "Founding figure of the Dutch SAP SI ecosystem. Decades of SAP programme leadership across major NL enterprises. The credibility that opens doors.",
    image: hugoImg,
  },
];

export default function TeamSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="team" className="py-20 md:py-28">
      <div className="container" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Nextgenlytics Leadership
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Founding Team
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            Former Tier-1 SI professionals with SAP, D365, data engineering, and AI backgrounds. Built to run the engagements we spent careers delivering for others.
          </p>
        </div>

        <div className={`mt-14 flex justify-center ${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
          {team.map((member) => (
            <div
              key={member.name}
              className="group max-w-sm w-full bg-card rounded-2xl border border-border/50 shadow-lg shadow-primary/5 overflow-hidden transition-shadow hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground font-heading">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
