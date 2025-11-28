"use client";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiDotnet,
  SiPython,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiLinux,
} from "react-icons/si";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section section-dark py-20"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

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
            Skills
          </h2>

          <div className="space-y-16">

            {/* FRONTEND */}
            <SkillCategory
            title="Frontend"
            skills={[
                { icon: <SiReact />, name: "React", color: "#61DAFB" },
                { icon: <SiNextdotjs />, name: "Next.js", color: "#ffffff" },
                { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
                { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
                { icon: <SiTailwindcss />, name: "TailwindCSS", color: "#38BDF8" },
            ]}
            />

            {/* BACKEND */}
            <SkillCategory
            title="Backend"
            skills={[
                { icon: "C#", name: "C#", color: "#9B4F97" },
                { icon: <SiDotnet />, name: ".NET MVC", color: "#512BD4" },
                { icon: <SiPython />, name: "Python", color: "#3174A3" },
                { icon: <SiNodedotjs />, name: "Node.js", color: "#3C873A" },
            ]}
            />

            {/* DATABASE */}
            <SkillCategory
            title="Bases de Datos"
            skills={[
                { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
                { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
                { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
            ]}
            />


            {/* TOOLS */}
            <SkillCategory
            title="DevOps & Herramientas"
            skills={[
                { icon: <SiGit />, name: "Git", color: "#F1502F" },
                { icon: <SiGithub />, name: "GitHub", color: "#ffffff" },
                { icon: <SiDocker />, name: "Docker", color: "#2496ED" },
                { icon: <SiLinux />, name: "Linux", color: "#FCC624" },
            ]}
            />


            {/* OTHER */}
            <SkillCategory
            title="Otras Habilidades"
            skills={[
                { icon: "📊", name: "Diseño UX/UI", color: "#ffffff" },
                { icon: "📈", name: "KPIs & Dashboards", color: "#ffffff" },
                { icon: "🤝", name: "Trabajo en Equipo", color: "#ffffff" },
                { icon: "🧠", name: "Lógica de Programación", color: "#ffffff" },
            ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* COMPONENTE REUTILIZABLE */
function SkillCategory({
  title,
  skills,
}: {
  title: string;
  skills: { icon: any; name: string; color: string }[];
}) {
  return (
    <div>
      <h3 className="section-subtitle">
        {title}
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="skill-card group relative p-6 rounded-xl shadow-sm transition-all duration-300 flex flex-col items-center text-center gap-3 
                       bg-white dark:bg-zinc-900 overflow-hidden"
          >
            {/* BORDE ANIMADO QUE RECORRE TODO EL CONTORNO */}
            <div
              className="border-animation absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `conic-gradient(
                  from 0deg,
                  transparent 0%,
                  ${skill.color} 20%,
                  transparent 40%,
                  transparent 60%,
                  ${skill.color} 80%,
                  transparent 100%
                )`,
                padding: "2px",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />

            {/* CONTENIDO */}
            <div className="relative z-10 flex flex-col items-center gap-3">
              {/* Ícono */}
              <div
                className="text-4xl transition-all duration-300 group-hover:scale-110"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              {/* Nombre */}
              <p className="text-zinc-700 dark:text-zinc-300 font-medium transition-all duration-300">
                {skill.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
