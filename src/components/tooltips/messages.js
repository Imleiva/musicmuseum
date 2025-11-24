/*
 * Función helper para obtener mensajes de tooltips traducidos
 * • Retorna una función que recibe el objeto de traducción
 * • Mantiene la misma estructura que antes para compatibilidad
 * • Permite internacionalización automática
 */

export const getTooltipMessages = (t) => {
  // Verificar si existen las traducciones de tooltips
  if (!t || !t.tooltips) {
    console.warn(
      "Tooltips translations not found, using TooltipMessages fallback"
    );
    return TooltipMessages;
  }

  return {
    // Para botones de navegación
    navigation: {
      metal: t.tooltips.navigation.metal,
      rock: t.tooltips.navigation.rock,
      punk: t.tooltips.navigation.punk,
    },

    // Para controles de interfaz
    controls: {
      settings: t.tooltips.controls.settings,
      customize: t.tooltips.controls.customize,
      curiosities: t.tooltips.controls.curiosities,
      curiositiesEnabled: t.tooltips.controls.curiositiesEnabled,
      curiositiesDisabled: t.tooltips.controls.curiositiesDisabled,
      search: t.tooltips.controls.search,
      filters: t.tooltips.controls.filters,
    },

    // Para elementos interactivos
    interactions: {
      poster: t.tooltips.interactions.poster,
      avatar: t.tooltips.interactions.avatar,
      playAudio: t.tooltips.interactions.playAudio,
      carousel: t.tooltips.interactions.carousel,
    },

    // Para acciones de usuario
    actions: {
      save: t.tooltips.actions.save,
      cancel: t.tooltips.actions.cancel,
      reset: t.tooltips.actions.reset,
      apply: t.tooltips.actions.apply,
    },

    // Para avatares de bandas
    avatars: {
      selection: t.tooltips.avatars.selection,
      newBand: t.tooltips.avatars.newBand,
      leiva: t.tooltips.avatars.leiva,
      interactive: t.tooltips.avatars.interactive,
    },

    // Para tips automáticos del sistema
    autoTips: {
      avatarChange: t.tooltips.autoTips.avatarChange,
      exploration: t.tooltips.autoTips.exploration,
      interaction: t.tooltips.autoTips.interaction,
      navigation: t.tooltips.autoTips.navigation,
      settings: t.tooltips.autoTips.settings,
      curiosities: t.tooltips.autoTips.curiosities,
      hidden: t.tooltips.autoTips.hidden,
    },

    // Para elementos específicos del museo
    museum: {
      projector: t.tooltips.museum.projector,
      floor: t.tooltips.museum.floor,
      poster: t.tooltips.museum.poster,
      guide: t.tooltips.museum.guide,
    },
  };
};

// Mantener export de TooltipMessages por compatibilidad (deprecated)
// Usar getTooltipMessages(t) en su lugar
export const TooltipMessages = {
  navigation: {
    metal: "Explora la colección de Heavy Metal, Thrash y Death Metal",
    rock: "Descubre clásicos del Rock, Hard Rock y Progressive",
    punk: "Sumérgete en Punk Rock, Hardcore y Alternative",
  },
  controls: {
    settings:
      "Abre la configuración del museo. Haz clic para personalizar tu experiencia",
    customize:
      "Personaliza tu avatar de banda. Haz clic para abrir el selector",
    curiosities:
      "Descubre datos curiosos sobre las bandas. Haz clic para activar/desactivar",
    curiositiesEnabled:
      "Descubre datos curiosos sobre las bandas. Haz clic para desactivar",
    curiositiesDisabled:
      "Las curiosidades están desactivadas. Haz clic para activarlas",
    search: "Busca bandas por nombre o género",
    filters: "Filtra por género o década",
  },
  interactions: {
    poster: "Haz clic para ver información detallada del concierto",
    avatar: "Selecciona este avatar para tu perfil",
    playAudio: "Reproduce audio relacionado con este concierto",
    carousel: "Navega por las imágenes del concierto",
  },
  actions: {
    save: "Guardar cambios realizados",
    cancel: "Cancelar y descartar cambios",
    reset: "Restaurar valores predeterminados",
    apply: "Aplicar configuración seleccionada",
  },
  avatars: {
    selection:
      "Cambia tu avatar para descubrir curiosidades únicas de cada banda",
    newBand:
      "¡Nuevo avatar seleccionado! Ahora puedes explorar datos exclusivos de esta banda",
    leiva: "Maestro Leiva te guía por el museo con su sabiduría musical",
    interactive: "Cada avatar tiene curiosidades diferentes. ¡Pruébalos todos!",
  },
  autoTips: {
    avatarChange:
      "💡 Tip: Cambia tu avatar para descubrir datos únicos de cada banda",
    exploration:
      "🎸 ¿Sabías que cada sala tiene proyectores con videos temáticos?",
    interaction:
      "✨ Haz clic en los pósters para ver información detallada de cada concierto",
    navigation:
      "🎵 Usa las flechas del teclado o el mouse para navegar por las salas",
    settings: "⚙️ Personaliza tu experiencia en el menú de configuración",
    curiosities:
      "🤘 El botón de curiosidades revela datos fascinantes sobre las bandas",
    hidden: "🔍 Explora cada rincón del museo, hay sorpresas ocultas",
  },
  museum: {
    projector: "Proyector mostrando videos temáticos de la sala actual",
    floor:
      "Suelo de madera vintage que evoca los clásicos estudios de grabación",
    poster: "Póster de concierto histórico - Haz clic para más información",
    guide: "Tu guía personal del museo, siempre listo para ayudar",
  },
};
