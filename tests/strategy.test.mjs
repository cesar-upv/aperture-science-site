import test from "node:test"
import { readFileSync } from "node:fs"
import assert from "node:assert/strict"
import {
  strategicGoals,
  swot,
  planningContext,
  orgStructure,
  companyCommitments,
  workCulture,
} from "../src/data/strategy.ts"

test("El FODA cubre las cuatro categorías con al menos cinco factores", () => {
  assert.deepEqual(
    new Set(swot.map((group) => group.id)),
    new Set(["fortalezas", "debilidades", "oportunidades", "amenazas"]),
  )
  for (const group of swot) {
    assert.ok(group.items.length >= 5, `${group.title}: faltan factores`)
    assert.equal(
      new Set(group.items.map((item) => item.title)).size,
      group.items.length,
      "Factores duplicados",
    )
    assert.ok(
      group.items.every((item) => item.title.trim() && item.description.trim()),
    )
  }
})

test("Cada objetivo tiene exactamente una estrategia y un plan identificables", () => {
  assert.ok(strategicGoals.length >= 3 && strategicGoals.length <= 5)
  for (const property of [
    (goal) => goal.id,
    (goal) => goal.strategy.id,
    (goal) => goal.plan.id,
  ]) {
    assert.equal(
      new Set(strategicGoals.map(property)).size,
      strategicGoals.length,
      "La trazabilidad requiere IDs únicos",
    )
  }
  const factorIds = new Set(
    swot.flatMap((group) =>
      group.items.map((_, i) => `${group.letter}${i + 1}`),
    ),
  )
  for (const goal of strategicGoals) {
    for (const key of [
      "statement",
      "baseline",
      "metric",
      "resources",
      "relevance",
      "deadline",
    ])
      assert.ok(goal[key]?.trim(), `Objetivo ${goal.id}: falta ${key}`)
    assert.match(goal.deadline, /^Mes (?:[1-9]|1[0-2])$/)
    assert.ok(
      goal.strategy.title &&
        goal.strategy.description &&
        goal.plan.owner &&
        goal.plan.tracking &&
        goal.plan.gate,
    )
    assert.ok(
      goal.plan.steps.length >= 3 && goal.plan.steps.length <= 4,
      `Objetivo ${goal.id}: debe tener entre 3 y 4 fases`,
    )
    assert.ok(
      goal.plan.steps.every(
        (step) => step.period && step.title && step.task && step.evidence,
      ),
    )
    for (const link of goal.swotLinks)
      assert.ok(
        factorIds.has(link.split(" · ")[0]),
        `Referencia FODA inexistente: ${link}`,
      )
  }
})

test("El contexto identifica las metas como propuesta y explicita los supuestos", () => {
  assert.match(planningContext.status, /Sin ejecución real/)
  assert.match(planningContext.baseline, /metas propuestas, no resultados/)
  assert.ok(planningContext.assumptions.trim())
  assert.match(planningContext.assumptions, /4 personas/)
})

test("La estructura organizacional define el CEO y los departamentos requeridos", () => {
  assert.ok(orgStructure.ceo.title.includes("CEO"))
  assert.ok(orgStructure.ceo.description.trim())
  assert.equal(orgStructure.departments.length, 4)

  const deptTitles = orgStructure.departments.map((d) => d.title)
  assert.ok(deptTitles.some((t) => t.includes("Manufactura y Producción")))
  assert.ok(deptTitles.some((t) => t.includes("Investigación y Desarrollo")))
  assert.ok(deptTitles.some((t) => t.includes("Recursos Humanos y Reclutamiento")))
  assert.ok(deptTitles.some((t) => t.includes("Control de Calidad y Seguridad")))

  for (const dept of orgStructure.departments) {
    assert.ok(dept.code && dept.title && dept.description && dept.role)
  }

  const allSubareas = orgStructure.departments.flatMap((d) => d.subareas)
  assert.ok(allSubareas.some((s) => s.title.includes("Ensamblaje y Síntesis")))
  assert.ok(allSubareas.some((s) => s.title.includes("IA y Simulaciones")))
  assert.ok(allSubareas.some((s) => s.title.includes("Hardware Cuántico")))
  assert.ok(allSubareas.some((s) => s.title.includes("Cámaras de Prueba")))
})

test("Los compromisos de la empresa y la cultura de trabajo están definidos", () => {
  assert.equal(companyCommitments.length, 4)
  for (const com of companyCommitments) {
    assert.ok(com.pillar && com.commitment && com.indicator && com.verification)
  }
  assert.ok(workCulture.summary.trim())
  assert.ok(workCulture.pillars.length >= 4)
})


test("La jerarquía y los compromisos corresponden al contenido vigente", () => {
  const source = readFileSync(new URL("../docs/SITE_CONTENT.md", import.meta.url), "utf8")
  const headings = [...source.matchAll(/^### (Dpto\. de .+)$/gm)].map(match => match[1])
  assert.deepEqual(orgStructure.departments.map(dept => dept.title), headings)
  const subareas = [...source.matchAll(/^#### (.+)$/gm)].map(match => match[1])
  assert.deepEqual(orgStructure.departments.flatMap(dept => dept.subareas.map(area => area.title)), subareas)
  for (const commitment of companyCommitments) {
    assert.ok(source.includes(commitment.indicator), `Indicador ajeno a SITE_CONTENT: ${commitment.pillar}`)
    assert.ok(source.includes(commitment.verification), `Verificación ajena a SITE_CONTENT: ${commitment.pillar}`)
  }
  for (const goal of strategicGoals) {
    assert.ok(goal.specific && goal.resources)
    for (const step of goal.plan.steps) assert.ok(source.includes(step.task))
  }
})
