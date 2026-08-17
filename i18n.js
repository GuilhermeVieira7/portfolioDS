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
    "nav.services": "Soluções",
    "nav.schedule_cta": "Agendar reunião estratégica",
    "nav.lang_pt": "PT",
    "nav.lang_en": "EN",
    
    // Hero
    "hero.tech_badge": "Engenharia de Software & Arquitetura UX de Alta Velocidade",
    "hero.title_html": "Construímos sites que <br class=\"hidden sm:inline\" /><span class=\"text-gradient-brand\">aceleram vendas e geram valor.</span>",
    "hero.subtitle": "Desenvolvimento web sob medida, performance extrema e estratégia de conversão para empresas que se recusam a parecer genéricas no mercado.",
    "hero.cta_proposal": "Solicitar proposta comercial",
    "hero.cta_projects": "Ver projetos reais",
    "hero.cta_whatsapp": "Falar no WhatsApp",
    "hero.tab_speed": "⚡ Velocidade",
    "hero.tab_ux": "🎯 Conversão UX",
    "hero.tab_seo": "🔍 SEO 100/100",
    "hero.metric_title": "Métrica de Performance",
    "hero.guarantee_tag": "Garantia Técnica",
    "hero.trust_1": "Projetos 100% Autorais",
    "hero.trust_2": "Foco em Captação de Leads",
    "hero.trust_3": "Otimização para Dispositivos Móveis",

    // Services Detailed (servicos.html)
    "serv.hero_badge": "Ecossistema Digital de Resultados",
    "serv.hero_title_html": "Engenharia web, redes & automações <br class=\"hidden sm:inline\" /><span class=\"text-gradient-brand\">para acelerar o seu faturamento.</span>",
    "serv.hero_desc": "Não vendemos apenas código ou artes soltas. Criamos o ecossistema completo para posicionar sua empresa e converter visitantes em vendas reais.",
    "serv1.tag": "Foco em Tráfego Pago & Ads",
    "serv1.title": "Landing Pages de Alta Conversão",
    "serv1.desc": "Projetadas especificamente para receber visitantes vindos de anúncios (Google Ads, Meta Ads). Estruturadas com copywriting persuasivo, quebra de objeções, gatilhos de prova social e CTAs estratégicos.",
    "serv1.feat1": "Carregamento em menos de 0.8s no celular",
    "serv1.feat2": "Agendamento e captura direta via WhatsApp",
    "serv1.feat3": "Integração com Pixel Meta, Google Analytics & Tag Manager",
    "serv1.btn": "Solicitar Proposta para Landing Page",
    "serv1.side_title": "Engenharia de Conversão",
    "serv1.side_subtitle": "Arquitetura focada em ROI",
    "serv1.side_speed": "Velocidade LCP",
    "serv1.side_speed_val": "< 0.8s (Instantâneo)",
    "serv1.side_response": "Taxa de Resposta",
    "serv1.side_response_val": "+180% Conversão",
    "serv1.side_ownership": "Propriedade",
    "serv1.side_ownership_val": "100% Seu (Código Limpo)",
    "serv2.tag": "Marca & Posicionamento Corporativo",
    "serv2.title": "Sites Institucionais Corporativos",
    "serv2.desc": "Plataformas institucionais sob medida para empresas, clínicas, escritórios e indústrias que buscam transmitir solidez técnica, sofisticação e autoridade inquestionável no ambiente digital.",
    "serv2.feat1": "Arquitetura multi-páginas e seções institucionais",
    "serv2.feat2": "Dados estruturados (Schema.org) para destaque no Google",
    "serv2.feat3": "Design 100% autoral alinhado às diretrizes de marca",
    "serv2.btn": "Solicitar Proposta para Site Institucional",
    "serv2.side_title": "Autoridade Corporativa",
    "serv2.side_subtitle": "Presença de mercado dominante",
    "serv2.side_seo": "Indexação SEO",
    "serv2.side_seo_val": "Semântica Completa",

    // Posicionamento / Sobre nós na Home
    "pos.badge": "Posicionamento de Negócio",
    "pos.title_html": "Por que empresas sérias escolhem a <span class=\"text-gradient-brand\">Duo Studio?</span>",
    "pos.p1": "A maioria dos sites corporativos sofre do mesmo problema: são templates lentos, genéricos e incapazes de transformar um visitante em uma oportunidade real de venda.",
    "pos.p2": "Na Duo Studio, tratamos seu site como um ativo estratégico de vendas. Unimos psicologia de consumo, design de interface de classe mundial e código extremamente rápido para garantir que sua empresa domine a atenção do cliente e supere a concorrência.",
    "pos.cta": "Conhecer nossas soluções",
    "pos.card1_title": "Copywriting & Foco em Conversão",
    "pos.card1_desc": "Mensagens estratégicas desenhadas para responder às objeções do seu cliente e motivá-lo a entrar em contato.",
    "pos.card2_title": "Engenharia Sob Medida",
    "pos.card2_desc": "Sem construtores pesados. Construímos a estrutura com tecnologias modernas para garantir rapidez e segurança.",
    "pos.card3_title": "SEO & Preparação para Buscas",
    "pos.card3_desc": "Estruturação completa de dados e metadados para que sua empresa seja encontrada com relevância no Google.",

    // Manifesto Section
    "manifesto.badge": "Compromisso Inflexível com a Qualidade",
    "manifesto.title_html": "O Manifesto <span class=\"text-gradient-brand\">Duo Studio</span>",
    "manifesto.subtitle": "Recusamo-nos a aceitar os padrões medianos do mercado de desenvolvimento web. Existimos para criar ativos digitais de alta performance que geram valor real para empresas sérias.",
    "manifesto.not_title": "O que NÃO fazemos",
    "manifesto.not_1_html": "<strong>Sem Templates Prontos</strong>: Não usamos temas genéricos de WordPress ou Wix carregados de plugins que travam o celular.",
    "manifesto.not_2_html": "<strong>Sem Aluguel de Código</strong>: Não prendemos sua empresa em mensalidades eternas de uso sobre o seu próprio site.",
    "manifesto.not_3_html": "<strong>Sem Prazos Burocráticos</strong>: Não demoramos 60 dias para entregar um projeto que sua empresa precisa hoje.",
    "manifesto.yes_title": "Nosso Padrão Inegociável",
    "manifesto.yes_1_html": "<strong>Engenharia Autoral</strong>: Cada linha de código é construída com foco em velocidade sub-segundo (< 0.8s LCP).",
    "manifesto.yes_2_html": "<strong>Propriedade 100% Sua</strong>: O código-fonte é entregue integralmente ao cliente após o lançamento.",
    "manifesto.yes_3_html": "<strong>Atendimento com os Sócios</strong>: Comunicação direta com os desenvolvedores responsáveis pelo projeto.",

    // Services / Solutions on Home
    "serv.badge": "Soluções Orientadas a Resultados",
    "serv.title_html": "Engenharia digital desenhada para <span class=\"text-gradient-brand\">gerar novos negócios.</span>",
    "serv.subtitle": "Não vendemos apenas código ou layouts. Entregamos plataformas estruturadas para acelerar a aquisição de clientes.",
    "serv.card1_title": "Gerar Mais Leads Qualificados",
    "serv.card1_desc": "Landing Pages direcionadas para campanhas de tráfego pago. Estruturadas com copywriting persuasivo para converter visitantes em oportunidades reais de vendas.",
    "serv.card1_tag": "Foco em ROI e Captação Direct-to-Sales",
    "serv.card2_title": "Posicionar Sua Marca Com Autoridade",
    "serv.card2_desc": "Sites institucionais sob medida que transmitem solidez técnica, valor de mercado e sofisticação imediata para grandes corporações e escritórios.",
    "serv.card2_tag": "Arquitetura de Marca & Credibilidade",
    "serv.card3_title": "Vender Produtos Sem Fricção",
    "serv.card3_desc": "Lojas virtuais com tempo de resposta instantâneo, navegação simplificada e checkout otimizado para evitar abandonos de carrinho.",
    "serv.card3_tag": "UX de Compra & Performance Mobile",
    "serv.card4_title": "Modernizar Sites Antigos & Lentos",
    "serv.card4_desc": "Redesign estratégico completo de plataformas legadas. Reformulamos a arquitetura visual e técnica para eliminar a perda de clientes por lentidão.",
    "serv.card4_tag": "Reconstrução de Código & Estética Modern",
    "serv.card5_title": "Dominar Buscas Orgânicas no Google",
    "serv.card5_desc": "Engenharia de SEO Técnico com dados estruturados (Schema.org), metadados avançados e semântica de código para posicionamento constante nas primeiras páginas.",
    "serv.card5_tag": "Visibilidade Orgânica & Autoridade de Domínio",
    "serv.card6_title": "Posts para Instagram & Social Design",
    "serv.card6_desc": "Criação de posts carrossel estratégicos, banners institucionais e identidade visual autoral para destacar sua marca com sofisticação nas redes sociais.",
    "serv.card6_tag": "Design Autoral & Consistência de Marca",
    "serv.card7_title": "Automações de Vendas & WhatsApp",
    "serv.card7_desc": "Workflows inteligentes para atendimento de leads, envio de propostas automáticas no WhatsApp e integração direta do site com seu CRM.",
    "serv.card7_tag": "Produtividade Comercial & Atendimento 24/7",
    "serv.card8_title": "Garantir Estabilidade & Segurança",
    "serv.card8_desc": "Acompanhamento contínuo pós-entrega com suporte direto dos desenvolvedores. Seu site sempre atualizado, seguro e operando em máxima velocidade.",
    "serv.card8_tag": "Manutenção sem Complicações",

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

    // Quiz Section
    "quiz.badge": "Simulador de Investimento",
    "quiz.title_html": "Descubra a estrutura ideal para o <span class=\"text-gradient-brand\">seu projeto em 1 minuto.</span>",
    "quiz.subtitle": "Responda a 3 perguntas rápidas e receba uma estimativa personalizada com recomendação do nosso time técnico.",
    "quiz.step_badge": "Diagnóstico Sem Custos",
    "quiz.step1_title": "Qual o principal objetivo da sua empresa hoje?",
    "quiz.step1_sub": "Selecione o modelo que melhor descreve sua necessidade atual:",
    "quiz.opt1_title": "Gerar Mais Leads & Vendas",
    "quiz.opt1_desc": "Landing Page focada em campanhas de tráfego pago",
    "quiz.opt2_title": "Posicionar Marca & Autoridade",
    "quiz.opt2_desc": "Site Institucional corporativo de alto padrão",
    "quiz.opt3_title": "Vender Produtos (E-Commerce)",
    "quiz.opt3_desc": "Loja virtual rápida e sem atrito no checkout",
    "quiz.opt4_title": "Modernizar Site Lento / Antigo",
    "quiz.opt4_desc": "Redesign completo com código ultrarrápido",
    "quiz.next_step1": "Avançar para Segmento",
    "quiz.step2_title": "Em qual segmento sua empresa atua?",
    "quiz.step2_sub": "Isso nos ajuda a preparar referências e dados específicos:",
    "quiz.seg1_title": "Serviços & Negócios",
    "quiz.seg1_desc": "Consultoria, Engenharia, Advocacia",
    "quiz.seg2_title": "Saúde & Clínicas",
    "quiz.seg2_desc": "Laboratórios, Médicos, Odonto",
    "quiz.seg3_title": "Turismo & Lazer",
    "quiz.seg3_desc": "Agências de Viagens, Hotelaria",
    "quiz.seg4_title": "Vendas & E-Commerce",
    "quiz.seg4_desc": "Produtos, Varejo, Marca Própria",
    "quiz.btn_back": "Voltar",
    "quiz.next_step2": "Avançar para Contato",
    "quiz.step3_title": "Onde devemos entregar seu diagnóstico?",
    "quiz.step3_sub": "Preencha abaixo e entraremos em contato via WhatsApp com a proposta:",
    "quiz.label_name": "Seu Nome / Empresa *",
    "quiz.ph_name": "Ex: Carlos Silva",
    "quiz.label_phone": "WhatsApp para Contato *",
    "quiz.label_email": "E-mail Corporativo",
    "quiz.ph_email": "carlos@empresa.com",
    "quiz.label_goals": "Resumo das Metas da Empresa (Opcional)",
    "quiz.ph_goals": "Descreva brevemente suas metas de vendas...",
    "quiz.btn_submit": "Enviar Diagnóstico no WhatsApp",
    "quiz.success_title": "Solicitação Pronta para Envio!",
    "quiz.success_sub": "Escolha com qual dos nossos sócios você prefere iniciar a conversa no WhatsApp:",
    "quiz.success_wa1": "Contato 1: (94) 99909-9386",
    "quiz.success_wa2": "Contato 2: (94) 99281-1658",
    "quiz.success_close": "Fechar janela",

    // Guarantees (3D Deck)
    "guarantee.badge": "Compromisso Duo Studio",
    "guarantee.title_html": "3 Garantias fundamentais que <span class=\"text-gradient-brand\">protegem seu investimento.</span>",
    "guarantee.subtitle": "Na Duo Studio, transparência e pontualidade são inegociáveis. Conheça as diretrizes técnicas que asseguram a excelência da sua entrega.",
    "guarantee.card1_tag": "Garantia 01",
    "guarantee.card1_title": "Garantia de Velocidade Extreme",
    "guarantee.card1_desc": "Seu site é entregue com tempo de carregamento <strong>sub-segundo (&lt; 0.8s) no celular</strong>. Se não atingirmos essa meta, você ganha 60 dias de suporte gratuito estendido.",
    "guarantee.card2_tag": "Garantia 02",
    "guarantee.card2_title": "Garantia de Propriedade Total",
    "guarantee.card2_desc": "O projeto e todo o <strong>código-fonte são 100% seus</strong> por direito. Sem mensalidades ocultas, sem taxas de uso e sem dependência de plataformas engessadas.",
    "guarantee.card3_tag": "Garantia 03",
    "guarantee.card3_title": "Garantia de Prazo Rigoroso",
    "guarantee.card3_desc": "Definimos o cronograma de 7 fases no primeiro dia e cravamos as datas em <strong>contrato formal</strong>. Garantimos a homologação rigorosamente na data acordada.",
    "deck.hint": "Clique para abrir nosso leque de garantias",
    "deck.hint_expanded": "Clique para recolher o leque de garantias",

    // Testimonials
    "testimonials.badge": "Prova Social Integrada",
    "testimonials.title_html": "O que dizem os parceiros da <span class=\"text-gradient-brand\">Duo Studio.</span>",
    "testimonials.subtitle": "Resultados reais em vendas, retenção de clientes e agilidade técnica.",
    "testimonials.card1_quote": "\"A reformulação da nossa presença digital pela Duo Studio transformou o fluxo de agendamentos da Angatu Viagens. O site é leve, lindíssimo no celular e nosso cliente clica no WhatsApp já decidido a fechar a viagem.\"",
    "testimonials.card1_role": "Direção Comercial",
    "testimonials.card1_company": "Angatu Viagens & Turismo de Luxo",
    "testimonials.card2_quote": "\"Precisávamos de um portal clínico que passasse confiança imediata para motoristas de CNH C, D e E em Parauapebas. O trabalho em 4 passos facilitou o agendamento e o SEO local nos colocou no topo das buscas.\"",
    "testimonials.card2_role": "Gestão Clínica",
    "testimonials.card2_company": "LabPrime Toxicológico",

    // Subpage Servicos Details
    "serv3.tag": "Design de Conteúdo & Presença Social",
    "serv3.title": "Posts para Instagram & Social Design",
    "serv3.desc": "Projetamos posts carrossel estratégicos, banners institucionais e identidades visuais marcantes para o Instagram da sua empresa. Transformamos suas redes sociais em uma extensão luxuosa e confiável da sua marca.",
    "serv3.feat1": "Design autoral sem cara de IA ou artes genéricas de banco",
    "serv3.feat2": "Carrosséis educativos focados em retenção e salvamentos",
    "serv3.feat3": "Padrão estético alinhado ao posicionamento do seu site",
    "serv3.btn": "Solicitar Pacote para Instagram",
    "serv3.side_title": "Identidade Visual Social",
    "serv3.side_subtitle": "Estética Premium & Retenção",
    "serv3.side_formats": "Formatos",
    "serv3.side_formats_val": "Feed, Carrossel & Stories",
    "serv3.side_consistency": "Consistência",
    "serv3.side_consistency_val": "Guia de Cores & Tipografia",
    "serv3.side_engagement": "Engajamento",
    "serv3.side_engagement_val": "Copywriting Orientado a Ação",

    "serv4.tag": "Produtividade Comercial & IA Aplicada",
    "serv4.title": "Automações de Vendas & WhatsApp",
    "serv4.desc": "Construímos fluxos automatizados de atendimento e vendas. Conectamos seu site diretamente ao WhatsApp da equipe comercial, disparando mensagens instantâneas de boas-vindas, qualificando o cliente 24/7 e registrando tudo no CRM.",
    "serv4.feat1": "Resposta imediata ao lead sem dependência de operador humano",
    "serv4.feat2": "Qualificação prévia de orçamento via quiz ou bot guiado",
    "serv4.feat3": "Integração direta com CRMs (HubSpot, RD Station, Notion)",
    "serv4.btn": "Solicitar Automação Comercial",
    "serv4.side_title": "Workflows de Atendimento",
    "serv4.side_subtitle": "Operação 24 Horas sem Falhas",
    "serv4.side_wa": "Resposta no WhatsApp",
    "serv4.side_wa_val": "< 5 Segundos",
    "serv4.side_filter": "Triagem",
    "serv4.side_filter_val": "Filtro de Clientes Reais",
    "serv4.side_sync": "Sincronização",
    "serv4.side_sync_val": "CRM Integrado em Tempo Real",

    "serv5.tag": "Reformulação & Desempenho",
    "serv5.title": "Redesign Estratégico & SEO Técnico",
    "serv5.desc": "Reconstruímos sites antigos, lentos ou ultrapassados. Reescrevemos a estrutura visual e o código-fonte para eliminar perdas de clientes por travamentos e elevar o posicionamento nas buscas do Google.",
    "serv5.feat1": "Migração de código legado para HTML5/Clean Code",
    "serv5.feat2": "Otimização avançada de imagens WebP e compressão",
    "serv5.feat3": "Auditoria e ajuste de metadados e sitemap",
    "serv5.btn": "Solicitar Análise de Redesign",
    "serv5.side_title": "Arquitetura Renovada",
    "serv5.side_subtitle": "Zero Desperdício de Código",
    "serv5.side_weight": "Redução de Peso",
    "serv5.side_weight_val": "-75% no Carregamento",
    "serv5.side_mobile": "Resposta Mobile",
    "serv5.side_mobile_val": "100% Fluida",
    "serv5.side_seo": "SEO Técnico",
    "serv5.side_seo_val": "Conformidade Total",

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
    "footer.cta_title": "Pronto para levar seu negócio ao próximo nível digital?",
    "footer.cta_subtitle": "Converse com nossos especialistas e receba um diagnóstico sem compromisso.",
    "footer.desc": "Agência especializada em desenvolvimento web de alta performance, design estratégico de interface e otimização de conversão para marcas exigentes.",
    "footer.quick_links": "Links Rápidos",
    "footer.solutions_title": "Soluções",
    "footer.contact_title": "Contato Direto",
    "footer.rights": "© 2026 Duo Studio. Todos os direitos reservados. Engenharia de Software Autoral.",
    "footer.location": "Parauapebas - PA, Brasil",
    "footer.privacy": "Política de Privacidade",
    "footer.terms": "Termos de Uso",

    // Subpages
    "about.hero_badge": "Quem Somos & Nossa Filosofia",
    "about.hero_title_html": "Recusamo-nos a criar <br class=\"hidden sm:inline\" /><span class=\"text-gradient-brand\">sites genéricos e lentos.</span>",
    "about.hero_desc": "A Duo Studio nasce com o propósito claro de tratar o site corporativo como o ativo mais rentável de uma empresa no digital.",
    "about.pillar3_title": "Transparência & Contrato",
    "about.pillar3_desc": "Cronogramas cravados em contrato formal. Todo o código-fonte é entregue 100% ao cliente, sem mensalidades ocultas sobre a propriedade do projeto.",

    "serv.cta_title_html": "Qual a solução ideal para o momento da <span class=\"text-gradient-brand\">sua empresa?</span>",
    "serv.cta_desc": "Fale diretamente com os sócios da Duo Studio e receba uma análise sem compromisso.",
    "serv2.side_score": "Score Google",
    "serv2.side_multi": "Multi-Dispositivo",
    "serv2.side_multi_val": "Mobile-First Rigoroso",

    "port.hero_badge": "Estudos de Caso & Trabalhos Autorais",
    "port.hero_title_html": "Projetos reais criados para <br class=\"hidden sm:inline\" /><span class=\"text-gradient-brand\">dominar o mercado digital.</span>",
    "port.hero_desc": "Confira como transformamos a presença digital de nossos parceiros em plataformas ultrarrápidas com foco em captação contínua de clientes.",
    "port.case1_tag": "Turismo de Luxo",
    "port.case1_desc": "Plataforma imersiva de turismo premium desenvolvida para simplificar a apresentação de pacotes de viagem e direcionar o visitante direto para o fechamento no WhatsApp.",
    "port.case1_metric": "+180% Agendamentos no WhatsApp",
    "port.case1_sub": "Turismo Premium & Agendamento Direto",
    "port.case2_tag": "Saúde & Análises Clínicas",
    "port.case2_desc": "Portal clínico focado em exames para motoristas CNH C, D e E com agendamento guiado em 4 passos e infraestrutura otimizada para buscas locais no Google.",
    "port.case2_metric": "LCP < 0.8s Carregamento Instantâneo",
    "port.case2_sub": "Portal de Agendamento & SEO Local",
    "port.real_case": "Caso Real",
    "port.read_case": "Ler Estudo de Caso",
    "port.live_site": "Acessar Site Ao Vivo",
    "port.cta_title": "Sua empresa é o nosso próximo estudo de sucesso?",
    "port.cta_desc": "Desenvolvemos o projeto ideal para suas metas de vendas.",
    "port.cta_btn": "Iniciar Novo Projeto",

    "contact.hero_badge": "Atendimento Direto com os Sócios",
    "contact.title_html": "Fale Conosco & <span class=\"text-gradient-brand\">Agende sua Reunião</span>",
    "contact.desc": "Estamos prontos para entender seu momento de negócio e desenhar a arquitetura web ideal para escalar suas vendas.",
    "contact.wa1_tag": "WhatsApp Sócio 1",
    "contact.wa1_desc": "Atendimento rápido para projetos comerciais e orçamentos.",
    "contact.wa2_tag": "WhatsApp Sócio 2",
    "contact.wa2_desc": "Atendimento direto para parcerias e alinhamentos de engenharia.",
    "contact.form_title": "Ou envie sua mensagem diretamente",
    "contact.form_subtitle": "Responderemos em no máximo 2 horas úteis.",
    "contact.form_name_label": "Seu Nome / Empresa *",
    "contact.form_name_ph": "Ex: João da Silva",
    "contact.form_msg_label": "Mensagem ou Descrição do Projeto *",
    "contact.form_msg_ph": "Conte brevemente sobre o seu projeto...",
    "contact.form_btn": "Iniciar Conversa no WhatsApp",

    "blog.hero_badge": "Conhecimento & Engenharia Digital",
    "blog.hero_title_html": "Estratégia, SEO e conversão <br class=\"hidden sm:inline\" /><span class=\"text-gradient-brand\">para impulsionar seu negócio.</span>",
    "blog.hero_desc": "Artigos diretos ao ponto desenvolvidos pelos especialistas da Duo Studio.",
    "blog.read_article": "Ler artigo completo",
    "blog.back_blog": "Voltar para o Blog",
    "blog.request_analysis": "Solicitar Análise",
    "blog.art1_tag": "Orçamento & Preço",
    "blog.art1_title": "Quanto custa criar um site profissional em Parauapebas em 2026?",
    "blog.art1_desc": "Entenda a variação de preços entre templates genéricos e projetos sob medida de alta velocidade.",
    "blog.art2_tag": "Estratégia de Vendas",
    "blog.art2_title": "Landing Page vs. Site Institucional: Qual sua empresa precisa?",
    "blog.art2_desc": "Descubra qual a solução perfeita para o momento comercial do seu negócio e campanhas de anúncios.",
    "blog.art3_tag": "Otimização & Vendas",
    "blog.art3_title": "5 erros que fazem seu site perder clientes para o concorrente",
    "blog.art3_desc": "Lentidão no celular, falta de prova social e CTAs invisíveis: saiba como diagnosticar e corrigir.",
    "blog.art4_tag": "Guia de SEO Local",
    "blog.art4_title": "O Guia Definitivo do SEO Local: Topo do Google Sem Anúncios",
    "blog.art4_desc": "Aprenda como dominar as buscas locais em Parauapebas com Google Meu Negócio, Schema.org e código limpo.",

    "footer.tagline": "Engenharia digital com alta performance.",
    "mobile.online": "Atendimento On-line",
    "mobile.cta_diag": "Agendar Diagnóstico",

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

    "modal.case_heading": "Estudo de Caso",
    "modal.label_client": "Cliente",
    "modal.label_year": "Ano",
    "modal.label_challenge": "Desafio & Problema",
    "modal.label_objectives": "Objetivos Comerciais",
    "modal.label_overview": "Visão Geral da Solução:",
    "modal.label_results": "Principais Resultados & Diferenciais Técnicos:",
    "modal.label_techs": "Tecnologias Utilizadas:",
    "modal.btn_live": "Acessar projeto ao vivo",

    "modal.project_title": "Estudo de Caso do Projeto",
    "modal.project_close": "Fechar",
    "modal.problem_label": "O Desafio",
    "modal.obj_label": "Objetivo Estratégico",
    "modal.sol_label": "Nossa Solução",
    "modal.highlights_label": "Destaques Técnicos & Resultados",
    "modal.techs_label": "Tecnologias Utilizadas",
    "modal.visit_site": "Visitar Site Ao Vivo",

    // Dedicated Case Study Pages
    "case.back_port": "Voltar para o Portfólio",
    "case.case1_badge": "Estudo de Caso #01",
    "case.case1_title": "Angatu Viagens: Como um redesign com foco em UX aumentou agendamentos em 180%",
    "case.case1_m1_desc": "Agendamentos no WhatsApp",
    "case.m_speed": "Tempo de Carregamento Mobile",
    "case.case1_m3_desc": "Fidelidade às Fotos de Luxo",
    "case.heading_challenge": "O Desafio Comercial",
    "case.case1_challenge": "A Angatu Viagens comercializa pacotes turísticos de alto padrão. O site antigo possuía um layout genérico que demorava mais de 4 segundos para carregar no celular, fazendo com que potenciais viajantes desistissem antes de ver as fotos dos destinos.",
    "case.heading_solution": "A Solução Desenvolvida pela Duo Studio",
    "case.case1_solution": "Reconstruímos a plataforma com foco total em experiência imersiva e mobile-first. Otimizamos as imagens de destinos turísticos sem perder a resolução retina e criamos botões de agendamento flutuante que acompanham a rolagem da página.",
    "case.case1_visit": "Visitar o Site da Angatu Viagens",
    "case.case2_badge": "Estudo de Caso #02",
    "case.case2_title": "LabPrime Toxicológico: Agendamento clínico em 4 passos e liderança no SEO local",
    "case.case2_m1_desc": "Fluxo de Agendamento Guiado",
    "case.case2_m2_desc": "Tempo de Resposta do Servidor",
    "case.case2_m3_desc": "Otimizado para CNH C, D e E",
    "case.case2_challenge": "Motoristas profissionais que precisam renovar a CNH (categorias C, D e E) buscam clareza e agilidade. O portal anterior exigia múltiplos passos confusos e não aparecia nas buscas regionais do Google.",
    "case.case2_solution": "Desenvolvemos uma estrutura clínica direta com formulário interativo de agendamento em 4 passos. Adicionamos metadados de SEO local com coordenadas geográficas e Schema.org MedicalBusiness para indexação imediata nas buscas da cidade.",
    "case.case2_visit": "Visitar o Site do LabPrime"
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
    "nav.services": "Solutions",
    "nav.schedule_cta": "Schedule Strategic Meeting",
    "nav.lang_pt": "PT",
    "nav.lang_en": "EN",
    
    // Hero
    "hero.tech_badge": "High-Speed Software Engineering & UX Architecture",
    "hero.title_html": "We build websites that <br class=\"hidden sm:inline\" /><span class=\"text-gradient-brand\">accelerate sales and drive growth.</span>",
    "hero.subtitle": "Bespoke web development, extreme performance, and conversion strategies for businesses that refuse to look generic.",
    "hero.cta_proposal": "Request Commercial Proposal",
    "hero.cta_projects": "View Live Projects",
    "hero.cta_whatsapp": "Chat on WhatsApp",
    "hero.tab_speed": "⚡ Speed",
    "hero.tab_ux": "🎯 UX Conversion",
    "hero.tab_seo": "🔍 100/100 SEO",
    "hero.metric_title": "Performance Metric",
    "hero.guarantee_tag": "Technical Guarantee",
    "hero.trust_1": "100% Custom Engineering",
    "hero.trust_2": "Lead Acquisition Focus",
    "hero.trust_3": "Mobile Optimization",

    // Services Detailed (servicos.html)
    "serv.hero_badge": "Results-Driven Digital Ecosystem",
    "serv.hero_title_html": "Web engineering, networks & automation <br class=\"hidden sm:inline\" /><span class=\"text-gradient-brand\">to accelerate your revenue.</span>",
    "serv.hero_desc": "We don't sell just code or standalone artwork. We craft complete digital ecosystems to position your brand and convert visitors into real sales.",
    "serv1.tag": "Paid Ad Traffic & Conversion Focus",
    "serv1.title": "High-Conversion Landing Pages",
    "serv1.desc": "Designed specifically for ad campaign traffic (Google Ads, Meta Ads). Structured with persuasive copywriting, objection handling, social proof triggers, and strategic CTAs.",
    "serv1.feat1": "Under 0.8s load time on mobile devices",
    "serv1.feat2": "Direct WhatsApp lead capture & booking",
    "serv1.feat3": "Native Meta Pixel, Google Analytics & Tag Manager integration",
    "serv1.btn": "Request Landing Page Proposal",
    "serv1.side_title": "Conversion Engineering",
    "serv1.side_subtitle": "ROI-Driven Architecture",
    "serv1.side_speed": "LCP Speed",
    "serv1.side_speed_val": "< 0.8s (Instant)",
    "serv1.side_response": "Conversion Rate",
    "serv1.side_response_val": "+180% Conversion",
    "serv1.side_ownership": "Ownership",
    "serv1.side_ownership_val": "100% Yours (Clean Code)",
    "serv2.tag": "Brand & Enterprise Positioning",
    "serv2.title": "Elite Corporate Websites",
    "serv2.desc": "Bespoke corporate platforms for enterprises, clinics, law firms, and industries looking to project technical solidity, sophistication, and undeniable digital authority.",
    "serv2.feat1": "Multi-page architecture and corporate sections",
    "serv2.feat2": "Structured data (Schema.org) for Google search prominence",
    "serv2.feat3": "100% custom UI design aligned with brand guidelines",
    "serv2.btn": "Request Corporate Website Proposal",
    "serv2.side_title": "Corporate Authority",
    "serv2.side_subtitle": "Dominant market presence",
    "serv2.side_seo": "SEO Indexing",
    "serv2.side_seo_val": "Complete Semantics",

    // Posicionamento / About Us on Home
    "pos.badge": "Business Positioning",
    "pos.title_html": "Why serious companies choose <span class=\"text-gradient-brand\">Duo Studio?</span>",
    "pos.p1": "Most corporate websites suffer from the same fundamental flaw: slow, generic templates incapable of converting visitors into real revenue opportunities.",
    "pos.p2": "At Duo Studio, we engineer your website as a strategic sales engine. We combine consumer psychology, world-class UI design, and lightning-fast software code to ensure your brand captures client attention and outranks competitors.",
    "pos.cta": "Explore Our Solutions",
    "pos.card1_title": "Copywriting & Conversion Focus",
    "pos.card1_desc": "Strategic sales copy engineered to overcome objections and prompt immediate customer contact.",
    "pos.card2_title": "Custom Software Engineering",
    "pos.card2_desc": "Zero heavy page builders. We build modern custom codebases to deliver unmatched speed, security, and scalability.",
    "pos.card3_title": "SEO & Search Optimization",
    "pos.card3_desc": "Comprehensive structured schema data and metadata architecture so your company dominates Google search results.",

    // Manifesto Section
    "manifesto.badge": "Uncompromising Commitment to Quality",
    "manifesto.title_html": "The <span class=\"text-gradient-brand\">Duo Studio</span> Manifesto",
    "manifesto.subtitle": "We refuse to accept average standards in web development. We exist to engineer high-performance digital assets that drive genuine business value.",
    "manifesto.not_title": "What We DO NOT Do",
    "manifesto.not_1_html": "<strong>Zero Generic Templates</strong>: We never use generic WordPress or Wix themes loaded with heavy plugins that slow down mobile phones.",
    "manifesto.not_2_html": "<strong>Zero Code Rental</strong>: We never trap your business in monthly licensing fees for software you already paid for.",
    "manifesto.not_3_html": "<strong>Zero Red-Tape Deadlines</strong>: We don't take 60 days to deliver a project your business needs today.",
    "manifesto.yes_title": "Our Non-Negotiable Standard",
    "manifesto.yes_1_html": "<strong>Custom Engineering</strong>: Every single line of code is written focusing on sub-second speed (< 0.8s LCP).",
    "manifesto.yes_2_html": "<strong>100% Code Ownership</strong>: All source code, design assets, and credentials are fully handed over to you upon launch.",
    "manifesto.yes_3_html": "<strong>Direct Founder Access</strong>: Communicate directly with the lead software engineers building your platform.",

    // Services / Solutions on Home
    "serv.badge": "Results-Driven Solutions",
    "serv.title_html": "Digital web engineering designed to <span class=\"text-gradient-brand\">generate new business.</span>",
    "serv.subtitle": "We don't sell just code or layouts. We deliver structured platforms engineered to accelerate client acquisition.",
    "serv.card1_title": "Generate Qualified Sales Leads",
    "serv.card1_desc": "High-Conversion Landing Pages built specifically for paid ad campaigns (Google Ads, Meta Ads). Structured with persuasive sales copy.",
    "serv.card1_tag": "Focus on ROI & Direct-to-Sales Conversion",
    "serv.card2_title": "Position Your Brand With Authority",
    "serv.card2_desc": "Custom corporate websites that project technical solidity, premium market value, and immediate credibility for market leaders.",
    "serv.card2_tag": "Brand Architecture & Corporate Credibility",
    "serv.card3_title": "Sell Products Frictionlessly",
    "serv.card3_desc": "E-commerce stores with instant page response times, intuitive navigation, and friction-free checkouts to prevent cart abandonment.",
    "serv.card3_tag": "Buying UX & Mobile Performance",
    "serv.card4_title": "Modernize Slow & Outdated Websites",
    "serv.card4_desc": "Complete strategic redesign for legacy websites. We restructure UI and technical codebases to eliminate customer loss from slow load times.",
    "serv.card4_tag": "Code Reconstruction & Modern Aesthetics",
    "serv.card5_title": "Dominate Google Organic Search",
    "serv.card5_desc": "Technical SEO engineering with structured Schema.org data, advanced metadata, and clean semantic code for top search rankings.",
    "serv.card5_tag": "Organic Visibility & Domain Authority",
    "serv.card6_title": "Instagram Posts & Social Design",
    "serv.card6_desc": "Creation of strategic carousel posts, corporate banners, and bespoke visual identity to elevate your brand on social media.",
    "serv.card6_tag": "Bespoke Design & Brand Consistency",
    "serv.card7_title": "Sales & WhatsApp Automations",
    "serv.card7_desc": "Smart workflows for lead management, automated proposal dispatch on WhatsApp, and native website-to-CRM sync.",
    "serv.card7_tag": "Commercial Productivity & 24/7 Support",
    "serv.card8_title": "Ensure Stability & Security",
    "serv.card8_desc": "Ongoing post-launch maintenance with direct developer support. Your website always updated, secure, and running at maximum speed.",
    "serv.card8_tag": "Hassle-Free Maintenance",

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

    // Quiz Section
    "quiz.badge": "Investment Estimator",
    "quiz.title_html": "Discover the ideal architecture for <span class=\"text-gradient-brand\">your project in 1 minute.</span>",
    "quiz.subtitle": "Answer 3 quick questions and receive a custom estimate recommended by our engineering team.",
    "quiz.step_badge": "Free Assessment",
    "quiz.step1_title": "What is your company's primary goal today?",
    "quiz.step1_sub": "Select the option that best matches your current needs:",
    "quiz.opt1_title": "Generate More Leads & Sales",
    "quiz.opt1_desc": "High-conversion landing page built for paid ad campaigns",
    "quiz.opt2_title": "Establish Brand Authority",
    "quiz.opt2_desc": "Premium custom corporate website",
    "quiz.opt3_title": "Sell Products (E-Commerce)",
    "quiz.opt3_desc": "Fast e-commerce store with zero checkout friction",
    "quiz.opt4_title": "Modernize Slow / Legacy Website",
    "quiz.opt4_desc": "Complete redesign with ultra-fast custom code",
    "quiz.next_step1": "Proceed to Industry",
    "quiz.step2_title": "What industry does your company operate in?",
    "quiz.step2_sub": "This helps us tailor relevant case studies and metrics:",
    "quiz.seg1_title": "Professional Services & B2B",
    "quiz.seg1_desc": "Consulting, Engineering, Legal, B2B",
    "quiz.seg2_title": "Healthcare & Clinics",
    "quiz.seg2_desc": "Laboratories, Doctors, Dental",
    "quiz.seg3_title": "Travel & Hospitality",
    "quiz.seg3_desc": "Travel Agencies, Hotels, Tourism",
    "quiz.seg4_title": "Retail & E-Commerce",
    "quiz.seg4_desc": "Consumer Goods, Retail, Brand",
    "quiz.btn_back": "Back",
    "quiz.next_step2": "Proceed to Contact",
    "quiz.step3_title": "Where should we deliver your assessment?",
    "quiz.step3_sub": "Fill in below and our founders will message you on WhatsApp:",
    "quiz.label_name": "Your Name / Company *",
    "quiz.ph_name": "Ex: John Doe",
    "quiz.label_phone": "WhatsApp Number *",
    "quiz.label_email": "Corporate Email",
    "quiz.ph_email": "john@company.com",
    "quiz.label_goals": "Brief Company Goals (Optional)",
    "quiz.ph_goals": "Briefly describe your revenue goals...",
    "quiz.btn_submit": "Send Assessment to WhatsApp",
    "quiz.success_title": "Request Ready to Send!",
    "quiz.success_sub": "Choose which of our co-founders you'd like to chat with on WhatsApp:",
    "quiz.success_wa1": "Partner 1: (94) 99909-9386",
    "quiz.success_wa2": "Partner 2: (94) 99281-1658",
    "quiz.success_close": "Close window",

    // Guarantees (3D Deck)
    "guarantee.badge": "Duo Studio Commitment",
    "guarantee.title_html": "3 Fundamental guarantees that <span class=\"text-gradient-brand\">protect your investment.</span>",
    "guarantee.subtitle": "At Duo Studio, transparency and punctuality are non-negotiable. Learn about the engineering standards that guarantee delivery excellence.",
    "guarantee.card1_tag": "Guarantee 01",
    "guarantee.card1_title": "Extreme Speed Guarantee (LCP < 1.0s)",
    "guarantee.card1_desc": "If your site does not load under 1 second on Google Lighthouse metrics, we optimize it for free until it hits the target.",
    "guarantee.card2_tag": "Guarantee 02",
    "guarantee.card2_title": "100% Code Ownership (Zero Hidden Fees)",
    "guarantee.card2_desc": "All source code, design assets, and administrative access belong 100% to your company with zero mandatory recurring fees.",
    "guarantee.card3_tag": "Guarantee 03",
    "guarantee.card3_title": "Strict On-Time Delivery Guarantee",
    "guarantee.card3_desc": "Clear milestones contractual schedule. We deliver your project strictly on time with transparent review checkpoints.",
    "deck.hint": "Click to expand our guarantees deck",
    "deck.hint_expanded": "Click to collapse guarantees deck",

    // Testimonials
    "testimonials.badge": "Integrated Social Proof",
    "testimonials.title_html": "What partners say about <span class=\"text-gradient-brand\">Duo Studio.</span>",
    "testimonials.subtitle": "Real results in sales, client retention, and technical agility.",
    "testimonials.card1_quote": "\"Redesigning our digital presence with Duo Studio transformed Angatu Viagens' booking volume. The site is lightweight, gorgeous on mobile, and clients click WhatsApp already convinced to book.\"",
    "testimonials.card1_role": "Commercial Director",
    "testimonials.card1_company": "Angatu Viagens & Luxury Travel",
    "testimonials.card2_quote": "\"We needed a clinical portal that inspired instant confidence for commercial drivers. The 4-step workflow made booking seamless and local SEO put us at the top of Google searches.\"",
    "testimonials.card2_role": "Clinical Management",
    "testimonials.card2_company": "LabPrime Toxicological",

    // Subpage Servicos Details
    "serv3.tag": "Content Design & Social Presence",
    "serv3.title": "Instagram Posts & Social Design",
    "serv3.desc": "We design strategic carousel posts, corporate banners, and striking visual identities for your company's Instagram. We turn your social channels into a luxurious and credible extension of your brand.",
    "serv3.feat1": "Custom design without AI artifacts or generic stock artwork",
    "serv3.feat2": "Educational carousels focused on retention and saves",
    "serv3.feat3": "Visual aesthetic aligned with your website's positioning",
    "serv3.btn": "Request Instagram Package",
    "serv3.side_title": "Social Visual Identity",
    "serv3.side_subtitle": "Premium Aesthetics & Retention",
    "serv3.side_formats": "Formats",
    "serv3.side_formats_val": "Feed, Carousel & Stories",
    "serv3.side_consistency": "Consistency",
    "serv3.side_consistency_val": "Color Guide & Typography",
    "serv3.side_engagement": "Engagement",
    "serv3.side_engagement_val": "Action-Oriented Copywriting",

    "serv4.tag": "Commercial Productivity & Applied AI",
    "serv4.title": "Sales & WhatsApp Automations",
    "serv4.desc": "We build automated sales and customer service workflows. Connect your website directly to your sales WhatsApp, sending instant welcome messages, qualifying leads 24/7, and logging everything into your CRM.",
    "serv4.feat1": "Instant lead response with zero human operator bottleneck",
    "serv4.feat2": "Pre-qualification via interactive quiz or guided bot",
    "serv4.feat3": "Direct integration with CRMs (HubSpot, RD Station, Notion)",
    "serv4.btn": "Request Sales Automation",
    "serv4.side_title": "Customer Workflows",
    "serv4.side_subtitle": "Flawless 24/7 Operation",
    "serv4.side_wa": "WhatsApp Response",
    "serv4.side_wa_val": "< 5 Seconds",
    "serv4.side_filter": "Screening",
    "serv4.side_filter_val": "Real Buyer Qualification",
    "serv4.side_sync": "Syncing",
    "serv4.side_sync_val": "Real-Time CRM Integration",

    "serv5.tag": "Refactoring & Performance",
    "serv5.title": "Strategic Redesign & Technical SEO",
    "serv5.desc": "We rebuild outdated, slow legacy websites. We rewrite visual architecture and source code to eliminate visitor drop-off and boost Google search ranking.",
    "serv5.feat1": "Migration from legacy code to HTML5/Clean Code",
    "serv5.feat2": "Advanced WebP image optimization and compression",
    "serv5.feat3": "Full metadata, JSON-LD schema, and sitemap audit",
    "serv5.btn": "Request Redesign Audit",
    "serv5.side_title": "Revamped Architecture",
    "serv5.side_subtitle": "Zero Code Bloat",
    "serv5.side_weight": "Weight Reduction",
    "serv5.side_weight_val": "-75% Load Time",
    "serv5.side_mobile": "Mobile Response",
    "serv5.side_mobile_val": "100% Fluid",
    "serv5.side_seo": "Technical SEO",
    "serv5.side_seo_val": "Total Compliance",

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
    "footer.cta_title": "Ready to take your business to the next digital level?",
    "footer.cta_subtitle": "Talk to our software architects and receive a custom solution proposal.",
    "footer.desc": "Specialized digital agency in high-performance web development, strategic UI/UX design, and conversion optimization for ambitious brands.",
    "footer.quick_links": "Quick Links",
    "footer.solutions_title": "Solutions",
    "footer.contact_title": "Direct Contact",
    "footer.rights": "© 2026 Duo Studio. All rights reserved. Custom Web Software Engineering.",
    "footer.location": "Parauapebas - PA, Brazil",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",

    // Subpages
    "about.hero_badge": "Who We Are & Our Philosophy",
    "about.hero_title_html": "We refuse to create <br class=\"hidden sm:inline\" /><span class=\"text-gradient-brand\">generic and slow websites.</span>",
    "about.hero_desc": "Duo Studio was founded with a clear mission: treating corporate websites as a business's most profitable digital asset.",
    "about.pillar3_title": "Transparency & Contracts",
    "about.pillar3_desc": "Milestones defined in formal contracts. 100% of source code handed over to you with zero recurring ownership fees.",

    "serv.cta_title_html": "What is the ideal solution for your company's <span class=\"text-gradient-brand\">current goals?</span>",
    "serv.cta_desc": "Talk directly with Duo Studio co-founders and receive a free strategic assessment.",
    "serv2.side_score": "Google Score",
    "serv2.side_multi": "Cross-Device",
    "serv2.side_multi_val": "Strict Mobile-First",

    "port.hero_badge": "Case Studies & Custom Works",
    "port.hero_title_html": "Real projects built to <br class=\"hidden sm:inline\" /><span class=\"text-gradient-brand\">dominate the digital market.</span>",
    "port.hero_desc": "See how we transformed our partners' digital presence into ultra-fast platforms built for continuous client acquisition.",
    "port.case1_tag": "Luxury Travel",
    "port.case1_desc": "Immersive luxury travel platform designed to showcase curated vacation packages and drive direct booking conversations on WhatsApp.",
    "port.case1_metric": "+180% WhatsApp Bookings",
    "port.case1_sub": "Premium Travel & Direct Booking",
    "port.case2_tag": "Healthcare & Clinical Diagnostics",
    "port.case2_desc": "Clinical healthcare portal tailored for commercial driver drug testing with a 4-step booking workflow and local SEO architecture.",
    "port.case2_metric": "LCP < 0.8s Instant Load Time",
    "port.case2_sub": "Booking Portal & Local SEO",
    "port.real_case": "Real Case",
    "port.read_case": "Read Case Study",
    "port.live_site": "Visit Live Site",
    "port.cta_title": "Is your company our next success story?",
    "port.cta_desc": "We engineer the ideal project for your revenue goals.",
    "port.cta_btn": "Start New Project",

    "contact.hero_badge": "Direct Founder Access",
    "contact.title_html": "Get in Touch & <span class=\"text-gradient-brand\">Book a Consultation</span>",
    "contact.desc": "We are ready to understand your business goals and architect the ideal web platform to scale your sales.",
    "contact.wa1_tag": "Co-Founder WhatsApp 1",
    "contact.wa1_desc": "Fast service for commercial proposals and quotes.",
    "contact.wa2_tag": "Co-Founder WhatsApp 2",
    "contact.wa2_desc": "Direct line for partnerships and engineering alignment.",
    "contact.form_title": "Or Send Your Message Directly",
    "contact.form_subtitle": "We respond within 2 business hours max.",
    "contact.form_name_label": "Your Name / Company *",
    "contact.form_name_ph": "Ex: John Doe",
    "contact.form_msg_label": "Message or Project Brief *",
    "contact.form_msg_ph": "Briefly describe your project...",
    "contact.form_btn": "Start WhatsApp Conversation",

    "blog.hero_badge": "Knowledge & Digital Engineering",
    "blog.hero_title_html": "Strategy, SEO & conversion <br class=\"hidden sm:inline\" /><span class=\"text-gradient-brand\">to boost your business.</span>",
    "blog.hero_desc": "Actionable insights written by Duo Studio web engineering experts.",
    "blog.read_article": "Read Full Article",
    "blog.back_blog": "Back to Blog",
    "blog.request_analysis": "Request Analysis",
    "blog.art1_tag": "Pricing & Investment",
    "blog.art1_title": "How much does it cost to build a professional website in 2026?",
    "blog.art1_desc": "Understand the price differences between generic templates and high-speed custom codebases.",
    "blog.art2_tag": "Sales Strategy",
    "blog.art2_title": "Landing Page vs. Corporate Website: Which one does your business need?",
    "blog.art2_desc": "Discover the ideal solution for your company's stage and paid advertising campaigns.",
    "blog.art3_tag": "Optimization & Sales",
    "blog.art3_title": "5 mistakes causing your website to lose clients to competitors",
    "blog.art3_desc": "Mobile slowness, lack of social proof, and hidden CTAs: how to diagnose and fix them.",
    "blog.art4_tag": "Local SEO Guide",
    "blog.art4_title": "The Ultimate Guide to Local SEO: Top of Google Without Ads",
    "blog.art4_desc": "Learn how to dominate local search results with Google Business Profile, Schema.org, and clean code.",

    "footer.tagline": "High-performance digital engineering.",
    "mobile.online": "Online Support",
    "mobile.cta_diag": "Book Assessment",

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

    "modal.case_heading": "Case Study",
    "modal.label_client": "Client",
    "modal.label_year": "Year",
    "modal.label_challenge": "Challenge & Problem",
    "modal.label_objectives": "Business Objectives",
    "modal.label_overview": "Solution Overview:",
    "modal.label_results": "Key Results & Technical Differentiators:",
    "modal.label_techs": "Technologies Used:",
    "modal.btn_live": "Visit Live Project",

    "modal.project_title": "Project Case Study",
    "modal.project_close": "Close",
    "modal.problem_label": "The Challenge",
    "modal.obj_label": "Strategic Objective",
    "modal.sol_label": "Our Solution",
    "modal.highlights_label": "Technical Highlights & Results",
    "modal.techs_label": "Tech Stack Used",
    "modal.visit_site": "Visit Live Website",

    // Dedicated Case Study Pages
    "case.back_port": "Back to Portfolio",
    "case.case1_badge": "Case Study #01",
    "case.case1_title": "Angatu Viagens: How UX-focused redesign increased bookings by 180%",
    "case.case1_m1_desc": "WhatsApp Bookings",
    "case.m_speed": "Mobile Load Time",
    "case.case1_m3_desc": "Luxury Photo Fidelity",
    "case.heading_challenge": "The Business Challenge",
    "case.case1_challenge": "Angatu Viagens sells premium vacation packages. The previous site had a generic layout taking over 4 seconds to load on mobile, causing prospective travelers to leave before viewing destination galleries.",
    "case.heading_solution": "The Solution Developed by Duo Studio",
    "case.case1_solution": "We rebuilt the platform focusing on immersive mobile-first experiences. We optimized destination imagery while preserving crisp retina resolution and added floating booking action triggers.",
    "case.case1_visit": "Visit Angatu Viagens Website",
    "case.case2_badge": "Case Study #02",
    "case.case2_title": "LabPrime Toxicological: 4-step clinical booking and dominant local SEO",
    "case.case2_m1_desc": "Guided 4-Step Booking",
    "case.case2_m2_desc": "Server Response Time",
    "case.case2_m3_desc": "Optimized for Commercial Drivers",
    "case.case2_challenge": "Commercial drivers renewing licenses (categories C, D & E) need clarity and fast booking. The previous site was confusing and unranked on local search.",
    "case.case2_solution": "We developed a clean clinical architecture with an intuitive 4-step booking form, paired with structured Schema.org MedicalBusiness data and geo-tags for local search dominance.",
    "case.case2_visit": "Visit LabPrime Website"
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

if (document.readyState === 'interactive' || document.readyState === 'complete') {
  window.duoI18n.init();
} else {
  document.addEventListener('DOMContentLoaded', () => {
    window.duoI18n.init();
  });
}

window.addEventListener('load', () => {
  if (window.duoI18n) {
    window.duoI18n.applyLanguage(window.duoI18n.currentLang);
  }
});
