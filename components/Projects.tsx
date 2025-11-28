"use client";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section section-light py-20"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">

          {/* TÍTULO */}
         <h2
  className="
    text-4xl md:text-5xl font-bold 
    text-center tracking-tight 
    text-zinc-900 dark:text-zinc-50 
    mb-16 
    animate-fadeUp
  "
>
            Proyectos
          </h2>

          {/* GRID DE PROYECTOS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* -------- PROYECTO 1 -------- */}
            <div className="group bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-zinc-200 dark:border-zinc-800">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700">
                <Image 
                  src="/projects/bisnetpage.jpg" 
                  alt="Bisnet Sistema de Mensajería" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  Bisnet – Sistema de Mensajería Corporativa
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Plataforma de mensajería empresarial con tablero Kanban, 
                  sincronización en tiempo real, reportes operativos y dashboard moderno.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tag">C#</span>
                  <span className="tag">.NET MVC</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">Firebase</span>
                </div>

                <div className="flex gap-4">
                  <p className="btn-disabled">Demo privada</p>
                  <p className="btn-ghost">Sin repositorio</p>
                </div>
              </div>
            </div>

            {/* -------- PROYECTO 2 -------- */}
            <div className="group bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-zinc-200 dark:border-zinc-800">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-blue-200 to-blue-300 dark:from-blue-800 dark:to-blue-700">
                <Image 
                  src="/projects/pagediloja.jpg" 
                  alt="Automatización NLP con Python" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  Automatizaciones & NLP – Python
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Scripts inteligentes para clasificación, automatización y 
                  procesamiento de lenguaje natural, reduciendo tiempos operativos en un 15%.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tag">Python</span>
                  <span className="tag">NLP</span>
                  <span className="tag">Automatización</span>
                </div>

                <div className="flex gap-4">
                  <p className="btn-disabled">Demo privada</p>
                  <p className="btn-ghost">Sin repositorio</p>
                </div>
              </div>
            </div>

            {/* -------- PROYECTO 3 – Landing Page UPoints -------- */}
            <div className="group bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-zinc-200 dark:border-zinc-800">
              <a href="https://upoints.ec/" target="_blank" className="block aspect-video relative overflow-hidden bg-gradient-to-br from-green-200 to-green-300 dark:from-green-800 dark:to-green-700">
                <Image 
                  src="/projects/upointpage.jpg" 
                  alt="UPoints Landing Page" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </a>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  Landing Page Corporativa – UPoints
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Diseño y desarrollo de landing page profesional orientada a posicionamiento,
                  ventas y presentación de servicios. Desarrollo responsivo y optimizado.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tag">JavaScript</span>
                  <span className="tag">HTML/CSS</span>
                  <span className="tag">UI/UX</span>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://upoints.ec/"
                    target="_blank"
                    className="btn-primary flex items-center gap-2"
                  >
                    <FaExternalLinkAlt /> Ver Sitio
                  </a>
                </div>
              </div>
            </div>

            {/* -------- PROYECTO 4 – Web de TaytaDev -------- */}
            <div className="group bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-zinc-200 dark:border-zinc-800">
              <a href="https://www.taytadev.com/" target="_blank" className="block aspect-video relative overflow-hidden bg-gradient-to-br from-yellow-200 to-yellow-300 dark:from-yellow-800 dark:to-yellow-700">
                <Image 
                  src="/projects/taytapage.jpg" 
                  alt="TaytaDev Website" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </a>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  Página Web – TaytaDev
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Desarrollo de la página oficial de TaytaDev con diseño limpio,
                  estructura moderna, dark/light mode y optimización SEO.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tag">Next.js</span>
                  <span className="tag">TailwindCSS</span>
                  <span className="tag">UI/UX</span>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://www.taytadev.com/"
                    target="_blank"
                    className="btn-primary flex items-center gap-2"
                  >
                    <FaExternalLinkAlt /> Ver Sitio
                  </a>
                </div>
              </div>
            </div>

            {/* -------- PROYECTO 5 – Tu portafolio actual -------- */}
            <div className="group bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-zinc-200 dark:border-zinc-800">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-800 dark:to-purple-700">
                <Image 
                  src="/projects/portafoliopage.jpg" 
                  alt="Portfolio Next.js" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  Portafolio – Next.js + Tailwind
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Portafolio moderno construido con Next.js, TailwindCSS, animaciones y dark mode.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tag">Next.js</span>
                  <span className="tag">Tailwind</span>
                  <span className="tag">React</span>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/erickcu"
                    className="btn-primary flex items-center gap-2"
                    target="_blank"
                  >
                    <FaGithub /> Repo
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* BOTÓN VER MÁS */}
          <div className="mt-16 text-center">
            <a
              href="https://github.com/erickcu"
              target="_blank"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaGithub />
              Ver más proyectos en GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
