// Duo Studio - Interactive Application Logic & Case Study Engine

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initScrollReveal();
  initPortfolioFilters();
  initModals();
  initFAQAccordion();
  initSmoothScroll();
  initHeroTabs();
  initMultiStepQuiz();
  initAnimatedCounters();
  initStickyMobileCTA();
  initMagneticButtons();
  init3DGuaranteeDeck();
});

/* ----------------------------------------------------
   1. Navbar Scroll State
---------------------------------------------------- */
function initNavbarScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('shadow-lg', 'bg-[#0B0B0B]/95', 'py-3.5');
      header.classList.remove('py-5', 'bg-[#0B0B0B]/70');
    } else {
      header.classList.remove('shadow-lg', 'bg-[#0B0B0B]/95', 'py-3.5');
      header.classList.add('py-5', 'bg-[#0B0B0B]/70');
    }
  });
}

/* ----------------------------------------------------
   2. Mobile Menu Toggle
---------------------------------------------------- */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = menuBtn.querySelector('i');
    if (icon) {
      if (mobileMenu.classList.contains('hidden')) {
        icon.setAttribute('data-lucide', 'menu');
      } else {
        icon.setAttribute('data-lucide', 'x');
      }
      lucide.createIcons();
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      const icon = menuBtn.querySelector('i');
      if (icon) {
        icon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
      }
    });
  });
}

/* ----------------------------------------------------
   3. Scroll Reveal Animation Observer
---------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    root: null,
    threshold: 0.05,
    rootMargin: '0px 0px -20px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

/* ----------------------------------------------------
   4. Portfolio Category Filtering
---------------------------------------------------- */
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (!filterBtns.length || !portfolioItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-gradient-to-r', 'from-[#4F46E5]', 'to-[#7C3AED]', 'text-white', 'border-transparent');
        b.classList.add('bg-white/5', 'text-gray-400', 'border-white/10', 'hover:text-white', 'hover:border-white/20');
      });

      btn.classList.remove('bg-white/5', 'text-gray-400', 'border-white/10', 'hover:text-white', 'hover:border-white/20');
      btn.classList.add('bg-gradient-to-r', 'from-[#4F46E5]', 'to-[#7C3AED]', 'text-white', 'border-transparent');

      const filterValue = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const categories = item.getAttribute('data-category');
        if (filterValue === 'todos' || (categories && categories.includes(filterValue))) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ----------------------------------------------------
   5. Real Case Studies & Modal Engine
---------------------------------------------------- */
const projectData = {
  "1": {
    title: "Angatu Viagens — Turismo de Luxo & Reservas",
    category: "Plataforma de Viagens & Landing Page Premium",
    client: "Angatu Viagens",
    year: "2026",
    liveUrl: "https://angatuviagens-eu.vercel.app/",
    problem: "A Angatu Viagens precisava de uma presença digital de altíssimo padrão para comunicar exclusividade, apresentar pacotes sazonais de viagem e eliminar a fricção na captação de clientes interessados em roteiros turísticos de alto ticket.",
    objective: "Desenvolver uma plataforma imersiva com navegação mobile-first perfeita, vitrine de ofertas sazonais e integração direta com atendimento consultivo via WhatsApp.",
    desc: "Projetamos um ecossistema visual minimalista focado em fotografia de alta definição, pacotes com datas confirmadas e canal direto para consultores de viagem.",
    highlights: [
      "Jornada do usuário focada em conversão em até 2 cliques",
      "Vitrine interativa de destinos (Rio, Gramado, Santiago, Cancún)",
      "Animações fluidas a 60fps com tempo de carregamento < 0.9s",
      "Integração nativa com atendimento via WhatsApp Business (+180% agendamentos)"
    ],
    techs: ["Next.js", "Tailwind CSS", "TypeScript", "Lucide Icons", "Framer Motion", "Vercel Edge Network"],
    image: "assets/projects/angatu.png?v=3"
  },
  "2": {
    title: "LabPrime Toxicológico — Laboratório Clínico",
    category: "Portal Clínico & Captação de Agendamentos",
    client: "LabPrime Toxicológico",
    year: "2026",
    liveUrl: "https://labprime.vercel.app/",
    problem: "Motoristas profissionais e candidatos a concursos públicos precisavam de laudos toxicológicos com urgência, mas encontravam dificuldade de agendamento e dúvidas sobre a conformidade técnica com o DETRAN e CLT.",
    objective: "Criar uma plataforma limpa, transparente e acessível que explicasse todo o processo em 4 passos e facilitasse a coleta agendada.",
    desc: "Estruturamos um portal clínico com foco em clareza institucional, SEO local para Parauapebas/PA e respostas diretas para as principais dúvidas dos pacientes.",
    highlights: [
      "Processo em 4 passos (Agendamento, Atendimento, Coleta e Resultado)",
      "Otimização para SEO Local com Schema.org MedicalClinic",
      "Experiência mobile-first focada em motoristas CNH C, D e E",
      "Respostas diretas de dúvidas frequentes com carregamento instantâneo LCP < 0.8s"
    ],
    techs: ["Next.js", "Tailwind CSS", "TypeScript", "JSON-LD Schema", "Vercel Analytics"],
    image: "assets/projects/labprime.png?v=3"
  }
};

function initModals() {
  const budgetModal = document.getElementById('budget-modal');
  const openBudgetBtns = document.querySelectorAll('.open-budget-modal');
  const closeBudgetBtn = document.getElementById('close-budget-modal');

  const projectModal = document.getElementById('project-modal');
  const openProjectBtns = document.querySelectorAll('.open-project-modal');
  const closeProjectBtn = document.getElementById('close-project-modal');

  openBudgetBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (budgetModal) {
        budgetModal.classList.remove('hidden');
        budgetModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (closeBudgetBtn && budgetModal) {
    closeBudgetBtn.addEventListener('click', () => {
      budgetModal.classList.add('hidden');
      budgetModal.classList.remove('flex');
      document.body.style.overflow = 'auto';
    });
  }

  openProjectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const projectId = btn.getAttribute('data-project-id');
      openCaseStudyModal(projectId);
    });
  });

  if (closeProjectBtn && projectModal) {
    closeProjectBtn.addEventListener('click', () => {
      projectModal.classList.add('hidden');
      projectModal.classList.remove('flex');
      document.body.style.overflow = 'auto';
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === budgetModal) {
      budgetModal.classList.add('hidden');
      budgetModal.classList.remove('flex');
      document.body.style.overflow = 'auto';
    }
    if (e.target === projectModal) {
      projectModal.classList.add('hidden');
      projectModal.classList.remove('flex');
      document.body.style.overflow = 'auto';
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (budgetModal) {
        budgetModal.classList.add('hidden');
        budgetModal.classList.remove('flex');
      }
      if (projectModal) {
        projectModal.classList.add('hidden');
        projectModal.classList.remove('flex');
      }
      document.body.style.overflow = 'auto';
    }
  });
}

function openCaseStudyModal(projectId) {
  const projectModal = document.getElementById('project-modal');
  const data = projectData[projectId];
  if (data && projectModal) {
    document.getElementById('pm-title').textContent = data.title;
    document.getElementById('pm-category').textContent = data.category;
    document.getElementById('pm-client').textContent = data.client;
    document.getElementById('pm-year').textContent = data.year;
    document.getElementById('pm-desc').textContent = data.desc;
    document.getElementById('pm-problem').textContent = data.problem;
    document.getElementById('pm-objective').textContent = data.objective;
    document.getElementById('pm-image').src = data.image;

    const liveLink = document.getElementById('pm-live-link');
    if (liveLink && data.liveUrl) {
      liveLink.setAttribute('href', data.liveUrl);
      liveLink.setAttribute('target', '_blank');
      liveLink.setAttribute('rel', 'noopener noreferrer');
      liveLink.style.display = 'inline-flex';
    } else if (liveLink) {
      liveLink.style.display = 'none';
    }

    const highlightsList = document.getElementById('pm-highlights');
    highlightsList.innerHTML = '';
    data.highlights.forEach(h => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-2.5 text-xs text-gray-300';
      li.innerHTML = `<i data-lucide="check-circle-2" class="w-4 h-4 text-violet-400 shrink-0 mt-0.5"></i> <span>${h}</span>`;
      highlightsList.appendChild(li);
    });

    const techContainer = document.getElementById('pm-techs');
    techContainer.innerHTML = '';
    data.techs.forEach(t => {
      const span = document.createElement('span');
      span.className = 'px-3 py-1 bg-violet-500/10 border border-violet-500/20 text-violet-300 rounded-full text-xs font-medium';
      span.textContent = t;
      techContainer.appendChild(span);
    });

    if (window.lucide) lucide.createIcons();

    projectModal.classList.remove('hidden');
    projectModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

/* ----------------------------------------------------
   6. Multi-Step Quiz Engine
---------------------------------------------------- */
function initMultiStepQuiz() {
  let currentStep = 1;
  let selectedObjective = "Landing Page de Alta Conversão";
  let selectedSegment = "Serviços & Negócios Locais";

  const step1 = document.getElementById('quiz-step-1');
  const step2 = document.getElementById('quiz-step-2');
  const step3 = document.getElementById('quiz-step-3');

  const progressBar = document.getElementById('quiz-progress-bar');
  const stepLabel = document.getElementById('quiz-step-label');

  const btnNext1 = document.getElementById('quiz-next-1');
  const btnNext2 = document.getElementById('quiz-next-2');
  const btnPrev2 = document.getElementById('quiz-prev-2');
  const btnPrev3 = document.getElementById('quiz-prev-3');

  const objectiveCards = document.querySelectorAll('.quiz-obj-card');
  const segmentCards = document.querySelectorAll('.quiz-seg-card');

  const budgetForm = document.getElementById('budget-form');
  const budgetFormSuccess = document.getElementById('budget-form-success');
  const phoneInput = document.getElementById('budget-phone');

  if (!step1 || !step2 || !step3) return;

  // Objective Card Selection
  objectiveCards.forEach(card => {
    card.addEventListener('click', () => {
      objectiveCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedObjective = card.getAttribute('data-value') || card.innerText.trim();
    });
  });

  // Segment Card Selection
  segmentCards.forEach(card => {
    card.addEventListener('click', () => {
      segmentCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedSegment = card.getAttribute('data-value') || card.innerText.trim();
    });
  });

  // Navigation Logic
  function goToStep(step) {
    currentStep = step;
    step1.classList.add('hidden');
    step2.classList.add('hidden');
    step3.classList.add('hidden');

    if (step === 1) {
      step1.classList.remove('hidden');
      if (progressBar) progressBar.style.width = '33%';
      if (stepLabel) stepLabel.textContent = 'Passo 1 de 3: Objetivo do Projeto';
    } else if (step === 2) {
      step2.classList.remove('hidden');
      if (progressBar) progressBar.style.width = '66%';
      if (stepLabel) stepLabel.textContent = 'Passo 2 de 3: Segmento do Negócio';
    } else if (step === 3) {
      step3.classList.remove('hidden');
      if (progressBar) progressBar.style.width = '100%';
      if (stepLabel) stepLabel.textContent = 'Passo 3 de 3: Seus Dados para o Diagnóstico';
    }
  }

  if (btnNext1) btnNext1.addEventListener('click', () => goToStep(2));
  if (btnNext2) btnNext2.addEventListener('click', () => goToStep(3));
  if (btnPrev2) btnPrev2.addEventListener('click', () => goToStep(1));
  if (btnPrev3) btnPrev3.addEventListener('click', () => goToStep(2));

  // Phone Mask
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
      e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
  }

  // Submit Handler -> Direct WhatsApp Pre-filled Structured Message for BOTH Phones
  if (budgetForm) {
    budgetForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('budget-name')?.value || '';
      const email = document.getElementById('budget-email')?.value || '';
      const phone = document.getElementById('budget-phone')?.value || '';
      const description = document.getElementById('budget-description')?.value || '';

      const submitBtn = budgetForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Gerando Diagnóstico...`;
        if (window.lucide) lucide.createIcons();
      }

      const msg = `*Solicitação de Diagnóstico Comercial - Duo Studio*\n\n` +
        `🎯 *Objetivo:* ${selectedObjective}\n` +
        `🏢 *Segmento:* ${selectedSegment}\n` +
        `👤 *Nome:* ${name}\n` +
        `✉️ *E-mail:* ${email}\n` +
        `📱 *WhatsApp:* ${phone}\n` +
        `📝 *Detalhes:* ${description || 'Nenhum detalhe adicional informado'}`;

      const phone1 = "5594999099386";
      const phone2 = "5594992811658";

      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const waUrl1 = isMobile
        ? `whatsapp://send?phone=${phone1}&text=${encodeURIComponent(msg)}`
        : `https://web.whatsapp.com/send?phone=${phone1}&text=${encodeURIComponent(msg)}`;

      const waFallback1 = `https://api.whatsapp.com/send?phone=${phone1}&text=${encodeURIComponent(msg)}`;
      const waFallback2 = `https://api.whatsapp.com/send?phone=${phone2}&text=${encodeURIComponent(msg)}`;

      const waLink1 = document.getElementById('budget-wa-link');
      if (waLink1) waLink1.href = waFallback1;

      const waLink2 = document.getElementById('budget-wa-link-2');
      if (waLink2) waLink2.href = waFallback2;

      budgetForm.classList.add('hidden');
      if (budgetFormSuccess) budgetFormSuccess.classList.remove('hidden');
      if (window.confetti) {
        window.confetti({ particleCount: 100, spread: 90, origin: { y: 0.6 } });
      }

      setTimeout(() => {
        if (isMobile) {
          window.location.href = waUrl1;
        } else {
          window.open(waUrl1, '_blank');
        }
      }, 300);
    });
  }
}

/* ----------------------------------------------------
   7. Interactive Hero Tabs Switcher
---------------------------------------------------- */
function initHeroTabs() {
  const tabs = document.querySelectorAll('.hero-tab-btn');
  const displayTitle = document.getElementById('hero-spec-title');
  const displaySubtitle = document.getElementById('hero-spec-subtitle');
  const displayMetricMain = document.getElementById('hero-spec-metric-main');
  const displayMetricDesc = document.getElementById('hero-spec-metric-desc');
  const displayTag = document.getElementById('hero-spec-tag');
  const displayBadge1 = document.getElementById('hero-spec-badge1');
  const displayBadge2 = document.getElementById('hero-spec-badge2');

  if (!tabs.length || !displayTitle) return;

  const specData = {
    "speed": {
      title: "Arquitetura de Conversão & Velocidade",
      subtitle: "Engenharia de Software de Alto Nível",
      metricMain: "< 0.8s LCP",
      metricDesc: "Carregamento imediato sem travamentos ou desistência de visitantes.",
      tag: "Garantia Técnica",
      badge1Label: "Metodologia",
      badge1Value: "Clean Code & Next.js",
      badge2Label: "Segurança",
      badge2Value: "SSL & Proteção CDN"
    },
    "ux": {
      title: "Design Persuasivo & UX Reduzido",
      subtitle: "Jornada Direcionada à Venda",
      metricMain: "2-Clicks CTA",
      metricDesc: "Eliminação total de atritos de navegação para maximizar o número de leads.",
      tag: "Alta Retenção",
      badge1Label: "Copywriting",
      badge1Value: "Quebra de Objeções",
      badge2Label: "Responsividade",
      badge2Value: "Mobile-First Nativo"
    },
    "seo": {
      title: "SEO Técnico & Schema.org Estruturado",
      subtitle: "Posicionamento Prioritário no Google",
      metricMain: "100/100 Core Vitals",
      metricDesc: "Código estruturado em semântica completa para rankeamento orgânico constante.",
      tag: "Aprovação Google",
      badge1Label: "Metadados",
      badge1Value: "JSON-LD & OpenGraph",
      badge2Label: "Indexação",
      badge2Value: "Instantânea pelo Googlebot"
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.getAttribute('data-tab');
      const data = specData[target];
      if (!data) return;

      displayTitle.textContent = data.title;
      displaySubtitle.textContent = data.subtitle;
      if (displayMetricMain) displayMetricMain.innerHTML = data.metricMain;
      if (displayMetricDesc) displayMetricDesc.textContent = data.metricDesc;
      if (displayTag) displayTag.textContent = data.tag;
      if (displayBadge1) displayBadge1.textContent = data.badge1Value;
      if (displayBadge2) displayBadge2.textContent = data.badge2Value;
    });
  });
}

/* ----------------------------------------------------
   8. Animated Number Counters
---------------------------------------------------- */
function initAnimatedCounters() {
  const counterElements = document.querySelectorAll('[data-counter-target]');
  if (!counterElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        const targetNum = parseFloat(entry.target.getAttribute('data-counter-target'));
        const prefix = entry.target.getAttribute('data-counter-prefix') || '';
        const suffix = entry.target.getAttribute('data-counter-suffix') || '';
        const duration = 1500;
        const steps = 30;
        const stepTime = duration / steps;
        let current = 0;
        const increment = targetNum / steps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= targetNum) {
            current = targetNum;
            clearInterval(timer);
          }
          const displayVal = Number.isInteger(targetNum) ? Math.round(current) : current.toFixed(1);
          entry.target.textContent = `${prefix}${displayVal}${suffix}`;
        }, stepTime);
      }
    });
  }, { threshold: 0.5 });

  counterElements.forEach(el => observer.observe(el));
}

/* ----------------------------------------------------
   9. Sticky Lead Bar Mobile Trigger
---------------------------------------------------- */
function initStickyMobileCTA() {
  const stickyBar = document.getElementById('mobile-sticky-cta');
  if (!stickyBar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      stickyBar.classList.remove('hidden');
    } else {
      stickyBar.classList.add('hidden');
    }
  });
}

/* ----------------------------------------------------
   10. Magnetic Button Hover Micro-interaction
---------------------------------------------------- */
function initMagneticButtons() {
  const magBtns = document.querySelectorAll('.btn-magnetic');
  magBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
}

/* ----------------------------------------------------
   11. FAQ Accordion Widget
---------------------------------------------------- */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const content = item.querySelector('.faq-content');
      const icon = item.querySelector('.faq-icon');
      if (!content) return;
      
      const isCurrentlyHidden = content.classList.contains('hidden');

      faqItems.forEach(otherItem => {
        const otherContent = otherItem.querySelector('.faq-content');
        const otherIcon = otherItem.querySelector('.faq-icon');
        if (otherContent) otherContent.classList.add('hidden');
        if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
      });

      if (isCurrentlyHidden) {
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

/* ----------------------------------------------------
   12. Smooth Scroll Anchor Links
---------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ----------------------------------------------------
   13. 3D Fan Deck Guarantee Cards Interaction
---------------------------------------------------- */
function init3DGuaranteeDeck() {
  const deckWrapper = document.getElementById('deck-wrapper');
  const deckHint = document.getElementById('deck-hint');
  if (!deckWrapper) return;

  // No mobile (< 768px) as cartas ficam sempre visíveis em coluna - sem leque
  function isMobileLayout() {
    return window.innerWidth < 768;
  }

  // Aplica o estado correto baseado no tamanho da tela
  function applyLayout() {
    if (isMobileLayout()) {
      // Mobile: sempre expandido, sem interação de clique
      deckWrapper.classList.remove('deck-stacked');
      deckWrapper.classList.add('deck-expanded');
    } else {
      // Desktop/Tablet: começa empilhado em leque
      if (!deckWrapper.classList.contains('deck-expanded')) {
        deckWrapper.classList.remove('deck-expanded');
        deckWrapper.classList.add('deck-stacked');
      }
    }
  }

  applyLayout();
  window.addEventListener('resize', applyLayout);

  deckWrapper.addEventListener('click', () => {
    // Não faz nada no mobile
    if (isMobileLayout()) return;

    if (deckWrapper.classList.contains('deck-stacked')) {
      deckWrapper.classList.remove('deck-stacked');
      deckWrapper.classList.add('deck-expanded');
      if (deckHint) {
        deckHint.innerHTML = `<i data-lucide="shrink" class="w-4 h-4 text-violet-400"></i> <span>Clique para recolher o leque de garantias</span>`;
      }
    } else {
      deckWrapper.classList.remove('deck-expanded');
      deckWrapper.classList.add('deck-stacked');
      if (deckHint) {
        deckHint.innerHTML = `<i data-lucide="sparkles" class="w-4 h-4 text-violet-400 animate-pulse"></i> <span>Clique para abrir nosso leque de garantias</span>`;
      }
    }
    if (window.lucide) lucide.createIcons();
  });
}
