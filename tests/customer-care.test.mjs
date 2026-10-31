import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { contactEmail } from '../src/data/catalog.ts'
import { channels, chatTopics, followUpSteps, emptyRequest, validateRequest, createFolio, requestMailto } from '../src/data/customer-care.ts'

const read = path => readFileSync(new URL(`../src/${path}`, import.meta.url), 'utf8')
const valid = { ...emptyRequest, type: 'reclamacion', name: 'Doug Rattmann', email: 'doug@cliente.example', product: 'Torreta Centinela Doméstica', message: 'La torreta llegó con el sensor óptico desalineado.', consent: true }

test('Estamos para ayudarte: correo, chat y atención presencial', () => {
  assert.deepEqual(channels.map(channel => channel.id), ['correo', 'chat', 'presencial'])
  assert.equal(channels[0].detail, contactEmail)
  assert.ok(chatTopics.length >= 5)
  assert.equal(new Set(chatTopics.map(topic => topic.id)).size, chatTopics.length)
  for (const topic of chatTopics) assert.ok(topic.question.trim() && topic.answer.trim())
})

test('Los enlaces del chat y los canales apuntan a destinos existentes', () => {
  const pages = { '': read('components/CustomerCare.tsx') + read('components/CareChat.tsx'), './catalogo.html': read('catalogo.tsx') }
  const links = [...chatTopics.map(topic => topic.link), ...channels.map(channel => channel.action)].filter(Boolean)
  for (const { href } of links) {
    if (href.startsWith('mailto:')) { assert.ok(href.startsWith(`mailto:${contactEmail}`)); continue }
    const [page, hash] = href.split('#')
    assert.ok(page in pages, `Página desconocida: ${href}`)
    if (hash) assert.ok(pages[page].includes(`id="${hash}"`), `Ancla inexistente: ${href}`)
  }
})

test('El formulario de quejas valida los datos obligatorios', () => {
  assert.deepEqual(Object.keys(validateRequest(emptyRequest)).sort(), ['consent', 'email', 'message', 'name'])
  assert.deepEqual(validateRequest(valid), {})
  for (const email of ['doug', 'doug@cliente', 'doug @cliente.example']) assert.ok(validateRequest({ ...valid, email }).email, email)
  assert.ok(validateRequest({ ...valid, message: 'Muy corto.' }).message)
})

test('Cada solicitud recibe folio y se envía con sus datos por correo', () => {
  assert.equal(createFolio('queja', new Date(2026, 9, 30), 42), 'QJA-261030-0042')
  assert.equal(createFolio('sugerencia', new Date(2027, 0, 5), 12345), 'SUG-270105-2345')
  const href = requestMailto(valid, 'REC-261030-0042')
  assert.ok(href.startsWith(`mailto:${contactEmail}?subject=`))
  const body = decodeURIComponent(href.split('&body=')[1])
  for (const text of ['Folio: REC-261030-0042', 'Tipo: Reclamación', 'Doug Rattmann', 'Número de pedido: No aplica', valid.message]) assert.ok(body.includes(text), text)
  assert.equal(followUpSteps.length, 4)
})

test('Los textos públicos de Unidad 2 mantienen la voz de la empresa', () => {
  const files = ['components/CustomerCare.tsx', 'components/CareChat.tsx', 'components/FeedbackForm.tsx', 'components/CatalogOffers.tsx', 'components/ProductCard.tsx', 'components/ProductDialog.tsx', 'catalogo.tsx', 'data/catalog.ts', 'data/customer-care.ts']
  for (const file of files) assert.doesNotMatch(read(file), /acad[eé]mic|\btareas?\b|\bunidad \d|demostraci[oó]n|profesor|alumno/i, file)
  // Las promociones se anuncian hasta agotar existencias, sin fechas explícitas.
  for (const file of files) assert.doesNotMatch(read(file), /\b(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)\b|\b20\d\d\b/i, file)
})
