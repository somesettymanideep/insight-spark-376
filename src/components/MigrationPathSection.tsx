import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight } from "lucide-react";
import migSap from "@/assets/migration-sap.jpg";
import migAx from "@/assets/migration-ax.jpg";
import migAs400 from "@/assets/migration-as400.jpg";
import migBc from "@/assets/migration-bc.jpg";
import migOffshore from "@/assets/migration-offshore.jpg";

const paths = [
  {
    id: "sap",
    image: migSap,
    label: "SAP ECC",
    target: "D365 F&O",
    title: "SAP ECC → D365 F&O",
    content:
      "BlueGecko's bi-directional SAP ↔ D365 connectors and pre-built field maps handle the full FI/CO, MM, SD → D365 Finance & Operations translation — cutting the mapping phase by 65%.",
  },
  {
    id: "ax",
    image: migAx,
    label: "AX 2012",
    target: "SAP S/4HANA",
    title: "AX 2012 → SAP S/4HANA",
    content:
      "AX 2012 native connectors, cross-platform AI mapping between AX and SAP structures, and automated ABAP load generation via Code Cheetah — managing one of the most complex cross-vendor migrations in the market.",
  },
  {
    id: "as400",
    image: migAs400,
    label: "AS/400",
    target: "S/4HANA or D365",
    title: "AS/400 → S/4HANA or D365",
    content:
      "Native AS/400 and IBM DB2 connectors extract RPG/flat-file data that generic tools can't reach. AI schema discovery maps undocumented legacy structures to any modern ERP target.",
  },
  {
    id: "bc",
    image: migBc,
    label: "Business Central",
    target: "Infor Uplift",
    title: "Business Central or Infor Uplift",
    content:
      "Native BC and Infor CloudSuite/M3 connectors handle the environments other platforms don't support — with AI-guided schema discovery for undocumented tables.",
  },
  {
    id: "offshore",
    image: migOffshore,
    label: "Offshore",
    target: "Delivery Partner",
    title: "Need an Offshore Delivery Partner?",
    content:
      "Native BC and Infor CloudSuite/M3 connectors handle the environments other platforms don't support — with AI-guided schema discovery for undocumented tables.",
  },
];

export default function MigrationPathSection() {
  const { ref, isVisible } = useScrollReveal();
  const [activeId, setActiveId] = useState<string | null>(null);

  // First card is "active" by default when nothing is hovered
  const resolvedActive = activeId ?? paths[0].id;

  return (
    <section id="migration" className="py-20 md:py-28 bg-foreground">
      <div className="container" ref={ref}>
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Migration Paths
            </span>
          </div>
          <h2
            className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.1] text-balance mb-4 ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            Find your migration path — where are you today?
          </h2>
        </div>

        {/* Expandable Cards Row */}
        <div
          className={`flex gap-3 h-[420px] md:h-[480px] ${
            isVisible ? "animate-reveal-up delay-200" : "opacity-0"
          }`}
          onMouseLeave={() => setActiveId(null)}
        >
          {paths.map((p) => {
            const isActive = resolvedActive === p.id;

            return (
              <div
                key={p.id}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                style={{
                  flex: isActive ? 4 : 1,
                  transition: "flex 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  minWidth: 0,
                }}
                onMouseEnter={() => setActiveId(p.id)}
              >
                {/* Background Image */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Collapsed label (vertical) */}
                <div
                  className="absolute inset-0 flex items-end justify-center pb-8 transition-opacity duration-300"
                  style={{ opacity: isActive ? 0 : 1, pointerEvents: isActive ? "none" : "auto" }}
                >
                  <span
                    className="text-white font-bold text-sm tracking-wide whitespace-nowrap"
                    style={{
                      writingMode: "vertical-lr",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {p.label} → {p.target}
                  </span>
                </div>

                {/* Expanded content */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 transition-opacity duration-500"
                  style={{ opacity: isActive ? 1 : 0, pointerEvents: isActive ? "auto" : "none" }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4 text-balance">
                    {p.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 max-w-lg text-pretty">
                    {p.content}
                  </p>
                  <button className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold text-sm px-5 py-2.5 rounded-lg w-fit hover:brightness-110 transition-all duration-200 active:scale-[0.97]">
                    Find out more <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
