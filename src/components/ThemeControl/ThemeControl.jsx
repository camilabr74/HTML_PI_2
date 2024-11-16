import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark'); // Tema padrão

  // Função para alternar o tema
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme); // Altera o atributo data-theme no HTML
    localStorage.setItem('theme', newTheme); // Salva o tema no localStorage
  };

  // Carregar tema salvo no localStorage ao inicializar
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme); // Carrega o tema armazenado
  }, []);

  return (
    <div className="flex items-center">
      <label htmlFor="theme-toggle" className="sr-only">Escolher tema de acessibilidade</label>
      <button 
        className="theme-toggle-button flex items-center rounded"
        onClick={() => {
          // Ciclo de temas (claro -> escuro -> alto contraste -> alto contraste invertido)
          const nextTheme = theme === 'light' 
          ? 'dark' 
          : theme === 'dark' 
          ? 'highcontrast' 
          : theme === 'highcontrast' 
          ? 'highcontrastinverted' 
          : theme === 'highcontrastinverted'
          ? 'highcontrastmonochrome'
          : 'light';
          changeTheme(nextTheme);
        }}
        aria-label="Alterar tema de acessibilidade"
      >
        <i className={`fas fa-eye p-2`} aria-hidden="true"></i> {/* Ícone de contraste */}
        {theme === 'light' && 'Claro'}
        {theme === 'dark' && 'Escuro'}
        {theme === 'highcontrast' && 'Alto Contraste'}
        {theme === 'highcontrastinverted' && 'Alto Contraste Invertido'}
        {theme === 'highcontrastmonochrome' && 'Alto Contraste Monocromático'}
      </button>
    </div>
  );
};

export default ThemeToggle;
