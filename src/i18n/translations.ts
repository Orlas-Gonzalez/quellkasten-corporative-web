export const defaultLanguage = 'es';

export const translations = {
	es: {
		documentTitle: 'Quellkasten | Soluciones de Software para Empresas',
		documentDescription: 'Sitio corporativo de Quellkasten',
		navLabel: 'Navegación principal',
		brandHomeLabel: 'Quellkasten, página de inicio',
		brandTagline: 'Desarrollo de software',
		navHome: 'Inicio',
		navServices: 'Servicios',
		navSolutions: 'Soluciones',
		navProjects: 'Proyectos',
		navAbout: 'Nosotros',
		navContact: 'Contacto',
		themeToDark: 'Cambiar a modo oscuro',
		themeToLight: 'Cambiar a modo claro',
		languageToEnglish: 'Cambiar idioma a inglés',
		languageToSpanish: 'Cambiar idioma a español',
		menuOpen: 'Abrir menú de navegación',
		menuClose: 'Cerrar menú de navegación',
		heroTitle: 'Ingeniería de software diseñada',
		heroTitleAccent: 'para impulsar tu crecimiento.',
		heroDescription:
			'Diseñamos soluciones digitales robustas y escalables, alineadas con los objetivos reales de tu negocio.',
		heroPrimaryCta: 'Cuéntanos tu idea de proyecto',
		heroSecondaryCta: 'Conoce nuestros servicios',
		heroSolutionsLabel: 'Soluciones que podemos construir contigo',
		heroSolutionDashboards: 'Dashboards y analítica',
		heroSolutionAutomation: 'Automatización de reportes y KPIs',
		heroSolutionPlatforms: 'Plataformas web a la medida',
		heroSolutionLanding: 'Landing pages',
		heroSolutionInternal: 'Sistemas internos y portales',
		heroSolutionIntegrations: 'Integraciones y APIs',
		servicesLabel: 'Servicios',
		servicesTitle: 'Capacidades para llevar una idea desde la estrategia hasta producción.',
		servicesDescription:
			'Combinamos estrategia, diseño e ingeniería para convertir necesidades de negocio en productos digitales sólidos, mantenibles y preparados para evolucionar.',
		serviceCustomTitle: 'Desarrollo de software a la medida',
		serviceCustomDescription:
			'Creamos sistemas alineados con los procesos, objetivos y necesidades específicas de tu organización.',
		serviceWebTitle: 'Aplicaciones y plataformas web',
		serviceWebDescription:
			'Construimos experiencias web rápidas, accesibles y preparadas para crecer con tu operación.',
		serviceAutomationTitle: 'Automatización de procesos',
		serviceAutomationDescription:
			'Reducimos trabajo manual mediante flujos, reportes y herramientas conectadas con tu operación.',
		serviceIntegrationsTitle: 'Integraciones y APIs',
		serviceIntegrationsDescription:
			'Conectamos sistemas, servicios y fuentes de datos para que la información fluya de forma confiable.',
		serviceDataTitle: 'Datos, dashboards y analítica',
		serviceDataDescription:
			'Transformamos información operativa en visualizaciones claras que facilitan el seguimiento y la toma de decisiones.',
		serviceSupportTitle: 'Evolución y soporte de software',
		serviceSupportDescription:
			'Mejoramos productos existentes mediante mantenimiento, optimización, nuevas funcionalidades y acompañamiento técnico.',
		servicesCtaLead: '¿Tu necesidad no encaja exactamente en una categoría?',
		servicesCta: 'Cuéntanos tu reto',
	},
	en: {
		documentTitle: 'Quellkasten | Enterprise Software Solutions',
		documentDescription: 'Quellkasten corporate website',
		navLabel: 'Main navigation',
		brandHomeLabel: 'Quellkasten, home page',
		brandTagline: 'Software development',
		navHome: 'Home',
		navServices: 'Services',
		navSolutions: 'Solutions',
		navProjects: 'Projects',
		navAbout: 'About us',
		navContact: 'Contact',
		themeToDark: 'Switch to dark mode',
		themeToLight: 'Switch to light mode',
		languageToEnglish: 'Switch language to English',
		languageToSpanish: 'Switch language to Spanish',
		menuOpen: 'Open navigation menu',
		menuClose: 'Close navigation menu',
		heroTitle: 'Software engineering designed',
		heroTitleAccent: 'to drive your growth.',
		heroDescription:
			'We design robust, scalable digital solutions aligned with your business goals.',
		heroPrimaryCta: 'Tell us about your project idea',
		heroSecondaryCta: 'Explore our services',
		heroSolutionsLabel: 'Solutions we can build with you',
		heroSolutionDashboards: 'Dashboards & analytics',
		heroSolutionAutomation: 'Reporting & KPI automation',
		heroSolutionPlatforms: 'Custom web platforms',
		heroSolutionLanding: 'Landing pages',
		heroSolutionInternal: 'Internal systems & portals',
		heroSolutionIntegrations: 'API integrations',
		servicesLabel: 'Services',
		servicesTitle: 'Capabilities to take an idea from strategy to production.',
		servicesDescription:
			'We combine strategy, design, and engineering to turn business needs into solid, maintainable digital products built to evolve.',
		serviceCustomTitle: 'Custom software development',
		serviceCustomDescription:
			'We create systems aligned with your organization’s specific processes, goals, and needs.',
		serviceWebTitle: 'Web applications and platforms',
		serviceWebDescription:
			'We build fast, accessible web experiences designed to grow alongside your operations.',
		serviceAutomationTitle: 'Process automation',
		serviceAutomationDescription:
			'We reduce manual work through workflows, reports, and tools connected to your operations.',
		serviceIntegrationsTitle: 'Integrations and APIs',
		serviceIntegrationsDescription:
			'We connect systems, services, and data sources so information can flow reliably.',
		serviceDataTitle: 'Data, dashboards, and analytics',
		serviceDataDescription:
			'We turn operational information into clear visualizations that support monitoring and decision-making.',
		serviceSupportTitle: 'Software evolution and support',
		serviceSupportDescription:
			'We improve existing products through maintenance, optimization, new features, and technical guidance.',
		servicesCtaLead: 'Does your need not fit neatly into a category?',
		servicesCta: 'Tell us about your challenge',
	},
} as const;

export type Language = keyof typeof translations;
