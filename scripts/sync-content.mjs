import { readFileSync, writeFileSync } from 'node:fs'

const source = readFileSync(new URL('../docs/SITE_CONTENT.md', import.meta.url), 'utf8').replace(/\r\n/g, '\n')
function section(title, level = 2, input = source) {
  const marker = '#'.repeat(level) + ' ' + title + '\n'
  const start = input.indexOf(marker)
  if (start < 0) throw new Error(`Falta sección: ${title}`)
  return input.slice(start + marker.length).split(new RegExp(`\\n#{1,${level}} `))[0].replace(/\n---\s*$/, '').trim()
}
function blocks(title) {
  return section(title).split(/^### /m).slice(1).map(block => {
    const [title, ...body] = block.split('\n')
    return { title, body: body.join('\n').trim() }
  })
}
function field(body, label) {
  const line = body.split('\n').find(line => line.startsWith(`- **${label}**:`))
  if (!line) throw new Error(`Falta campo: ${label}`)
  return line.slice(line.indexOf('**:') + 3).trim()
}
const bullets = body => body.split('\n').filter(line => line.startsWith('- ')).map(line => line.slice(2))
const philosophy = {
  mission: section('Misión', 3), vision: section('Visión', 3),
  values: bullets(section('Valores', 3)).map(line => {
    const match = line.match(/^\*\*(.+?)\*\*: (.+)$/)
    if (!match) throw new Error('Valor sin nombre o descripción')
    return { title: match[1], description: match[2] }
  }),
}
const swot = blocks('Análisis FODA').map((block, i) => ({
  id: block.title.toLowerCase(), title: block.title, letter: block.title[0],
  context: i < 2 ? (i === 0 ? 'Internas · A favor' : 'Externas · Por explorar') : (i === 2 ? 'Internas · Por resolver' : 'Externas · Por anticipar'),
  tone: ['cyan', 'mint', 'orange', 'rose'][i],
  items: bullets(block.body).map(title => ({ title, description: title })),
}))
const strategies = blocks('Estrategias para cada objetivo')
const plans = blocks('Plan de acción para cada estrategia')
const strategicGoals = blocks('Objetivos SMART').map((block, i) => {
  const id = String(i + 1).padStart(2, '0')
  const plan = plans[i]
  if (!plan || !strategies[i]) throw new Error(`Falta estrategia o plan ${id}`)
  const metric = field(block.body, 'M')
  const target = metric.match(/\d+%?/)
  if (!target) throw new Error(`Falta meta cuantificable ${id}`)
  return {
    id, shortTitle: plan.title, title: block.title, statement: block.title,
    targetNumber: target[0], targetUnit: metric,
    deadline: field(block.body, 'T'), specific: field(block.body, 'S'), metric,
    resources: field(block.body, 'A'), relevance: field(block.body, 'R'),
    strategy: { id: `E${id}`, title: plan.title, description: strategies[i].body },
    plan: { id: `PA${id}`, owner: field(plan.body, 'Responsable'), window: field(plan.body, 'Tiempo'),
      resources: field(plan.body, 'Recursos'),
      steps: [{ title: 'Acciones principales', task: field(plan.body, 'Actividades') }] },
  }
})
const departments = blocks('Departamentos')
const orgNodes = departments.map((block, i) => ({
  id: `DEP-${i}`, title: block.title,
  description: bullets(block.body.split(/^#### /m)[0]).join(' '),
  subareas: block.body.split(/^#### /m).slice(1).map((part, j) => {
    const [title, ...body] = part.split('\n')
    return { id: `DEP-${i}-${j}`, title, description: bullets(body.join('\n')).join(' ') }
  }),
}))
const orgStructure = { ceo: orgNodes[0], departments: orgNodes.slice(1) }
const workCulture = { pillars: blocks('Cultura de trabajo').map(block => ({ title: block.title, description: block.body })) }
const companyCommitments = blocks('Compromisos de la empresa').map((block, i) => ({
  id: `COM-${i + 1}`, pillar: block.title, commitment: field(block.body, 'Compromiso'),
  indicator: field(block.body, 'Indicador'), verification: field(block.body, 'Forma en que se verificará'),
}))
const planningContext = { assumptions: section('Alcance y supuestos') }
const webContent = JSON.parse(section("Adaptación editorial para el sitio").match(/```json\n([\s\S]*?)\n```/)[1])
const data = { webContent, philosophy, swot, strategicGoals, orgStructure, workCulture, companyCommitments, planningContext }
const output = '// Generado por npm run content:sync desde docs/SITE_CONTENT.md. No editar directamente.\n\n' +
  Object.entries(data).map(([key, value]) => `export const ${key} = ${JSON.stringify(value, null, 2)}\n`).join('\n') +
  '\nexport type StrategicGoal = (typeof strategicGoals)[number]\n'
const target = new URL('../src/data/strategy.ts', import.meta.url)
if (process.argv.includes('--check')) {
  if (readFileSync(target, 'utf8').replace(/\r\n/g, '\n') !== output) throw new Error('Contenido desactualizado. Ejecuta npm run content:sync y guarda src/data/strategy.ts.')
} else writeFileSync(target, output)
