

import React from 'react';
import { immersiveMarketing } from '../constants';
import type { MarketingFeature } from '../types';

const MarketingFeatureCard: React.FC<{ feature: MarketingFeature; reverse?: boolean }> = ({ feature, reverse = false }) => (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
        <div className={`relative ${reverse ? 'md:col-start-2' : ''}`}>
             <div className={`bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl transform ${reverse ? 'rotate-3' : '-rotate-3'}`}>
                <img src={feature.image} alt={feature.title} className={`rounded-3xl shadow-2xl transform ${reverse ? '-rotate-3' : 'rotate-3'}`} />
            </div>
        </div>
        <div className={`py-6 ${reverse ? 'md:col-start-1' : ''}`}>
            <h3 className="text-3xl font-bold text-gray-900">{feature.title}</h3>
            <p className="mt-4 text-lg text-gray-600">{feature.description}</p>
            <ul className="mt-6 space-y-4">
                {feature.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 bg-pink-500 rounded-full flex items-center justify-center mr-4 mt-1">
                            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-gray-700">{detail}</span>
                    </li>
                ))}
            </ul>
             {feature.seoNote && (
                <p className="mt-6 text-sm font-semibold text-blue-800 bg-blue-100 p-3 rounded-lg">{`SEO: ${feature.seoNote}`}</p>
            )}
            {feature.automationNote && (
                 <p className="mt-6 text-sm font-semibold text-green-800 bg-green-100 p-3 rounded-lg">{`Automatización: ${feature.automationNote}`}</p>
            )}
        </div>
    </div>
);


export const MarketingSection: React.FC = () => {
    return (
        <section id="marketing" className="py-20 bg-slate-50 overflow-x-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Marketing Inmersivo</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Tours virtuales 3D, vídeos explicativos y simulación interactiva segura para conectar con tus pacientes como nunca antes.
                    </p>
                </div>

                <div className="space-y-24">
                    {immersiveMarketing.map((feature, index) => (
                        <MarketingFeatureCard key={feature.id} feature={feature} reverse={index % 2 !== 0} />
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-8">Además, potenciamos tu presencia online</h3>
                    <div className="flex justify-center items-center gap-6 flex-wrap">
                        <button className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 border-2 border-indigo-600 cursor-pointer">
                            Contenido RRSS
                        </button>
                        <button className="bg-indigo-600 text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 hover:bg-indigo-700 cursor-pointer">
                            Campañas Ads
                        </button>
                        <button className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 border-2 border-indigo-600 cursor-pointer">
                            Página web
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};