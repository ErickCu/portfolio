"use client";

import Image from "next/image";
import { FiStar, FiCode, FiBriefcase, FiMapPin } from "react-icons/fi";

export default function About() {
  return (
    <section
      id="about"
      className="section section-light relative flex items-center justify-center py-20"
    >
      {/* Glow global */}
      <div className="glow-bg glow-bg-center" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* TITLE */}
         <h2
  className="
    text-4xl md:text-5xl font-bold 
    text-center tracking-tight 
    text-zinc-900 dark:text-zinc-50 
    mb-16 
    animate-fadeUp
  "
>
            Sobre Mí
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT — IMAGE */}
            <div className="relative group mx-auto w-[300px] md:w-[360px]">

              {/* Glow detrás de la imagen */}
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition duration-500"
                style={{
                  background:
                    "radial-gradient(circle, rgba(99,102,241,0.6), transparent 70%)",
                }}
              />

              {/* Marco animado */}
              <div
                className="absolute inset-0 rounded-3xl p-[2px] opacity-40 group-hover:opacity-100 transition-all duration-500"
                style={{
                  background:
                    "conic-gradient(from 180deg, #6366f1, #38bdf8, #818cf8, #6366f1)",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  WebkitMaskComposite: "xor",
                }}
              />

              {/* Imagen */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl transform transition duration-500 group-hover:scale-[1.04] group-hover:rotate-1">
                <Image
                  src="/fotocv.jpg" // cambia por tu imagen real
                  width={600}
                  height={600}
                  alt="Erick Cuenca"
                />
              </div>
            </div>

            {/* RIGHT — TEXT */}
            <div className="space-y-8">

              {/* BIO */}
              <div className="prose prose-lg dark:prose-invert leading-relaxed text-zinc-700 dark:text-zinc-300">
                <p>
                  Soy un desarrollador Full Stack con experiencia en{" "}
                  <strong>.NET MVC, React, Next.js, Python y Firebase</strong>.
                  Me especializo en construir interfaces modernas, dashboards,
                  sistemas empresariales y automatizaciones que optimizan
                  procesos reales.
                </p>

                <p>
                  Actualmente vivo en <strong>Loja, Ecuador</strong>, y trabajo
                  desarrollando soluciones escalables, limpias y centradas en la
                  experiencia del usuario.
                </p>

                <p>
                  Disfruto de resolver problemas complejos, crear productos que
                  funcionen de verdad y construir herramientas que generen
                  impacto para las personas y negocios.
                </p>
              </div>

              {/* EXTRA INFO */}
              <div className="space-y-5">
                <AboutInfo
                  icon={<FiMapPin />}
                  text="Loja, Ecuador"
                />
                <AboutInfo
                  icon={<FiBriefcase />}
                  text="Desarrollador Full Stack — Freelance & Corporativo"
                />
                <AboutInfo
                  icon={<FiCode />}
                  text="Apasionado por UX/UI, sistemas empresariales y automatización"
                />
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-6 pt-6">

                <StatBox number="3+" label="Años de experiencia" />
                <StatBox number="25+" label="Proyectos realizados" />
                <StatBox number="12+" label="Stack tecnológicos" />

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* COMPONENTES */

function AboutInfo({ icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
      <span className="text-indigo-500 text-xl">{icon}</span>
      <p className="text-lg">{text}</p>
    </div>
  );
}

function StatBox({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center group">
      <h3
        className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 
                   transition-all duration-500 group-hover:text-indigo-400"
      >
        {number}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 mt-1 text-sm">
        {label}
      </p>
    </div>
  );
}
