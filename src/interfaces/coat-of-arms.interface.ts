/**
 * Interface representing country's coat of arms images
 * @interface CountryCoatOfArms
 */
export interface CountryCoatOfArms {
  /**
   * URL to PNG version of the coat of arms
   * @type {string | undefined}
   * @example "https://mainfacts.com/media/images/coats_of_arms/pe.png"
   */
  png?: string;

  /**
   * URL to SVG version of the coat of arms
   * @type {string | undefined}
   * @example "https://mainfacts.com/media/images/coats_of_arms/pe.svg"
   */
  svg?: string;
}