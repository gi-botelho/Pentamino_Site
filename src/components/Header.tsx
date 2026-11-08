"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#252724] bg-[#121312]/90 backdrop-blur-md transition-colors">
      <div className="max-w-[1392px] mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
        {/* Brand com Logo Escuro (Branco + Laranja) */}
        <Link href="#inicio" className="flex items-center gap-2 group" aria-label="Pentaminó — Início">
          <div className="relative w-44 md:w-56 h-10 transition-transform duration-300 group-hover:scale-[1.02]">
            <Image
              src="/assets/pentamino-logo-escuro.svg"
              alt="Pentaminó — Processos Inteligentes"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation em tons claros */}
        <nav className="hidden lg:flex items-center gap-9 text-xs font-semibold tracking-wider text-[#9ca096] uppercase">
          <Link href="#visao" className="hover:text-white transition-colors">
            Visão
          </Link>
          <Link href="#solucoes" className="hover:text-white transition-colors">
            Soluções
          </Link>
          <Link href="#metodo" className="hover:text-white transition-colors">
            Método
          </Link>
          <Link href="#conceito" className="hover:text-white transition-colors">
            Conceito
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="#contato"
            className="group flex items-center gap-3 pb-1 border-b border-white text-xs font-bold tracking-wider uppercase text-white transition-all hover:border-accent hover:text-accent"
          >
            <span>Vamos conversar</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-accent transition-colors"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Escuro */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#252724] bg-[#121312]/95 backdrop-blur-lg px-6 py-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <Link
            href="#visao"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#c2c5bd] hover:text-white"
          >
            Visão
          </Link>
          <Link
            href="#solucoes"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#c2c5bd] hover:text-white"
          >
            Soluções
          </Link>
          <Link
            href="#metodo"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#c2c5bd] hover:text-white"
          >
            Método
          </Link>
          <Link
            href="#conceito"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#c2c5bd] hover:text-white"
          >
            Conceito
          </Link>
          <Link
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-between bg-white text-ink px-6 py-4 text-xs font-bold tracking-wider uppercase hover:bg-accent hover:text-white transition-colors mt-2"
          >
            <span>Iniciar Conversa</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
