/**
 * Interface representing international direct dialing information
 * @interface Idd
 */
export interface Idd {
  /**
   * Root calling code
   * @type {string | undefined}
   * @example "+1", "+44", "+51"
   */
  root?: string;

  /**
   * Additional suffixes for the calling code
   * @type {string[] | undefined}
   * @example ["809", "829", "849"]
   */
  suffixes?: string[];

  /**
   * Phone number length information
   * @type {Object}
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
  };
}