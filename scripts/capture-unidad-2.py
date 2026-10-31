"""Evidencia de la Unidad 2: atención al cliente, catálogo y ofertas.

Requiere `npm run dev` y Playwright para Python (`playwright install chromium`).
Opcional: CHROMIUM_PATH apunta a un Chromium ya instalado.
"""
import os
from pathlib import Path
from playwright.sync_api import sync_playwright, expect

root = Path(__file__).resolve().parents[1]
out = root / 'docs/evidencias/unidad-2'
out.mkdir(parents=True, exist_ok=True)
base = os.environ.get('SITE_URL', 'http://127.0.0.1:5173/')
launch = {'executable_path': os.environ['CHROMIUM_PATH']} if os.environ.get('CHROMIUM_PATH') else {}


def scroll_to(page, selector, offset=0):
    page.evaluate('([s, o]) => { const e = document.querySelector(s); scrollTo({ top: scrollY + e.getBoundingClientRect().top - 105 + o, behavior: "instant" }) }', [selector, offset])
    page.wait_for_function('Array.from(document.images).filter(i => { const r = i.getBoundingClientRect(); return r.top < innerHeight && r.bottom > 0 }).every(i => i.complete && i.naturalWidth > 0)')


def shot(page, name):
    page.screenshot(path=str(out / f'{name}.png'), animations='disabled')


def no_overflow(page, label):
    for width in [320, 390, 768, 1024, 1440, 1920]:
        page.set_viewport_size({'width': width, 'height': 900})
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), (label, width)
    page.set_viewport_size({'width': 1440, 'height': 1080})


with sync_playwright() as p:
    browser = p.chromium.launch(**launch)
    page = browser.new_page(viewport={'width': 1440, 'height': 1080}, device_scale_factor=2, reduced_motion='reduce')
    errors = []
    page.on('pageerror', lambda e: errors.append(str(e)))

    # 1. Atención al cliente
    page.goto(base, wait_until='networkidle')
    page.evaluate('document.fonts.ready')
    body = page.locator('body').inner_text().lower()
    assert 'demostración:' not in body and 'académic' not in body
    chat = page.locator('#chat-atencion')
    chat.get_by_role('button', name='Opciones de entrega').click()
    chat.get_by_role('button', name='Cambios y devoluciones').click()
    assert chat.locator('.care-bubble').count() == 5
    scroll_to(page, '#atencion', 120)
    shot(page, '01-atencion-estamos-para-ayudarte')
    scroll_to(page, '#quejas')
    shot(page, '02-atencion-quejas-y-sugerencias')
    form = page.locator('#quejas form')
    form.get_by_role('button', name='Enviar solicitud').click()
    assert form.locator('.care-error').count() == 4
    form.get_by_label('Reclamación').check()
    page.fill('#fb-name', 'Doug Rattmann')
    page.fill('#fb-email', 'doug.rattmann@cliente.example')
    page.select_option('#fb-product', label='Botas de Caída Libre (Long Fall Boots)')
    page.fill('#fb-order', 'AS-104582')
    page.fill('#fb-message', 'Recibí las botas en talla 27 y solicité la 28. Quisiera hacer el cambio de talla.')
    page.check('#fb-consent')
    form.get_by_role('button', name='Enviar solicitud').click()
    expect(page.locator('.care-form-done')).to_be_visible()
    assert page.locator('.care-folio').inner_text().startswith('REC-')
    scroll_to(page, '#quejas')
    shot(page, '03-atencion-folio-de-seguimiento')
    no_overflow(page, 'inicio')

    # 2. Catálogo y ofertas
    page.goto(base + 'catalogo.html', wait_until='networkidle')
    page.evaluate('document.fonts.ready')
    assert page.locator('.catalog-card').count() == 10
    shot(page, '04-catalogo-portada')
    scroll_to(page, '#ofertas', 70)
    shot(page, '05-ofertas-imperdibles')
    scroll_to(page, '#productos', 60)
    shot(page, '06-catalogo-fichas-01-03')
    for name, card in [('07-catalogo-fichas-04-06', '#rejilla-emancipacion'), ('08-catalogo-fichas-07-09', '#paquete-desplazamiento-seguro'), ('09-catalogo-ficha-10-y-proyectos', '#certificacion-camaras')]:
        scroll_to(page, card, 10)
        shot(page, name)
    page.get_by_role('button', name='Ampliar imagen: Paquete «Desplazamiento Seguro»').click()
    expect(page.locator('dialog.product-dialog')).to_be_visible()
    page.keyboard.press('ArrowRight')
    expect(page.locator('#product-dialog-title')).to_have_text('Paquete «Cero Brechas»')
    page.keyboard.press('ArrowLeft')
    shot(page, '10-ficha-completa')
    page.get_by_role('button', name='Pantalla completa').click()
    shot(page, '11-imagen-ampliada')
    page.keyboard.press('Escape')
    expect(page.locator('dialog.product-dialog')).not_to_be_visible()
    page.get_by_role('button', name='Paquetes').click()
    expect(page.locator('.catalog-count')).to_have_text('Mostrando 3 de 10 opciones')
    scroll_to(page, '.catalog-toolbar', -20)
    shot(page, '12-catalogo-filtro-paquetes')
    no_overflow(page, 'catálogo')

    assert not errors, errors
    browser.close()

print('PASS: chat, validación y folio, 10 fichas, filtros, ficha ampliada y navegación por teclado, sin desbordamiento horizontal ni errores JS. 12 capturas generadas.')
