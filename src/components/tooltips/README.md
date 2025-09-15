# 🎸 Rock Tooltips System

Sistema de tooltips

## Estructura

```text
tooltips/
├── index.js              # Punto de entrada principal
├── TooltipContext.jsx    # Context React para estado global
├── RockTooltip.jsx       # Componente visual del tooltip
├── TooltipContainer.jsx  # Contenedor integrador
├── RockTooltip.css       # Estilos específicos
├── messages.js           # Mensajes predefinidos
├── examples.jsx          # Ejemplos de uso
└── README.md            # Documentación
```

## Uso Básico

### 1. Usar el Context

```javascript
import { useTooltipContext, TooltipMessages } from "../components/tooltips";

const MyComponent = () => {
  const { showTooltip, hideTooltip } = useTooltipContext();

  return (
    <button
      onClick={() => showTooltip("¡Botón presionado!", "✅ Éxito")}
      onMouseEnter={() =>
        showTooltip(TooltipMessages.controls.settings, "⚙️ Config", 300)
      }
      onMouseLeave={hideTooltip}
    >
      Configuración
    </button>
  );
};
```

### 2. Integrar en App.jsx

```javascript
import { TooltipProvider, TooltipContainer } from "./components/tooltips";

function App() {
  return (
    <TooltipProvider>
      <div className="app">
        {/* Tu contenido */}
        <TooltipContainer />
      </div>
    </TooltipProvider>
  );
}
```

## 🎯 Características

- **Posición fija**: Esquina superior derecha
- **Animaciones suaves**: Entrada y salida elegante
- **Tipos múltiples**: default, info, warning
- **Auto-hide**: Configurable por duración
- **Responsive**: Adaptable a móviles
- **Respeta configuración**: Se activa/desactiva según ajustes del usuario

## API del Hook

### Métodos disponibles

- `showTooltip(options)` - Mostrar tooltip personalizado
- `showQuickTip(message, title?)` - Tooltip rápido (3s)
- `showInfo(message, title?)` - Tooltip informativo (5s)
- `showWarning(message, title?)` - Tooltip de advertencia (6s)
- `showPersistent(message, title?)` - Tooltip persistente
- `hideTooltip()` - Ocultar tooltip actual

### Estados disponibles

- `tooltipState` - Estado actual del tooltip
- `tooltipsEnabled` - Si los tooltips están habilitados

## Variantes de Estilo

### Tipos

- `default` - Estilo rock estándar (rojo)
- `info` - Azul para información
- `warning` - Amarillo para advertencias

### Modificadores

- `compact` - Versión más pequeña
- `persistent` - No se oculta automáticamente

## Mensajes Predefinidos

```javascript
TooltipMessages.navigation.metalRoom;
TooltipMessages.controls.settings;
TooltipMessages.interactions.poster;
```

## Configuración

Los tooltips respetan la configuración global:

- Se habilitan/deshabilitan según `showTooltips` en localStorage
- Escuchan eventos `museumSettingsChanged`
- Compatible con todas las configuraciones del `MuseumGuide`

## Ejemplos Avanzados

Ver `examples.jsx` para implementaciones completas de botones, navegación y elementos interactivos.
