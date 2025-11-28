// "use client";

// import { useEffect, useState } from "react";
// import { FiSun, FiMoon } from "react-icons/fi";

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState<"light" | "dark">("dark");
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     // Verificar el tema guardado o el sistema
//     const savedTheme = localStorage.getItem("theme");
//     const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
//       .matches
//       ? "dark"
//       : "light";
//     const initialTheme = (savedTheme as "light" | "dark") || systemTheme;
//     setTheme(initialTheme);
    
//     // Aplicar el tema al elemento html
//     if (initialTheme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
    
//     // Aplicar el tema al elemento html
//     if (newTheme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   };

//   if (!mounted) return null;

//   return (
//     <button
//       onClick={toggleTheme}
//       className="fixed top-6 right-6 z-50 group"
//       aria-label="Toggle theme"
//     >
//       {/* Contenedor con efecto glass */}
//       <div className="relative">
//         {/* Glow effect */}
//         <div
//           className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
//                      rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"
//         />

//         {/* Botón principal */}
//         <div
//           className="relative w-14 h-14 flex items-center justify-center rounded-full
//                      backdrop-blur-xl bg-white/80 dark:bg-zinc-900/80 
//                      border-2 border-zinc-200 dark:border-zinc-700
//                      shadow-lg hover:shadow-xl
//                      transition-all duration-300
//                      group-hover:scale-110 group-hover:rotate-12"
//         >
//           {/* Iconos con animación */}
//           <div className="relative w-6 h-6">
//             {/* Sol */}
//             <FiSun
//               className={`absolute inset-0 w-6 h-6 text-amber-500 transition-all duration-500 ${
//                 theme === "light"
//                   ? "opacity-100 rotate-0 scale-100"
//                   : "opacity-0 -rotate-90 scale-50"
//               }`}
//             />
//             {/* Luna */}
//             <FiMoon
//               className={`absolute inset-0 w-6 h-6 text-indigo-500 transition-all duration-500 ${
//                 theme === "dark"
//                   ? "opacity-100 rotate-0 scale-100"
//                   : "opacity-0 rotate-90 scale-50"
//               }`}
//             />
//           </div>
//         </div>

//         {/* Tooltip */}
//         <div
//           className="absolute -bottom-12 left-1/2 -translate-x-1/2 
//                      px-3 py-1.5 rounded-lg text-xs font-medium
//                      bg-zinc-900 dark:bg-white text-white dark:text-zinc-900
//                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
//                      pointer-events-none whitespace-nowrap"
//         >
//           {theme === "light" ? "Modo oscuro" : "Modo claro"}
//         </div>
//       </div>
//     </button>
//   );
// }
