// Duo Studio - Internationalization System (i18n Engine)
// Supports Portuguese (pt) and English (en) with localStorage persistence

const duoTranslations = {
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.solutions": "Soluções",
    "nav.portfolio": "Portfólio",
    "nav.blog": "Blog",
    "nav.contact": "Contato",
    "nav.testimonials": "Depoimentos",
    "nav.engineering": "Engenharia",
    "nav.faq": "Dúvidas",
    "nav.schedule_cta": "Agendar reunião estratégica",
    "nav.lang_pt": "PT",
    "nav.lang_en": "EN",
    
    // Hero
    "hero.tech_badge": "Engenharia de Software & Arquitetura UX de Alta Velocidade",
    "hero.title_html": "Construímos sites que <br class=\"hidden sm:inline\" /><span class=\"text-gradient-brand\">aceleram vendas e geram valor.</span>",
    "hero.subtitle": "Desenvolvimento web sob medida, performance extrema e estratégia de conversão para empresas que se recusam a parecer genéricas no mercado.",
    "hero.cta_proposal": "Solicitar proposta comercial",
    "hero.cta_projects": "Ver projetos reais",
    "hero.tab_speed": "⚡ Velocidade",
    "hero.tab_ux": "🎯 Conversão UX",
    "hero.tab_seo": "🔍 SEO 100/100",
    "hero.metric_title": "Métrica de Performance",
    "hero.guarantee_tag": "Garantia Técnica",
    "hero.guarantee_subtag": "Padrão Internacional",
    "hero.audited_title": "Auditado no Google Lighthouse",
    "hero.audited_desc": "Pontuação 98+ em Performance, Acessibilidade e Melhores Práticas",

    // Interactive Spec Tabs Data
    "hero.tab_speed_metric": "< 0.8s LCP",
    "hero.tab_speed_metric_desc": "Carregamento imediato sem travamentos ou desistência de visitantes.",
    "hero.tab_speed_title": "Arquitetura de Conversão & Velocidade",
    "hero.tab_speed_subtitle": "Engenharia de Software de Alto Nível",
    "hero.tab_speed_detail": "Código nativo otimizado em Next.js/Vite sem plugins pesados do WordPress que travam o celular do seu cliente.",

    "hero.tab_ux_metric": "+180% Conversão",
    "hero.tab_ux_metric_desc": "Design intuitivo desenhado para guiar o cliente até a ação final.",
    "hero.tab_ux_title": "Jornada do Usuário & Psicologia de Vendas",
    "hero.tab_ux_subtitle": "UI/UX Estratégico",
    "hero.tab_ux_detail": "Estrutura visual desenvolvida para eliminar dúvidas e direcionar a tomada de decisão com CTAs estratégicos.",

    "hero.tab_seo_metric": "Top #1 Google",
    "hero.tab_seo_metric_desc": "Indexação técnica perfeita e marcação de dados Schema.org.",
    "hero.tab_seo_title": "Otimização Avançada para Mecanismos de Busca",
    "hero.tab_seo_subtitle": "SEO Técnico Nativo",
    "hero.tab_seo_detail": "Seu site posicionado no topo do Google para buscas de alto valor e clientes qualificados na sua região.",

    // Metrics / Stats Bar
    "stats.title_1": "Velocidade Média LCP",
    "stats.desc_1": "Carregamento instantâneo",
    "stats.title_2": "Projetos Entregues",
    "stats.desc_2": "100% código autoral",
    "stats.title_3": "Retorno sobre Investimento",
    "stats.desc_3": "Clientes satisfeitos",
    "stats.title_4": "Garantia de Entrega",
    "stats.desc_4": "Sem prazos estourados",

    // Solutions / Services Section
    "solutions.badge": "Soluções Digitais sob Medida",
    "solutions.title_html": "Engenharia web de alta performance para <span class=\"text-gradient-brand\">escala do seu negócio.</span>",
    "solutions.subtitle": "Eliminamos a complexidade técnica e entregamos ecossistemas digitais robustos, rápidos e desenhados para gerar autoridade imediata.",
    
    "solutions.card1_badge": "Mais Solicitado",
    "solutions.card1_title": "Landing Pages de Alta Conversão",
    "solutions.card1_desc": "Páginas projetadas especificamente para campanhas de tráfego pago (Google Ads, Meta Ads) com foco em ROI máximo e captação de leads qualificados.",
    "solutions.card1_feat1": "Arquitetura com foco em conversão direta",
    "solutions.card1_feat2": "Carregamento instantâneo em redes 4G/5G",
    "solutions.card1_feat3": "Integração nativa com WhatsApp e CRM",

    "solutions.card2_badge": "Corporativo",
    "solutions.card2_title": "Sites Institucionais de Elite",
    "solutions.card2_desc": "Portais empresariais completos que posicionam sua marca no topo do mercado, transmitindo a solidez e a infraestrutura que grandes clientes exigem.",
    "solutions.card2_feat1": "Design autoral e exclusivo (zero templates)",
    "solutions.card2_feat2": "Páginas institucionais, serviços e equipe",
    "solutions.card2_feat3": "Painel de controle amigável e expansível",

    "solutions.card3_badge": "E-Commerce",
    "solutions.card3_title": "Lojas Virtuais & Plataformas Web",
    "solutions.card3_desc": "Sistemas de vendas online rápidos e seguros com checkout sem atrito, gestão simplificada de catálogo e alta taxa de retenção de clientes.",
    "solutions.card3_feat1": "Checkout transparente com Pix e Cartão",
    "solutions.card3_feat2": "Navegação mobile perfeita e intuitiva",
    "solutions.card3_feat3": "SEO de produto e integração logística",

    "solutions.card4_badge": "Consultoria",
    "solutions.card4_title": "Redesign Estratégico & SEO Técnico",
    "solutions.card4_desc": "Reformulação completa de sites antigos e lentos para padrões modernos de código, recuperando tráfego orgânico e multiplicando as vendas.",
    "solutions.card4_feat1": "Auditoria profunda de performance e UX",
    "solutions.card4_feat2": "Otimização de Core Web Vitals (Google)",
    "solutions.card4_feat3": "Migração segura sem perda de posicionamento",

    "solutions.cta": "Precisa de uma solução personalizada?",
    "solutions.cta_btn": "Falar com nosso arquiteto web",

    // Portfolio Section
    "portfolio.badge": "Portfólio & Casos de Sucesso",
    "portfolio.title_html": "Resultados reais gerados para <span class=\"text-gradient-brand\">marcas líderes.</span>",
    "portfolio.subtitle": "Explore alguns dos ecossistemas digitais projetados pela Duo Studio com engenharia sob medida e foco em conversão.",
    "portfolio.filter_all": "Todos os Projetos",
    "portfolio.filter_landing": "Landing Pages",
    "portfolio.filter_institucional": "Institucionais",
    "portfolio.filter_health": "Saúde & Clínicas",
    "portfolio.view_case": "Ver estudo de caso",

    // Process / Methodology Section
    "process.badge": "Metodologia de Elite",
    "process.title_html": "Engenharia estruturada em <span class=\"text-gradient-brand\">4 etapas transparentes.</span>",
    "process.subtitle": "Nosso processo de desenvolvimento garante agilidade extrema, alinhamento constante e entrega impecável sem surpresas.",
    "process.step1_num": "01",
    "process.step1_title": "Imersão & Diagnóstico",
    "process.step1_desc": "Analisamos o seu modelo de negócio, público-alvo e concorrentes para mapear a melhor arquitetura de informação e posicionamento estratégico.",
    "process.step2_num": "02",
    "process.step2_title": "Design Estratégico (UI/UX)",
    "process.step2_desc": "Criamos protótipos interativos focados na experiência do usuário e na jornada de compra, alinhando a estética da sua marca com gatilhos visuais.",
    "process.step3_num": "03",
    "process.step3_title": "Desenvolvimento sob Medida",
    "process.step3_desc": "Codificamos seu projeto com tecnologias modernas de alta performance, sem dependência de plataformas lentas ou plugins vulneráveis.",
    "process.step4_num": "04",
    "process.step4_title": "Lançamento & Otimização",
    "process.step4_desc": "Realizamos auditorias de segurança, otimização de velocidade, SEO técnico e colocamos seu ambiente no ar com acompanhamento contínuo.",

    // Interactive Quiz Section
    "quiz.badge": "Simulador de Investimento",
    "quiz.title_html": "Descubra a estrutura ideal para o <span class=\"text-gradient-brand\">seu projeto em 1 minuto.</span>",
    "quiz.subtitle": "Responda a 3 perguntas rápidas e receba uma estimativa personalizada com recomendação do nosso time técnico.",
    "quiz.step1_title": "Passo 1 de 3: Qual é o objetivo principal do seu novo site?",
    "quiz.opt1_1": "Captação de Leads / Vendas Diretas (Landing Page)",
    "quiz.opt1_2": "Presença Institucional / Autoridade de Marca",
    "quiz.opt1_3": "Venda de Produtos Online (E-Commerce)",
    "quiz.opt1_4": "Reformulação / Redesign de Site Atual",

    "quiz.step2_title": "Passo 2 de 3: Qual o prazo desejado para o lançamento?",
    "quiz.opt2_1": "Urgente (em até 5 dias úteis)",
    "quiz.opt2_2": "Médio Prazo (de 1 a 2 semanas)",
    "quiz.opt2_3": "Sem pressa (foco em projeto complexo)",

    "quiz.step3_title": "Passo 3 de 3: Para onde devemos enviar a proposta detalhada?",
    "quiz.name_label": "Seu Nome Completo",
    "quiz.name_ph": "Ex: Carlos Silva",
    "quiz.phone_label": "Seu WhatsApp (com DDD)",
    "quiz.phone_ph": "(94) 99999-9999",
    "quiz.submit_btn": "Gerar Estimativa Personalizada",
    "quiz.prev_btn": "Voltar",
    "quiz.next_btn": "Próximo Passo",

    // Guarantees Section (3D Deck)
    "guarantee.badge": "Compromisso Duo Studio",
    "guarantee.title_html": "3 Garantias fundamentais que <span class=\"text-gradient-brand\">protegem seu investimento.</span>",
    "guarantee.subtitle": "Na Duo Studio, transparência e pontualidade são inegociáveis. Conheça as diretrizes técnicas que asseguram a excelência da sua entrega.",
    "guarantee.card1_title": "Garantia de Velocidade Extrema (LCP < 1.0s)",
    "guarantee.card1_desc": "Se o seu site não carregar em menos de 1 segundo nas métricas do Google Lighthouse, otimizamos gratuitamente até atingir a meta.",
    "guarantee.card2_title": "Propriedade 100% Sua (Sem Mensalidades Ocultas)",
    "guarantee.card2_desc": "Todo o código-fonte, imagens e acessos pertencem integralmente à sua empresa. Sem taxas surpresas de manutenção forçada.",
    "guarantee.card3_title": "Pontualidade Rigorosa na Entrega",
    "guarantee.card3_desc": "Cronograma claro e pré-estabelecido em contrato. Entregamos seu projeto dentro do prazo combinado com marcos transparentes de revisão.",

    // Testimonials Section
    "testimonials.badge": "Provas Sociais & Depoimentos",
    "testimonials.title_html": "O que dizem os clientes que <span class=\"text-gradient-brand\">confiaram na Duo Studio.</span>",
    "testimonials.subtitle": "Empresas que transformaram a sua presença digital e alavancaram seus resultados comerciais através do nosso desenvolvimento autoral.",

    // FAQ Section
    "faq.badge": "Tire suas Dúvidas",
    "faq.title_html": "Perguntas Frequentes sobre <span class=\"text-gradient-brand\">nosso processo.</span>",
    "faq.subtitle": "Respostas claras para as principais dúvidas de nossos clientes antes de iniciar a parceria.",
    "faq.q1": "Quanto tempo leva para desenvolver um projeto?",
    "faq.a1": "O prazo médio para projetos estratégicos como Landing Pages de Alta Conversão ou Sites Institucionais varia entre 2 a 5 dias úteis, a depender da complexidade técnica e dos alinhamentos de conteúdo. Definimos um cronograma claro desde o primeiro dia.",
    "faq.q2": "O site será meu ou precisarei pagar mensalidades eternas de uso?",
    "faq.a2": "O projeto e todo o código-fonte são 100% seus. Não cobramos mensalidades sobre a propriedade do site. Apenas os custos normais de hospedagem e domínio do próprio cliente.",
    "faq.q3": "O site funcionará perfeitamente no celular?",
    "faq.a3": "Sim. Trabalhamos com a metodologia Mobile-First. Mais de 70% dos seus potenciais clientes acessarão pelo smartphone, portanto a experiência móvel é tratada como prioridade máxima.",
    "faq.q4": "Como funciona o suporte técnico após o lançamento?",
    "faq.a4": "Fornecemos garantia completa pós-lançamento para ajustes técnicos e oferecemos planos opcionais de acompanhamento e suporte contínuo para manter seu ambiente sempre atualizado e seguro.",

    // Footer
    "footer.desc": "Agência especializada em desenvolvimento web de alta performance, design estratégico de interface e otimização de conversão para marcas exigentes.",
    "footer.quick_links": "Links Rápidos",
    "footer.solutions_title": "Soluções",
    "footer.contact_title": "Contato Direto",
    "footer.rights": "© 2026 Duo Studio. Todos os direitos reservados. Engenharia de Software Autoral.",
    "footer.privacy": "Política de Privacidade",
    "footer.terms": "Termos de Uso",

    // Modals
    "modal.budget_title": "Agendar Reunião Estratégica",
    "modal.budget_subtitle": "Preencha o formulário abaixo para agendarmos uma conversa e apresentar a solução sob medida para seu negócio.",
    "modal.name_label": "Nome Completo",
    "modal.name_ph": "Seu nome",
    "modal.email_label": "E-mail Corporativo",
    "modal.email_ph": "seu@email.com",
    "modal.phone_label": "WhatsApp / Telefone",
    "modal.phone_ph": "(00) 00000-0000",
    "modal.msg_label": "Sobre o Projeto",
    "modal.msg_ph": "Descreva resumidamente suas necessidades ou objetivos...",
    "modal.submit_btn": "Enviar Solicitação de Reunião",

    "modal.project_title": "Estudo de Caso do Projeto",
    "modal.project_close": "Fechar",
    "modal.problem_label": "O Desafio",
    "modal.obj_label": "Objetivo Estratégico",
    "modal.sol_label": "Nossa Solução",
    "modal.highlights_label": "Destaques Técnicos & Resultados",
    "modal.techs_label": "Tecnologias Utilizadas",
    "modal.visit_site": "Visitar Site Ao Vivo"
  },

  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.solutions": "Solutions",
    "nav.portfolio": "Portfolio",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.testimonials": "Testimonials",
    "nav.engineering": "Engineering",
    "nav.faq": "FAQ",
    "nav.schedule_cta": "Schedule Strategic Meeting",
    "nav.lang_pt": "PT",
    "nav.lang_en": "EN",
    
    // Hero
    "hero.tech_badge": "High-Speed Software Engineering & UX Architecture",
    "hero.title_html": "We build websites that <br class=\"hidden sm:inline\" /><span class=\"text-gradient-brand\">accelerate sales and drive growth.</span>",
    "hero.subtitle": "Bespoke web development, extreme performance, and conversion strategies for businesses that refuse to look generic.",
    "hero.cta_proposal": "Request Commercial Proposal",
    "hero.cta_projects": "View Live Projects",
    "hero.tab_speed": "⚡ Speed",
    "hero.tab_ux": "🎯 UX Conversion",
    "hero.tab_seo": "🔍 100/100 SEO",
    "hero.metric_title": "Performance Metric",
    "hero.guarantee_tag": "Technical Guarantee",
    "hero.guarantee_subtag": "International Standard",
    "hero.audited_title": "Google Lighthouse Audited",
    "hero.audited_desc": "98+ Score in Performance, Accessibility, and Best Practices",

    // Interactive Spec Tabs Data
    "hero.tab_speed_metric": "< 0.8s LCP",
    "hero.tab_speed_metric_desc": "Instant loading without lag or visitor bounce.",
    "hero.tab_speed_title": "Speed & Conversion Architecture",
    "hero.tab_speed_subtitle": "High-End Software Engineering",
    "hero.tab_speed_detail": "Optimized native code built with Next.js/Vite, free from heavy WordPress plugins that slow down mobile devices.",

    "hero.tab_ux_metric": "+180% Conversion",
    "hero.tab_ux_metric_desc": "Intuitive design crafted to guide visitors seamlessly to purchase actions.",
    "hero.tab_ux_title": "User Journey & Sales Psychology",
    "hero.tab_ux_subtitle": "Strategic UI/UX Design",
    "hero.tab_ux_detail": "Visual layout engineered to eliminate friction and prompt immediate decision-making with high-impact CTAs.",

    "hero.tab_seo_metric": "Top #1 Google",
    "hero.tab_seo_metric_desc": "Flawless technical indexing and Schema.org rich snippet metadata.",
    "hero.tab_seo_title": "Advanced Search Engine Optimization",
    "hero.tab_seo_subtitle": "Native Technical SEO",
    "hero.tab_seo_detail": "Rank your business at the top of Google search results for high-intent keywords and premium local clients.",

    // Metrics / Stats Bar
    "stats.title_1": "Average LCP Speed",
    "stats.desc_1": "Instantaneous load time",
    "stats.title_2": "Projects Delivered",
    "stats.desc_2": "100% custom codebase",
    "stats.title_3": "Return on Investment",
    "stats.desc_3": "Satisfied enterprise clients",
    "stats.title_4": "Delivery Guarantee",
    "stats.desc_4": "Zero deadline overruns",

    // Solutions / Services Section
    "solutions.badge": "Tailored Digital Solutions",
    "solutions.title_html": "High-performance web engineering for <span class=\"text-gradient-brand\">scaling your business.</span>",
    "solutions.subtitle": "We eliminate technical friction and deliver fast, robust, and beautiful digital ecosystems built to establish instant authority.",
    
    "solutions.card1_badge": "Most Popular",
    "solutions.card1_title": "High-Conversion Landing Pages",
    "solutions.card1_desc": "Pages engineered specifically for ad campaigns (Google Ads, Meta Ads) focused on maximum ROI and qualified lead generation.",
    "solutions.card1_feat1": "Conversion-focused conversion funnel",
    "solutions.card1_feat2": "Instantaneous loading on 4G/5G mobile networks",
    "solutions.card1_feat3": "Native WhatsApp & CRM lead integration",

    "solutions.card2_badge": "Enterprise",
    "solutions.card2_title": "Elite Corporate Websites",
    "solutions.card2_desc": "Comprehensive corporate portals that position your brand at the top of your market, projecting stability and high reputation.",
    "solutions.card2_feat1": "Bespoke custom UI/UX design (zero templates)",
    "solutions.card2_feat2": "Institutional pages, services catalog, and team",
    "solutions.card2_feat3": "User-friendly and scalable management stack",

    "solutions.card3_badge": "E-Commerce",
    "solutions.card3_title": "Online Stores & Web Apps",
    "solutions.card3_desc": "Fast and secure online shopping systems with friction-free checkout, streamlined product catalog management, and high retention.",
    "solutions.card3_feat1": "Frictionless checkout with modern gateways",
    "solutions.card3_feat2": "Flawless mobile navigation experience",
    "solutions.card3_feat3": "Built-in product SEO and logistics workflow",

    "solutions.card4_badge": "Consulting",
    "solutions.card4_title": "Strategic Redesign & Technical SEO",
    "solutions.card4_desc": "Complete overhaul of legacy websites into modern high-speed code, recovering lost search traffic and multiplying conversions.",
    "solutions.card4_feat1": "Deep technical performance & UX audit",
    "solutions.card4_feat2": "Core Web Vitals optimization (Google)",
    "solutions.card4_feat3": "Seamless SEO migration without rank loss",

    "solutions.cta": "Need a fully custom solution?",
    "solutions.cta_btn": "Talk to our principal web architect",

    // Portfolio Section
    "portfolio.badge": "Portfolio & Case Studies",
    "portfolio.title_html": "Real results delivered for <span class=\"text-gradient-brand\">market leaders.</span>",
    "portfolio.subtitle": "Explore digital ecosystems engineered by Duo Studio with custom software design and conversion focus.",
    "portfolio.filter_all": "All Projects",
    "portfolio.filter_landing": "Landing Pages",
    "portfolio.filter_institucional": "Corporate",
    "portfolio.filter_health": "Healthcare & Clinics",
    "portfolio.view_case": "View Case Study",

    // Process / Methodology Section
    "process.badge": "Elite Methodology",
    "process.title_html": "Engineered through <span class=\"text-gradient-brand\">4 transparent phases.</span>",
    "process.subtitle": "Our development process ensures extreme agility, continuous alignment, and flawless delivery with zero surprises.",
    "process.step1_num": "01",
    "process.step1_title": "Discovery & Diagnosis",
    "process.step1_desc": "We analyze your business model, target audience, and competitors to architect optimal information hierarchy and positioning.",
    "process.step2_num": "02",
    "process.step2_title": "Strategic UI/UX Design",
    "process.step2_desc": "We craft interactive prototypes focused on user experience and buying journey, pairing aesthetics with conversion triggers.",
    "process.step3_num": "03",
    "process.step3_title": "Custom Software Build",
    "process.step3_desc": "We code your project with modern high-performance tech stacks, avoiding slow CMS templates or vulnerable plugins.",
    "process.step4_num": "04",
    "process.step4_title": "Launch & Continuous SEO",
    "process.step4_desc": "We run security audits, speed optimization, and technical SEO, launching your digital asset with ongoing technical support.",

    // Interactive Quiz Section
    "quiz.badge": "Investment Estimator",
    "quiz.title_html": "Discover the ideal architecture for <span class=\"text-gradient-brand\">your project in 1 minute.</span>",
    "quiz.subtitle": "Answer 3 quick questions and receive a custom estimate recommended by our engineering team.",
    "quiz.step1_title": "Step 1 of 3: What is the main objective of your new website?",
    "quiz.opt1_1": "Lead Generation / Direct Sales (Landing Page)",
    "quiz.opt1_2": "Brand Authority & Corporate Presence",
    "quiz.opt1_3": "Online Product Sales (E-Commerce)",
    "quiz.opt1_4": "Website Redesign & Overhaul",

    "quiz.step2_title": "Step 2 of 3: What is your target launch timeframe?",
    "quiz.opt2_1": "Urgent (within 5 business days)",
    "quiz.opt2_2": "Medium Term (1 to 2 weeks)",
    "quiz.opt2_3": "Flexible (focus on complex custom project)",

    "quiz.step3_title": "Step 3 of 3: Where should we send your detailed proposal?",
    "quiz.name_label": "Your Full Name",
    "quiz.name_ph": "e.g. John Smith",
    "quiz.phone_label": "Your WhatsApp / Phone",
    "quiz.phone_ph": "+1 (555) 000-0000",
    "quiz.submit_btn": "Generate Custom Estimate",
    "quiz.prev_btn": "Back",
    "quiz.next_btn": "Next Step",

    // Guarantees Section (3D Deck)
    "guarantee.badge": "Duo Studio Commitment",
    "guarantee.title_html": "3 Fundamental guarantees that <span class=\"text-gradient-brand\">protect your investment.</span>",
    "guarantee.subtitle": "At Duo Studio, transparency and punctuality are non-negotiable. Learn about the engineering standards that guarantee delivery excellence.",
    "guarantee.card1_title": "Extreme Speed Guarantee (LCP < 1.0s)",
    "guarantee.card1_desc": "If your site does not load under 1 second on Google Lighthouse metrics, we optimize it for free until it hits the target.",
    "guarantee.card2_title": "100% Code Ownership (Zero Hidden Fees)",
    "guarantee.card2_desc": "All source code, design assets, and administrative access belong 100% to your company with zero mandatory recurring fees.",
    "guarantee.card3_title": "Strict On-Time Delivery Guarantee",
    "guarantee.card3_desc": "Clear milestones contractual schedule. We deliver your project strictly on time with transparent review checkpoints.",

    // Testimonials Section
    "testimonials.badge": "Social Proof & Reviews",
    "testimonials.title_html": "What our clients say about <span class=\"text-gradient-brand\">partnering with Duo Studio.</span>",
    "testimonials.subtitle": "Companies that transformed their digital presence and boosted sales with our custom web software.",

    // FAQ Section
    "faq.badge": "Got Questions?",
    "faq.title_html": "Frequently Asked Questions about <span class=\"text-gradient-brand\">our process.</span>",
    "faq.subtitle": "Clear answers to essential questions before starting your project with us.",
    "faq.q1": "How long does it take to complete a project?",
    "faq.a1": "Average turnaround time for strategic projects such as High-Conversion Landing Pages or Corporate Websites ranges from 2 to 5 business days, depending on technical complexity and content alignment. We set a strict timeline from day one.",
    "faq.q2": "Will I own the website or pay recurring platform fees?",
    "faq.a2": "The project and all source code are 100% yours. We do not charge monthly licensing or maintenance fees. You only pay for standard domain and hosting infrastructure.",
    "faq.q3": "Will the website work seamlessly on mobile phones?",
    "faq.a3": "Yes. We follow a Mobile-First methodology. Over 70% of your visitors will access via mobile smartphones, so the mobile experience is engineered as top priority.",
    "faq.q4": "How does technical support work after launch?",
    "faq.a4": "We provide complete post-launch guarantees for technical adjustments, as well as optional ongoing maintenance and monitoring packages to keep your platform secure and up-to-date.",

    // Footer
    "footer.desc": "Specialized digital agency in high-performance web development, strategic UI/UX design, and conversion optimization for ambitious brands.",
    "footer.quick_links": "Quick Links",
    "footer.solutions_title": "Solutions",
    "footer.contact_title": "Direct Contact",
    "footer.rights": "© 2026 Duo Studio. All rights reserved. Custom Web Software Engineering.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",

    // Modals
    "modal.budget_title": "Schedule Strategic Meeting",
    "modal.budget_subtitle": "Fill out the form below to schedule a consultation and receive a custom solution tailored to your business goals.",
    "modal.name_label": "Full Name",
    "modal.name_ph": "Your name",
    "modal.email_label": "Corporate Email",
    "modal.email_ph": "you@company.com",
    "modal.phone_label": "WhatsApp / Phone",
    "modal.phone_ph": "+1 (555) 000-0000",
    "modal.msg_label": "About the Project",
    "modal.msg_ph": "Briefly describe your goals or project needs...",
    "modal.submit_btn": "Submit Meeting Request",

    "modal.project_title": "Project Case Study",
    "modal.project_close": "Close",
    "modal.problem_label": "The Challenge",
    "modal.obj_label": "Strategic Objective",
    "modal.sol_label": "Our Solution",
    "modal.highlights_label": "Technical Highlights & Results",
    "modal.techs_label": "Tech Stack Used",
    "modal.visit_site": "Visit Live Website"
  }
};

class DuoI18nEngine {
  constructor() {
    this.currentLang = localStorage.getItem('duo_lang') || 'pt';
    if (!['pt', 'en'].includes(this.currentLang)) {
      this.currentLang = 'pt';
    }
  }

  init() {
    this.applyLanguage(this.currentLang);
    this.bindLanguageToggles();
  }

  getTranslation(key) {
    const langDict = duoTranslations[this.currentLang] || duoTranslations.pt;
    if (langDict && langDict[key] !== undefined) return langDict[key];
    if (duoTranslations.pt && duoTranslations.pt[key] !== undefined) return duoTranslations.pt[key];
    return null;
  }

  setLanguage(lang) {
    if (!['pt', 'en'].includes(lang)) return;
    this.currentLang = lang;
    localStorage.setItem('duo_lang', lang);
    this.applyLanguage(lang);
    
    // Dispatch custom event for dynamic components (like app.js)
    window.dispatchEvent(new CustomEvent('duoLanguageChanged', { detail: { lang } }));
  }

  applyLanguage(lang) {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    // 1. Text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = this.getTranslation(key);
      if (translation !== null) {
        el.textContent = translation;
      }
    });

    // 2. HTML elements (with rich formatting)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const translation = this.getTranslation(key);
      if (translation !== null) {
        el.innerHTML = translation;
      }
    });

    // 3. Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translation = this.getTranslation(key);
      if (translation !== null) {
        el.setAttribute('placeholder', translation);
      }
    });

    // 4. Update language toggle button UI states
    this.updateToggleUI();

    // 5. Re-render Lucide icons
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  updateToggleUI() {
    document.querySelectorAll('.duo-lang-toggle').forEach(toggleBtn => {
      const ptBtn = toggleBtn.querySelector('[data-lang-val="pt"]');
      const enBtn = toggleBtn.querySelector('[data-lang-val="en"]');

      if (ptBtn && enBtn) {
        if (this.currentLang === 'pt') {
          ptBtn.classList.add('bg-violet-600', 'text-white', 'shadow-sm');
          ptBtn.classList.remove('text-gray-400', 'hover:text-white');
          enBtn.classList.remove('bg-violet-600', 'text-white', 'shadow-sm');
          enBtn.classList.add('text-gray-400', 'hover:text-white');
        } else {
          enBtn.classList.add('bg-violet-600', 'text-white', 'shadow-sm');
          enBtn.classList.remove('text-gray-400', 'hover:text-white');
          ptBtn.classList.remove('bg-violet-600', 'text-white', 'shadow-sm');
          ptBtn.classList.add('text-gray-400', 'hover:text-white');
        }
      }
    });
  }

  bindLanguageToggles() {
    document.querySelectorAll('.duo-lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetLang = btn.getAttribute('data-lang-val');
        if (targetLang) {
          this.setLanguage(targetLang);
        }
      });
    });
  }
}

// Instantiate and attach to window
window.duoI18n = new DuoI18nEngine();

document.addEventListener('DOMContentLoaded', () => {
  window.duoI18n.init();
});
