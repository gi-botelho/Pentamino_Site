"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "fallback">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const webhookUrl = process.env.NEXT_PUBLIC_N8N_LEAD_WEBHOOK_URL;

    try {
      if (webhookUrl) {
        // Envio direto para o Webhook do n8n
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            origem: "site_pentamino",
            data: new Date().toISOString(),
          }),
        });

        if (res.ok) {
          setStatus("success");
          setFeedback("Mensagem recebida com sucesso! Nossa equipe entrará em contato em breve.");
          return;
        }
      }

      // Modo demonstrativo / fallback caso o webhook ainda não esteja configurado
      const summary = `Nome: ${formData.name}\nE-mail: ${formData.email}\nEmpresa: ${formData.company}\nMensagem: ${formData.message}`;
      await navigator.clipboard.writeText(summary);
      setStatus("fallback");
      setFeedback("Informações copiadas! Conecte seu Webhook do n8n em NEXT_PUBLIC_N8N_LEAD_WEBHOOK_URL para envio automático.");
    } catch {
      setStatus("fallback");
      setFeedback("Agradecemos pelo contato! Em breve entraremos em contato com você.");
    }
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-[#141514] text-[#f4f3ef] relative overflow-hidden">
      {/* Sutil Grid no Fundo */}
      <div className="absolute inset-0 architectural-grid-dark opacity-20 pointer-events-none" />

      <div className="max-w-[1392px] mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Coluna da Esquerda */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-bold font-mono tracking-[0.2em] text-[#8e918a] uppercase mb-8">
                <span className="w-1.5 h-1.5 bg-accent rounded-xs" />
                <span>05 / CONVERSA INICIAL</span>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-[4.2rem] font-medium tracking-[-0.04em] leading-[1.08] text-[#f4f3ef] mb-6"
              >
                Sua próxima melhoria começa com{" "}
                <span className="italic font-light text-accent">uma conversa.</span>
              </motion.h2>

              <p className="text-base text-[#aeb2a9] leading-relaxed max-w-md font-light mb-12">
                Conte-nos sobre o momento da sua operação. Vamos avaliar juntos onde a inteligência artificial e a automação geram o maior retorno.
              </p>
            </div>

            <div className="pt-8 border-t border-[#2a2c28] flex items-center gap-3 text-[10px] font-mono tracking-[0.16em] text-[#8e918a]">
              <span className="w-2 h-2 bg-accent rounded-xs" />
              <span>PENTAMINÓ · PROCESSOS INTELIGENTES</span>
            </div>
          </div>

          {/* Coluna da Direita - Formulário */}
          <div className="lg:col-span-7 bg-[#1a1b1a] border border-[#2e302c] p-8 sm:p-12 shadow-2xl">
            {status === "success" ? (
              <div className="py-16 text-center flex flex-col items-center gap-4">
                <CheckCircle2 className="w-12 h-12 text-accent animate-in zoom-in duration-300" />
                <h3 className="text-2xl font-semibold text-white">Mensagem Enviada</h3>
                <p className="text-sm text-[#aeb2a9] max-w-md">{feedback}</p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setFormData({ name: "", email: "", company: "", message: "" });
                  }}
                  className="mt-6 text-xs font-mono uppercase tracking-widest text-accent underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[10px] font-mono font-bold tracking-[0.18em] text-[#8e918a] uppercase mb-2"
                    >
                      SEU NOME *
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      placeholder="Como podemos te chamar?"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-[#3e413c] pb-3 text-base text-white placeholder:text-[#5d6059] focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[10px] font-mono font-bold tracking-[0.18em] text-[#8e918a] uppercase mb-2"
                    >
                      SEU E-MAIL PROFISSIONAL *
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      placeholder="voce@empresa.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-[#3e413c] pb-3 text-base text-white placeholder:text-[#5d6059] focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-[10px] font-mono font-bold tracking-[0.18em] text-[#8e918a] uppercase mb-2"
                  >
                    EMPRESA / SEGMENTO
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Qual a sua empresa ou segmento de atuação?"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-transparent border-b border-[#3e413c] pb-3 text-base text-white placeholder:text-[#5d6059] focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[10px] font-mono font-bold tracking-[0.18em] text-[#8e918a] uppercase mb-2"
                  >
                    SOBRE SUA OPERAÇÃO / DESAFIOS *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={3}
                    placeholder="Quais gargalos operacionais ou rotinas manuais você gostaria de eliminar?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-[#3e413c] pb-3 text-base text-white placeholder:text-[#5d6059] focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group w-full flex items-center justify-between bg-white text-ink hover:bg-accent hover:text-white px-8 py-5 text-xs font-bold tracking-wider uppercase transition-all duration-300 disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Enviando...</span>
                      </span>
                    ) : (
                      <>
                        <span>Solicitar Diagnóstico Operacional</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </button>

                  {feedback && (
                    <p className="mt-4 text-[11px] text-[#8e918a] font-mono leading-relaxed">
                      {feedback}
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

