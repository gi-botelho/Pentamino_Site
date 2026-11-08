"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, RefreshCw, ChevronLeft, ChevronRight } from "lucide-react";

// As 12 configurações matemáticas oficiais de pentaminós livres
export const PENTAMINOES = [
  {
    letter: "P",
    name: "ESTRUTURA P",
    tag: "NÚCLEO PENTAMINÓ (MATRIZ)",
    coords: [
      { col: 0, row: 0 },
      { col: 1, row: 0 },
      { col: 0, row: 1 },
      { col: 1, row: 1 },
      { col: 0, row: 2 },
    ],
  },
  {
    letter: "F",
    name: "ESTRUTURA F",
    tag: "ADAPTAÇÃO ESTRUTURAL",
    coords: [
      { col: 1, row: 0 },
      { col: 2, row: 0 },
      { col: 0, row: 1 },
      { col: 1, row: 1 },
      { col: 1, row: 2 },
    ],
  },
  {
    letter: "I",
    name: "ESTRUTURA I",
    tag: "FLUXO LINEAR CONTÍNUO",
    coords: [
      { col: 0, row: 0 },
      { col: 0, row: 1 },
      { col: 0, row: 2 },
      { col: 0, row: 3 },
      { col: 0, row: 4 },
    ],
  },
  {
    letter: "L",
    name: "ESTRUTURA L",
    tag: "PROGRESSÃO OPERACIONAL",
    coords: [
      { col: 0, row: 0 },
      { col: 0, row: 1 },
      { col: 0, row: 2 },
      { col: 0, row: 3 },
      { col: 1, row: 3 },
    ],
  },
  {
    letter: "N",
    name: "ESTRUTURA N",
    tag: "TRANSIÇÃO EM ESCALA",
    coords: [
      { col: 1, row: 0 },
      { col: 1, row: 1 },
      { col: 0, row: 2 },
      { col: 1, row: 2 },
      { col: 0, row: 3 },
    ],
  },
  {
    letter: "T",
    name: "ESTRUTURA T",
    tag: "CONVERGÊNCIA CENTRAL",
    coords: [
      { col: 0, row: 0 },
      { col: 1, row: 0 },
      { col: 2, row: 0 },
      { col: 1, row: 1 },
      { col: 1, row: 2 },
    ],
  },
  {
    letter: "U",
    name: "ESTRUTURA U",
    tag: "CICLO DE FEEDBACK",
    coords: [
      { col: 0, row: 0 },
      { col: 2, row: 0 },
      { col: 0, row: 1 },
      { col: 1, row: 1 },
      { col: 2, row: 1 },
    ],
  },
  {
    letter: "V",
    name: "ESTRUTURA V",
    tag: "EXPANSÃO ANGULAR",
    coords: [
      { col: 0, row: 0 },
      { col: 0, row: 1 },
      { col: 0, row: 2 },
      { col: 1, row: 2 },
      { col: 2, row: 2 },
    ],
  },
  {
    letter: "W",
    name: "ESTRUTURA W",
    tag: "INTERCONEXÃO MODULAR",
    coords: [
      { col: 0, row: 0 },
      { col: 0, row: 1 },
      { col: 1, row: 1 },
      { col: 1, row: 2 },
      { col: 2, row: 2 },
    ],
  },
  {
    letter: "X",
    name: "ESTRUTURA X",
    tag: "CONEXÃO MULTIDIRECIONAL",
    coords: [
      { col: 1, row: 0 },
      { col: 0, row: 1 },
      { col: 1, row: 1 },
      { col: 2, row: 1 },
      { col: 1, row: 2 },
    ],
  },
  {
    letter: "Y",
    name: "ESTRUTURA Y",
    tag: "BIFURCAÇÃO DECISÓRIA",
    coords: [
      { col: 1, row: 0 },
      { col: 0, row: 1 },
      { col: 1, row: 1 },
      { col: 1, row: 2 },
      { col: 1, row: 3 },
    ],
  },
  {
    letter: "Z",
    name: "ESTRUTURA Z",
    tag: "SINERGIA DE REDE",
    coords: [
      { col: 0, row: 0 },
      { col: 1, row: 0 },
      { col: 1, row: 1 },
      { col: 1, row: 2 },
      { col: 2, row: 2 },
    ],
  },
];

const STAGE_SIZE = 280; // Tamanho do canvas em pixels
const CELL_SIZE = 48;   // Tamanho de cada bloco individual
const STEP = 52;        // Espaçamento entre colunas/linhas

export function Hero() {
  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Troca automática a cada 4.5 segundos
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % PENTAMINOES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const current = PENTAMINOES[index];

  // Cálculo de centralização dinâmica para qualquer uma das 12 formas
  const minCol = Math.min(...current.coords.map((c) => c.col));
  const maxCol = Math.max(...current.coords.map((c) => c.col));
  const minRow = Math.min(...current.coords.map((c) => c.row));
  const maxRow = Math.max(...current.coords.map((c) => c.row));

  const shapeWidth = (maxCol - minCol + 1) * STEP;
  const shapeHeight = (maxRow - minRow + 1) * STEP;

  const offsetX = (STAGE_SIZE - shapeWidth) / 2 - minCol * STEP;
  const offsetY = (STAGE_SIZE - shapeHeight) / 2 - minRow * STEP;

  return (
    <section id="inicio" className="relative pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden bg-[#e6e5df] border-b border-[#d4d3cb]">
      <div className="max-w-[1392px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Copy Principal */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline / Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] text-ink-muted uppercase mb-6"
            >
              <span className="w-2 h-2 bg-accent shadow-[0_0_8px_var(--accent-glow)] rounded-xs" />
              <span>ESTRATÉGIA / IA / AUTOMAÇÃO</span>
            </motion.div>

            {/* Headline de Grande Impacto Responsiva */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-[5.4rem] font-medium tracking-[-0.05em] leading-[1] text-ink mb-8"
            >
              A eficiência começa{" "}
              <span className="font-normal italic text-ink-subtle hover:text-accent transition-colors duration-500">
                na estrutura.
              </span>
            </motion.h1>

            {/* Descrição */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-xl mb-10"
            >
              Entendemos a operação da sua empresa, identificamos conexões invisíveis e aplicamos inteligência artificial e tecnologia para transformar processos em resultados concretos.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 sm:gap-8"
            >
              <Link
                href="#metodo"
                className="group inline-flex items-center justify-between gap-10 bg-ink hover:bg-accent text-white px-8 py-5 text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Nossa abordagem</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                href="#solucoes"
                className="group inline-flex items-center gap-3 text-xs font-bold tracking-wider uppercase text-ink pb-1 border-b border-[#a8a79f] hover:border-accent hover:text-accent transition-all"
              >
                <span>Explorar soluções</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* O Palco Visual com as 12 Formas Matemáticas */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-white border border-[#d2d0c6] rounded-none p-5 sm:p-8 flex flex-col justify-between min-h-[460px] sm:min-h-[540px] shadow-lg group overflow-hidden"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Barra Superior do Quadro Responsiva */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[10px] font-bold tracking-[0.16em] text-ink-muted border-b border-[#ecebe6] pb-3 sm:pb-4 gap-2">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
                  <span className="font-mono">
                    VARIAÇÃO {String(index + 1).padStart(2, "0")} / 12
                  </span>
                </span>
                <span className="text-ink font-semibold flex items-center gap-1.5 truncate">
                  <span className="font-mono text-accent">[{current.letter}]</span>
                  <span>{current.tag}</span>
                </span>
              </div>

              {/* Grid Arquitetural com os 5 Módulos */}
              <div className="relative flex-1 flex items-center justify-center my-4 sm:my-6 overflow-hidden">
                {/* Linhas de Grid de Fundo */}
                <div className="absolute inset-0 architectural-grid opacity-50 pointer-events-none" />

                {/* Eixo X e Y */}
                <span className="absolute bottom-1 right-1 text-[9px] font-mono font-bold text-ink-subtle">
                  [X · MATRIZ]
                </span>
                <span className="absolute top-1 left-1 text-[9px] font-mono font-bold text-ink-subtle">
                  [Y · PROCESSO]
                </span>

                {/* Canvas de Transição Suave Escalonado para Mobile */}
                <div
                  className="relative scale-[0.8] sm:scale-100 origin-center transition-transform"
                  style={{ width: `${STAGE_SIZE}px`, height: `${STAGE_SIZE}px` }}
                >
                  {current.coords.map((coord, i) => {
                    const isAccentSquare = i === 4; // O 5º quadrado simboliza a inteligência
                    const x = offsetX + coord.col * STEP;
                    const y = offsetY + coord.row * STEP;

                    return (
                      <motion.div
                        key={i}
                        layout
                        transition={{
                          type: "spring",
                          stiffness: 160,
                          damping: 18,
                          mass: 0.8,
                        }}
                        style={{
                          left: `${x}px`,
                          top: `${y}px`,
                          width: `${CELL_SIZE}px`,
                          height: `${CELL_SIZE}px`,
                        }}
                        className={`absolute rounded-[2px] shadow-sm flex items-center justify-center transition-colors duration-300 ${
                          isAccentSquare
                            ? "bg-accent text-white shadow-accent/30"
                            : "bg-ink text-white/60"
                        }`}
                      >
                        <span className="text-[10px] font-mono font-bold">
                          {isAccentSquare ? "IA" : `0${i + 1}`}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Barra Inferior com Controle Manual e Navegação */}
              <div className="flex items-center justify-between border-t border-[#ecebe6] pt-4">
                <div>
                  <p className="text-xs font-semibold text-ink leading-tight">
                    5 quadrados idênticos.
                  </p>
                  <p className="text-[11px] text-ink-muted">
                    12 possibilidades estruturais.
                  </p>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() =>
                      setIndex((prev) => (prev - 1 + PENTAMINOES.length) % PENTAMINOES.length)
                    }
                    className="p-2 border border-[#d2d0c6] hover:bg-[#f4f3ef] hover:text-accent transition-colors text-ink"
                    aria-label="Variação anterior"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>

                  <span className="font-mono text-[11px] font-bold text-ink px-2">
                    {String(index + 1).padStart(2, "0")} / 12
                  </span>

                  <button
                    type="button"
                    onClick={() => setIndex((prev) => (prev + 1) % PENTAMINOES.length)}
                    className="p-2 border border-[#d2d0c6] hover:bg-[#f4f3ef] hover:text-accent transition-colors text-ink"
                    aria-label="Próxima variação"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Rodapé da Hero Section */}
        <div className="mt-14 pt-6 border-t border-[#d4d3cb] flex flex-col sm:flex-row items-center justify-between text-[10px] font-bold tracking-[0.16em] text-ink-subtle gap-4">
          <span>INTELIGÊNCIA APLICADA À OPERAÇÃO</span>
          <span className="flex items-center gap-2">
            DESLIZE PARA EXPLORAR <span aria-hidden="true">↓</span>
          </span>
        </div>
      </div>
    </section>
  );
}
