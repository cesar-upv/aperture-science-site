import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { catalog, catalogGroups, deliveryLabels, policyLabels, discountPercent, savings, formatPrice, flashDealId } from '../src/data/catalog.ts'

const byId = id => catalog.find(item => item.id === id)

test('El catálogo ofrece al menos 10 opciones de compra únicas, con paquetes', () => {
  assert.ok(catalog.length >= 10)
  assert.equal(new Set(catalog.map(item => item.id)).size, catalog.length)
  assert.equal(new Set(catalog.map(item => item.name)).size, catalog.length)
  assert.ok(catalog.some(item => item.group === 'paquetes'))
  const groups = catalogGroups.map(group => group.id)
  for (const group of groups) assert.ok(catalog.some(item => item.group === group), `Grupo sin productos: ${group}`)
})

test('Cada ficha incluye nombre, imagen, descripción, precio, condiciones y entrega', () => {
  for (const item of catalog) {
    for (const key of ['name', 'category', 'description', 'conditions', 'delivery', 'imageDescription']) assert.ok(item[key]?.trim(), `${item.id}: falta ${key}`)
    assert.ok(Number.isFinite(item.price) && item.price > 0, `${item.id}: precio inválido`)
    assert.ok(item.returns.label.trim() && item.returns.status in policyLabels, `${item.id}: cambios y devoluciones`)
    assert.ok(item.deliveryModes.length > 0 && item.deliveryModes.every(mode => mode in deliveryLabels), `${item.id}: entrega`)
    assert.ok(existsSync(new URL(`../src/assets/${item.image}`, import.meta.url)), `${item.id}: imagen inexistente ${item.image}`)
  }
})

test('Las ofertas muestran un precio anterior mayor y descuentos coherentes', () => {
  const offers = catalog.filter(item => item.prior)
  assert.ok(offers.length >= 1)
  for (const item of offers) {
    assert.ok(item.prior > item.price, `${item.id}: el precio anterior debe ser mayor`)
    assert.equal(savings(item), item.prior - item.price)
    assert.ok(discountPercent(item) > 0 && discountPercent(item) < 100)
  }
  assert.ok(byId(flashDealId)?.prior, 'La oferta relámpago debe existir y tener descuento')
  // Los paquetes parten de la suma de sus componentes vendidos por separado.
  assert.equal(byId('paquete-desplazamiento-seguro').prior, byId('ashpd').price + byId('botas-caida-libre').price)
  assert.equal(byId('paquete-cero-brechas').prior, 2 * byId('torreta-centinela').price + byId('rejilla-emancipacion').price)
})

test('Los precios se presentan en pesos mexicanos', () => {
  assert.equal(formatPrice(150000), '$150,000.00 MXN')
  assert.equal(formatPrice(89999), '$89,999.00 MXN')
  assert.equal(discountPercent(byId('ashpd')), 14)
})
