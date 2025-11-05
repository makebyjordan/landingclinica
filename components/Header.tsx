import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-bold text-2xl text-gray-900">
          Evolv<span className="text-indigo-600">ance</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#marketing" className="text-gray-600 hover:text-indigo-600 transition-colors">Publicidad</a>
          <a href="#automations" className="text-gray-600 hover:text-indigo-600 transition-colors">Tareas Automáticas</a>
          <a href="#management" className="text-gray-600 hover:text-indigo-600 transition-colors">Organización</a>
        </nav>
        <a href="#contact" className="hidden md:inline-block bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700 transition-all shadow-md">
          Habla con un experto
        </a>
      </div>
    </header>
  );
};