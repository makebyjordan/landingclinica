import React from 'react';
import { managementPrograms, CheckIcon } from '../constants';

export const ManagementSection: React.FC = () => {
    return (
        <section id="management" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Herramientas de organización hechas para ti</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Te ayudamos a organizar tu clínica de forma fácil: desde el control de pacientes, facturas, inventario y horarios de empleados. Todo adaptado a lo que necesites.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {managementPrograms.map((program) => (
                        <div key={program.id} className="bg-slate-50/70 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-200 hover:border-indigo-300">
                            <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                            <p className="mt-2 text-indigo-700 font-semibold">{program.question}</p>
                            <p className="mt-4 text-gray-600">{program.description}</p>
                            <ul className="mt-6 space-y-3">
                                {program.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                            {program.differentiator && (
                                <div className="mt-6 p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg">
                                    <p className="font-semibold text-indigo-800">{program.differentiator}</p>
                                </div>
                            )}
                            {program.note && (
                                <p className="mt-6 text-sm text-red-700 font-semibold bg-red-50 p-3 rounded-md">{program.note}</p>
                            )}
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8 rounded-2xl shadow-xl">
                    <h4 className="text-2xl font-bold">Lo adaptamos a tu negocio</h4>
                    <p className="mt-2 max-w-2xl mx-auto">Ajustamos las herramientas según lo que necesite tu clínica. Puedes usar solo una o todas las funciones que quieras.</p>
                </div>
            </div>
        </section>
    );
};