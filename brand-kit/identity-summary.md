# Identidade Visual – Resumo

## Paleta de Cores
| Nome | Hex (fallback) | Uso |
|------|----------------|-----|
| **canvas** | `#f2f1ed` (fallback `#f4f3ef`) | Fundo principal da página |
| **paper** | `#f8f7f4` (fallback `#fbfbf9`) | Área de conteúdo, cartões |
| **ink** | `#161716` (muted `#686a64`, subtle `#93968e`) | Texto principal e secundário |
| **accent** | `#d9532f` (hover `#bf4321`, light `#faece7`, glow `rgba(217, 83, 47, 0.25)`) | Destaques, botões, links |
| **border.light** | `#d8d8d1` | Bordas claras |
| **border.dark** | `#3d3e3b` | Bordas escuras |

## Tipografia
- **Fonte Sans‑Serif**: `Inter` (definida via `var(--font-sans)`).
- **Fonte Monoespaçada**: `JetBrains Mono` (definida via `var(--font-mono)`).

## Logotipos (diretório `brand-kit/`)
| Arquivo | Tipo | Uso recomendado |
|---------|------|-----------------|
| `Pentamino_Logo_Principal_Preto_Transparente.svg` | SVG/PNG | Fundo claro |
| `Pentamino_Logo_Invertido_Branco_Transparente.svg` | SVG/PNG | Fundo escuro |
| `Pentamino_Aplicacao_Fundo_Cinza_Quente.svg` | SVG/PNG | Aplicação sobre cinza quente (`#F4F3F0`) |
| `Pentamino_Aplicacao_Fundo_Preto.svg` | SVG/PNG | Aplicação sobre preto (`#111111`) |

## Onde encontrar as definições
- **Cores e variáveis CSS**: `src/app/globals.css` (bloco `:root { … }`).
- **Paleta Tailwind**: `tailwind.config.js` (seção `theme.extend.colors`).
- **Tipografia**: mesma fonte declarada em `globals.css` e nas extensões Tailwind (`fontFamily`).

### Como reutilizar
1. Copie o bloco `:root { … }` para o seu CSS global ou arquivo de variáveis.
2. Importe as fontes `Inter` e `JetBrains Mono` (ou use variáveis `var(--font‑sans)` / `var(--font‑mono)`).
3. Use as cores via `var(--canvas)`, `var(--paper)`, `var(--ink)`, `var(--accent)` etc., ou diretamente pelos hexadecimais acima.
4. Inclua os SVGs/PNGs do diretório `brand-kit/` nos seus assets; escolha a versão clara ou escura conforme o background.

---
*Este resumo foi gerado a partir dos arquivos de configuração e do guia de marca do projeto.*
