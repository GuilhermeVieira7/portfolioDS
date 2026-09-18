// Duo Studio — interações da home ("Outra história, por favor.")
// Complementa app.js (modal/quiz/cursor/sticky) e i18n.js. Sem dependências.
(() => {
  'use strict';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const t = (key) => (window.duoI18n && window.duoI18n.getTranslation(key)) || '';

  /* ------------------------------------------------------------------
     1. Tema, marcador de capítulo e estado do header, guiados pelo scroll
  ------------------------------------------------------------------ */
  function initScrollState() {
    const header = $('#site-header');
    const marker = $('#marker');
    const markerN = $('#marker-n');
    const markerL = $('#marker-l');
    // o ticker vem primeiro: está dentro do hero mas tem tema próprio (tinta)
    const sections = [...$$('.ticker[data-theme]'), ...$$('main > [data-theme], footer[data-theme]')];
    if (!header || !sections.length) return;

    const at = (y) => sections.find((s) => {
      const r = s.getBoundingClientRect();
      return r.top <= y && r.bottom > y;
    });

    let ticking = false;
    let lastMarkerKey = '';

    function paintMarker() {
      const sec = at(innerHeight - 40);
      if (!marker) return;
      if (!sec || !sec.dataset.mk) { marker.style.opacity = '0'; return; }
      marker.style.opacity = '1';
      marker.dataset.theme = sec.dataset.theme;
      const key = (sec.id || sec.className) + '|' + (window.duoI18n ? window.duoI18n.currentLang : '');
      if (key === lastMarkerKey) return;
      lastMarkerKey = key;
      const ch = sec.dataset.chapter;
      markerN.textContent = ch ? ch + '/05' : sec.dataset.mkn ? t(sec.dataset.mkn) : '+ ' + (t('h.mk_extra') || 'Extra');
      markerL.textContent = t(sec.dataset.mk);
    }

    function update() {
      ticking = false;
      const under = at(header.offsetHeight / 2) || sections[0];
      header.dataset.theme = under.dataset.theme;
      document.body.dataset.theme = under.dataset.theme;
      header.classList.toggle('is-scrolled', scrollY > 24);
      paintMarker();
    }

    addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    addEventListener('resize', update);
    addEventListener('duoLanguageChanged', () => { lastMarkerKey = ''; update(); });
    update();
  }

  /* ------------------------------------------------------------------
     2. Menu mobile
  ------------------------------------------------------------------ */
  function initDrawer() {
    const btn = $('#nav-toggle');
    const drawer = $('#nav-drawer');
    if (!btn || !drawer) return;

    const set = (open) => {
      drawer.hidden = !open;
      btn.setAttribute('aria-expanded', String(open));
      document.documentElement.classList.toggle('nav-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    };
    btn.addEventListener('click', () => set(drawer.hidden));
    drawer.addEventListener('click', (e) => {
      if (e.target.closest('a, .open-budget-modal')) set(false);
    });
    addEventListener('keydown', (e) => { if (e.key === 'Escape' && !drawer.hidden) set(false); });
    addEventListener('resize', () => { if (innerWidth > 860 && !drawer.hidden) set(false); });
  }

  /* ------------------------------------------------------------------
     3. Pilha de pôsteres arrastável ("Arraste para mudar o roteiro")
  ------------------------------------------------------------------ */
  function initStack() {
    const stack = $('#stack');
    if (!stack) return;
    const cards = $$('.poster', stack);
    const n = cards.length;
    const count = $('#hero-count');
    const pad = (v) => String(v).padStart(2, '0');

    cards.forEach((c, i) => { c.dataset.idx = i; });

    function paintCount() {
      const top = cards.find((c) => c.dataset.pos === '0');
      if (count && top) count.textContent = pad(Number(top.dataset.idx) + 1);
    }

    // dir = 1: o pôster do topo vai para o fim da fila. dir = -1: o último volta ao topo.
    function shift(dir) {
      cards.forEach((c) => {
        c.dataset.pos = String((Number(c.dataset.pos) - dir + n) % n);
      });
      paintCount();
    }

    $('#stack-next')?.addEventListener('click', () => { interacted = true; shift(1); });
    $('#stack-prev')?.addEventListener('click', () => { interacted = true; shift(-1); });
    stack.tabIndex = 0;
    stack.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { interacted = true; shift(1); }
      if (e.key === 'ArrowLeft') { interacted = true; shift(-1); }
    });

    let interacted = false;
    let startX = 0, startY = 0, dx = 0, dy = 0, dragging = false, top = null, startT = 0;

    stack.addEventListener('pointerdown', (e) => {
      if (e.button !== 0 && e.pointerType === 'mouse') return;
      top = cards.find((c) => c.dataset.pos === '0');
      if (!top) return;
      dragging = true; interacted = true;
      startX = e.clientX; startY = e.clientY; dx = dy = 0; startT = performance.now();
      top.classList.remove('nudge');
      stack.classList.add('is-drag');
      stack.setPointerCapture(e.pointerId);
    });

    stack.addEventListener('pointermove', (e) => {
      if (!dragging || !top) return;
      dx = e.clientX - startX;
      dy = e.clientY - startY;
      top.style.transform = `translate(${dx}px, ${dy * 0.4}px) rotate(${-2 + dx * 0.05}deg)`;
    });

    function release() {
      if (!dragging || !top) return;
      dragging = false;
      stack.classList.remove('is-drag');
      const speed = Math.abs(dx) / Math.max(performance.now() - startT, 1);
      const flick = Math.abs(dx) > 80 || (Math.abs(dx) > 30 && speed > 0.5);
      const card = top;
      top = null;
      if (flick) {
        const dir = dx > 0 ? 1 : -1;
        card.style.transition = 'transform .32s cubic-bezier(.4,0,.2,1)';
        card.style.transform = `translate(${dir * 130}%, ${dy * 0.4}px) rotate(${dir * 18}deg)`;
        setTimeout(() => {
          card.style.transition = '';
          card.style.transform = '';
          shift(1);
        }, 240);
      } else {
        card.style.transform = '';
      }
    }
    stack.addEventListener('pointerup', release);
    stack.addEventListener('pointercancel', release);

    // Convite único para arrastar, só se a pessoa ainda não mexeu.
    if (!reduceMotion) {
      setTimeout(() => {
        if (interacted) return;
        const first = cards.find((c) => c.dataset.pos === '0');
        if (!first) return;
        first.classList.add('nudge');
        first.addEventListener('animationend', () => first.classList.remove('nudge'), { once: true });
      }, 2600);
    }
    paintCount();
  }

  /* ------------------------------------------------------------------
     4. Cursor com rótulo + prévia flutuante dos projetos
  ------------------------------------------------------------------ */
  function initCursorLabels() {
    if (!finePointer || reduceMotion) return;
    addEventListener('mousemove', () => document.body.classList.add('cursor-live'), { once: true, passive: true });
    document.addEventListener('mouseover', (e) => {
      const el = e.target.closest('[data-cursor]');
      const ring = $('#custom-cursor-ring');
      if (!ring) return;
      if (el) {
        ring.textContent = t(el.dataset.cursor);
        document.body.classList.add('cursor-label');
      }
    });
    document.addEventListener('mouseout', (e) => {
      const el = e.target.closest('[data-cursor]');
      if (el && !el.contains(e.relatedTarget)) {
        const ring = $('#custom-cursor-ring');
        if (ring) ring.textContent = '';
        document.body.classList.remove('cursor-label');
      }
    });
  }

  function initPeek() {
    const peek = $('#peek');
    if (!peek || !finePointer) return;
    const img = $('img', peek);
    const rows = $$('.case');
    let x = 0, y = 0, tx = 0, ty = 0, raf = 0, active = false;

    function loop() {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      peek.style.transform = `translate(${x + 28}px, ${y - peek.offsetHeight / 2}px)`;
      raf = active || Math.abs(tx - x) > 0.5 ? requestAnimationFrame(loop) : 0;
    }

    rows.forEach((row) => {
      row.addEventListener('mouseenter', (e) => {
        img.src = row.dataset.img;
        tx = x = e.clientX; ty = y = e.clientY;
        active = true;
        peek.classList.add('on');
        if (!raf) raf = requestAnimationFrame(loop);
      });
      row.addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; });
      row.addEventListener('mouseleave', () => { active = false; peek.classList.remove('on'); });
    });
  }

  /* ------------------------------------------------------------------
     5. Atributos traduzíveis que o motor de i18n não cobre (alt, aria-label)
  ------------------------------------------------------------------ */
  function initAttrI18n() {
    const apply = () => {
      $$('img[data-alt]').forEach((img) => {
        const v = t(img.dataset.alt);
        if (v) img.alt = v;
      });
      $$('[data-i18n-aria]').forEach((el) => {
        const v = t(el.dataset.i18nAria);
        if (v) el.setAttribute('aria-label', v);
      });
      // artes: alt em PT no HTML, alt em EN em data-alt-en
      const en = window.duoI18n && window.duoI18n.currentLang === 'en';
      $$('img[data-alt-en]').forEach((img) => {
        if (!img.dataset.altPt) img.dataset.altPt = img.alt;
        img.alt = en ? img.dataset.altEn : img.dataset.altPt;
      });
    };
    addEventListener('duoLanguageChanged', apply);
    apply();
  }

  /* ------------------------------------------------------------------
     6. Faixa de arte: arrastar com o mouse (toque e trackpad já rolam nativamente)
  ------------------------------------------------------------------ */
  function initRail() {
    $$('.rail').forEach((rail) => {
      if (!finePointer) return;
      let down = false, sx = 0, sl = 0, moved = 0;
      rail.addEventListener('pointerdown', (e) => {
        if (e.pointerType !== 'mouse' || e.button !== 0) return;
        down = true; moved = 0; sx = e.clientX; sl = rail.scrollLeft;
      });
      addEventListener('pointermove', (e) => {
        if (!down) return;
        const dx = e.clientX - sx;
        if (Math.abs(dx) > 4) { moved = Math.abs(dx); rail.classList.add('is-drag'); }
        rail.scrollLeft = sl - dx;
      });
      addEventListener('pointerup', () => {
        if (!down) return;
        down = false;
        rail.classList.remove('is-drag');
      });
      // arrastar não deve contar como clique (abriria o visualizador)
      rail.addEventListener('click', (e) => {
        if (moved > 6) { e.preventDefault(); e.stopPropagation(); moved = 0; }
      }, true);
    });
  }

  /* ------------------------------------------------------------------
     7. Visualizador de arte (<dialog>): setas, Esc, clique fora e foco nativos
  ------------------------------------------------------------------ */
  function initLightbox() {
    const dlg = $('#lb');
    if (!dlg || typeof dlg.showModal !== 'function') return;
    const img = $('img', dlg);
    const cap = $('figcaption', dlg);
    let group = [], idx = 0, opener = null;

    function show(i) {
      idx = (i + group.length) % group.length;
      const btn = group[idx];
      const thumb = $('img', btn);
      img.src = btn.dataset.full;
      img.alt = thumb.alt;
      cap.textContent = thumb.alt.split(' — ').slice(1).join(' — ') || thumb.alt;
      // pré-carrega a vizinha para a troca não piscar
      const nxt = group[(idx + 1) % group.length];
      if (nxt) new Image().src = nxt.dataset.full;
    }

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-lb]');
      if (!btn) return;
      group = $$(`[data-lb="${btn.dataset.lb}"]`);
      opener = btn;
      show(group.indexOf(btn));
      dlg.showModal();
      document.documentElement.style.overflow = 'hidden';
    });
    const step = (d) => group.length > 1 && show(idx + d);
    $('[data-lb-prev]', dlg).addEventListener('click', () => step(-1));
    $('[data-lb-next]', dlg).addEventListener('click', () => step(1));
    $('[data-lb-close]', dlg).addEventListener('click', () => dlg.close());
    dlg.addEventListener('click', (e) => { if (e.target === dlg || e.target === $('figure', dlg)) dlg.close(); });
    dlg.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    });
    dlg.addEventListener('close', () => {
      document.documentElement.style.overflow = '';
      if (opener) opener.focus({ preventScroll: true });
    });
    // gesto de deslizar no celular
    let tx = 0;
    dlg.addEventListener('touchstart', (e) => { tx = e.changedTouches[0].clientX; }, { passive: true });
    dlg.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - tx;
      if (Math.abs(dx) > 60) step(dx < 0 ? 1 : -1);
    }, { passive: true });
  }

  // Pôster ainda sem arquivo: esconde o ícone de imagem quebrada e deixa a cor de fundo.
  function initMissingImages() {
    $$('.poster img').forEach((img) => {
      const miss = () => img.classList.add('is-missing');
      if (img.complete && img.naturalWidth === 0) miss();
      img.addEventListener('error', miss);
    });
  }

  /* ------------------------------------------------------------------
     8. Formulário de contato -> WhatsApp (mesmo texto da versão anterior)
  ------------------------------------------------------------------ */
  function initWaForm() {
    document.addEventListener('submit', (e) => {
      const form = e.target.closest('[data-wa-form]');
      if (!form) return;
      e.preventDefault();
      const name = form.elements['c-name'].value.trim();
      const msg = form.elements['c-msg'].value.trim();
      if (!name || !msg) {
        (name ? form.elements['c-msg'] : form.elements['c-name']).focus();
        return;
      }
      const en = window.duoI18n && window.duoI18n.currentLang === 'en';
      const text = en ? `Hi! My name is ${name}. Message: ${msg}` : `Olá! Meu nome é ${name}. Mensagem: ${msg}`;
      window.location.href = `https://wa.me/${form.dataset.waForm}?text=${encodeURIComponent(text)}`;
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initWaForm();
    initMissingImages();
    initScrollState();
    initDrawer();
    initStack();
    initCursorLabels();
    initPeek();
    initRail();
    initLightbox();
    initAttrI18n();
  });
})();
