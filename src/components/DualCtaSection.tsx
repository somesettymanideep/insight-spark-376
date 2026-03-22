import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function DualCtaSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container grid md:grid-cols-2 gap-6 md:gap-8" ref={ref}>
        {/* Left card – BlueGecko assessment */}
        <div
          className={`relative rounded-2xl overflow-hidden bg-primary p-8 md:p-10 flex flex-col justify-between ${
            isVisible ? "animate-reveal-up" : "opacity-0"
          }`}
        >
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground leading-snug text-balance">
              Ready to see BlueGecko on your data?
            </h3>
            <p className="mt-4 text-primary-foreground/70 leading-relaxed text-pretty">
              Book a free 30-minute data assessment with our migration specialists.
              We'll map your current ERP landscape, identify the top 3 migration
              risks, and show you where BlueGecko saves time and cost on your
              specific programme.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="mailto:info@nextgenlytics.com"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold bg-primary-foreground text-primary hover:shadow-lg active:scale-[0.97] transition-all duration-200"
            >
              Book Free Assessment →
            </a>
          </div>
        </div>

        {/* Right card – Partnership */}
        <div
          className={`relative rounded-2xl overflow-hidden border border-primary-foreground/10 bg-foreground p-8 md:p-10 flex flex-col justify-between ${
            isVisible ? "animate-reveal-up delay-200" : "opacity-0"
          }`}
        >
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-primary/5 translate-y-1/2 -translate-x-1/2" />
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground leading-snug text-balance">
              Are you an SAP or D365 implementation partner?
            </h3>
            <p className="mt-4 text-primary-foreground/60 leading-relaxed text-pretty">
              Bring BlueGecko and India ECC capacity to your next programme.
              White-label data capability, named offshore team, transparent
              pricing. Talk to our partnership team about how we work with SIs.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="mailto:info@nextgenlytics.com"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30 active:scale-[0.97] transition-all duration-200"
            >
              Talk to Partnership Team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
