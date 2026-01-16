# 📊 Dashboard Web — Desafio Técnico

Dashboard web desenvolvido como parte de um desafio técnico, com foco em **arquitetura frontend**, **consumo de API**, **CSS Grid**, **acessibilidade** e **clareza de decisões técnicas**.

---

## 🚀 Demo

🔗 Deploy: https://dashboard-web-one.vercel.app/

---

## 🛠️ Stack Utilizada

- **Next.js 16 (App Router)**
- **React**
- **TypeScript**
- **SCSS (Sass Modules)**
- **CSS Grid** como base estrutural do layout
- **Context API** para estado global
- **DummyJSON API** (dados públicos reais)

---

## 🌐 API Utilizada

Os dados são consumidos da API pública:

Utilizada para:

- KPIs dinâmicos
- Listagem de produtos
- Busca textual
- Filtro por categoria

---

## 🧱 Estrutura do Dashboard

Header
├─ Logo
├─ Busca
├─ Filtro
└─ Usuário (avatar + nome)

Sidebar
├─ Dashboard
├─ Produtos
├─ Usuários
└─ Configurações

Main
├─ KPIs
└─ Tabela de Produtos

---

## ✨ Funcionalidades Implementadas

- ✅ Layout estruturado com **CSS Grid**
- ✅ Consumo de API real
- ✅ KPIs dinâmicos
- ✅ Listagem de produtos em tabela
- ✅ Busca por nome do produto
- ✅ Filtro por categoria (dinâmico a partir da API)
- ✅ Estados de **loading**, **erro** e **vazio**
- ✅ Responsividade (desktop → mobile)
- ✅ Navegação entre páginas
- ✅ Header contextual (busca e filtro apenas onde fazem sentido)
- ✅ Avatar de usuário (mock visual)

---

## 🧠 Decisões Técnicas

### 📁 Arquitetura

- Separação clara de responsabilidades entre:
  - `app/` → rotas e layouts
  - `components/` → componentes reutilizáveis
  - `services/` → consumo de API
  - `context/` → estado global do dashboard
- Uso de **Context API** para busca e filtro, evitando prop drilling
- Componentes pequenos, previsíveis e com responsabilidade única

### 🎨 Estilização

- **SCSS Modules** para isolamento de estilos
- CSS Grid como base estrutural do layout
- Responsividade tratada com media queries simples e consistentes

### ♿ Acessibilidade

- Uso de:
  - `aria-label`
  - `role="search"`
  - HTML semântico (`header`, `main`, `aside`, `section`, `table`)
- Inputs e selects acessíveis via teclado

### 🔄 Estado e Dados

- Busca e filtro aplicados no frontend
- Categorias derivadas dinamicamente da API
- KPIs recalculados com base nos produtos filtrados

> Observação: os KPIs refletem o estado atual dos filtros aplicados, mantendo consistência visual com a listagem.

---

## ▶️ Como Rodar o Projeto

```bash
# instalar dependências
npm install

# rodar em desenvolvimento
npm run dev
```
