# Marcus Camargo | Portfólio

Portfólio profissional desenvolvido em **React + Vite + TypeScript**.

## Stack

- React 19
- TypeScript
- Vite
- Lucide React
- CSS responsivo

## Estrutura

```text
src/
├─ assets/
│  └─ logo.png
├─ components/
│  ├─ Header.tsx
│  ├─ ProjectPreview.tsx
│  └─ SectionHeading.tsx
├─ data/
│  └─ projects.ts
├─ App.tsx
├─ main.tsx
└─ styles.css
```

## Seções

- Apresentação principal
- Serviços
- Projetos em destaque
- Sobre
- WhatsApp Business e Instagram
- Rodapé

## Projetos incluídos

- Letreiro
- Liste e Compre

## Configurar contatos

Em `src/App.tsx`, altere:

```ts
const contactLinks = {
  whatsapp: '',
  instagram: '',
}
```

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

A pasta gerada será `dist/`.
