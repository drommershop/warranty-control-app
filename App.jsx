// package.json
{
  "name": "financial-dashboard",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.379.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "recharts": "^2.12.7"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "vite": "^5.2.0"
  }
}

<!-- index.html -->
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Drommer Shop - Dashboard Financeiro</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>


// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// src/App.jsx
import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar
} from 'recharts';
import { PiggyBank, Receipt, ShoppingCart, TrendingUp, TrendingDown } from 'lucide-react';
import './index.css'; // Importe o arquivo CSS principal

// Dados simulados baseados nos snippets dos arquivos CSV
// Em uma aplicação real, você faria o parsing dos arquivos aqui.
const MOCK_FINANCIAL_DATA = {
  JANEIRO: {
    summary: { totalProfit: 2950 },
    sales: [
      { data: "6", cliente: "Mauro", aparelho: "Tela A12", pago: 290, frete: 12.5, custo: 115, lucro: 162.5 },
      { data: "7", cliente: "Bruno", aparelho: "Ipad 9", pago: 1800, frete: 0, custo: 1550, lucro: 250 },
      { data: "8", cliente: "Alex", aparelho: "Carregador", pago: 40, frete: 0, custo: 10, lucro: 30 },
      { data: "8", cliente: "Ferreirinha", aparelho: "iPhone 13 Pro 256gb", pago: 4060, frete: 111, custo: 3540, lucro: 409 },
      { data: "10", cliente: "Kenia", aparelho: "Assistência parcela", pago: 300, frete: 25, custo: 370, lucro: -95 },
    ],
    expenses: [
      { data: "1", produto: "Gasolina", preco: 50 },
      { data: "2", produto: "Lanche", preco: 30 },
      { data: "5", produto: "Almoço", preco: 45 },
    ]
  },
  FEVEREIRO: {
    summary: { totalProfit: 4983.18 },
    sales: [
      { data: "1", cliente: "Mãe de Miguel", aparelho: "Infinix", pago: 500, frete: 0, custo: 500, lucro: 0 },
      { data: "2", cliente: "Keke", aparelho: "Cabo", pago: 25, frete: 0, custo: 5, lucro: 20 },
      { data: "2", cliente: "Daniel cidade nova", aparelho: "Cabo", pago: 25, frete: 0, custo: 5, lucro: 20 },
      { data: "3", cliente: "Miguel", aparelho: "Powerbank", pago: 140, frete: 0, custo: 70, lucro: 70 },
      { data: "4", cliente: "Rafael", aparelho: "Tela A14 5G", pago: 280, frete: 0, custo: 175, lucro: 105 },
    ],
    expenses: [
      { data: "1", produto: "Película para Amanda", preco: 15 }
    ]
  },
  MARÇO: {
    summary: { totalProfit: 3283.5 },
    sales: [
      { data: "6", cliente: "Fatinha", aparelho: "Prancha", pago: 400, frete: 0, custo: 350, lucro: 50 },
      { data: "6", cliente: "Laiane", aparelho: "Redmi note 12s", pago: 800, frete: 0, custo: 650, lucro: 150 },
      { data: "6", cliente: "Laiane", aparelho: "Película note 12s", pago: 25, frete: 0, custo: 10, lucro: 15 },
      { data: "6", cliente: "Laiane", aparelho: "Compra de note 9", pago: 0, frete: 0, custo: 50, lucro: -50 },
      { data: "6", cliente: "Lidy", aparelho: "Redmi note 14 256/8", pago: 1450, frete: 50, custo: 1050, lucro: 300 },
    ],
    expenses: [
      { data: "10", produto: "Lanche", preco: 20 },
    ]
  },
  ABRIL: {
    summary: { totalProfit: 7868.31 },
    sales: [
      { data: "1", cliente
