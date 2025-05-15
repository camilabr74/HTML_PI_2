import React, {useState} from 'react';
import NavButton from '../../components/NavButton/NavButton';
import analise from '/src/assets/analise.jpeg';
import analise1 from '/src/assets/analise1.jpeg';
import analise2 from '/src/assets/analise2.jpeg';


function DataService() {
  const images = [analise, analise1, analise2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

   return (
    <div>
      <h1 className="text-2xl p-4 font-bold text-accent">
        Análise de Dados: Serviços de Zeladoria de São Vicente
      </h1>

      <div className="relative flex justify-center">
        {/* Botão Esquerdo */}
        <NavButton direction="left" onClick={handlePrev} />

        {/* Imagem maior */}
        <img
          src={images[currentIndex]}
          alt={`Análise ${currentIndex + 1}`}
          className="max-w-full"
        />

        {/* Botão Direito */}
        <NavButton direction="right" onClick={handleNext} />
      </div>
    </div>
  );
}

export default DataService;
