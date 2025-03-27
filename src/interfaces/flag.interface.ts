/**
 * Interface representing country flag information
 * @interface Flag
 */
export interface Flag {
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
   * Description of the flag design
   * @type {string | undefined}
   * @example "The flag of Peru is composed of three equal vertical bands of red, white and red"
   */
  alt?: string;
}