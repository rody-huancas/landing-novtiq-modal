export type Locale = "en" | "es";

export const translations = {
  en: {
    "nav.docs": "Documentation",
    "nav.github": "GitHub",
    "nav.demo": "Demo",
    "hero.title": "Beautiful React Modals Made Simple",
    "hero.subtitle":
      "A lightweight, customizable modal library for React and Tailwind CSS",
    "hero.cta": "Get Started",
    "hero.demo": "Try Demo",
    "features.title": "Features",
    "features.animations": "Smooth Animations",
    "features.keyboard": "Keyboard Navigation",
    "features.scroll": "Smart Scroll Lock",
    "features.position": "Flexible Positioning",
    "features.sizes": "Multiple Sizes",
    "features.customization": "Deep Customization",
    "examples.title": "Examples",
    "examples.basic": "Basic",
    "examples.advanced": "Advanced",
    "docs.title": "Documentation",
    "docs.installation": "Installation",
    "docs.usage": "Usage",
    "docs.api": "API",
    "footer.description":
      "A lightweight and customizable React modal library for modern web applications.",
    "footer.links": "Links",
    "footer.connect": "Connect",
    "footer.github": "GitHub",
    "footer.twitter": "Twitter",
    "footer.mail": "Mail",
    "footer.copyright": "© {year} Rody Huancas. All rights reserved.",
    "propsTable.title": "Props Documentation",
    "propsTable.prop": "Prop",
    "propsTable.type": "Type",
    "propsTable.default": "Default",
    "propsTable.description": "Description",
    "propsTable.isOpen.description": "Controls the visibility of the modal",
    "propsTable.onClose.description":
      "Callback function called when the modal should close",
    "propsTable.title.description": "Title displayed in the modal header",
    "propsTable.size.description": "Predefined modal sizes",
    "propsTable.position.description": "Modal position on the screen",
    "propsTable.hasOverlay.description": "Show/hide the background overlay",
    "propsTable.showCloseButton.description":
      "Show/hide the close button in the header",
    "propsTable.closeOnOverlayClick.description":
      "Close the modal when clicking the overlay",
    "propsTable.closeOnEsc.description":
      "Close the modal when pressing ESC key",
  },
  es: {
    "nav.docs": "Documentación",
    "nav.github": "GitHub",
    "nav.demo": "Demo",
    "hero.title": "Modales React Hermosos y Simples",
    "hero.subtitle":
      "Una biblioteca de modales ligera y personalizable para React y Tailwind CSS",
    "hero.cta": "Comenzar",
    "hero.demo": "Probar Demo",
    "features.title": "Características",
    "features.animations": "Animaciones Suaves",
    "features.keyboard": "Navegación por Teclado",
    "features.scroll": "Bloqueo de Desplazamiento",
    "features.position": "Posicionamiento Flexible",
    "features.sizes": "Múltiples Tamaños",
    "features.customization": "Personalización Profunda",
    "examples.title": "Ejemplos",
    "examples.basic": "Básico",
    "examples.advanced": "Avanzado",
    "docs.title": "Documentación",
    "docs.installation": "Instalación",
    "docs.usage": "Uso",
    "docs.api": "API",
    "footer.description":
      "Una biblioteca de modales React ligera y personalizable para aplicaciones web modernas.",
    "footer.links": "Enlaces",
    "footer.connect": "Conectar",
    "footer.github": "GitHub",
    "footer.twitter": "Twitter",
    "footer.mail": "Correo",
    "footer.copyright": "© {year} Rody Huancas. Todos los derechos reservados.",
    "propsTable.title": "Documentación de Props",
    "propsTable.prop": "Propiedad",
    "propsTable.type": "Tipo",
    "propsTable.default": "Valor por Defecto",
    "propsTable.description": "Descripción",
    "propsTable.isOpen.description": "Controla la visibilidad del modal",
    "propsTable.onClose.description":
      "Función de callback llamada cuando el modal debe cerrarse",
    "propsTable.title.description":
      "Título mostrado en el encabezado del modal",
    "propsTable.size.description": "Tamaños predefinidos para el modal",
    "propsTable.position.description": "Posición del modal en la pantalla",
    "propsTable.hasOverlay.description": "Mostrar/ocultar el fondo del overlay",
    "propsTable.showCloseButton.description":
      "Mostrar/ocultar el botón de cerrar en el encabezado",
    "propsTable.closeOnOverlayClick.description":
      "Cerrar el modal cuando se haga clic en el overlay",
    "propsTable.closeOnEsc.description":
      "Cerrar el modal al presionar la tecla ESC",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
