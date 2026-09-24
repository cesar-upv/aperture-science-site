import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { strategicGoals, swot, orgStructure, companyCommitments, workCulture, philosophy } from '../src/data/strategy.ts'
const source = readFileSync(new URL('../docs/SITE_CONTENT.md', import.meta.url), 'utf8').replace(/\r\n/g, '\n')
const inSource = value => assert.ok(value && source.includes(value), `Contenido ajeno a SITE_CONTENT: ${value}`)

test('Filosofía y FODA conservan el contenido original completo', () => {
  inSource(philosophy.mission); inSource(philosophy.vision)
  assert.equal(philosophy.values.length, 5)
  for (const value of philosophy.values) { inSource(value.title); inSource(value.description) }
  assert.deepEqual(new Set(swot.map(group => group.id)), new Set(['fortalezas','oportunidades','debilidades','amenazas']))
  for (const group of swot) {
    assert.equal(group.items.length, 5)
    assert.equal(new Set(group.items.map(item => item.title)).size, group.items.length)
    group.items.forEach(item => inSource(item.title))
  }
})
test('Cada objetivo conserva SMART, estrategia y acciones sin inventar fases', () => {
  assert.equal(strategicGoals.length, 3)
  assert.equal(new Set(strategicGoals.map(goal => goal.id)).size, 3)
  for (const goal of strategicGoals) {
    for (const key of ['title','specific','metric','resources','relevance','deadline']) inSource(goal[key])
    inSource(goal.strategy.description)
    for (const key of ['owner','window','resources']) inSource(goal.plan[key])
    assert.ok(goal.plan.steps.length > 0)
    goal.plan.steps.forEach(step => inSource(step.task))
  }
})
test('Organigrama y funciones mantienen la jerarquía del documento', () => {
  inSource(orgStructure.ceo.title)
  const titles = [...source.matchAll(/^### (Dpto\. de .+)$/gm)].map(match => match[1])
  assert.deepEqual(orgStructure.departments.map(dept => dept.title), titles)
  const areas = [...source.matchAll(/^#### (.+)$/gm)].map(match => match[1])
  assert.deepEqual(orgStructure.departments.flatMap(dept => dept.subareas.map(area => area.title)), areas)
  for (const node of [orgStructure.ceo, ...orgStructure.departments]) assert.ok(node.description.trim())
})
test('Cultura y compromisos coinciden con todas las entradas vigentes', () => {
  const commitments = source.split('## Compromisos de la empresa\n')[1]
  assert.deepEqual(companyCommitments.map(item => item.pillar), [...commitments.matchAll(/^### (.+)$/gm)].map(match => match[1]))
  for (const item of companyCommitments) for (const key of ['commitment','indicator','verification']) inSource(item[key])
  assert.equal(workCulture.pillars.length, 4)
  for (const item of workCulture.pillars) { inSource(item.title); inSource(item.description) }
})
