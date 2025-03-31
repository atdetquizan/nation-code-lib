---
sidebar_position: 1
---

# Nation Code Lib

Bienvenido a la documentación de **Nation Code Lib**, una librería TypeScript que proporciona acceso fácil y eficiente a información detallada sobre países.

## Características Principales

- **Información Completa de Países**: Accede a datos detallados como nombres oficiales, códigos de país, banderas, monedas y más.
- **Búsqueda Flexible**: Encuentra países por código (cca2, cca3, ccn3), nombre común u oficial.
- **Filtros por Región**: Obtén países por región, continente o idioma.
- **Datos de Contacto**: Accede a códigos telefónicos y códigos postales.
- **Información Geográfica**: Incluye coordenadas, fronteras, área y población.

## Instalación

Puedes instalar Nation Code Lib usando npm:

```bash
npm install nation-code-lib
```

## Uso Básico

```typescript
import { NationAPI } from 'nation-code-lib';

// Obtener todos los países
const allCountries = NationAPI.getAllCountries();

// Buscar un país por código
const spain = NationAPI.getCountryByCode('ESP');

// Buscar un país por nombre
const peru = NationAPI.getCountryByName('Peru');

// Obtener países por región
const southAmericanCountries = NationAPI.getCountriesByRegion('South America');
```

## Estructura de la Documentación

Esta documentación está organizada en las siguientes secciones:

1. **Guía de Inicio**: Instalación y configuración básica.
2. **API Reference**: Documentación detallada de todos los métodos disponibles.
3. **Ejemplos**: Casos de uso comunes y ejemplos prácticos.
4. **Tipos de Datos**: Descripción de las interfaces y tipos utilizados.

Selecciona una sección del menú lateral para comenzar a explorar la documentación.
