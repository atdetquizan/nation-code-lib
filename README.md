# nation-code-lib

Una librería TypeScript para acceder y filtrar información de países, incluyendo códigos, banderas, idiomas, monedas y más.

## Instalación

```bash
npm install nation-code-lib
```

## Uso

```typescript
import { NationAPI } from 'nation-code-lib';

// Obtener todos los países
const allCountries = NationAPI.getAllCountries();

// Buscar país por código
const spain = NationAPI.getCountryByCode('ESP');

// Buscar país por nombre
const mexico = NationAPI.getCountryByName('Mexico');

// Obtener países por región
const southAmericanCountries = NationAPI.getCountriesByRegion('South America');

// Obtener países por continente
const europeanCountries = NationAPI.getCountriesByContinent('Europe');

// Obtener código telefónico
const phoneCode = NationAPI.getPhoneCode('ESP'); // +34

// Obtener países por idioma
const spanishSpeakingCountries = NationAPI.getCountriesByLanguage('Spanish');

// Obtener países por moneda
const euroCountries = NationAPI.getCountriesByCurrency('EUR');
```

## API Reference

### `getAllCountries()`
Retorna un array con todos los países disponibles.

### `getCountryByCode(code: string)`
Busca un país por su código (cca2, cca3, o ccn3).
- **Parámetros:** `code` - Código del país
- **Retorna:** País encontrado o undefined

### `getCountryByName(name: string)`
Busca un país por su nombre (común u oficial).
- **Parámetros:** `name` - Nombre del país
- **Retorna:** País encontrado o undefined

### `getCountriesByRegion(region: string)`
Retorna todos los países en una región específica.
- **Parámetros:** `region` - Nombre de la región
- **Retorna:** Array de países en la región especificada

### `getCountriesByContinent(continent: string)`
Retorna todos los países en un continente específico.
- **Parámetros:** `continent` - Nombre del continente
- **Retorna:** Array de países en el continente especificado

### `getPhoneCode(code: string)`
Obtiene el código telefónico de un país.
- **Parámetros:** `code` - Código del país
- **Retorna:** Código telefónico o undefined

### `getCountriesByLanguage(language: string)`
Retorna todos los países que usan un idioma específico.
- **Parámetros:** `language` - Idioma a buscar
- **Retorna:** Array de países que usan el idioma especificado

### `getCountriesByCurrency(currencyCode: string)`
Retorna todos los países que usan una moneda específica.
- **Parámetros:** `currencyCode` - Código de la moneda
- **Retorna:** Array de países que usan la moneda especificada

## Estructura de Datos

Cada país contiene la siguiente información:
- Códigos (cca2, cca3, ccn3)
- Nombres (común y oficial)
- Región y subregión
- Continentes
- Banderas
- Idiomas
- Monedas
- Códigos telefónicos

## Contribución

Si deseas contribuir a este proyecto:
1. Haz un Fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Realiza tus cambios y haz commit (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la licencia ISC. Ver el archivo `LICENSE` para más detalles.