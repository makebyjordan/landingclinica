import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section className="bg-slate-50 pt-32 pb-20">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                    <span className="text-indigo-600">POTENCIAMOS</span> TU EMPRESA<br />
                    <span className="text-3xl md:text-5xl">Soluciones desde la raíz · Crecimiento garantizado</span>
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
                    Haz crecer tu negocio con herramientas fáciles de usar: mensajes automáticos, organización de citas, gestión del día a día y publicidad moderna. Menos pacientes que faltan, más clientes fieles y tu clínica funcionando sin parar.
                </p>
                <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
                    <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-md">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-gray-800 font-semibold">Opciones de autofinanciación</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-md">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                        <span className="text-gray-800 font-semibold">Adaptado a pequeñas empresas</span>
                    </div>
                </div>
                <div className="mt-10">
                    <a href="#contact" className="bg-indigo-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-indigo-700 transition-all text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Habla con un experto
                    </a>
                </div>
            </div>
        </section>
    );
};