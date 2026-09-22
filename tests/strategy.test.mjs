import test from "node:test"
import assert from "node:assert/strict"
import { strategicGoals, swot, planningContext } from "../src/data/strategy.ts"

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
    assert.equal(goal.plan.steps.length, 3)
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
})
