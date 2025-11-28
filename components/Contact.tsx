"use client";

import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";

export default function Contact() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function move(e: any) {
    setPos({ x: e.clientX, y: e.clientY });
  }

  return (
    <section
      id="contact"
      onMouseMove={move}
      className="section section-light relative flex items-center justify-center py-20"
    >
      {/* SPOTLIGHT FOLLOW MOUSE */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition duration-300"
        style={{
          background: `radial-gradient(
            600px circle at ${pos.x}px ${pos.y}px,
            rgba(255,255,255,0.10),
            transparent 40%
          )`,
        }}
      />

      {/* GLOW DETRÁS DEL FORMULARIO */}
      <div className="glow-bg glow-bg-center opacity-30 z-0"/>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">

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
        Contacto
        </h2>


          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

            {/* LEFT SIDE - Info de contacto */}
            <div className="space-y-10">

              <div>
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                  Hablemos
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Si tienes un proyecto, necesitas un desarrollador o quieres evaluar una idea,
                  estaré encantado de escucharte. Puedes escribirme o usar el formulario.
                </p>
              </div>

              <div className="space-y-8">

                <ContactItem
                  icon={<FiMail />}
                  title="Email"
                  text="erickl.cuenca.cl@gmail.com"
                  color="#38BDF8"
                />

                <ContactItem
                  icon={<FiPhone />}
                  title="Teléfono"
                  text="+593 95 897 1767"
                  color="#10B981"
                />

                <ContactItem
                  icon={<FiMapPin />}
                  title="Ubicación"
                  text="Loja, Loja, Ecuador"
                  color="#F59E0B"
                />

              </div>

              {/* SOCIAL ICONS PREMIUM */}
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-50 mb-4">
                  Sígueme en
                </h4>
                <div className="flex gap-4">

                  <SocialIcon
                    href="https://github.com/erickcu"
                    icon={<FiGithub />}
                    color="#ffffff"
                  />

                  <SocialIcon
                    href="https://www.linkedin.com/in/erick-cuenca-a650bb247/"
                    icon={<FiLinkedin />}
                    color="#0A66C2"
                  />


                </div>
              </div>

            </div>

            {/* RIGHT SIDE — FORMULARIO MEJORADO */}
            <div className="">
              <div className="relative group">
                {/* Glow effect detrás del formulario */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000" />
                
                {/* Formulario */}
                <div className="relative backdrop-blur-xl bg-white/80 dark:bg-zinc-900/60 rounded-3xl p-8 md:p-12 shadow-2xl border border-zinc-200/50 dark:border-zinc-700/50">
                  
                  {/* Header del formulario */}
                  <div className="mb-8 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                      Envíame un mensaje
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      Te responderé lo antes posible
                    </p>
                  </div>

                  <form 
                    action="https://formspree.io/f/mvgaerga"
                    method="POST"
                    className="space-y-6"
                  >
                    {/* Grid para nombre y email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <FloatInput id="name" name="name" label="Nombre completo" type="text" />
                      <FloatInput id="email" name="email" label="Email" type="email" />
                    </div>

                    <FloatInput id="subject" name="subject" label="Asunto" type="text" />
                    <FloatTextarea id="message" name="message" label="Mensaje" />

                    <button
                      type="submit"
                      className="w-full btn-primary py-4 text-lg tracking-wide justify-center group relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Enviar mensaje
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                      {/* Efecto hover animado */}
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </form>

                  {/* Decoración */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-indigo-500/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-4 left-4 w-20 h-20 bg-purple-500/10 rounded-full blur-3xl" />
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  );
}

/* CONTACT ITEM ANIMADO */
function ContactItem({ icon, title, text, color }: any) {
  return (
    <div className="flex items-start gap-4 group relative">

      {/* Glow */}
      <div
        className="absolute left-0 top-0 w-14 h-14 blur-xl opacity-0 
                   group-hover:opacity-80 transition duration-500 -z-10"
        style={{ background: color + "80" }}
      />

      <div
        className="w-14 h-14 flex items-center justify-center text-2xl rounded-xl
                   bg-zinc-100 dark:bg-zinc-900 transition-transform duration-300 group-hover:scale-110"
        style={{ color }}
      >
        {icon}
      </div>

      <div>
        <h4 className="font-medium text-zinc-900 dark:text-zinc-100">
          {title}
        </h4>
        <p className="text-zinc-600 dark:text-zinc-400">{text}</p>
      </div>
    </div>
  );
}

/* SOCIAL ICON CON ANIMACIÓN ORBITAL */
function SocialIcon({ href, icon, color }: any) {
  return (
    <a
      href={href}
      target="_blank"
      className="w-12 h-12 flex items-center justify-center rounded-xl text-2xl 
                 bg-zinc-100 dark:bg-zinc-900 transition-all duration-300 
                 hover:scale-125 hover:-rotate-6 hover:shadow-xl"
      style={{ color }}
    >
      {icon}
    </a>
  );
}

/* INPUT CON FLOAT LABEL ANIMADO */
function FloatInput({ id, name, label, type }: any) {
  return (
    <div className="relative group">
      <input
        id={id}
        name={name}
        type={type}
        required
        className="
          peer w-full px-5 pt-7 pb-3 rounded-2xl
          bg-white/60 dark:bg-zinc-800/60
          border-2 border-zinc-200 dark:border-zinc-700
          text-zinc-900 dark:text-zinc-100
          placeholder-transparent
          shadow-sm
          transition-all duration-300
          focus:border-indigo-500 dark:focus:border-indigo-400
          focus:bg-white dark:focus:bg-zinc-800
          focus:ring-4 focus:ring-indigo-500/10 dark:focus:ring-indigo-400/10
          focus:shadow-lg focus:shadow-indigo-500/5
          hover:border-indigo-300 dark:hover:border-indigo-600
          hover:shadow-md
        "
        placeholder={label}
      />

      {/* Label flotante mejorado */}
      <label
        htmlFor={id}
        className="
          absolute left-5 top-5
          text-zinc-500 dark:text-zinc-400
          pointer-events-none
          transition-all duration-300 ease-out
          peer-focus:-translate-y-3 peer-focus:translate-x-0 peer-focus:text-xs peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400 peer-focus:font-semibold
          peer-valid:-translate-y-3 peer-valid:translate-x-0 peer-valid:text-xs peer-valid:text-zinc-600 dark:peer-valid:text-zinc-400
        "
      >
        {label}
      </label>

      {/* Indicador de focus */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 rounded-full" />
    </div>
  );
}


function FloatTextarea({ id, name, label }: any) {
  return (
    <div className="relative group">
      <textarea
        id={id}
        name={name}
        required
        rows={6}
        className="
          peer w-full px-5 pt-7 pb-3 rounded-2xl
          bg-white/60 dark:bg-zinc-800/60
          border-2 border-zinc-200 dark:border-zinc-700
          text-zinc-900 dark:text-zinc-100
          placeholder-transparent
          shadow-sm
          transition-all duration-300
          resize-none
          focus:border-indigo-500 dark:focus:border-indigo-400
          focus:bg-white dark:focus:bg-zinc-800
          focus:ring-4 focus:ring-indigo-500/10 dark:focus:ring-indigo-400/10
          focus:shadow-lg focus:shadow-indigo-500/5
          hover:border-indigo-300 dark:hover:border-indigo-600
          hover:shadow-md
        "
        placeholder={label}
      />

      <label
        htmlFor={id}
        className="
          absolute left-5 top-5
          text-zinc-500 dark:text-zinc-400
          pointer-events-none
          transition-all duration-300 ease-out
          peer-focus:-translate-y-3 peer-focus:translate-x-0 peer-focus:text-xs peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400 peer-focus:font-semibold
          peer-valid:-translate-y-3 peer-valid:translate-x-0 peer-valid:text-xs peer-valid:text-zinc-600 dark:peer-valid:text-zinc-400
        "
      >
        {label}
      </label>

      {/* Indicador de focus */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 rounded-full" />
    </div>
  );
}
