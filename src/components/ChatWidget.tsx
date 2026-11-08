"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Sparkles, Loader2 } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  time: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome",
    sender: "bot",
    text: "Olá! Sou o assistente de inteligência da Pentaminó. Como posso ajudar a analisar ou destravar a operação da sua empresa hoje?",
    time: "Agora",
  },
];

const SUGGESTIONS = [
  "Como funciona o diagnóstico?",
  "O que um agente de IA pode fazer na minha empresa?",
  "Quero agendar uma conversa",
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(() => `session_${Math.random().toString(36).substring(2, 9)}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    const webhookUrl = process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL;

    try {
      if (webhookUrl) {
        // Envio para o Webhook do n8n (Chat Trigger / Webhook Node)
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chatInput: text,
            sessionId,
            timestamp: new Date().toISOString(),
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const replyText =
            data.output || data.text || data.response || data.message || "Entendido! Como mais posso ajudar?";

          setMessages((prev) => [
            ...prev,
            {
              id: (Date.now() + 1).toString(),
              sender: "bot",
              text: replyText,
              time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            },
          ]);
          setLoading(false);
          return;
        }
      }

      // Resposta simulada elegante quando o webhook do n8n ainda não está conectado
      setTimeout(() => {
        let reply = "Compreendi o seu interesse. Na Pentaminó, desenhamos a estrutura antes de aplicar tecnologia para garantir que sua operação ganhe velocidade real.";
        if (text.toLowerCase().includes("diagnóstico") || text.toLowerCase().includes("conversa")) {
          reply = "Perfeito! Você pode preencher o formulário no final da página com seu e-mail corporativo ou deixar seus dados aqui para entrarmos em contato.";
        } else if (text.toLowerCase().includes("agente")) {
          reply = "Nossos agentes de IA atuam integrados aos seus bancos de dados e sistemas (ERP, CRM, WhatsApp), realizando triagens, agendamentos e operações sem intervenção humana repetitiva.";
        }

        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: "bot",
            text: reply,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ]);
        setLoading(false);
      }, 700);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "Nosso sistema de atendimento está se conectando. Sinta-se à vontade para enviar sua mensagem pelo formulário principal abaixo!",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[calc(100vw-32px)] sm:w-[410px] max-w-[410px] h-[520px] max-h-[78vh] bg-paper border border-border-light shadow-2xl flex flex-col mb-3 sm:mb-4 overflow-hidden"
          >
            {/* Topo do Chat */}
            <div className="p-4 bg-ink text-white flex items-center justify-between border-b border-border-dark">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent/20 border border-accent flex items-center justify-center">
                  <Bot className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wider uppercase flex items-center gap-2">
                    <span>Agente Pentaminó</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </h4>
                  <p className="text-[10px] text-ink-subtle font-mono">Processos & Inteligência</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 text-white/70 hover:text-white transition-colors"
                aria-label="Fechar atendimento"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lista de Mensagens */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-canvas/40 architectural-grid">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 text-xs sm:text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-ink text-white"
                        : "bg-white text-ink border border-border-light shadow-2xs"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[9px] font-mono text-ink-subtle mt-1 px-1">
                    {msg.time}
                  </span>
                </div>
              ))}

              {loading && (
                <div className="flex items-center gap-2 text-xs text-ink-muted bg-white p-3 border border-border-light w-fit">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-accent" />
                  <span className="font-mono text-[11px]">Agente digitando...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Chips de Sugestão */}
            {messages.length <= 2 && (
              <div className="p-2 bg-paper border-t border-border-light flex gap-2 overflow-x-auto">
                {SUGGESTIONS.map((sug, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSend(sug)}
                    className="text-[10px] font-medium whitespace-nowrap bg-canvas hover:bg-white border border-border-light px-2.5 py-1 text-ink-muted hover:text-ink transition-colors"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            )}

            {/* Campo de Envio */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white border-t border-border-light flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Pergunte sobre seus processos ou IA..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent px-2 py-2 text-xs sm:text-sm text-ink placeholder:text-ink-subtle focus:outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="p-2.5 bg-ink text-white hover:bg-accent disabled:opacity-40 transition-colors"
                aria-label="Enviar mensagem"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão Flutuante Disparador */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 bg-ink hover:bg-accent text-white px-5 py-3.5 shadow-2xl transition-colors duration-300 border border-white/10"
        aria-label="Abrir assistente virtual"
      >
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-ping group-hover:hidden" />
        </div>
        <span className="text-xs font-bold tracking-wider uppercase font-mono">
          {isOpen ? "Fechar" : "Falar com IA"}
        </span>
        <Sparkles className="w-3.5 h-3.5 text-accent group-hover:text-white transition-colors" />
      </motion.button>
    </div>
  );
}

