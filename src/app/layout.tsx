import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pentaminó — Processos Inteligentes | Estratégia, IA e Automação",
  description:
    "Estratégia, inteligência artificial, automação e sistemas para empresas mais eficientes. A eficiência começa na estrutura.",
  keywords: [
    "inteligência artificial",
    "automação de processos",
    "estratégia operacional",
    "agentes de IA",
    "sistemas sob medida",
    "Pentaminó",
  ],
  authors: [{ name: "Pentaminó" }],
  icons: {
    icon: "/assets/favicon.png?v=4",
    shortcut: "/assets/favicon.png?v=4",
    apple: "/assets/favicon.png?v=4",
  },
  openGraph: {
    title: "Pentaminó | Processos Inteligentes",
    description: "A eficiência começa na forma como tudo se conecta.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased min-h-screen flex flex-col bg-canvas text-ink">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:shadow-lg focus:outline-none"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}

