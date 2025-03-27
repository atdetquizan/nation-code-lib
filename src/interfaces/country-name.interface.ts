/**
 * Interface representing country name variations
 * @interface CountryName
 */
export interface CountryName {
  /**
   * Common name of the country
   * @type {string}
   * @example "Peru", "United States"
   */
  common: string;

  /**
   * Official name of the country
   * @type {string}
   * @example "Republic of Peru", "United States of America"
   */
  official: string;

  /**
   * Native names in different languages
   * @type {Object | undefined}
   * @example { eng: { official: "United States of America", common: "United States" } }
   */
  nativeName?: { [key: string]: { official: string; common: string } };
}