// FIX: Add React import to fix 'Cannot find namespace React' error.
import React from 'react';
import { Feature, MarketingFeature } from './types';

export const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

export const automations: Feature[] = [
    {
        id: 'whatsapp-ia',
        title: 'Mensajes y Llamadas Automáticas',
        question: '¿Cómo transforma la fidelización?',
        description: 'Sistema inteligente que genera automáticamente mensajes personalizados y llamadas programadas en cada fase del recorrido del paciente, incrementándote un 52% la retención y seguimiento de tratamientos.',
        benefits: [
            'Asistencia perfecta: Reduce cancelaciones de última hora en un 50% con mensajes y llamadas recordatorias que anticipan comportamientos',
            'Continuidad garantizada: Aumenta en un 35% la finalización de tratamientos con seguimiento personalizado por diversos canales',
            'Reputación digital mejorada: Incrementa tus reseñas positivas en un 70% con solicitudes inteligentes en el momento ideal',
            'Ventas cruzadas automáticas: Detecta oportunidades de servicios complementarios y realiza llamadas de seguimiento en momentos estratégicos',
            'Comunicación optimizada: Combina mensajes escritos y llamadas automáticas según la preferencia de cada paciente para maximizar respuestas'
        ],
        differentiator: 'Hiperpersonalización multicanal: Cada interacción (mensaje o llamada) se adapta dinámicamente al historial, tratamiento y perfil psicológico único de cada paciente.',
        image: 'https://picsum.photos/seed/whatsapp/800/600',
    },
    {
        id: 'citas-ia',
        title: 'IA Predictiva para Agendas Optimizadas',
        question: '¿Cuánto puedes aumentar tu rentabilidad?',
        description: 'Sistema de inteligencia artificial que predice patrones de cancelación y aprovecha cada minuto de tu agenda, maximizando tu capacidad operativa y reduciendo tiempos muertos.',
        benefits: [
            'Ocupación máxima: Mantiene tu agenda al 95% de capacidad mediante algoritmos predictivos que rellenan huecos automáticamente',
            'Liberación de recursos: Automatiza completamente la gestión de agenda, liberando hasta 25 horas semanales de tu equipo',
            'ROI excepcional: Por cada euro invertido, recuperas 4€ en tiempo aprovechado y pacientes adicionales atendidos',
            'Capacidad expandida: Aumenta entre un 15-25% el número de pacientes atendidos sin contratar personal adicional'
        ],
        differentiator: 'Algoritmo preventivo exclusivo: Mientras otros sistemas solo reportan cancelaciones, el nuestro predice y soluciona antes de que ocurran, reorganizando automáticamente tu agenda.',
        image: 'https://picsum.photos/seed/calendar/800/600',
    },
    {
        id: 'omnicanal',
        title: 'Recordatorios Multi-Canal',
        question: '¿Cómo garantizar comunicación perfecta?',
        description: 'Plataforma de comunicación que analiza las preferencias de cada paciente y optimiza automáticamente el canal y momento ideal para contactarle, alcanzando tasas de respuesta superiores al 85%.',
        benefits: [
            'Entrega garantizada: Sistema inteligente multicanal que asegura que cada mensaje es recibido y leído por el destinatario correcto',
            'Gestión automática: Permite a los pacientes confirmar, reprogramar o cancelar citas con un solo clic, sincronizándose automáticamente con tu agenda',
            'Asistente virtual 24/7: Resuelve hasta el 78% de consultas frecuentes sin intervención humana, liberando a tu equipo para tareas de valor',
            'Detección emocional: Analiza el tono y contenido de los mensajes para identificar pacientes preocupados o insatisfechos antes de que abandonen'
        ],
        differentiator: 'Motor de optimización de canales: Único sistema que aprende y adapta automáticamente el canal de comunicación preferido de cada paciente, maximizando la tasa de respuesta y satisfacción.',
        image: 'https://picsum.photos/seed/omnichannel/800/600',
    },
    {
        id: 'crm-automatizado',
        title: 'CRM Todo-en-Uno: Centraliza y Automatiza',
        question: '¿Cómo maximiza tus resultados?',
        description: 'Plataforma integral que unifica clientes, ventas, citas y finanzas en un solo sistema sincronizado, eliminando tareas manuales y aumentando tus ingresos en hasta un 28%.',
        benefits: [
            'Visión 360° del cliente: Captura cada interacción y preferencia para personalizar tu servicio y aumentar un 35% las ventas recurrentes',
            'Facturación perfecta: Reduce errores de cobro a cero con un sistema que enlaza servicios realizados y pagos automáticamente',
            'Agenda inteligente: Optimiza tu capacidad máxima con recordatorios que reducen inasistencias en un 60% y llenan espacios libres',
            'Toma de decisiones con datos: Accede a dashboards en tiempo real que identifican oportunidades de crecimiento y áreas de mejora',
            'Productividad aumentada: Libera hasta 15 horas semanales de tu equipo al eliminar tareas administrativas repetitivas'
        ],
        differentiator: 'Ecosistema integrado: La única solución donde cada nuevo dato actualiza automáticamente todos los módulos, garantizando decisiones basadas siempre en información actualizada y precisa.',
        image: 'https://iili.io/KZQOOLx.png',
    }
];

export const managementPrograms: Feature[] = [
    {
        id: 'gestion-pacientes',
        title: 'Historial Digital de Pacientes: Fácil y Completo',
        question: '¿Cómo revoluciona la gestión de datos clínicos?',
        description: 'Centraliza todo el historial de tus pacientes en una plataforma inteligente que conecta diagnósticos, tratamientos, imágenes y comunicaciones, permitiendo acceso instantáneo a la evolución completa desde cualquier dispositivo.',
        benefits: [
            'Expediente digital unificado: Visualiza el 100% del historial del paciente (consultas, pruebas, imágenes y prescripciones) en una sola pantalla intuitiva',
            'Búsqueda clínica avanzada: Localiza cualquier dato o patrón en segundos con nuestro motor de búsqueda especializado en terminología médica',
            'Evolución visual interactiva: Gráficos dinámicos que muestran la progresión de tratamientos y parámetros clínicos para decisiones médicas precisas',
            'Acceso multidispositivo sincronizado: Consulta o actualiza el historial desde cualquier lugar, garantizando que todos los profesionales trabajen con datos actualizados'
        ],
        note: 'Seguridad certificada: Cumple con RGPD, LOPD-GDD y normativas sanitarias.',
        image: 'https://picsum.photos/seed/patients/600/400',
    },
    {
        id: 'inventario-qr',
        title: 'Inventario QR: Control Total con Solo Escanear',
        question: '¿Por qué transformará tu gestión de stock?',
        description: 'Sistema revolucionario que automatiza tu inventario con un simple escaneo: registra productos al llegar, descuenta automáticamente al vender y te alerta cuando necesitas reponer, reduciendo pérdidas en un 35%.',
        benefits: [
            'Control en tiempo real: Un solo escaneo al recibir y vender actualiza todo tu sistema y contabilidad sin errores ni trabajo manual',
            'Alertas inteligentes de reposición: Recibe notificaciones automáticas antes de quedarte sin stock, calculadas según tu ritmo real de ventas',
            'Rentabilidad maximizada: Elimina el 98% de las pérdidas por productos caducados o perdidos con seguimiento preciso de cada artículo',
            'Gestión móvil completa: Controla todo tu inventario desde cualquier dispositivo con la aplicación escaner incluida'
        ],
        differentiator: 'Sistema de doble escaneo exclusivo: Registra automáticamente entradas y salidas con recordatorios inteligentes de reposición basados en IA predictiva.',
        note: 'Innovación garantizada: Incluye lector QR móvil multidispositivo y cumple con la normativa de facturación electrónica obligatoria desde 2026.',
        image: 'https://picsum.photos/seed/inventory/600/400',
    },
    {
        id: 'facturacion-qr',
        title: 'Facturas con código QR (Preparado para 2026)',
        question: '¿Cómo revoluciona tu gestión financiera?',
        description: 'Sistema integral de facturación digital que incorpora códigos QR en cada documento, garantizando validez legal, trazabilidad inmediata y conexión automática con tu contabilidad.',
        benefits: [
            'Facturación perfecta: Cada factura incluye el código QR obligatorio que verifica su autenticidad y evita multas de hasta 3.000€ por documento',
            'Escaneo instantáneo: Convierte cualquier factura en papel a digital con un simple escaneo del código QR, integrando automáticamente los datos',
            'Análisis financiero avanzado: Identifica qué servicios generan mayor rentabilidad gracias al seguimiento preciso que permite el sistema QR',
            'Detección temprana: El código QR facilita la identificación automática de facturas pendientes o con problemas, evitando sorpresas'
        ],
        differentiator: 'Tecnología de código QR cifrado: Añade una capa extra de seguridad y validación a cada factura, imposible de falsificar o manipular.',
        note: 'Preparación anticipada: Implementa hoy mismo los códigos QR en tus facturas y adáptate a la normativa obligatoria de 2026 antes que tu competencia.',
        image: 'https://picsum.photos/seed/billing/600/400',
    },
    {
        id: 'gestion-turnos',
        title: 'Control Horario del Personal',
        question: '¿Cómo optimiza tu gestión de equipo?',
        description: 'Sistema automatizado que distribuye horarios, turnos y vacaciones considerando tanto las necesidades de tu negocio como las preferencias individuales de cada empleado.',
        benefits: [
            'Satisfacción laboral maximizada: Incrementa la retención de talento en un 30% al permitir que cada profesional influya en su calendario',
            'Optimización de recursos humanos: Asegura la distribución perfecta de personal en cada momento, evitando tanto sobrecargas como tiempos muertos',
            'Resolución preventiva de conflictos: Reduce un 90% las disputas por horarios gracias al algoritmo imparcial de distribución',
            'Adaptación en tiempo real: Reajusta automáticamente los calendarios ante imprevistos, manteniendo siempre el servicio óptimo'
        ],
        differentiator: 'Motor de conciliación exclusivo: Único sistema que equilibra perfectamente productividad empresarial y bienestar del empleado.',
        note: 'Cumplimiento legal garantizado: Documenta automáticamente todos los horarios y descansos, protegiéndote ante cualquier inspección laboral.',
        image: 'https://picsum.photos/seed/shifts/600/400',
    }
];

export const immersiveMarketing: MarketingFeature[] = [
    {
        id: 'tour-3d',
        title: 'Visita virtual inmersiva',
        description: 'Los pacientes pueden explorar tu clínica en 360° desde cualquier dispositivo, generando confianza antes de su primera visita.',
        details: [
            'Incluye puntos interactivos con información detallada, vídeos testimoniales y opiniones reales de pacientes satisfechos.',
            'Reduce la ansiedad del paciente al mostrar un espacio acogedor y profesional antes de su visita.',
            'Contenido ideal para compartir en redes sociales y aumentar tu alcance digital de forma orgánica.',
            'Diferénciate de la competencia con una experiencia digital innovadora que genera mayor engagement.',
            'Aumenta las conversiones al eliminar la barrera del desconocimiento, especialmente efectivo para nuevos pacientes.'            
        ],
        seoNote: 'Mejora tu posicionamiento en Google Maps, incrementa tu visibilidad en búsquedas locales y proporciona contenido exclusivo para promocionar en Instagram, Facebook y LinkedIn.',
        image: 'https://iili.io/KZSx1Xj.png',
    },
    {
        id: 'formacion-3d',
        title: 'Capacitación Premium 3D: Potencia tu Equipo y Alumnos',
        description: 'Revoluciona la formación de personal y estudiantes con simulaciones 3D interactivas que reducen en un 60% el tiempo de aprendizaje y optimizan la transferencia de conocimientos clínicos.',
        details: [
            'ROI garantizado: Reduce hasta un 40% los costos de formación mientras aumentas la retención de conocimientos en un 75%.',
            'Excelencia educativa: Forma tanto a profesionales como a estudiantes con casos clínicos virtuales que superan a los métodos tradicionales.',
            'Formación disponible 24/7: Libera a tu personal senior de tareas repetitivas de enseñanza y optimiza la gestión del tiempo académico.',
            'Adaptación ultrarrápida: Nuevos empleados y estudiantes aprenden procedimientos complejos en menos tiempo, acelerando su curva de aprendizaje.',
            'Entorno seguro de prácticas: Permite a los alumnos cometer errores y aprender de ellos sin consecuencias reales para los pacientes.',
            'Avance académico: Potencia tu reputación como centro formador e impulsa colaboraciones con instituciones educativas.',
        ],
        image: 'https://iili.io/KZSPIZQ.png',
    },
    {
        id: 'vr-infantil',
        title: 'Experiencia Pediátrica Inmersiva: Fideliza a Familias Enteras',
        description: 'Transforma las visitas de los más pequeños en experiencias positivas con simulaciones 3D gamificadas que reducen hasta un 75% la ansiedad infantil y convierten el miedo en entusiasmo.',
        details: [
            'Ventaja competitiva exclusiva: Sé el único centro de tu zona con esta tecnología que fascina a niños y padres por igual.',
            'Pacientes satisfechos desde el primer día: Reduce cancelaciones de última hora y berrinches en sala de espera hasta en un 60%.',
            'Marketing viral garantizado: Los padres comparten naturalmente la experiencia en redes sociales, generando recomendaciones orgánicas.',
            'Fidelización familiar completa: Los niños piden volver y traen consigo a toda su familia como pacientes.',
            'Diferenciación premiada: Servicio reconocido como innovación médica por asociaciones profesionales y medios especializados.'
        ],
        automationNote: 'El sistema envía automáticamente acceso al juego en el momento de la reserva, con seguimiento personalizado y recordatorios gamificados que aumentan un 40% la asistencia.',
        image: 'https://iili.io/KZSMkqN.png',
    }
];