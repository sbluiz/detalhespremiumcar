# Detalhes Premium Car

Site de planos (Vite + React + Tailwind). Inclui CTA de WhatsApp em cada plano.

## Requisitos
- Node.js 18+
- npm 9+

## Instalação
```bash
npm install
```

## Desenvolvimento
```bash
npm run dev
```
Abra: `http://localhost:3000/`.

## Build de produção
```bash
npm run build
```
Saída em `dist/`.

## Preview do build
```bash
npm run preview
```

## Configurações
- Número do WhatsApp usado nos CTAs: definido em `src/App.tsx` na constante `whatsappNumber`.
- Mensagem enviada: função `buildWhatsAppLink` em `src/App.tsx`.

## Estrutura
- `src/App.tsx`: página principal, cards de planos e CTA.
- `src/components/ui/*`: componentes de UI.

## Deploy
Você pode publicar o conteúdo de `dist/` (após `npm run build`) em um serviço estático (Netlify, Vercel, GitHub Pages).

  # Telas (cópia)

  This is a code bundle for Telas (cópia). The original project is available at https://www.figma.com/design/Ll7Iw8PamEIl8MLueLlM9j/Telas--c%C3%B3pia-.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  