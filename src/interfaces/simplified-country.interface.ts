/**
 * Interface representing a simplified version of country data
 * @interface SimplifiedCountry
 */
export interface SimplifiedCountry {
  /**
   * ISO 3166-1 alpha-2 country code
   * @type {string}
   * @example "PE", "US", "GB"
   */
  code: string;

  /**
   * Country name in common and official forms
   * @type {Object}
   */
  name: {
    /**
     * Common name of the country
     * @type {string}
     * @example "Peru", "United States", "Spain"
     */
    common: string;
    /**
     * Official name of the country
     * @type {string}
     * @example "Republic of Peru", "United States of America"
     */
    official: string;
  };

  /**
   * Country flag representations
   * @type {Object}
   */
  flag: {
    /**
     * URL to PNG version of the flag
     * @type {string}
     * @example "https://flagcdn.com/w320/pe.png"
     */
    png: string;
    /**
     * URL to SVG version of the flag
     * @type {string}
     * @example "https://flagcdn.com/pe.svg"
     */
    svg: string;
    /**
     * Unicode emoji representation of the flag
     * @type {string}
     * @example "🇵🇪"
     */
    emoji: string;
  };

  /**
   * International dialing code
   * @type {string | undefined}
   * @example "+51", "+1", "+44"
   */
  phoneCode: string | undefined;

  /**
   * Phone number length range in the country
   * @type {Object | undefined}
   */
  phoneLength: {
    /**
     * Minimum number of digits in phone numbers
     * @type {number}
     * @example 9
     */
    start: number;
    /**
     * Maximum number of digits in phone numbers
     * @type {number}
     * @example 9
     */
    end: number;
  } | undefined;
}
