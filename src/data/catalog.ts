// Datos puros: las imágenes se resuelven en catalog-images.ts para que Node pueda probar este archivo.

export type CatalogGroup = "equipo" | "seguridad" | "compuestos" | "paquetes" | "servicios"
export type PolicyStatus = "si" | "condicional" | "no"
export type DeliveryMode = "domicilio" | "sucursal" | "sede"

export type CatalogItem = {
  id: string
  name: string
  group: CatalogGroup
  category: string
  price: number
  priceUnit?: string
  prior?: number
  description: string
  conditions: string
  returns: { status: PolicyStatus; label: string }
  delivery: string
  deliveryModes: DeliveryMode[]
  /** Ruta relativa a src/assets/. */
  image: string
  imageFit?: "contain"
  imageDescription: string
}

export const catalogGroups: { id: CatalogGroup; label: string }[] = [
  { id: "equipo", label: "Equipo personal" },
  { id: "seguridad", label: "Seguridad" },
  { id: "compuestos", label: "Compuestos" },
  { id: "paquetes", label: "Paquetes" },
  { id: "servicios", label: "Servicios" },
]

export const deliveryLabels: Record<DeliveryMode, string> = {
  domicilio: "Envío a domicilio",
  sucursal: "Recolección en sucursal",
  sede: "Servicio en sede",
}

export const policyLabels: Record<PolicyStatus, string> = {
  si: "Se aceptan",
  condicional: "Con condiciones",
  no: "No se aceptan",
}

export const contactEmail = "atencion@aperturescience.example"
export const flashDealId = "ashpd"
export const promoValidity = "30 de noviembre de 2026"
export const interestFreeMonths = 12
export const interestFreeMinimum = 100_000

const currency = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" })
export const formatPrice = (value: number) => `${currency.format(value)} MXN`
export const savings = (item: CatalogItem) => (item.prior ? item.prior - item.price : 0)
export const discountPercent = (item: CatalogItem) =>
  item.prior ? Math.round((1 - item.price / item.prior) * 100) : 0
export const inquiryHref = (item: CatalogItem) =>
  `mailto:${contactEmail}?subject=${encodeURIComponent(`Cotización: ${item.name}`)}`

export const catalog: CatalogItem[] = [
  {
    id: "ashpd", name: "Dispositivo Portátil de Portales (ASHPD v2.4)", group: "equipo", category: "Dispositivo cuántico individual",
    price: 150_000, prior: 175_000,
    description: "Lente de doble polaridad para la apertura de microagujeros de gusano sobre roca lunar.",
    conditions: "Garantía de 1 año contra fugas de partículas. Sin devoluciones tras romper el precinto de plomo. Cambios solo por defectos de fábrica.",
    returns: { status: "condicional", label: "Cambios solo por defecto de fábrica" },
    delivery: "Transporte blindado a domicilio o recolección en Muelle 4 del Centro de Enriquecimiento.",
    deliveryModes: ["domicilio", "sucursal"],
    image: "portal-gun.png", imageFit: "contain", imageDescription: "Imagen original del dispositivo portátil de portales",
  },
  {
    id: "botas-caida-libre", name: "Botas de Caída Libre (Long Fall Boots)", group: "equipo", category: "Seguridad personal",
    price: 42_500, priceUnit: "el par",
    description: "Calzado biomecánico con ballestas elásticas de aleación aeroespacial que absorben el impacto a velocidad terminal.",
    conditions: "30 días para cambio de talla sin marcas de impacto terminal. Garantía vitalicia en el chasis de titanio.",
    returns: { status: "si", label: "Cambio de talla en 30 días" },
    delivery: "Envío exprés aéreo o entrega estándar nacional a domicilio.",
    deliveryModes: ["domicilio"],
    image: "catalog/long-fall-boots.webp", imageDescription: "Render conceptual de las botas de caída libre",
  },
  {
    id: "torreta-centinela", name: "Torreta Centinela Doméstica", group: "seguridad", category: "Defensa perimetral",
    price: 89_999,
    description: "Unidad autónoma trípode con seguimiento láser omnidireccional, doble cañón de 9 mm y sintetizador de voz cortés.",
    conditions: "Requiere firma de exención de responsabilidad civil. Sin devoluciones si el sensor óptico principal fue manipulado.",
    returns: { status: "condicional", label: "Devolución con sensor óptico intacto" },
    delivery: "Flete terrestre autorizado para material balístico o recolección en planta.",
    deliveryModes: ["domicilio", "sucursal"],
    image: "catalog/sentry-turret.webp", imageDescription: "Render conceptual de una torreta centinela",
  },
  {
    id: "rejilla-emancipacion", name: "Rejilla de Emancipación Material", group: "seguridad", category: "Control perimetral",
    price: 120_000, priceUnit: "por marco",
    description: "Cortina de partículas ionizadas que desintegra equipo no autorizado sin dañar materia orgánica.",
    conditions: "Incluye 6 meses de mantenimiento preventivo. No hay devoluciones en medidas arquitectónicas a medida.",
    returns: { status: "no", label: "Sin devoluciones: fabricación a medida" },
    delivery: "Flete de maquinaria pesada especializada con visita previa de validación.",
    deliveryModes: ["domicilio"],
    image: "catalog/emancipation-grid.webp", imageDescription: "Render conceptual de la rejilla de emancipación material",
  },
  {
    id: "gel-repulsion", name: "Bidón de Gel de Repulsión (Azul - 200 Litros)", group: "compuestos", category: "Compuesto químico",
    price: 18_500,
    description: "Fluido polimérico que maximiza el coeficiente de elasticidad para proyectar masas al contacto.",
    conditions: "Devolución válida únicamente con el precinto hermético de venteo intacto.",
    returns: { status: "condicional", label: "Devolución con precinto intacto" },
    delivery: "Transporte especializado para químicos Clase 8 o retiro en plataforma de distribución norte.",
    deliveryModes: ["domicilio", "sucursal"],
    image: "catalog/repulsion-gel.webp", imageDescription: "Render conceptual del bidón de gel azul de repulsión",
  },
  {
    id: "gel-propulsion", name: "Bidón de Gel de Propulsión (Naranja - 200 Litros)", group: "compuestos", category: "Compuesto químico",
    price: 18_500,
    description: "Sustancia molecular que reduce la fricción a cero para propulsión continua de objetos.",
    conditions: "15 días naturales de devolución en envase original cerrado con hoja de seguridad (MSDS) firmada.",
    returns: { status: "si", label: "Devolución en 15 días, envase cerrado" },
    delivery: "Envío a granel certificado o recolección en sucursal con vehículo apto para carga química.",
    deliveryModes: ["domicilio", "sucursal"],
    image: "catalog/propulsion-gel.webp", imageDescription: "Render conceptual del bidón de gel naranja de propulsión",
  },
  {
    id: "paquete-desplazamiento-seguro", name: "Paquete «Desplazamiento Seguro»", group: "paquetes", category: "Paquete operativo · ASHPD + botas",
    price: 165_000, prior: 192_500,
    description: "Solución unificada de tránsito dimensional. Evita accidentes laborales al saltar desde alturas elevadas.",
    conditions: "Garantía unificada. Permite sustitución individual de botas por talla sin anular la garantía del dispositivo.",
    returns: { status: "si", label: "Cambio de talla de botas incluido" },
    delivery: "Envío premium asegurado sin costo a domicilio en territorio nacional.",
    deliveryModes: ["domicilio"],
    image: "catalog/safe-transit-bundle.webp", imageDescription: "Render conceptual del paquete de dispositivo de portales y botas",
  },
  {
    id: "paquete-cero-brechas", name: "Paquete «Cero Brechas»", group: "paquetes", category: "Paquete de seguridad · 2 torretas + rejilla",
    price: 249_000, prior: 299_998,
    description: "Filtro y contención perimetral. La rejilla desarma intrusos y las torretas aseguran el área interna.",
    conditions: "Incluye póliza técnica por 18 meses. Venta y garantía gestionadas como lote único.",
    returns: { status: "no", label: "Lote único, sin devoluciones parciales" },
    delivery: "Flete industrial directo a obra o nave corporativa.",
    deliveryModes: ["domicilio"],
    image: "catalog/zero-breaches-bundle.webp", imageDescription: "Render conceptual del paquete de dos torretas y rejilla",
  },
  {
    id: "combo-flujo-continuo", name: "Combo «Flujo Continuo»", group: "paquetes", category: "Paquete logístico · geles + aspersor",
    price: 39_900, prior: 45_500,
    description: "Automatización de transporte en naves industriales: aceleración horizontal y rampas elásticas de elevación.",
    conditions: "60 días de garantía en el aspersor. Los bidones no admiten devolución una vez abiertos.",
    returns: { status: "condicional", label: "Bidones sin devolución una vez abiertos" },
    delivery: "Envío en carga consolidada a domicilio o retiro en almacén central.",
    deliveryModes: ["domicilio", "sucursal"],
    image: "catalog/continuous-flow-bundle.webp", imageDescription: "Render conceptual del paquete de geles y aspersor",
  },
  {
    id: "certificacion-camaras", name: "Certificación de Personal en Cámaras de Prueba", group: "servicios", category: "Servicio corporativo",
    price: 75_000, priceUnit: "por cohorte · hasta 10 participantes",
    description: "Batería de pruebas de resolución lógica bajo estrés extremo supervisadas por IA para selección y evaluación de personal.",
    conditions: "Contrato B2B con cláusulas de confidencialidad. Reembolso del 80% con 15 días de aviso.",
    returns: { status: "condicional", label: "Reembolso del 80% con 15 días de aviso" },
    delivery: "Modalidad presencial en el Centro de Enriquecimiento (Sector C). Incluye traslado regional de participantes.",
    deliveryModes: ["sede"],
    image: "catalog/test-chamber-service.webp", imageDescription: "Render conceptual de una cámara de pruebas para certificación",
  },
]
