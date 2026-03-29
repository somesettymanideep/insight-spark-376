import { useRef } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function VideoShowcaseSection() {
  const { ref, isVisible } = useScrollReveal();
  const videoRef = useRef<HTMLVideoElement>(null);


  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container" ref={ref}>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Platform Overview
            </span>
            <span className="w-8 h-0.5 bg-accent" />
          </div>
          <h2
            className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-[1.1] text-balance mb-4 ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            See How BlueGecko Powers Intelligent Data Migration
          </h2>
          <p
            className={`text-muted-foreground text-base md:text-lg max-w-2xl mx-auto ${
              isVisible ? "animate-reveal-up delay-100" : "opacity-0"
            }`}
          >
            Watch our end-to-end AI-driven migration platform in action — from source profiling to target go-live.
          </p>
        </div>

        {/* Video */}
        <div
          className={`max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border/50 ${
            isVisible ? "animate-reveal-up delay-200" : "opacity-0"
          }`}
        >
          <video
            ref={videoRef}
            className="w-full aspect-video bg-black"
            controls
            muted
            playsInline
            preload="metadata"
          >
            <source src={`${import.meta.env.BASE_URL}videos/bluegecko-overview.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
