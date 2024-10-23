import React, { useState, useEffect } from 'react';
import produto1 from './../image/produto1.jpeg';
import produto2 from './../image/produto2.jpg';
import produto3 from './../image/produto3.webp';
import produto4 from './../image/produto4.webp';
import produto5 from './../image/produto5.jpg';
import produto6 from './../image/produto6.jpg';

const slides = [produto1, produto2, produto3, produto4, produto5, produto6];

export default function Carrossel() {
  const [atual, setAtual] = useState(0);

  const prev = () => setAtual(atual === 0 ? slides.length - 1 : atual - 1);
  const next = () => setAtual(atual === slides.length - 1 ? 0 : atual + 1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      next();
    }, 3000); // Muda a imagem a cada 3 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, [atual]);

  return (
    <div className="max-w-lg mx-auto">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${atual * 100}%)` }}
        >
          {slides.map((s, i) => (
            <img key={i} src={s} alt={`Slide ${i + 1}`} className="w-full h-auto" />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between">
          <button
            className="text-3xl font-black pb-1 px-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            onClick={prev}
            aria-label="Previous slide"
          >
            {' < '}
          </button>
          <button
            className="text-3xl font-black pb-1 px-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            onClick={next}
            aria-label="Next slide"
          >
            {' > '}
          </button>
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setAtual(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                atual === i ? 'bg-indigo-800' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
