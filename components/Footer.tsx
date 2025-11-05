import React from 'react';
export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center">¿Quieres hacer crecer tu negocio?</h2>
          <p className="mt-4 text-gray-400 text-center">
            Te ayudamos con herramientas fáciles para organizar tu clínica, atraer más clientes y gestionar el día a día. Cuéntanos tu proyecto.
          </p>
          
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <p className="text-gray-400"><span className="text-white font-semibold">Pago flexible:</span> Puedes pagar poco a poco, sin necesidad de una gran inversión al principio.</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <p className="text-gray-400"><span className="text-white font-semibold">Perfecto para negocios pequeños:</span> Creado especialmente para clínicas pequeñas y medianas, que puede crecer contigo.</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a href="https://wa.me/34601869868" target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-indigo-700 transition-all text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Consúltanos tu proyecto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};