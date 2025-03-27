/**
 * Interface representing names for country residents
 * @interface CountryDemonyms
 */
export interface CountryDemonyms {
  /**
   * English language demonyms
   * @type {Object}
   */
  eng: {
    /**
     * Female form of the demonym
     * @type {string}
     * @example "Peruvian"
     */
    f: string;
    /**
     * Male form of the demonym
     * @type {string}
     * @example "Peruvian"
     */
    m: string;
  };

  /**
   * French language demonyms
   * @type {Object | undefined}
   */
  fra?: {
    /**
     * Female form of the demonym
     * @type {string}
     * @example "Péruvienne"
     */
    f: string;
    /**
     * Male form of the demonym
     * @type {string}
     * @example "Péruvien"
     */
    m: string;
  };
}