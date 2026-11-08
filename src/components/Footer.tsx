"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#e6e5df] text-ink border-t border-[#d4d3cb] pt-16 pb-12">
      <div className="max-w-[1392px] mx-auto px-6 md:px-12">
        {/* Topo do Footer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pb-14 border-b border-[#d4d3cb]">
          <div className="relative w-44 md:w-56 h-10">
            <Image
              src="/assets/pentamino-logo-claro.svg"
              alt="Pentaminó — Processos Inteligentes"
              fill
              className="object-contain object-left"
            />
          </div>

          <div className="flex items-center gap-6 text-[10px] font-mono font-bold tracking-[0.2em] text-ink-muted uppercase">
            <span>IA</span>
            <span>·</span>
            <span>AUTOMAÇÃO</span>
            <span>·</span>
            <span>SISTEMAS</span>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[10px] font-mono tracking-wider text-ink-subtle">
          <p>© {new Date().getFullYear()} Pentaminó. Todos os direitos reservados.</p>

          <p className="hidden md:inline font-semibold text-ink-muted">
            ESTRUTURAS MAIS INTELIGENTES. OPERAÇÕES MAIS EFICIENTES.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-ink hover:text-accent transition-colors font-bold uppercase tracking-widest"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1 text-accent" />
          </button>
        </div>
      </div>
    </footer>
  );
}
