# 🎸 Rock Museum - Base de Datos JSON

## Descripción General

La base de datos JSON del Rock Museum es un sistema completo de almacenamiento de información sobre el rock y heavy metal, diseñado para eliminar la necesidad de bases de datos tradicionales mientras mantiene toda la funcionalidad del museo interactivo.

## Estructura de Archivos

src/data/
├── index.js # Índice principal y funciones globales
├── posters.js # Información detallada de posters de conciertos
├── greetings.js # Saludos y diálogos de avatares por banda
├── facts.js # Curiosidades de cada banda
├── venues.js # Información de venues históricos
├── setlists.js # Setlists de conciertos memorables
└── albums.js # Álbumes icónicos

## Tipos de Contenido

Posters (`posters.js`)
Información detallada sobre posters de conciertos históricos:

- **Datos básicos**: Banda, título, fecha, venue
- **Detalles del evento**: Precio, horarios, bandas teloneras
- **Contexto histórico**: Significado cultural, anécdotas

Greetings (`greetings.js`)
Diálogos y saludos específicos por banda para interacciones de avatares:

- **Variedad**: Múltiples saludos por banda
- **Personalidad**: Reflejan el estilo de cada banda
- **Interactividad**: Para uso en componentes de UI
- **Localización**: Soporte multiidioma

### Facts (`facts.js`)

Base de conocimiento con curiosidades:

- **Categorización**: Por banda y tema
- **Verificación**: Hechos documentados y verificables
- **Educativo**: Información valiosa para fans

### Venues (`venues.js`)

Información completa sobre venues legendarios:

- **Historia**: Fundación, arquitectura, renovaciones
- **Capacidad**: Datos técnicos y configuraciones
- **Conciertos memorables**: Lista de eventos históricos
- **Estado actual**: Información actual

### Setlists (`setlists.js`)

Setlists completos de conciertos:

- **Contexto**: Información sobre cada conciertoo
- **Notas especiales**: Momentos únicos del concierto

### Albums (`albums.js`)

Álbumes icónicos con información;

## Funciones Principales

### Búsqueda Globaljavascript

import { globalSearch } from './data/index.js';

const results = globalSearch("Metallica");
// Busca en todos los módulos de datos

### Perfiles de Bandajavascript

import { getBandProfile } from './data/index.js';

const profile = getBandProfile("metallica");
// Obtiene todo el contenido relacionado con una banda

### Estadísticas del Museojavascript

import { museumStats } from './data/index.js';

console.log(museumStats.totalBands); // Número total de bandas
console.log(museumStats.totalPosters); // Total de posters

### Contenido Aleatoriojavascript

import { getRandomContent } from './data/index.js';

const random = getRandomContent();
// Obtiene contenido aleatorio de cada categoría

## Casos de Uso

### 1. Sistema de Información de Postersjavascript

import { posters, getPostersByBand } from './data/posters.js';

// Obtener todos los posters de Queen
const queenPosters = getPostersByBand("queen");

// Mostrar información detallada
queenPosters.forEach(poster => {
console.log(`${poster.title} - ${poster.venue} (${poster.year})`);
console.log(`Rareza: ${poster.rarity}`);
console.log(`Precio original: ${poster.details.price}`);
});

### 2. Diálogos Interactivosjavascript

import { getRandomGreeting } from './data/greetings.js';

// Obtener saludo aleatorio de Iron Maiden
const greeting = getRandomGreeting("ironmaiden");
console.log(greeting); // "¡Up the Irons! ¿Listo para un viaje musical por la historia del metal?"

### 3. Sistema Educativojavascript

import { getFactsByBand, getRandomFact } from './data/facts.js';

// Obtener todas las curiosidades de Pink Floyd
const facts = getFactsByBand("pinkfloyd");

// Obtener curiosidad aleatoria
const randomFact = getRandomFact("pinkfloyd");

### 4. Exploración de Venuesjavascript

import { venues, getVenuesByCountry } from './data/venues.js';

// Obtener todos los venues de Reino Unido
const ukVenues = getVenuesByCountry("Reino Unido");

// Mostrar información histórica
ukVenues.forEach(venue => {
console.log(`${venue.name} - Capacidad: ${venue.capacity}`);
console.log(`Fundado: ${venue.opened}`);
});

## Estadísticas Actuales

- **Total de Bandas**: 19 bandas icónicas
- **Posters**: 20+ posters detallados
- **Venues**: 5 venues legendarios
- **Álbumes**: 3 álbumes con análisis completo
- **Setlists**: 3 conciertos históricos completos
- **Greetings**: 75+ saludos únicos
- **Facts**: 100+ curiosidades verificadas

## Mantenimiento y Expansión

### Agregar Nueva Banda

1. Actualizar `availableBands` en `index.js`
2. Agregar greetings en `greetings.js`
3. Incluir facts en `facts.js`
4. Opcional: Agregar posters, albums

### Agregar Nuevo Poster

1. Crear entrada en `posters.js`
2. Incluir toda la información requerida

## Integración con Componentes React

### PosterModal Componentjavascript

import { posters } from '../data/posters.js';

const PosterModal = ({ posterId }) => {
const poster = posters[posterId];
return (
React.createElement('div', { className: 'poster-modal' },
React.createElement('h2', null, poster.title),
React.createElement('p', null, poster.description),
React.createElement('div', { className: 'details' },
React.createElement('p', null, 'Venue: ' + poster.venue),
React.createElement('p', null, 'Fecha: ' + poster.date)
)
)
);
};

### Museum Guide Integrationjavascript

import { getRandomGreeting, getRandomFact } from '../data/index.js';

const MuseumGuide = ({ currentBand }) => {
const greeting = getRandomGreeting(currentBand);
const fact = getRandomFact(currentBand);

return (
React.createElement('div', { className: 'guide' },
React.createElement('p', { className: 'greeting' }, greeting),
React.createElement('p', { className: 'fact' }, fact)
)
);
};

## Beneficios de la Arquitectura

1. **Sin Base de Datos**: Eliminación completa de dependencias de DB
2. **Performance**: Carga rápida y acceso inmediato a datos
3. **Mantenimiento**: Fácil edición y actualización de contenido
4. **Portabilidad**: Funciona en cualquier entorno sin configración
5. **Escalabilidad**: Fácil agregar nuevas categorías y contenido
6. **Búsqueda**: Sistema de búsqueda integrado sin indexación externa
7. **Flexibilidad**: Estructura adaptable a diferentes necesidades

## Notas Técnicas

- **Formato**: ES6 modules con export/import
- **Compatibilidad**: React 18+, navegadores modernos
- **Tamaño**: Optimizado para web, ~500KB total
- **Encoding**: UTF-8 para soporte de caracteres especiales
- **Validación**: Estructura consistente en todos los módulos
- **Performance**: Lazy loading compatible, tree-shaking friendly

---

**Rock Museum Database v2.0** - _Toda la historia del rock en formato JSON_
