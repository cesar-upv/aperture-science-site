import portalGun from "../assets/portal-gun.png"
import longFall from "../assets/catalog/long-fall-boots.png"
import turret from "../assets/catalog/sentry-turret.png"
import grid from "../assets/catalog/emancipation-grid.png"
import blueGel from "../assets/catalog/repulsion-gel.png"
import orangeGel from "../assets/catalog/propulsion-gel.png"
import safeBundle from "../assets/catalog/safe-transit-bundle.png"
import securityBundle from "../assets/catalog/zero-breaches-bundle.png"
import gelBundle from "../assets/catalog/continuous-flow-bundle.png"
import certification from "../assets/catalog/test-chamber-service.png"

export type CatalogItem = {
  name: string
  category: string
  price: string
  prior?: string
  offer?: string
  description: string
  conditions: string
  delivery: string
  image: string
  imageDescription: string
}

export const catalog: CatalogItem[] = [
  {
    name: "Dispositivo Portátil de Portales (ASHPD v2.4)", category: "Dispositivo cuántico individual",
    price: "$150,000.00 MXN", prior: "$175,000.00 MXN", offer: "14% OFF",
    description: "Lente de doble polaridad para la apertura de microagujeros de gusano sobre roca lunar.",
    conditions: "Garantía de 1 año contra fugas de partículas. Sin devoluciones tras romper el precinto de plomo. Cambios solo por defectos de fábrica.",
    delivery: "Transporte blindado a domicilio o recolección en Muelle 4 del Centro de Enriquecimiento.",
    image: portalGun, imageDescription: "Imagen original del dispositivo portátil de portales",
  },
  {
    name: "Botas de Caída Libre (Long Fall Boots)", category: "Seguridad personal",
    price: "$42,500.00 MXN el par",
    description: "Calzado biomecánico con ballestas elásticas de aleación aeroespacial que absorben el impacto a velocidad terminal.",
    conditions: "30 días para cambio de talla sin marcas de impacto terminal. Garantía vitalicia en el chasis de titanio.",
    delivery: "Envío exprés aéreo o entrega estándar nacional a domicilio.",
    image: longFall, imageDescription: "Render conceptual de las botas de caída libre",
  },
  {
    name: "Torreta Centinela Doméstica", category: "Defensa perimetral",
    price: "$89,999.00 MXN",
    description: "Unidad autónoma trípode con seguimiento láser omnidireccional, doble cañón de 9 mm y sintetizador de voz cortés.",
    conditions: "Requiere firma de exención de responsabilidad civil. Sin devoluciones si el sensor óptico principal fue manipulado.",
    delivery: "Flete terrestre autorizado para material balístico o recolección en planta.",
    image: turret, imageDescription: "Render conceptual de una torreta centinela",
  },
  {
    name: "Rejilla de Emancipación Material", category: "Control perimetral",
    price: "$120,000.00 MXN por marco",
    description: "Cortina de partículas ionizadas que desintegra equipo no autorizado sin dañar materia orgánica.",
    conditions: "Incluye 6 meses de mantenimiento preventivo. No hay devoluciones en medidas arquitectónicas a medida.",
    delivery: "Flete de maquinaria pesada especializada con visita previa de validación.",
    image: grid, imageDescription: "Render conceptual de la rejilla de emancipación material",
  },
  {
    name: "Bidón de Gel de Repulsión (Azul - 200 Litros)", category: "Compuesto químico",
    price: "$18,500.00 MXN",
    description: "Fluido polimérico que maximiza el coeficiente de elasticidad para proyectar masas al contacto.",
    conditions: "Devolución válida únicamente con el precinto hermético de venteo intacto.",
    delivery: "Transporte especializado para químicos Clase 8 o retiro en plataforma de distribución norte.",
    image: blueGel, imageDescription: "Render conceptual del bidón de gel azul de repulsión",
  },
  {
    name: "Bidón de Gel de Propulsión (Naranja - 200 Litros)", category: "Compuesto químico",
    price: "$18,500.00 MXN",
    description: "Sustancia molecular que reduce la fricción a cero para propulsión continua de objetos.",
    conditions: "15 días naturales de devolución en envase original cerrado con hoja de seguridad (MSDS) firmada.",
    delivery: "Envío a granel certificado o recolección en sucursal con vehículo apto para carga química.",
    image: orangeGel, imageDescription: "Render conceptual del bidón de gel naranja de propulsión",
  },
  {
    name: "Paquete «Desplazamiento Seguro»", category: "Bundle operativo · ASHPD + botas",
    price: "$165,000.00 MXN", prior: "$192,500.00 MXN", offer: "AHORRA $27,500",
    description: "Solución unificada de tránsito dimensional. Evita accidentes laborales al saltar desde alturas elevadas.",
    conditions: "Garantía unificada. Permite sustitución individual de botas por talla sin anular la garantía del dispositivo.",
    delivery: "Envío premium asegurado sin costo a domicilio en territorio nacional.",
    image: safeBundle, imageDescription: "Render conceptual del paquete de dispositivo de portales y botas",
  },
  {
    name: "Paquete «Cero Brechas»", category: "Bundle de seguridad · 2 torretas + rejilla",
    price: "$249,000.00 MXN", prior: "$299,998.00 MXN", offer: "17% OFF",
    description: "Filtro y contención perimetral. La rejilla desarma intrusos y las torretas aseguran el área interna.",
    conditions: "Incluye póliza técnica por 18 meses. Venta y garantía gestionadas como lote único.",
    delivery: "Flete industrial directo a obra o nave corporativa.",
    image: securityBundle, imageDescription: "Render conceptual del paquete de dos torretas y rejilla",
  },
  {
    name: "Combo «Flujo Continuo»", category: "Bundle logístico · geles + aspersor",
    price: "$39,900.00 MXN", offer: "AHORRA $5,600",
    description: "Automatización de transporte en naves industriales: aceleración horizontal y rampas elásticas de elevación.",
    conditions: "60 días de garantía en el aspersor. Los bidones no admiten devolución una vez abiertos.",
    delivery: "Envío en carga consolidada a domicilio o retiro en almacén central.",
    image: gelBundle, imageDescription: "Render conceptual del paquete de geles y aspersor",
  },
  {
    name: "Certificación de Personal en Cámaras de Prueba", category: "Servicio corporativo",
    price: "$75,000.00 MXN por cohorte · hasta 10 participantes",
    description: "Batería de pruebas de resolución lógica bajo estrés extremo supervisadas por IA para selección y evaluación de personal.",
    conditions: "Contrato B2B con cláusulas de confidencialidad. Reembolso del 80% con 15 días de aviso.",
    delivery: "Modalidad presencial en el Centro de Enriquecimiento (Sector C). Incluye traslado regional de participantes.",
    image: certification, imageDescription: "Render conceptual de una cámara de pruebas para certificación",
  },
]
