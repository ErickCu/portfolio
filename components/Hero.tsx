"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative w-full min-h-screen overflow-hidden
        flex items-center justify-center
        transition-all duration-700
        bg-gradient-to-br 
        from-zinc-50 via-zinc-100 to-zinc-200
        dark:from-[#030712] dark:via-black dark:to-zinc-900
        py-20 md:py-0
      "
    >
      {/* ==== BLOBS / GLOWS DEL FONDO ==== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="
          absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl 
          bg-indigo-500/20 dark:bg-indigo-500/40 
          animate-pulse
          transition-all duration-700
        "/>

        <div className="
          absolute bottom-20 right-14 w-96 h-96 rounded-full blur-3xl 
          bg-purple-500/20 dark:bg-purple-500/40 
          animate-pulse
          transition-all duration-700
        "/>
      </div>

      {/* ==== CONTENIDO ==== */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* ==== FOTO DE PERFIL ==== */}
          <div className="mb-6 md:mb-10 flex justify-center animate-fadeUp">
            <div className="relative group">

              {/* Glow detrás del avatar */}
              <div className="
                absolute -inset-3 rounded-full blur-2xl opacity-30 
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                dark:opacity-40 dark:blur-3xl
                transition-all duration-700
              "/>

              {/* Contenedor del avatar */}
              <div className="
                relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl
                bg-zinc-200 dark:bg-zinc-800
                border-4 border-white dark:border-zinc-900
                transition-all duration-700 
                group-hover:scale-105
              ">
                <img 
                  src="/fotocv.jpg"
                  className="w-full h-full object-cover"
                  alt="Erick Cuenca"
                />
              </div>
            </div>
          </div>

          {/* ==== NOMBRE ==== */}
          <h1 className="
            text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight 
            text-zinc-900 dark:text-zinc-50 
            mb-4 md:mb-6 transition-colors duration-700 animate-fadeUp
            leading-tight
          ">
            Erick Leonardo Cuenca
          </h1>

          {/* ==== TÍTULOS ==== */}
          <h2 className="
            text-lg sm:text-xl md:text-3xl font-medium 
            text-zinc-600 dark:text-zinc-300 
            mb-6 md:mb-8 transition-colors duration-700 
            animate-fadeUp delay-150
            leading-relaxed px-4
          ">
            Full-Stack Developer • C# / .NET • React • Next.js • Python
          </h2>

          {/* ==== DESCRIPCIÓN ==== */}
          <p className="
            text-base md:text-lg leading-relaxed 
            text-zinc-700 dark:text-zinc-300 
            max-w-2xl mx-auto mb-8 md:mb-12 
            transition-colors duration-700 
            animate-fadeUp delay-300
            px-4
          ">
            Desarrollador Full-Stack con experiencia en sistemas empresariales,
            automatizaciones con Python + NLP, dashboards, interfaces modernas
            y aplicaciones web con .NET, React y Next.js.
          </p>

          {/* ==== BOTONES ==== */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-fadeUp delay-500 px-4">

            {/* Botón "Ver Proyectos" */}
            <a
              href="#projects"
              className="
                px-6 py-3 rounded-xl font-semibold text-base
                shadow-lg transition-all duration-500 
                bg-zinc-900 text-white hover:bg-zinc-800
                dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200
              "
            >
              Ver Proyectos
            </a>

            {/* Botón "Contactar" */}
            <a
              href="#contact"
              className="
                px-6 py-3 rounded-xl font-semibold border text-base
                shadow-lg transition-all duration-500 
                bg-white text-zinc-900 border-zinc-300 hover:bg-zinc-100
                dark:bg-zinc-900 dark:text-zinc-50 dark:border-zinc-700 
                dark:hover:bg-zinc-700
              "
            >
              Contactar
            </a>
          </div>

          {/* ==== REDES SOCIALES ==== */}
          <div className="mt-8 md:mt-12 flex justify-center gap-4 md:gap-6 animate-fadeUp delay-700">

            {/* GitHub */}
            <a
              href="https://github.com/erickcu"
              target="_blank"
              className="
                group p-3 md:p-4 rounded-full transition-all duration-500 
                bg-white shadow-lg border border-zinc-300
                dark:bg-zinc-900 dark:border-zinc-700 
                hover:scale-125 hover:shadow-xl
              "
            >
              <FaGithub className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white transition"/>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/erick-cuenca-a650bb247/"
              target="_blank"
              className="
                group p-3 md:p-4 rounded-full transition-all duration-500 
                bg-white shadow-lg border border-zinc-300
                dark:bg-zinc-900 dark:border-zinc-700 
                hover:scale-125 hover:shadow-xl
              "
            >
              <FaLinkedin className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition"/>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}