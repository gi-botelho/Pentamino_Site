"use client";

import { motion } from "framer-motion";

export function Manifesto() {
  return (
    <section id="visao" className="relative bg-[#121312] text-[#f4f3ef] pt-24 pb-28 overflow-hidden">
      {/* Sutil Grid Arquitetural Escuro */}
      <div className="absolute inset-0 architectural-grid-dark opacity-30 pointer-events-none" />
      
      {/* Brilho sutil do Accent no canto */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1392px] mx-auto px-6 md:px-12">
        {/* Topline da Seção */}
        <div className="flex items-center justify-between text-[10px] font-bold tracking-[0.2em] text-[#8e918a] border-b border-[#2a2c28] pb-5 mb-16 md:mb-24">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-xs" />
            <span>01 / NOSSA VISÃO</span>
          </span>
          <span className="hidden sm:inline">O PENSAMENTO VEM PRIMEIRO</span>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Lado Esquerdo - Kicker */}
          <div className="lg:col-span-4 flex items-center gap-4 text-[11px] font-bold tracking-[0.18em] text-[#b4b7ae] uppercase">
            <div className="w-4 h-4 border border-accent/70 rotate-45" />
            <span>O que nos move</span>
          </div>

          {/* Lado Direito - Headline & Manifesto */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl lg:text-[4.6rem] font-medium tracking-[-0.04em] leading-[1.08] text-[#f4f3ef]"
            >
              Não é sobre usar mais tecnologia. <br />
              <span className="text-[#8e918a] font-light italic">
                É sobre fazer tudo funcionar melhor.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-base sm:text-xl text-[#c5c8bf] leading-relaxed max-w-2xl font-light"
            >
              A tecnologia é apenas o meio. Nosso diferencial está em enxergar conexões operacionais que passam despercebidas, questionar estruturas engessadas e desenhar processos inteligentes e fluidos.
            </motion.p>

            {/* Linha de Assinatura */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-4 text-[10px] font-mono tracking-[0.2em] text-[#9ca096] pt-8"
            >
              <div className="w-10 h-[1px] bg-accent" />
              <span>CLAREZA · ESTRUTURA · RESULTADO</span>
            </motion.div>
          </div>
        </div>

        {/* Rodapé da Visão */}
        <div className="mt-20 pt-6 border-t border-[#2a2c28] flex items-center justify-between text-[10px] font-mono tracking-[0.16em] text-[#73766e]">
          <span>REORGANIZAR É ABRIR POSSIBILIDADES OPERACIONAIS.</span>
          <span className="text-accent text-sm">↗</span>
        </div>
      </div>
    </section>
  );
}

