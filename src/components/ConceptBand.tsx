"use client";

import { motion } from "framer-motion";

export function ConceptBand() {
  return (
    <section id="conceito" className="py-20 bg-[#e7e6df] border-y border-border-light relative overflow-hidden">
      <div className="max-w-[1392px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Label Lateral */}
          <div className="lg:col-span-3 flex flex-col gap-2 text-[10px] font-bold font-mono tracking-[0.18em] text-ink-muted">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-xs" />
              <span>O CONCEITO</span>
            </span>
            <span className="text-ink">POR TRÁS DO NOME PENTAMINÓ</span>
          </div>

          {/* Copy Central de Impacto */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <p className="text-xl sm:text-2xl font-normal tracking-[-0.02em] text-ink leading-snug">
              Na matemática, cinco quadrados idênticos formam exatamente doze estruturas distintas.
            </p>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              <strong className="font-semibold text-ink">Na prática, vemos essa mesma oportunidade nos negócios:</strong>{" "}
              reorganizar conexões, pessoas e ferramentas existentes para abrir novas possibilidades operacionais e de receita.
            </p>
          </div>

          {/* Composição Geométrica Interativa de 5 Blocos */}
          <div className="lg:col-span-3 flex justify-start lg:justify-end">
            <div className="relative w-36 h-36 border border-border-light/70 p-3 bg-white/40 backdrop-blur-xs flex items-center justify-center">
              <div className="grid grid-cols-3 gap-1.5 w-full h-full p-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.08, 1],
                      opacity: [0.85, 1, 0.85],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeInOut",
                    }}
                    className={`rounded-[1px] ${
                      i === 4
                        ? "bg-accent col-span-2"
                        : i === 0
                        ? "bg-ink row-span-2"
                        : "bg-ink-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

