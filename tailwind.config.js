import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/**/*.css'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        highcontrast: {
          "primary": "#0000FF",         // Azul vibrante para contraste com o fundo branco
          "secondary": "#FFD700",       // Amarelo forte para botões e alertas
          "accent": "#FF4500",          // Laranja vibrante para chamar atenção em elementos destacados
          "neutral": "#000000",         // Preto puro para o texto
          "base-100": "#FFFFFF",        // Branco puro para o fundo principal
          "info": "#1E90FF",            // Azul forte para informações
          "success": "#32CD32",         // Verde vibrante para mensagens de sucesso
          "warning": "#FFA500",         // Amarelo-alaranjado para alertas
          "error": "#FF0000",           // Vermelho puro para erros
        },
      },
      {
        highcontrastinverted: {
          "primary": "#FFFFFF",         // Branco para elementos de destaque
          "secondary": "#00FFFF",       // Ciano para botões e alertas
          "accent": "#FF00FF",          // Magenta para elementos destacados
          "neutral": "#000000",         // Preto para o fundo principal
          "base-100": "#000000",        // Fundo principal preto
          "info": "#00BFFF",            // Azul claro para informações
          "success": "#00FF7F",         // Verde claro para sucesso
          "warning": "#FFD700",         // Amarelo para alertas
          "error": "#FF4500",           // Vermelho-alaranjado para erros
        },
      },
      {
        highcontrastmonochrome: {
          "primary": "#FFFFFF",         // Branco para texto e ícones principais
          "secondary": "#CCCCCC",       // Cinza claro para botões e áreas destacadas
          "accent": "#FFD700",          // Amarelo vibrante para chamar atenção
          "neutral": "#000000",         // Preto para fundo e texto
          "base-100": "#000000",        // Fundo principal preto
          "info": "#A9A9A9",            // Cinza médio para informações
          "success": "#808080",         // Cinza para sucesso
          "warning": "#FFFF00",         // Amarelo para alertas
          "error": "#FF6347",           // Vermelho-tomate para erros
        },
      },
      "light",
      "dark",
    ],
  },
};
