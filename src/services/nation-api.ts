import { Country, SimplifiedCountry } from '../interfaces';
import countriesData from '../data/countries.json';

/**
 * Class that provides methods to access and filter country information
 * @class NationAPI
 */
export class NationAPI {
  /**
   * Static array containing all countries data
   * @private
   * @static
   * @type {Country[]}
   */
  private static countries: Country[] = countriesData;

  /**
   * Returns all countries
   * @returns {Country[]} Array of all countries
   */
  static getAllCountries(): Country[] {
    return this.countries;
  }

  /**
   * Finds a country by its code
   * @param {string} code - The country code (cca2, cca3, or ccn3)
   * @returns {Country | undefined} The country if found, undefined otherwise
   */
  static getCountryByCode(code: string): Country | undefined {
    return this.countries.find(
      (country) =>
        country.cca2 === code ||
        country.cca3 === code ||
        country.ccn3 === code
    );
  }

  /**
   * Finds a country by its name
   * @param {string} name - The country name (common or official)
   * @returns {Country | undefined} The country if found, undefined otherwise
   */
  static getCountryByName(name: string): Country | undefined {
    const searchName = name.toLowerCase();
    return this.countries.find(
      (country) =>
        country.name.common.toLowerCase() === searchName ||
        country.name.official.toLowerCase() === searchName
    );
  }

  /**
   * Returns all countries in a specific region
   * @param {string} region - The region name
   * @returns {Country[]} Array of countries in the specified region
   */
  static getCountriesByRegion(region: string): Country[] {
    return this.countries.filter(
      (country) => country.region.toLowerCase() === region.toLowerCase()
    );
  }

  /**
   * Returns all countries in a specific continent
   * @param {string} continent - The continent name
   * @returns {Country[]} Array of countries in the specified continent
   */
  static getCountriesByContinent(continent: string): Country[] {
    return this.countries.filter((country) =>
      country.continents.some(
        (cont) => cont.toLowerCase() === continent.toLowerCase()
      )
    );
  }

  /**
   * Gets the phone code for a country
   * @param {string} code - The country code
   * @returns {string | undefined} The phone code if found, undefined otherwise
   */
  static getPhoneCode(code: string): string | undefined {
    const country = this.getCountryByCode(code);
    if (!country?.idd.root || !country.idd.suffixes) return undefined;
    return `${country.idd.root}${country.idd.suffixes.join('')}`;
  }

  /**
   * Returns all countries that use a specific language
   * @param {string} language - The language to search for
   * @returns {Country[]} Array of countries that use the specified language
   */
  static getCountriesByLanguage(language: string): Country[] {
    return this.countries.filter((country) => {
      if (!country.languages) return false;
      return Object.keys(country.languages).some(
        (key) => country.languages![key].toLowerCase() === language.toLowerCase()
      );
    });
  }

  /**
   * Returns all countries that use a specific currency
   * @param {string} currencyCode - The currency code to search for
   * @returns {Country[]} Array of countries that use the specified currency
   */
  static getCountriesByCurrency(currencyCode: string): Country[] {
    return this.countries.filter((country) => {
      if (!country.currencies) return false;
      return Object.keys(country.currencies).some(
        (currency) => currency.toLowerCase() === currencyCode.toLowerCase()
      );
    });
  }

  /**
   * Returns a simplified version of countries data
   * @param {string} [lang] - Optional language code for official name translation (e.g., 'spa' for Spanish)
   * @returns {SimplifiedCountry[]} Array of simplified country data, sorted alphabetically by name
   */
  static getSimplifiedCountries(lang?: string): SimplifiedCountry[] {
    return this.countries
      .map(country => {
        const translation = lang && country.translations?.[lang];
        const officialName = translation?.official ?? country.name.official;
        const commonName = translation?.common ?? country.name.common;

        const phoneCode = country.idd.root && country.idd.suffixes
          ? `${country.idd.root}${country.idd.suffixes[0]}`
          : undefined;

        return {
          code: country.cca2,
          name: {
            common: commonName,
            official: officialName
          },
          flag: {
            png: country.flags.png,
            svg: country.flags.svg,
            emoji: country.flag // Adding the emoji flag code
          },
          phoneCode
        };
      })
      .sort((a, b) => a.name.common.localeCompare(b.name.common));
  }
}