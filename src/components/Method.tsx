"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const STEPS = [
  {
    num: "01",
    name: "Enxergar",
    subtitle: "Diagnóstico Operacional",
    description:
      "Mapeamos sua operação atual com olhar cirúrgico: identificamos gargalos invisíveis, retrabalhos constantes e oportunidades de ouro que ferramentas isoladas não conseguem resolver.",
  },
  {
    num: "02",
    name: "Organizar",
    subtitle: "Arquitetura de Processos",
    description:
      "Repensamos a lógica dos fluxos de trabalho antes de automatizar. Desenhamos a estrutura ideal conectando pessoas, responsabilidades, dados e pontos de decisão.",
  },
  {
    num: "03",
    name: "Implementar",
    subtitle: "IA & Automação Aplicadas",
    description:
      "Conectamos agentes de inteligência artificial, automações robustas e sistemas sob medida diretamente onde geram o maior impacto imediato e redução de atrito.",
  },
  {
    num: "04",
    name: "Evoluir",
    subtitle: "Acompanhamento Contínuo",
    description:
      "Nenhuma operação é estática. Monitoramos os resultados, refinamos os modelos e ajustamos os fluxos continuamente para acompanhar o crescimento da sua empresa.",
  },
];

export function Method() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="metodo" className="py-24 md:py-32 bg-canvas relative">
      <div className="max-w-[1392px] mx-auto px-6 md:px-12">
        {/* Topline */}
        <div className="flex items-center justify-between text-[10px] font-bold tracking-[0.2em] text-ink-muted border-b border-border-light pb-5 mb-16">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span>03 / COMO PENSAMOS</span>
          </span>
          <span className="hidden sm:inline">UM MÉTODO, NÃO UMA FÓRMULA</span>
        </div>

        {/* Layout em 2 Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Lado Esquerdo - Chamada do Método */}
          <div className="lg:col-span-5 sticky top-32">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-[4rem] font-medium tracking-[-0.04em] leading-[1.08] text-ink mb-6"
            >
              Primeiro, <span className="italic font-normal text-ink-subtle">entender.</span> <br />
              Depois, transformar.
            </motion.h2>

            <p className="text-base text-ink-muted leading-relaxed max-w-md">
              O melhor resultado não nasce da contratação de dezenas de ferramentas. Nasce de uma sequência lúcida e disciplinada de decisões estratégicas.
            </p>
          </div>

          {/* Lado Direito - Acordeão de Etapas */}
          <div className="lg:col-span-7 border-t border-border-light divide-y divide-border-light">
            {STEPS.map((step, idx) => {
              const isOpen = activeStep === idx;
              return (
                <div key={step.num} className="group transition-colors">
                  <button
                    type="button"
                    onClick={() => setActiveStep(isOpen ? -1 : idx)}
                    className="w-full py-8 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-6 sm:gap-10">
                      <span className="font-mono text-xs font-bold tracking-widest text-accent">
                        {step.num}
                      </span>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-medium tracking-[-0.03em] text-ink group-hover:text-accent transition-colors">
                          {step.name}
                        </h3>
                        <span className="text-[11px] font-mono tracking-wider text-ink-muted uppercase">
                          {step.subtitle}
                        </span>
                      </div>
                    </div>

                    <div className="w-9 h-9 rounded-full border border-border-light flex items-center justify-center text-ink group-hover:border-accent group-hover:text-accent transition-colors">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-8 sm:pl-16 pr-4 sm:pr-6">
                          <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-xl">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

