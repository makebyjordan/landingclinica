import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="https://evolvance.es/services" target="_blank" rel="noopener noreferrer" className="font-bold text-2xl text-gray-900 hover:opacity-80 transition-opacity cursor-pointer">
          Evolv<span className="text-indigo-600">ance</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#marketing" className="text-gray-600 hover:text-indigo-600 transition-colors">Marketing Inmersivo</a>
          <a href="#automations" className="text-gray-600 hover:text-indigo-600 transition-colors">Automatizaciones</a>
          <a href="#management" className="text-gray-600 hover:text-indigo-600 transition-colors">Programas de Gestión</a>
        </nav>
        <a href="https://wa.me/34601869668" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700 transition-all shadow-md">
          Habla con un experto
        </a>
      </div>
    </header>
  );
};