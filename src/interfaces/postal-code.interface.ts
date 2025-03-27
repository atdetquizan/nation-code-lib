/**
 * Interface representing country postal code format
 * @interface CountryPostalCode
 */
export interface CountryPostalCode {
  /**
   * Format pattern for postal codes
   * @type {string}
   * @example "#####"
   */
  format: string;

  /**
   * Regular expression for postal code validation
   * @type {string | undefined}
   * @example "^(\\d{5})$"
   */
  regex?: string;
}