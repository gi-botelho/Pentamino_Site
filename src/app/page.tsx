import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Solutions } from "@/components/Solutions";
import { ConceptBand } from "@/components/ConceptBand";
import { Method } from "@/components/Method";
import { Statement } from "@/components/Statement";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col selection:bg-ink selection:text-white">
      <Header />
      <main id="conteudo" className="flex-1">
        <Hero />
        <Manifesto />
        <Solutions />
        <ConceptBand />
        <Method />
        <Statement />
        <ContactSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

