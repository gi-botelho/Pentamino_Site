"use client";

import { motion } from "framer-motion";

export function Statement() {
  return (
    <section className="py-24 md:py-32 bg-[#e4e3dd] border-y border-border-light relative overflow-hidden">
      <div className="max-w-[1392px] mx-auto px-6 md:px-12">
        {/* Topline Padronizada com o quadradinho laranja */}
        <div className="flex items-center justify-between text-[10px] font-bold tracking-[0.2em] text-ink-muted border-b border-border-light pb-5 mb-14">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-xs" />
            <span>04 / A DIFERENÇA</span>
          </span>
          <span className="hidden sm:inline font-mono">PENSAMENTO SISTÊMICO</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl lg:text-[5.2rem] font-medium tracking-[-0.05em] leading-[1.06] text-ink max-w-5xl"
        >
          Mais que automatizar tarefas soltas. <br />
          <span className="italic font-normal text-ink-subtle">
            Fazer sentido como sistema integrado.
          </span>
        </motion.h2>

        {/* Linha Cinética com Indicador em Movimento */}
        <div className="relative mt-16 w-full h-[2px] bg-border-light overflow-hidden">
          <motion.div
            animate={{
              x: ["-10%", "110%"],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-32 h-full bg-gradient-to-r from-transparent via-accent to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
