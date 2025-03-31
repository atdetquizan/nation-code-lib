---
sidebar_position: 2
---

# Tipos de Datos

Esta sección describe las interfaces principales utilizadas en Nation Code Lib.

## Country

La interfaz principal que representa toda la información de un país.

```typescript
interface Country {
  name: CountryName;           // Nombres del país
  tld?: string[];             // Dominios de nivel superior
  cca2: string;               // Código ISO 3166-1 alpha-2
  ccn3?: string;              // Código ISO 3166-1 numeric
  cca3: string;               // Código ISO 3166-1 alpha-3
  cioc?: string;              // Código del Comité Olímpico Internacional
  independent?: boolean;       // Estado de independencia
  status: string;             // Estado del país
  unMember: boolean;          // Miembro de las Naciones Unidas
  currencies?: Currencies;     // Monedas
  idd: Idd;                   // Códigos telefónicos
  capital?: string[];         // Capitales
  altSpellings: string[];     // Nombres alternativos
  region: string;             // Región
  subregion?: string;         // Subregión
  languages?: {               // Idiomas oficiales
    [key: string]: string
  };
  translations?: CountryTranslations;  // Traducciones del nombre
  latlng: number[];           // Coordenadas [latitud, longitud]
  landlocked: boolean;        // País sin salida al mar
  borders?: string[];         // Países fronterizos
  area: number;               // Área en km²
  flag: string;               // Emoji de la bandera
  population: number;         // Población
  timezones: string[];        // Zonas horarias
  continents: string[];       // Continentes
  flags: Flag;                // URLs de las banderas
  startOfWeek: string;        // Primer día de la semana
}
```

## CountryName

Interfaz que contiene las diferentes variantes del nombre de un país.

```typescript
interface CountryName {
  common: string;      // Nombre común
  official: string;    // Nombre oficial
  nativeName?: {       // Nombres en idiomas nativos
    [key: string]: {
      official: string;
      common: string;
    };
  };
}
```

## Currencies

Interfaz que representa las monedas de un país.

```typescript
interface Currencies {
  [code: string]: {
    name: string;      // Nombre de la moneda
    symbol: string;    // Símbolo de la moneda
  };
}
```

## Idd

Interfaz que representa los códigos telefónicos internacionales.

```typescript
interface Idd {
  root?: string;      // Código raíz (ej: "+")
  suffixes?: string[]; // Sufijos
}
```

## Flag

Interfaz que contiene las URLs de las banderas del país.

```typescript
interface Flag {
  png: string;  // URL de la bandera en formato PNG
  svg: string;  // URL de la bandera en formato SVG
  alt: string;  // Descripción alternativa de la bandera
}
```

Estas interfaces te permiten acceder a la información de manera tipada y segura. Cuando uses los métodos de la API, los datos retornados seguirán estas estructuras.