[README.md](https://github.com/user-attachments/files/32347883/README.md)# Ignite Feed

Feed de mídia social interativo onde é possível publicar posts, comentar, excluir comentários e aplaudir postagens. Projeto desenvolvido durante o curso ReactJS do Ignite, da Rocketseat.

## 🚀 Tecnologias utilizadas

- **React 18**
- **Vite** – build tool e servidor de desenvolvimento
- **CSS Modules** – estilização encapsulada por componente
- **Phosphor React** – ícones
- **date-fns** – formatação de datas (data completa e "há quanto tempo", em pt-BR)
- **ESLint**

## 📦 Como rodar o projeto

```bash
# clone o repositório
git clone https://github.com/2305ray/Ignite-Feed.git
cd Ignite-Feed

# instale as dependências
npm install

# rode em modo desenvolvimento
npm run dev
```

Outros scripts disponíveis: `npm run build`, `npm run lint` e `npm run preview`.

## 📁 Estrutura

Os posts (autor, conteúdo e data) ficam como dados mockados em `src/components/Posts.jsx`, componente responsável também pela lógica de comentar e excluir comentários via `useState`. `Header`, `Sidebar`, `Avatar` e `Comment` são os demais componentes reutilizáveis em `src/components`.
