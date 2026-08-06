// Duo Studio - Interactive Application Logic & Case Study Engine

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initScrollReveal();
  initPortfolioFilters();
  initModals();
  initFAQAccordion();
  initSmoothScroll();
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
      "Integração nativa com atendimento via WhatsApp Business"
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
      "Respostas diretas de dúvidas frequentes sem jargões complexos"
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

  const budgetForm = document.getElementById('budget-form');
  const budgetFormSuccess = document.getElementById('budget-form-success');

  if (budgetForm) {
    budgetForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const objectiveSelect = document.getElementById('budget-objective');
      const objectiveText = objectiveSelect ? objectiveSelect.options[objectiveSelect.selectedIndex].text : '';
      const name = document.getElementById('budget-name')?.value || '';
      const email = document.getElementById('budget-email')?.value || '';
      const phone = document.getElementById('budget-phone')?.value || '';
      const description = document.getElementById('budget-description')?.value || '';

      const submitBtn = budgetForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Processando...`;
        lucide.createIcons();
      }

      const msg = `*Nova Solicitação de Proposta Comercial - Duo Studio*\n\n` +
        `🎯 *Objetivo:* ${objectiveText}\n` +
        `👤 *Nome / Empresa:* ${name}\n` +
        `✉️ *E-mail:* ${email}\n` +
        `📱 *WhatsApp:* ${phone}\n` +
        `📝 *Resumo / Necessidade:* ${description || 'Não informado'}`;

      const waUrl = `https://wa.me/5594999099386?text=${encodeURIComponent(msg)}`;

      const waLinkBtn = document.getElementById('budget-wa-link');
      if (waLinkBtn) {
        waLinkBtn.href = waUrl;
      }

      setTimeout(() => {
        budgetForm.classList.add('hidden');
        budgetFormSuccess.classList.remove('hidden');
        if (window.confetti) {
          window.confetti({ particleCount: 90, spread: 80, origin: { y: 0.6 } });
        }
        window.open(waUrl, '_blank');
      }, 1000);
    });
  }
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

    lucide.createIcons();

    projectModal.classList.remove('hidden');
    projectModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

/* ----------------------------------------------------
   6. FAQ Accordion Widget
---------------------------------------------------- */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const content = item.querySelector('.faq-content');
      const icon = item.querySelector('.faq-icon');
      if (!content) return;
      
      const isCurrentlyHidden = content.classList.contains('hidden');

      // Close all other FAQs
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
   7. Smooth Scroll Anchor Links
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
