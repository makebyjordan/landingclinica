import React from 'react';
import { Link } from 'react-router-dom';

export const FinancingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header simple con botón de regreso */}
            <header className="bg-white shadow-md fixed w-full top-0 z-50">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        Volver al inicio
                    </Link>
                    <h2 className="text-2xl font-bold text-gray-900">Evolvance</h2>
                </div>
            </header>

            {/* Contenido principal */}
            <main className="pt-24 pb-20">
                <div className="container mx-auto px-6">
                    {/* Hero de la página */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
                            <span className="text-indigo-600">Opciones de</span> Autofinanciación
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Invertir en tu negocio nunca fue tan fácil. Te ofrecemos planes flexibles adaptados a tus necesidades.
                        </p>
                    </div>

                    {/* Planes de financiación */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Plan Básico */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-slate-200 hover:border-indigo-300 transition-all">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan Básico</h3>
                                <div className="text-4xl font-extrabold text-indigo-600 mb-2">3 meses</div>
                                <p className="text-gray-600">Sin intereses</p>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-gray-700">Pago inicial flexible</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-gray-700">0% interés</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-gray-700">Cuotas mensuales fijas</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-gray-700">Ideal para proyectos pequeños</span>
                                </li>
                            </ul>
                        </div>

                        {/* Plan Recomendado */}
                        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-8 border-4 border-indigo-400 transform scale-105 relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                                MÁS POPULAR
                            </div>
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Plan Estándar</h3>
                                <div className="text-4xl font-extrabold text-white mb-2">6 meses</div>
                                <p className="text-indigo-100">Sin intereses</p>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-300 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-white">Pago inicial mínimo</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-300 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-white">0% interés</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-300 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-white">Cuotas mensuales flexibles</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-300 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-white">Soporte prioritario</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-300 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-white">Perfecto para la mayoría</span>
                                </li>
                            </ul>
                        </div>

                        {/* Plan Extendido */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-slate-200 hover:border-indigo-300 transition-all">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan Extendido</h3>
                                <div className="text-3xl font-extrabold text-indigo-600 mb-2">12 meses o personalizado según proyecto</div>
                                <p className="text-gray-600">Sin intereses</p>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-gray-700">Sin pago inicial</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-gray-700">Cuotas más bajas</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-gray-700">Pago anticipado sin penalización</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-gray-700">Ideal para grandes proyectos</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Beneficios adicionales */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">¿Por qué elegir nuestro financiamiento?</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Sin complicaciones</h3>
                                <p className="text-gray-600 text-sm">Proceso rápido y sencillo, sin trámites bancarios complicados</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Aprobación inmediata</h3>
                                <p className="text-gray-600 text-sm">Respuesta en menos de 24 horas</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Totalmente flexible</h3>
                                <p className="text-gray-600 text-sm">Adapta los pagos a tu flujo de caja</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Comienza ya</h3>
                                <p className="text-gray-600 text-sm">Implementación inmediata mientras pagas</p>
                            </div>
                        </div>
                    </div>

                    {/* Call to action */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-12 text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para impulsar tu negocio?</h2>
                        <p className="text-xl mb-8 text-indigo-100">Contacta con nosotros y descubre la mejor opción de financiamiento para ti</p>
                        <a href="https://wa.me/34601869668" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-indigo-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                            </svg>
                            Habla con un experto
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
};
