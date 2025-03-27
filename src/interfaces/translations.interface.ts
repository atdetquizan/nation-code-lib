/**
 * Interface representing country name translations in different languages
 * @interface CountryTranslations
 */
export interface CountryTranslations {
  /**
   * Language code as key with official and common name translations
   * @type {Object | undefined}
   * @example { "spa": { official: "República del Perú", common: "Perú" } }
   */
  [key: string]: {
    /**
     * Official name translation
     * @type {string}
     * @example "República del Perú"
     */
    official: string;

    /**
     * Common name translation
     * @type {string}
     * @example "Perú"
     */
    common: string;
  } | undefined;
}