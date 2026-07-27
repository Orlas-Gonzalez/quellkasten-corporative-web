export const defaultLanguage = 'es';

export const translations = {
	es: {
		documentTitle: 'Quellkasten',
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
	},
	en: {
		documentTitle: 'Quellkasten',
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
	},
} as const;

export type Language = keyof typeof translations;
