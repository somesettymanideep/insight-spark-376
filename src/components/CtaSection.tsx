import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function CtaSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container" ref={ref}>
        <div
          className={`relative rounded-3xl overflow-hidden bg-primary px-8 py-16 md:px-16 md:py-20 text-center ${
            isVisible ? "animate-reveal-up" : "opacity-0"
          }`}
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent/5 translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance leading-tight">
              Ready to Turn Your Data into Growth?
            </h2>
            <p className="mt-5 text-primary-foreground/70 text-lg">
              Book a free data assessment and see how BlueGecko can transform your migration programme.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:info@nextgenlytics.com"
                className="px-8 py-3.5 rounded-full font-semibold bg-accent text-accent-foreground hover:shadow-xl hover:shadow-accent/30 active:scale-[0.97] transition-all duration-200"
              >
                Book Consultation
              </a>
              <a
                href="mailto:info@nextgenlytics.com"
                className="px-8 py-3.5 rounded-full font-semibold border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 active:scale-[0.97] transition-all duration-200"
              >
                Request Proposal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
