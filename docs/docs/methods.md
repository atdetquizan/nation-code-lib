---
sidebar_position: 1
---

# Métodos de la API

Esta sección describe todos los métodos disponibles en la clase `NationAPI`.

## getAllCountries

Retorna un array con la información de todos los países disponibles.

```typescript
static getAllCountries(): Country[]
```

**Ejemplo:**
```typescript
const countries = NationAPI.getAllCountries();
console.log(countries.length); // Muestra el número total de países
```

## getCountryByCode

Busca un país por su código (cca2, cca3 o ccn3).

```typescript
static getCountryByCode(code: string): Country | undefined
```

**Parámetros:**
- `code`: Código del país (puede ser cca2, cca3 o ccn3)

**Ejemplo:**
```typescript
const spain = NationAPI.getCountryByCode('ESP');
const usa = NationAPI.getCountryByCode('US');
```

## getCountryByName

Busca un país por su nombre común u oficial.

```typescript
static getCountryByName(name: string): Country | undefined
```

**Parámetros:**
- `name`: Nombre del país (común u oficial)

**Ejemplo:**
```typescript
const peru = NationAPI.getCountryByName('Peru');
const japan = NationAPI.getCountryByName('Japan');
```

## getCountriesByRegion

Retorna todos los países de una región específica.

```typescript
static getCountriesByRegion(region: string): Country[]
```

**Parámetros:**
- `region`: Nombre de la región

**Ejemplo:**
```typescript
const southAmericanCountries = NationAPI.getCountriesByRegion('South America');
const europeanCountries = NationAPI.getCountriesByRegion('Europe');
```

## getCountriesByContinent

Retorna todos los países de un continente específico.

```typescript
static getCountriesByContinent(continent: string): Country[]
```

**Parámetros:**
- `continent`: Nombre del continente

**Ejemplo:**
```typescript
const asianCountries = NationAPI.getCountriesByContinent('Asia');
const africanCountries = NationAPI.getCountriesByContinent('Africa');
```

## getPhoneCode

Obtiene el código telefónico de un país.

```typescript
static getPhoneCode(code: string): string | undefined
```

**Parámetros:**
- `code`: Código del país

**Ejemplo:**
```typescript
const spainPhoneCode = NationAPI.getPhoneCode('ESP'); // '+34'
const usaPhoneCode = NationAPI.getPhoneCode('US'); // '+1'
```

## getCountriesByLanguage

Retorna todos los países que utilizan un idioma específico.

```typescript
static getCountriesByLanguage(language: string): Country[]
```

**Parámetros:**
- `language`: Nombre del idioma

**Ejemplo:**
```typescript
const spanishSpeakingCountries = NationAPI.getCountriesByLanguage('Spanish');
const englishSpeakingCountries = NationAPI.getCountriesByLanguage('English');
```