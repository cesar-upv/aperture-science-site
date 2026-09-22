export type SwotQuadrant = {
  id: string
  letter: string
  title: string
  context: string
  tone: "cyan" | "orange" | "mint" | "rose"
  items: {
    title: string
    description: string
  }[]
}

export const planningContext = {
  period: "Horizonte de 12 meses",
  status: "Propuesta académica · Sin ejecución real",
  premise:
    "Aperture Science prepara un programa de demostraciones y pilotos institucionales de la Portal Gun, dentro del universo de Portal. Interpretación creativa inspirada en Portal de Valve; no forma parte del canon del juego.",
  assumptions:
    "Se supone un equipo de 4 personas, una cámara de pruebas, y un dispositivo ficticio. El cumplimiento depende de confirmar estos recursos y la participación institucional. Las metas no representan resultados, ventas ni acuerdos obtenidos.",
  baseline:
    "Mes 1 es el inicio hipotético del programa. Las cifras son metas propuestas, no resultados obtenidos ni ventas cerradas. El cumplimiento depende de confirmar recursos y participación institucional.",
}

export const swot: SwotQuadrant[] = [
  {
    id: "fortalezas",
    letter: "F",
    title: "Fortalezas",
    context: "Internas · A favor",
    tone: "cyan",
    items: [
      {
        title: "Tecnología nueva y sin competencia",
        description:
          "Desarrollo pionero y sin competencia directa en manipulación cuántica del espacio y generación de portales bidireccionales.",
      },
      {
        title: "Infraestructura tecnológica muy avanzada diseñada para innovar",
        description:
          "Instalaciones subterráneas de escala masiva con equipamiento científico de última generación orientado a la innovación continua.",
      },
      {
        title: "Ingenieros altamente capacitados",
        description:
          "Cuerpo técnico y científico con alta especialización en física cuántica, robótica, inteligencia artificial y mecánica de fluidos.",
      },
      {
        title: "Patentes exclusivas en tecnología de portales",
        description:
          "Propiedad intelectual y portafolio de patentes registradas que blindan el diseño y arquitectura del dispositivo portátil de portales.",
      },
      {
        title: "Instalaciones de prueba 100% autónomas",
        description:
          "Cámaras de pruebas modulares con autoabastecimiento operativo, monitoreo robótico y ciclos de experimentación independientes.",
      },
    ],
  },
  {
    id: "oportunidades",
    letter: "O",
    title: "Oportunidades",
    context: "Externas · Por explorar",
    tone: "mint",
    items: [
      {
        title: "Revolución industrial",
        description:
          "Potencial disruptivo para transformar cadenas de suministro, logística de transporte y manufactura a escala global mediante portales.",
      },
      {
        title: "Reducción de la huella de carbono",
        description:
          "Eliminación del consumo masivo de combustibles en traslados de mercancías mediante interconexión instantánea de puntos geográficos.",
      },
      {
        title: "Exploración continua a nuevos lugares",
        description:
          "Apertura de accesos inmediatos a zonas remotas, entornos hostiles de alta radiación y exploración subterránea y aeroespacial.",
      },
      {
        title: "Nuevos contratos militares y gubernamentales",
        description:
          "Oportunidades de financiamiento e integración tecnológica estratégica mediante acuerdos con agencias e instituciones de defensa.",
      },
      {
        title: "Venta civil de tecnologías secundarias",
        description:
          "Comercialización derivada de innovaciones auxiliares como geles de propulsión y repulsión, placas térmicas y sistemas de amortiguación.",
      },
    ],
  },
  {
    id: "debilidades",
    letter: "D",
    title: "Debilidades",
    context: "Internas · Por resolver",
    tone: "orange",
    items: [
      {
        title: "Altísimos costos de producción",
        description:
          "Manufactura intensiva en capital y dependencia de materias primas exóticas que elevan el costo unitario de dispositivos y prototipos.",
      },
      {
        title: "Riesgos de seguridad para el usuario",
        description:
          "Peligros inherentes de aceleración terminal, desorientación cinética y fallos de software durante las pruebas con sujetos humanos.",
      },
      {
        title: "Mantenimiento",
        description:
          "Elevada complejidad técnica y costo del mantenimiento preventivo y correctivo en hardware cuántico e infraestructura de cámaras.",
      },
      {
        title: "Dependencia excesiva de una IA central",
        description:
          "Centralización extrema de la supervisión, telemetría y decisiones operativas en la inteligencia artificial rectora del complejo.",
      },
      {
        title: "Prácticas éticas cuestionables",
        description:
          "Riesgos reputacionales y legales derivados de protocolos experimentales rigurosos y antecedentes de reclutamiento forzoso.",
      },
    ],
  },
  {
    id: "amenazas",
    letter: "A",
    title: "Amenazas",
    context: "Externas · Por anticipar",
    tone: "rose",
    items: [
      {
        title: "Mala utilización del producto puede ocasionar desastres",
        description:
          "Riesgo de incidentes catastróficos por apertura involuntaria de portales en entornos no controlados o uso destructivo por terceros.",
      },
      {
        title: "Miedo o rechazo social",
        description:
          "Resistencia pública, suspicacia cultural y desconfianza social ante una tecnología cuántica que desafía las leyes físicas convencionales.",
      },
      {
        title: "Escasez de materias primas",
        description:
          "Vulnerabilidad en el suministro de componentes indispensables como superconductores escasos y polvo lunar procesado para superficies.",
      },
      {
        title: "Auditorías de comités de ética",
        description:
          "Intervención de organismos reguladores y comités de bioética que puedan condicionar, sancionar o suspender las pruebas de laboratorio.",
      },
      {
        title: "Fuerte competencia corporativa",
        description:
          "Rivalidad encarnizada frente a conglomerados competidores (como Black Mesa) en la carrera por subsidios federales y patentes espaciales.",
      },
    ],
  },
]

export type StrategicGoal = {
  id: string
  shortTitle: string
  title: string
  targetNumber: string
  targetUnit: string
  deadline: string
  specific: string
  statement: string
  baseline: string
  metric: string
  resources: string
  relevance: string
  swotLinks: string[]
  strategy: {
    id: string
    title: string
    description: string
  }
  plan: {
    id: string
    owner: string
    window: string
    steps: {
      period: string
      title: string
      task: string
      evidence: string
    }[]
    tracking: string
    gate: string
  }
}

export const strategicGoals: StrategicGoal[] = [
  {
    id: "01",
    shortTitle: "Reducir fallas críticas",
    specific: "Reducir la tasa de fallas de hardware en las pistolas de portales durante las fases de prueba.",
    title: "Reducir las fallas críticas de los dispositivos de portales",
    targetNumber: "-15%",
    targetUnit: "tasa de fallas de hardware",
    deadline: "Mes 12",
    statement:
      "Reducir la tasa de fallas de hardware en las pistolas de portales durante las fases de prueba en un 15% mediante la actualización del software de calibración cuántica sin cambiar el diseño físico, en un plazo de 12 meses.",
    baseline:
      "Tasa basal de fallas registrada en el mes 1 a partir de las pruebas de hardware en cámaras de prueba. Sin calibración previa verificada.",
    metric:
      "Disminuir la tasa de fallas de hardware en un 15% respecto al periodo inicial.",
    resources:
      "Actualizar el software de calibración cuántica sin cambiar el diseño físico.",
    relevance:
      'Mitiga la debilidad de "riesgos de seguridad para el usuario" y mejora la confianza del producto para futuras implementaciones.',
    swotLinks: [
      "D2 · Riesgos de seguridad para el usuario",
      "F3 · Ingenieros altamente capacitados",
      "A1 · Mala utilización del producto puede ocasionar desastres",
    ],
    strategy: {
      id: "E01",
      title: "Simulaciones virtuales masivas ejecutadas por IA",
      description:
        "Implementar un programa de simulaciones virtuales masivas ejecutadas por IA antes de realizar pruebas físicas con sujetos humanos, para predecir sobrecargas del sistema.",
    },
    plan: {
      id: "PA01",
      owner: "Dpto. de Investigación y Desarrollo / Laboratorio de IA y Simulaciones",
      window: "Meses 1–12",
      steps: [
        {
          period: "M01–M03",
          title: "Fase 1: Asignación y calibración del entorno",
          task: "Asignar un equipo de ingenieros para programar y calibrar el entorno de simulación de estrés físico.",
          evidence:
            "Entorno de simulación calibrado y especificación de parámetros de estrés físico aprobada.",
        },
        {
          period: "M04–M06",
          title: "Fase 2: Alimentación de datos históricos a la IA",
          task: "Alimentar a la IA central con los datos históricos de todas las fallas previas de la pistola de portales.",
          evidence:
            "Base de datos histórica de incidencias depurada y cargada en los núcleos de la IA central.",
        },
        {
          period: "M07–M09",
          title: "Fase 3: 10,000 simulaciones automatizadas",
          task: "Ejecutar 10,000 simulaciones automatizadas para identificar y registrar los puntos de ruptura del hardware.",
          evidence:
            "Informe de 10,000 simulaciones concluidas con mapa analítico de puntos de ruptura registrados.",
        },
        {
          period: "M10–M12",
          title: "Fase 4: Parches de software y validación física",
          task: "Desarrollar parches de software cuántico basados en los resultados y validar con una prueba física final controlada.",
          evidence:
            "Parche de software cuántico desplegado y reporte de validación física con reducción del 15% en fallas.",
        },
      ],
      tracking:
        "Revisión mensual del volumen de simulaciones ejecutadas y tasa de fallas proyectadas vs registradas.",
      gate:
        "Completar 10,000 simulaciones automatizadas con cero anomalías críticas antes de autorizar la prueba física final.",
    },
  },
  {
    id: "02",
    shortTitle: "Disminuir costos de producción",
    specific: "Reducir el costo de manufactura de los geles de propulsión y repulsión.",
    title: "Disminuir los costos de producción de tecnologías secundarias",
    targetNumber: "-20%",
    targetUnit: "en presupuesto de producción",
    deadline: "Mes 9",
    statement:
      "Reducir el costo de manufactura de los geles de propulsión y repulsión logrando una reducción del 20% en el presupuesto de producción, sustituyendo componentes de importación costosa por compuestos sintéticos desarrollados en laboratorio para el cierre del tercer trimestre del año fiscal.",
    baseline:
      "Costo de producción unitario del mes 1 basado en componentes importados y extracción de rocas lunares exóticas.",
    metric:
      "Reducir en un 20% el presupuesto de producción de geles.",
    resources:
      "Sustituir componentes de importación costosa por compuestos sintéticos desarrollados en laboratorio.",
    relevance:
      'Ataca directamente la debilidad de "altísimos costos de producción" y reduce la vulnerabilidad ante la escasez de materias primas.',
    swotLinks: [
      "D1 · Altísimos costos de producción",
      "O5 · Venta civil de tecnologías secundarias",
      "A3 · Escasez de materias primas",
    ],
    strategy: {
      id: "E02",
      title: "Alianzas químicas para síntesis externa",
      description:
        "Formar alianzas con empresas químicas externas para tercerizar la creación de polímeros sintéticos, reduciendo la dependencia de la extracción de materias primas exóticas.",
    },
    plan: {
      id: "PA02",
      owner: "Dpto. de Manufactura y Producción / Gestión Integrada de Ensamblaje y Síntesis",
      window: "Meses 1–9",
      steps: [
        {
          period: "M01–M02",
          title: "Fase 1: Auditoría y selección de químicas",
          task: "Auditar y seleccionar tres empresas químicas a nivel nacional con capacidad de producción industrial.",
          evidence:
            "Dictamen técnico de auditoría y selección de tres empresas químicas con capacidad industrial certificada.",
        },
        {
          period: "M03–M04",
          title: "Fase 2: Fórmulas base y prototipos sintéticos",
          task: "Proveer fórmulas base (censuradas por confidencialidad) para que los laboratorios externos generen los primeros prototipos de gel.",
          evidence:
            "Convenios de confidencialidad NDA firmados, fórmulas entregadas y lote inicial de prototipos recibido.",
        },
        {
          period: "M05–M07",
          title: "Fase 3: Pruebas de eficacia y rebote en cámaras",
          task: "Probar la eficacia y el rebote del nuevo gel sintético en las cámaras de prueba del Enrichment Center.",
          evidence:
            "Informe de pruebas de restitución elástica, viscosidad y aceleración en cámaras de prueba.",
        },
        {
          period: "M08–M09",
          title: "Fase 4: Exclusividad y cese de rocas lunares",
          task: "Firmar el contrato de exclusividad con el mejor proveedor y detener gradualmente la compra de rocas lunares.",
          evidence:
            "Contrato marco de exclusividad firmado y reducción documentada del 20% en costos de manufactura.",
        },
      ],
      tracking:
        "Comparativo mensual de costo por litro sintetizado versus costo histórico de importación.",
      gate:
        "El gel sintético alternativo debe superar el 95% de elasticidad y rebote del estándar previo antes de cesar contratos de rocas lunares.",
    },
  },
  {
    id: "03",
    shortTitle: "Reclutamiento de voluntarios",
    specific: "Captar más voluntarios mediante incentivos económicos, reduciendo las pruebas obligatorias.",
    title: "Incrementar el reclutamiento de sujetos de prueba voluntarios",
    targetNumber: "70",
    targetUnit: "nuevos sujetos integrados",
    deadline: "Mes 6",
    statement:
      "Captar más voluntarios mediante incentivos económicos, reduciendo las pruebas obligatorias, para reclutar e integrar a 70 nuevos sujetos de prueba al programa ofreciendo una compensación directa en efectivo al finalizar las pruebas, en un periodo máximo de 6 meses.",
    baseline:
      "0 voluntarios remunerados registrados al inicio del mes 1 bajo el nuevo protocolo formal de compensación directa.",
    metric:
      "Reclutar e integrar a 70 nuevos sujetos de prueba al programa con expedientes de consentimiento y compensación formalizados.",
    resources:
      "Ofrecer una compensación directa en efectivo al finalizar las pruebas.",
    relevance:
      'Mitiga las prácticas éticas cuestionables al asegurar que las pruebas se realicen con consentimiento.',
    swotLinks: [
      "D5 · Prácticas éticas cuestionables",
      "A4 · Auditorías de comités de ética",
      "A2 · Miedo o rechazo social",
    ],
    strategy: {
      id: "E03",
      title: "Campaña de reclutamiento urbano remunerado",
      description:
        "Lanzar una campaña de reclutamiento masiva y de bajo costo en áreas urbanas, enfocada en personas que busquen ingresos extra rápidos, asegurando el flujo constante de sujetos hacia las instalaciones subterráneas.",
    },
    plan: {
      id: "PA03",
      owner: "Dpto. de Recursos Humanos y Reclutamiento",
      window: "Meses 1–6",
      steps: [
        {
          period: "M01",
          title: "Fase 1: Contratos y exención médica legal",
          task: "Redactar y aprobar legalmente los nuevos contratos de confidencialidad y exención de responsabilidad médica.",
          evidence:
            "Contrato legalmente homologado con cláusula de exención de responsabilidad médica y compensación garantizada.",
        },
        {
          period: "M02–M03",
          title: "Fase 2: Difusión de la oferta de $60 USD",
          task: "Imprimir y distribuir publicidad en zonas urbanas clave destacando la compensación de $60 dólares en efectivo.",
          evidence:
            "Comprobantes de distribución publicitaria urbana y registro de afluencia de aspirantes.",
        },
        {
          period: "M04",
          title: "Fase 3: Recepción y filtros psicológicos",
          task: "Habilitar la sala de recepción en la superficie para realizar entrevistas, filtros psicológicos rápidos y firma de documentos.",
          evidence:
            "Sala de superficie operativa y bitácora de filtros psicológicos con firmas de consentimiento registradas.",
        },
        {
          period: "M05–M06",
          title: "Fase 4: Éstasis e ingreso a pruebas",
          task: "Ingresar a los 70 voluntarios seleccionados a las cámaras de éstasis para iniciar de inmediato los ciclos de prueba.",
          evidence:
            "70 expedientes completos de voluntarios con ingreso confirmado a cámaras de éstasis y asignación de circuito.",
        },
      ],
      tracking:
        "Censo quincenal de postulantes entrevistados, contratos suscritos y voluntarios ingresados a cámaras.",
      gate:
        "100% de los sujetos deben tener expediente de consentimiento firmado y exención validada antes de ingresar a pruebas.",
    },
  },
]

export type OrgSubarea = {
  id: string
  title: string
  description: string
  focus: string
}

export type OrgDepartment = {
  id: string
  code: string
  title: string
  role: string
  description: string
  tone: "cyan" | "orange" | "mint" | "rose"
  icon: "gear" | "atom" | "users" | "shield"
  subareas: OrgSubarea[]
}

export const orgStructure = {
  ceo: {
    id: "DIR-01",
    title: "Dirección General / CEO",
    role: "Liderazgo Ejecutivo y Estratégico",
    description:
      "Coordina las operaciones generales de Aperture Science, define prioridades y supervisa el cumplimiento de los objetivos de innovación, seguridad y producción.",
    focus:
      "Supervisión integral de las cuatro divisiones operativas, aprobación de presupuestos y dirección de la visión institucional.",
  },
  departments: [
    {
      id: "MFG-02",
      code: "DPTO-01",
      title: "Dpto. de Manufactura y Producción",
      role: "Fabricación, Síntesis y Ensamble",
      tone: "orange",
      icon: "gear",
      description:
        "Se encarga de fabricar y ensamblar dispositivos, materiales y componentes experimentales, buscando mantener la calidad y reducir costos de producción.",
      subareas: [
        {
          id: "MFG-S1",
          title: "Gestión Integrada de Ensamblaje y Síntesis",
          description:
            "Integra componentes de hardware y materiales sintéticos, incluyendo los geles de propulsión y repulsión, antes de enviarlos a las fases de prueba.",
          focus:
            "Sustitución de materias primas exóticas por polímeros sintéticos y reducción del 20% en costos de manufactura.",
        },
      ],
    },
    {
      id: "RD-03",
      code: "DPTO-02",
      title: "Dpto. de Investigación y Desarrollo",
      role: "Innovación Cuántica y Prototipado",
      tone: "cyan",
      icon: "atom",
      description:
        "Diseña y mejora las tecnologías experimentales de la empresa, convirtiendo nuevas ideas en prototipos y soluciones para corregir fallas detectadas.",
      subareas: [
        {
          id: "RD-S1",
          title: "Laboratorio de IA y Simulaciones",
          description:
            "Ejecuta simulaciones virtuales para detectar riesgos, sobrecargas y puntos de ruptura antes de realizar pruebas físicas con los dispositivos.",
          focus:
            "10,000 simulaciones automatizadas en la IA central para modelado de estrés.",
        },
        {
          id: "RD-S2",
          title: "División de Hardware Cuántico y Portátiles",
          description:
            "Desarrolla, calibra y mantiene el hardware relacionado con la tecnología de portales y aplica mejoras derivadas de las pruebas y simulaciones.",
          focus:
            "Calibración de software cuántico y reducción del 15% en fallas críticas.",
        },
      ],
    },
    {
      id: "HR-04",
      code: "DPTO-03",
      title: "Dpto. de Recursos Humanos y Reclutamiento",
      role: "Gestión de Talento y Sujetos de Prueba",
      tone: "mint",
      icon: "users",
      description:
        "Administra al personal y coordina el reclutamiento de sujetos voluntarios, verificando que conozcan las condiciones y requisitos de las pruebas.",
      subareas: [],
    },
    {
      id: "QC-05",
      code: "DPTO-04",
      title: "Dpto. de Control de Calidad y Seguridad",
      role: "Auditoría, Inspección y Salvaguarda",
      tone: "rose",
      icon: "shield",
      description:
        "Verifica que dispositivos, materiales y procedimientos cumplan con los estándares internos de calidad y seguridad antes de ser utilizados.",
      subareas: [
        {
          id: "QC-S1",
          title: "Monitoreo de Cámaras de Prueba",
          description:
            "Supervisa las pruebas en tiempo real, registra incidentes y permite detener o modificar un experimento cuando se detecta una situación de riesgo.",
          focus:
            "Validación del 100% de dispositivos destinados a pruebas y telemetría de seguridad en vivo.",
        },
      ],
    },
  ] as OrgDepartment[],
}

export const workCulture = {
  summary:
    "Aperture Science tendrá una cultura basada en la experimentación, la innovación y la mejora continua, siguiendo los valores de cuestionar, probar, investigar y aprender.",
  pillars: [
    {
      title: "Experimentación y mejora continua",
      description:
        "Cada prueba nos permite revisar una idea, aprender de sus resultados y mejorar la siguiente versión.",
      highlight: "Cuestionar · Probar · Investigar · Aprender",
    },
    {
      title: "Liderazgo orientado a objetivos",
      description:
        "La dirección utilizará un liderazgo orientado a objetivos, con responsabilidades claras y autonomía para cada departamento.",
      highlight: "Autonomía departamental y rendición de cuentas clara",
    },
    {
      title: "Comunicación directa basada en datos",
      description:
        "La comunicación será directa y basada en datos obtenidos durante pruebas, simulaciones y procesos de producción.",
      highlight: "Telemetría en tiempo real y evidencia verificable",
    },
    {
      title: "Motivación y trabajo colaborativo",
      description:
        "La motivación se fomentará mediante la participación en proyectos experimentales y el reconocimiento de soluciones innovadoras. El trabajo en equipo será esencial para que investigación, manufactura y seguridad colaboren en la detección y corrección de fallas.",
      highlight: "Sinergia interdisciplinaria e innovación compartida",
    },
  ],
}

export type CompanyCommitment = {
  id: string
  pillar: string
  commitment: string
  indicator: string
  verification: string
  tone: "cyan" | "orange" | "mint" | "rose"
}

export const companyCommitments: CompanyCommitment[] = [
  {
    id: "COM-01",
    pillar: "Seguridad y confiabilidad",
    commitment: "Mejorar continuamente la seguridad de los dispositivos de portales.",
    indicator: "Reducir en 15% las fallas críticas de hardware en 12 meses.",
    verification: "Comparar registros de fallas de simulaciones y pruebas físicas con periodos anteriores.",
    tone: "cyan",
  },
  {
    id: "COM-02",
    pillar: "Validación previa",
    commitment: "Evaluar las nuevas versiones de los dispositivos antes de realizar pruebas físicas.",
    indicator: "Ejecutar 10,000 simulaciones automatizadas por cada ciclo principal de validación.",
    verification: "Revisar los registros digitales del Laboratorio de IA y la autorización de Control de Calidad.",
    tone: "orange",
  },
  {
    id: "COM-03",
    pillar: "Participación voluntaria",
    commitment: "Garantizar que los sujetos de prueba participen voluntariamente y conozcan las condiciones del programa.",
    indicator: "Mantener documentación de consentimiento en el 100% de los participantes.",
    verification: "Revisar los expedientes administrados por Recursos Humanos antes de autorizar el ingreso a las pruebas.",
    tone: "mint",
  },
  {
    id: "COM-04",
    pillar: "Control de calidad",
    commitment: "Evitar el uso de tecnologías que no hayan completado los controles internos.",
    indicator: "Validar el 100% de los dispositivos destinados a pruebas o demostraciones.",
    verification: "Registrar inspecciones, fallas, correcciones y autorización final de cada dispositivo.",
    tone: "rose",
  },
]
