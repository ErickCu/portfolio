"use client";

import { useEffect, useRef } from "react";

export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      const line = lineRef.current;
      if (!line) return;

      const rect = line.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight) {
        const visible = Math.min(1, (windowHeight - rect.top) / rect.height);
        line.style.setProperty("--line-scale", visible.toString());
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="experience"
      className="section section-dark relative py-20"
    >
      {/* Glow global */}
      <div className="glow-bg glow-bg-center" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
         <h2
  className="
    text-4xl md:text-5xl font-bold 
    text-center tracking-tight 
    text-zinc-900 dark:text-zinc-50 
    mb-16 
    animate-fadeUp
  "
>
            Experiencia
          </h2>

          <div className="relative">
            <div
              ref={lineRef}
              className="absolute left-0 md:left-1/2 w-1 bg-gradient-to-b from-indigo-500 via-sky-400 to-indigo-500 opacity-70"
              style={{
                height: "100%",
                transformOrigin: "top",
                transform: "scaleY(var(--line-scale, 0))",
                transition: "transform 0.4s ease-out",
              }}
            />

            <div className="space-y-20">
              <TimelineItem
                side="left"
                title="Desarrollador Full-Stack / Junior"
                company="Divusware"
                period="Abr 2025 – Oct 2025"
                description={`Lideré el desarrollo y mantenimiento del sistema de mensajería Bisnet...`}
                tech={["C#", ".NET MVC", "JavaScript", "Firebase", "SQL", "UX/UI"]}
                color="#61DAFB"
              />

              <TimelineItem
                side="right"
                title="Desarrollador / Contrato"
                company="Ediloja"
                period="Sep 2024 – Abr 2025"
                description={`Automatización y procesamiento NLP...`}
                tech={["Python", "Automatización", "NLP"]}
                color="#3174A3"
              />

              <TimelineItem
                side="left"
                title="Desarrollador / Freelance"
                company="SuitSoftware"
                period="2024"
                description={`Desarrollo ERP/Odoo y landing pages corporativas...`}
                tech={["Odoo", "JavaScript", "HTML/CSS"]}
                color="#764ABC"
              />

              <TimelineItem
                side="right"
                title="Proyectos Independientes"
                company="TaytaDev"
                period="2020 – 2024"
                description={`Webs, automatizaciones y consultoría técnica...`}
                tech={["Next.js", "TailwindCSS", "Python"]}
                color="#38BDF8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* TIMELINE ITEM */
function TimelineItem({
  side,
  title,
  company,
  period,
  description,
  tech,
  color,
}: {
  side: "left" | "right";
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  color: string;
}) {
  const alignment =
    side === "left"
      ? "md:pr-12 md:text-right md:w-1/2"
      : "md:ml-auto md:pl-12 md:text-left md:w-1/2";

  return (
    <div className="relative flex flex-col md:flex-row group">

      {/* CARD */}
      <div
        className={`${alignment} relative p-8 rounded-2xl 
                    bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xl 
                    shadow-xl transition-all duration-500 
                    group-hover:-translate-y-2 group-hover:scale-[1.02]`}
      >

        {/* GLOW DETRÁS DEL CARD */}
        <div
          className="absolute inset-0 rounded-2xl blur-3xl opacity-0 group-hover:opacity-40 transition duration-500 -z-10"
          style={{
            background: `${color}40`,
          }}
        />

        {/* BORDE ESTÁTICO (NO GIRATORIO) */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-500"
          style={{
            padding: "2px",
            background: `linear-gradient(135deg, ${color}, transparent 60%)`,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
          }}
        />

        {/* CONTENT */}
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
          {title}
        </h3>

        <p className="text-zinc-600 dark:text-zinc-400 font-medium">{company}</p>

        <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-4">{period}</p>

        <p className="text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* DOT BRILLANTE */}
      <div
        className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-black"
        style={{
          transform: "translate(-50%, 0)",
          background: color,
          boxShadow: `0 0 20px ${color}`,
          animation: "pulseDot 1.4s infinite ease-in-out",
        }}
      />

      {/* Pulse del dot (no rotación) */}
      <style jsx>{`
        @keyframes pulseDot {
          0% { box-shadow: 0 0 10px ${color}; }
          50% { box-shadow: 0 0 35px ${color}; }
          100% { box-shadow: 0 0 10px ${color}; }
        }
      `}</style>
    </div>
  );
}
