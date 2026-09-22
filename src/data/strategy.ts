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
    "Escenario ficticio: Aperture Science prepara un programa de demostraciones y pilotos institucionales de la Portal Gun, dentro del universo de Portal.",
  assumptions:
    "Se supone un equipo de 12 personas, una cámara de pruebas, un dispositivo ficticio y presupuesto aprobado para 12 meses. Las funciones se distribuyen dentro de ese equipo; no representan contrataciones adicionales.",
  baseline:
    "Mes 1 es el inicio hipotético del programa. Las cifras son metas propuestas, no resultados obtenidos. Los valores iniciales de cero son supuestos de un programa nuevo; se validarán en el mes 1. Donde no hay medición, se establece una línea base antes de evaluar avances.",
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
        title: "Producto distintivo",
        description:
          "La conexión entre portales ofrece una propuesta diferenciada dentro del escenario ficticio.",
      },
      {
        title: "Capacidad experimental",
        description:
          "Las cámaras de prueba permiten repetir escenarios y observar el comportamiento del dispositivo.",
      },
      {
        title: "Conocimiento especializado",
        description:
          "El equipo supuesto reúne investigación, ingeniería y operación de tecnología de portales.",
      },
      {
        title: "Demostración visual",
        description:
          "El funcionamiento del dispositivo puede explicarse mediante recorridos y pruebas guiadas.",
      },
      {
        title: "Identidad reconocible",
        description:
          "La marca, la señalética y el diseño industrial aportan coherencia a la experiencia de Aperture.",
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
        title: "Infraestructura limitada",
        description:
          "Una sola cámara y un dispositivo restringen el número de pruebas y demostraciones simultáneas.",
      },
      {
        title: "Superficies compatibles",
        description:
          "El funcionamiento depende de superficies adecuadas, lo que limita los entornos de uso.",
      },
      {
        title: "Sin línea base operativa",
        description:
          "El programa inicia sin un registro verificado de desempeño, tiempos ni demanda institucional.",
      },
      {
        title: "Capacitación exigente",
        description:
          "El uso responsable requiere procedimientos, práctica supervisada y evaluación del personal.",
      },
      {
        title: "Dependencia de especialistas",
        description:
          "La concentración del conocimiento en pocos perfiles dificulta cubrir ausencias y ampliar operaciones.",
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
        title: "Alianzas de investigación",
        description:
          "Instituciones del escenario podrían aportar casos de estudio y observadores para pilotos.",
      },
      {
        title: "Aplicaciones logísticas",
        description:
          "El traslado de objetos entre puntos controlados constituye una hipótesis de uso por validar.",
      },
      {
        title: "Formación científica",
        description:
          "Las demostraciones guiadas pueden despertar interés en programas de aprendizaje experimental.",
      },
      {
        title: "Interés por la innovación",
        description:
          "Organizaciones que exploran nuevas tecnologías podrían participar en una convocatoria de pruebas.",
      },
      {
        title: "Red de proveedores",
        description:
          "Colaboraciones con proveedores podrían mejorar el mantenimiento y la disponibilidad de superficies compatibles.",
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
        title: "Competencia tecnológica",
        description:
          "Otras organizaciones del universo ficticio podrían ofrecer alternativas para las mismas necesidades.",
      },
      {
        title: "Cambios de requisitos",
        description:
          "Nuevas exigencias institucionales de seguridad podrían retrasar la autorización de pilotos.",
      },
      {
        title: "Interrupciones de suministro",
        description:
          "La falta de componentes o materiales compatibles podría suspender pruebas programadas.",
      },
      {
        title: "Desconfianza de participantes",
        description:
          "La percepción externa de riesgo puede reducir el interés o la continuidad de las alianzas.",
      },
      {
        title: "Menor inversión externa",
        description:
          "Recortes de presupuesto en instituciones interesadas podrían cancelar su participación en el programa.",
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
    shortTitle: "Validar el dispositivo",
    title: "Fiabilidad antes de expansión",
    targetNumber: "95%",
    targetUnit: "de casos aprobados",
    deadline: "Mes 9",
    statement:
      "Al cierre del mes 9, aprobar al menos 190 de 200 casos distintos de un protocolo de validación de la Portal Gun en cámara controlada, sin incidencias críticas abiertas, antes de autorizar pilotos externos.",
    baseline:
      "Por establecer en el mes 2 mediante una primera ejecución del protocolo. No se dispone de resultados previos verificables.",
    metric:
      "Casos aprobados ÷ 200 × 100. La última ejecución válida de cada caso determina su resultado; repetir una prueba no aumenta el denominador. Meta adicional: 0 incidencias críticas abiertas.",
    resources:
      "4 especialistas de ingeniería y calidad, la cámara compartida y dos jornadas de prueba por semana; capacidad supuesta que se confirmará en el mes 1.",
    relevance:
      "Produce evidencia para decidir qué usos pueden pasar a un piloto y reduce el riesgo de escalar un producto sin validar.",
    swotLinks: [
      "F2 · Capacidad experimental",
      "D3 · Sin línea base",
      "A2 · Cambios de requisitos",
    ],
    strategy: {
      id: "E01",
      title: "Validación por etapas",
      description:
        "Priorizar escenarios por riesgo, fijar un protocolo común y liberar el dispositivo por criterios de aceptación documentados.",
    },
    plan: {
      id: "PA01",
      owner: "Responsable de ingeniería y calidad",
      window: "Meses 1–9",
      steps: [
        {
          period: "M01–M02",
          title: "Definir y medir",
          task: "Aprobar los 200 casos, sus criterios y niveles de incidencia; ejecutar la primera ronda para registrar la línea base.",
          evidence:
            "Protocolo versionado y matriz inicial con 200 identificadores únicos.",
        },
        {
          period: "M03–M07",
          title: "Corregir y repetir",
          task: "Reservar dos jornadas semanales, resolver fallos por prioridad y repetir solo los casos afectados y sus dependencias.",
          evidence:
            "Bitácora de ejecuciones y registro trazable de incidencias.",
        },
        {
          period: "M08–M09",
          title: "Revisar la liberación",
          task: "Cerrar la ronda de validación y someter los resultados a una revisión de calidad independiente de quien ejecutó la prueba.",
          evidence:
            "Informe con al menos 190 casos aprobados y cero incidencias críticas abiertas.",
        },
      ],
      tracking:
        "Revisión quincenal del porcentaje aprobado y de incidencias críticas pendientes.",
      gate: "Un incumplimiento impide autorizar pilotos externos; exige corregir y volver a evaluar.",
    },
  },
  {
    id: "02",
    shortTitle: "Demostrar el valor",
    title: "Interés que se puede medir",
    targetNumber: "16",
    targetUnit: "instituciones participantes",
    deadline: "Mes 8",
    statement:
      "Antes de terminar el mes 8, completar 16 demostraciones guiadas para 16 instituciones distintas que cumplan los criterios de selección, con al menos una ficha de evaluación recibida por institución.",
    baseline:
      "0 instituciones atendidas, supuesto de un programa nuevo que se verificará contra los registros del mes 1.",
    metric:
      "Número de instituciones únicas con demostración completada y ficha de evaluación. Cada institución cuenta una sola vez. Meta: 16 de 16 fichas documentadas.",
    resources:
      "2 personas de vinculación y apoyo rotativo de operación; dos sesiones por mes de los meses 1 a 8, con fechas separadas de las jornadas de validación.",
    relevance:
      "Permite contrastar necesidades reales dentro del escenario y seleccionar aliados a partir de evidencia de interés.",
    swotLinks: [
      "F4 · Demostración visual",
      "O1 · Alianzas",
      "A4 · Desconfianza",
    ],
    strategy: {
      id: "E02",
      title: "Vinculación con demostración guiada",
      description:
        "Invitar instituciones con un caso de uso compatible y ofrecer sesiones adaptadas a su necesidad, con evaluación estructurada al cierre.",
    },
    plan: {
      id: "PA02",
      owner: "Responsable de vinculación institucional",
      window: "Meses 1–8",
      steps: [
        {
          period: "M01",
          title: "Seleccionar y convocar",
          task: "Definir criterios de compatibilidad, capacidad de participación y aceptación del protocolo; preparar una lista de 32 candidatas y calendarizar las dos primeras sesiones.",
          evidence:
            "Lista de candidatas, criterios de selección y calendario de invitaciones.",
        },
        {
          period: "M01–M08",
          title: "Mostrar con supervisión",
          task: "Celebrar dos sesiones mensuales y registrar asistencia. Usar una simulación o recorrido sin operación si aún no se autoriza una demostración física.",
          evidence:
            "16 actas de demostración con modalidad y una institución distinta por acta.",
        },
        {
          period: "M01–M08",
          title: "Documentar y dar seguimiento",
          task: "Recibir una evaluación por institución y revisar mensualmente necesidades, objeciones y posibles candidatas a piloto.",
          evidence:
            "16 fichas de evaluación y un informe consolidado al cierre del mes 8.",
        },
      ],
      tracking:
        "Revisión mensual de sesiones completadas, instituciones únicas y fichas recibidas.",
      gate: "La participación no equivale a una venta ni a una validación técnica del dispositivo.",
    },
  },
  {
    id: "03",
    shortTitle: "Activar alianzas piloto",
    title: "De la prueba a la colaboración",
    targetNumber: "3",
    targetUnit: "pilotos documentados",
    deadline: "Mes 12",
    statement:
      "Al cierre del mes 12, completar tres pilotos secuenciales con tres instituciones distintas, cada uno con acuerdo de alcance, una sesión supervisada y un informe de resultados aprobado por ambas partes.",
    baseline:
      "0 pilotos del programa, supuesto que se comprobará en el mes 1. No se presuponen acuerdos ni clientes existentes.",
    metric:
      "Pilotos con los tres entregables completos: acuerdo, acta de sesión e informe bilateral. Meta: 3; una misma institución no puede contarse dos veces.",
    resources:
      "2 responsables de proyectos y vinculación con apoyo de operación; un piloto mensual entre los meses 10 y 12, usando la cámara de forma secuencial.",
    relevance:
      "Comprueba la pertinencia de casos de uso acotados antes de proponer una expansión institucional más amplia.",
    swotLinks: [
      "D1 · Infraestructura limitada",
      "O1 · Alianzas",
      "O2 · Aplicaciones logísticas",
    ],
    strategy: {
      id: "E03",
      title: "Pilotos pequeños y secuenciales",
      description:
        "Convertir el interés registrado en tres colaboraciones de alcance limitado, dentro de la capacidad disponible y con puertas de autorización explícitas.",
    },
    plan: {
      id: "PA03",
      owner: "Responsable del programa de pilotos",
      window: "Meses 7–12",
      steps: [
        {
          period: "M07–M09",
          title: "Acordar el alcance",
          task: "Seleccionar tres instituciones entre las participantes, definir un caso por piloto y firmar acuerdos sujetos a validación técnica y personal habilitado.",
          evidence:
            "Tres acuerdos con alcance, agenda, responsables y criterios de cierre.",
        },
        {
          period: "M10–M12",
          title: "Ejecutar por turnos",
          task: "Realizar una sesión por piloto, una institución al mes, únicamente después de cumplir las condiciones de los objetivos 01 y 04.",
          evidence:
            "Tres actas de ejecución y registro de incidencias de cada sesión.",
        },
        {
          period: "M10–M12",
          title: "Evaluar con el aliado",
          task: "Entregar y revisar el informe de cada piloto dentro de los diez días posteriores a su sesión, sin superar el cierre del mes 12.",
          evidence:
            "Tres informes aprobados por ambas partes con hallazgos y decisión de continuidad.",
        },
      ],
      tracking:
        "Seguimiento mensual de acuerdos, sesiones e informes; un piloto cuenta solo cuando cierra sus tres entregables.",
      gate: "Depende de la validación del objetivo 01 y la habilitación del objetivo 04. Si no se cumplen, el piloto se pospone y se reporta el desvío.",
    },
  },
  {
    id: "04",
    shortTitle: "Preparar al equipo",
    title: "Cada persona, un protocolo",
    targetNumber: "12/12",
    targetUnit: "personas habilitadas",
    deadline: "Mes 6",
    statement:
      "Antes de cerrar el mes 6, habilitar internamente a las 12 personas del equipo en el protocolo correspondiente a su función: mínimo 90% en evaluación teórica y 100% de pasos críticos en una práctica supervisada.",
    baseline:
      "0 habilitaciones registradas para este protocolo, supuesto que se contrastará con un diagnóstico individual durante el mes 1.",
    metric:
      "Personas que aprueban ambas evaluaciones ÷ 12 × 100. Meta: 100%. La evaluación práctica exige completar todos los pasos críticos sin ayuda.",
    resources:
      "1 coordinador de formación y 1 evaluador de calidad del mismo equipo de 12; una sesión de 90 minutos cada dos semanas y práctica por función.",
    relevance:
      "Distribuye el conocimiento, reduce dependencias individuales y fija condiciones de participación antes de los pilotos.",
    swotLinks: [
      "F3 · Conocimiento especializado",
      "D4 · Capacitación",
      "D5 · Dependencia de especialistas",
    ],
    strategy: {
      id: "E04",
      title: "Formación y habilitación por función",
      description:
        "Convertir el conocimiento de especialistas en procedimientos enseñables y exigir evidencia individual antes de asignar tareas de operación.",
    },
    plan: {
      id: "PA04",
      owner: "Coordinación de formación y calidad",
      window: "Meses 1–6",
      steps: [
        {
          period: "M01",
          title: "Diagnosticar y documentar",
          task: "Revisar las competencias de las 12 personas, asignar funciones y redactar listas de pasos críticos y criterios de evaluación.",
          evidence:
            "Matriz de competencias, diagnóstico individual y protocolo por función.",
        },
        {
          period: "M02–M05",
          title: "Entrenar y practicar",
          task: "Impartir sesiones quincenales, practicar en grupos pequeños y reforzar los pasos que cada persona aún no domina.",
          evidence:
            "Registro de asistencia, material de formación y bitácoras de práctica.",
        },
        {
          period: "M06",
          title: "Evaluar la habilitación",
          task: "Aplicar teoría y práctica con un evaluador distinto al participante; repetir la formación y evaluación de quienes no alcancen el criterio dentro del plazo.",
          evidence:
            "12 expedientes con resultados de al menos 90% en teoría y todos los pasos críticos aprobados.",
        },
      ],
      tracking:
        "Revisión quincenal de asistencia y competencias; cierre con el porcentaje de personas habilitadas.",
      gate: "Es una habilitación interna ficticia, no una certificación oficial. Una persona sin aprobación no realiza tareas para las que aún no está habilitada.",
    },
  },
]
