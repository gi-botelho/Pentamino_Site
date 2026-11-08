# Pentaminó — Processos Inteligentes

Site institucional e plataforma de presença digital da **Pentaminó**, focado em **Estratégia, Inteligência Artificial, Automação de Processos e Sistemas Sob Medida**.

Construído com arquitetura moderna, responsiva, acessível e orientada a conversão de leads, integrando-se via Webhooks ao **n8n** e ao banco de dados **Supabase**.

---

## 🛠️ Stack Tecnológica

* **Framework Full-Stack:** [Next.js 15](https://nextjs.org/) (App Router, React 19, TypeScript)
* **Estilização & Design System:** [Tailwind CSS](https://tailwindcss.com/) com tokens de cor customizados
* **Animações & Motion Design:** [Framer Motion](https://www.framer.com/motion/) (física de molas, layout dinâmico e transições fluidas)
* **Ícones:** [Lucide React](https://lucide.dev/)
* **Automação & Atendimento IA:** Orquestração via **n8n** (Agentes IA, CRM e Notificações)
* **Banco de Dados:** **Supabase** (PostgreSQL)
* **Deploy:** [Vercel](https://vercel.com/)

---

## 🎨 Identidade Visual & Design Tokens

* **Base Clara Quente (Canvas):** `#F4F3EF`
* **Superfície Papel:** `#FBFBF9`
* **Preto Profundo (Ink):** `#141514`
* **Cinza Arquitetural:** `#62645E` e `#8E918A`
* **Cor de Destaque (Accent Pentaminó):** `#E05326` *(Laranja / Cobre Arquitetural)*
  * *Variação Hover:* `#C4431A`
  * *Variação Fundo Suave:* `#FBEEE9`

As matrizes dos logotipos originais encontram-se organizadas na pasta [`brand-kit/`](./brand-kit).

---

## 🚀 Como Executar Localmente

### Pré-requisitos
* Node.js 18+ instalado (recomendado v20 ou v22)
* npm, yarn ou pnpm

### Passos

1. Instale as dependências:
```bash
npm install
```

2. Configure as variáveis de ambiente:
Copie o arquivo `.env.example` para `.env.local`:
```bash
cp .env.example .env.local
```
Edite as variáveis com os endpoints do seu n8n:
* `NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL`: Webhook do nó de Chat Trigger do seu n8n.
* `NEXT_PUBLIC_N8N_LEAD_WEBHOOK_URL`: Webhook para recebimento do formulário de contato / diagnóstico.

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:3000
```

---

## 📦 Estrutura do Projeto

```text
📁 Pentamino_Site_Prototipo/
├── 📁 brand-kit/              # Arquivos originais e matrizes de logo (.svg, .png)
├── 📁 public/                 # Arquivos estáticos servidos pelo Next.js
│   └── 📁 assets/             # Logos vetoriais e favicon
├── 📁 src/
│   ├── 📁 app/
│   │   ├── globals.css        # Variáveis CSS, estilos globais e grids
│   │   ├── layout.tsx         # Estrutura HTML, SEO e metadados OpenGraph
│   │   └── page.tsx           # Página inicial integrando os módulos
│   └── 📁 components/
│       ├── Header.tsx         # Menu sticky, navegação e drawer mobile
│       ├── Hero.tsx           # Headline e animação dos 5 blocos com Framer Motion
│       ├── Manifesto.tsx      # Seção escura de posicionamento de marca
│       ├── Solutions.tsx      # Bento Grid dos 4 pilares de atuação
│       ├── ConceptBand.tsx    # O conceito matemático e filosófico do Pentaminó
│       ├── Method.tsx         # Acordeão interativo das etapas operacionais
│       ├── Statement.tsx      # Faixa de impacto com linha cinética
│       ├── ContactSection.tsx # Formulário conectado ao n8n
│       ├── ChatWidget.tsx     # Agente de IA flutuante integrado ao n8n
│       └── Footer.tsx         # Rodapé institucional
├── 📄 .env.example            # Template de variáveis de ambiente
├── 📄 .gitignore              # Arquivos ignorados pelo controle de versão
├── 📄 next.config.mjs         # Configurações do Next.js
├── 📄 package.json            # Dependências e scripts
├── 📄 tailwind.config.js      # Configuração do Tailwind e tokens de cor
└── 📄 tsconfig.json           # Configurações do TypeScript
```

---

## 🌐 Deploy na Vercel

1. Suba este projeto para um repositório no seu **GitHub**.
2. No painel da **Vercel**, clique em **Add New... > Project** e importe o repositório.
3. O preset **Next.js** será detectado automaticamente.
4. Adicione as variáveis de ambiente (`NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL` e `NEXT_PUBLIC_N8N_LEAD_WEBHOOK_URL`) nas configurações da Vercel.
5. Clique em **Deploy**.
