import dashboardImg from "@/assets/dashboard-mockup.png";

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Subtle bg gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.05]" />
      
      <div className="container relative grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        {/* Left */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 animate-reveal-up">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            ERP Data Migration & Analytics
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] text-foreground animate-reveal-up delay-100 text-balance">
            Transform Data into Actionable Business Intelligence
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-md animate-reveal-up delay-200 text-pretty">
            We help enterprises unlock insights, optimize decisions, and drive growth with advanced analytics and AI-native ERP migration.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-reveal-up delay-300">
            <a
              href="#contact"
              className="px-7 py-3 rounded-full font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.97] transition-all duration-200"
            >
              Get a Demo
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full font-semibold border-2 border-primary/20 text-primary hover:bg-primary/5 active:scale-[0.97] transition-all duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Trust stats */}
          <div className="mt-12 flex gap-8 animate-reveal-up delay-500">
            {[
              { value: "35+", label: "Specialists" },
              { value: "70%", label: "Faster Delivery" },
              { value: "40%", label: "Cost Reduction" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-primary font-heading">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative animate-reveal-up delay-300">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/50">
            <img
              src={dashboardImg}
              alt="Analytics Dashboard"
              className="w-full"
              loading="eager"
            />
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-accent/20 -z-10" />
          <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-primary/10 -z-10" />
        </div>
      </div>
    </section>
  );
}
