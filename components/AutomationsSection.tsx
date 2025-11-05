import React from 'react';
import { automations, CheckIcon } from '../constants';
import type { Feature } from '../types';

const FeatureCard: React.FC<{ feature: Feature; isMain?: boolean }> = ({ feature, isMain = false }) => (
    <div className={`p-8 rounded-2xl ${isMain ? 'bg-white shadow-xl' : 'bg-slate-100'}`}>
        <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
        <p className="mt-2 text-indigo-700 font-semibold">{feature.question}</p>
        <p className="mt-4 text-gray-600">{feature.description}</p>
        <ul className="mt-6 space-y-3">
            {feature.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                </li>
            ))}
        </ul>
        {feature.differentiator && (
             <div className="mt-6 p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg">
                <p className="font-semibold text-indigo-800">{feature.differentiator}</p>
            </div>
        )}
    </div>
);


export const AutomationsSection: React.FC = () => {
    return (
        <section id="automations" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Impulsa tu Negocio con Automatización Inteligente</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        Duplica tu productividad y reduce costos operativos hasta en un 40% automatizando tus comunicaciones clave. Conecta con tus pacientes a través de <span className="font-semibold text-indigo-600">múltiples canales digitales</span> (email, SMS, redes sociales y mensajería) que incrementan las tasas de respuesta y maximizan la fidelización.                        
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="bg-gradient-to-br from-indigo-200 to-purple-200 rounded-3xl transform -rotate-3">
                            <img src={automations[3].image} alt={automations[3].title} className="rounded-3xl shadow-2xl transform rotate-3" />
                        </div>
                    </div>
                    <div>
                        <FeatureCard feature={automations[3]} isMain />
                    </div>
                </div>
                
                <div className="mt-20 grid md:grid-cols-3 gap-8">
                    <FeatureCard feature={automations[0]} />
                    <FeatureCard feature={automations[1]} />
                    <FeatureCard feature={automations[2]} />
                </div>

                <div className="mt-16 text-center">
                    <a href="#contact" className="bg-indigo-600 text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 hover:bg-indigo-700 cursor-pointer">
                        Saber más
                    </a>
                </div>
            </div>
        </section>
    );
};