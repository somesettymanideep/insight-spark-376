import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useCountUp } from "@/hooks/use-count-up";
import analyticsImg from "@/assets/analytics-graphic.png";

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();
  const years = useCountUp(8, 1800);
  const industries = useCountUp(12, 1800);
  const projects = useCountUp(150, 2000);

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container grid md:grid-cols-2 gap-12 md:gap-16 items-center" ref={ref}>
        {/* Left - Image */}
        <div className={`relative ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-8">
            <img src={analyticsImg} alt="Analytics network" className="w-full" />
          </div>
          {/* Floating stat card */}
          <div className="absolute -bottom-6 -right-4 md:right-4 bg-card rounded-xl shadow-xl shadow-primary/10 border border-border/50 p-4">
            <div ref={years.ref} className="text-3xl font-bold text-primary font-heading">{years.count}+</div>
            <div className="text-xs text-muted-foreground">Years Experience</div>
          </div>
        </div>

        {/* Right - Content */}
        <div className={`${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">About Us</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Your AI-Native Data & Transformation Partner
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
            NextGenLytics is the AI-native data and transformation partner for mid-market enterprises. Our BlueGecko platform cuts ERP migration delivery by 70%, while our India ECC delivers at 30–40% below market rates — with AI embedded by default.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            From Amsterdam HQ to our global delivery centers, we bring structural advantages that translate into faster delivery, lower cost, and less risk on every programme.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div ref={industries.ref}>
              <div className="text-2xl font-bold text-primary font-heading">{industries.count}+</div>
              <div className="text-sm text-muted-foreground">Industries Served</div>
            </div>
            <div ref={projects.ref}>
              <div className="text-2xl font-bold text-primary font-heading">{projects.count}+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
