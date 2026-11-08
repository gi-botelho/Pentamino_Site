"use client";

import { motion } from "framer-motion";
import { Compass, Bot, Workflow, Layers, ArrowUpRight } from "lucide-react";

const SOLUTIONS = [
  {
    num: "01",
    title: "Estratégia & Processos",
    icon: Compass,
    description:
      "Diagnóstico profundo, redesenho e estruturação de fluxos operacionais para empresas que buscam clareza, previsibilidade e eficiência antes de qualquer linha de código.",
    tag: "PENSAR ANTES DE IMPLEMENTAR",
    highlight: "Clareza Operacional",
  },
  {
    num: "02",
    title: "Agentes de Inteligência Artificial",
    icon: Bot,
    description:
      "Atendimento, pré-vendas e suporte com agentes autônomos integrados a bases de conhecimento e sistemas reais da sua empresa, operando com contexto e precisão.",
    tag: "INTELIGÊNCIA COM CONTEXTO",
    highlight: "Autonomia & Conversão",
  },
  {
    num: "03",
    title: "Automação de Processos",
    icon: Workflow,
    description:
      "Integrações de ponta a ponta e fluxos automatizados (n8n, APIs e Webhooks) que eliminam tarefas repetitivas e conectam ferramentas sem fricção.",
    tag: "MENOS ATRITO, MAIS FLUXO",
    highlight: "Conexão sem Fricção",
  },
  {
    num: "04",
    title: "Sistemas Sob Medida",
    icon: Layers,
    description:
      "Aplicações web modernas, portais de clientes e dashboards construídos com arquitetura robusta para acompanhar o crescimento acelerado do seu negócio.",
    tag: "TECNOLOGIA QUE SE ADAPTA",
    highlight: "Escalabilidade Segura",
  },
];

export function Solutions() {
  return (
    <section id="solucoes" className="py-24 md:py-32 bg-canvas relative overflow-hidden">
      <div className="max-w-[1392px] mx-auto px-6 md:px-12">
        {/* Topline */}
        <div className="flex items-center justify-between text-[10px] font-bold tracking-[0.2em] text-ink-muted border-b border-border-light pb-5 mb-14">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span>02 / O QUE FAZEMOS</span>
          </span>
          <span className="hidden sm:inline">INTELIGÊNCIA EM AÇÃO</span>
        </div>

        {/* Título & Resumo */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl lg:text-[4.8rem] font-medium tracking-[-0.05em] leading-[1.05] text-ink"
          >
            Tecnologia com <br />
            <span className="italic font-normal text-ink-subtle">propósito.</span>
          </motion.h2>

          <p className="text-sm md:text-base text-ink-muted max-w-xs leading-relaxed">
            Cada solução começa com uma pergunta fundamental:{" "}
            <span className="font-semibold text-ink">o que pode funcionar melhor na sua operação?</span>
          </p>
        </div>

        {/* Grid de Soluções Estilo Bento / Arquitetural */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border-light bg-paper/60 backdrop-blur-xs">
          {SOLUTIONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative border-r border-b border-border-light p-8 md:p-10 flex flex-col justify-between min-h-[380px] bg-paper hover:bg-white transition-all duration-300 hover:shadow-xl hover:z-10"
              >
                {/* Indicador de Topo com Acento no Hover */}
                <div className="flex items-center justify-between text-ink-subtle group-hover:text-ink transition-colors pb-8">
                  <span className="font-mono text-xs font-bold tracking-widest text-accent">
                    {item.num}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-border-light flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-colors">
                    <Icon className="w-4 h-4 text-ink-muted group-hover:text-accent transition-colors" />
                  </div>
                </div>

                {/* Conteúdo Central */}
                <div className="my-auto">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ink mb-4 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Tag de Rodapé */}
                <div className="pt-8 border-t border-border-light/60 flex items-center justify-between text-[9px] font-mono tracking-[0.16em] text-ink-subtle">
                  <span>{item.tag}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-300" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

