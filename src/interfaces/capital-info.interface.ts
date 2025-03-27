/**
 * Interface representing capital city geographical information
 * @interface CountryCapitalInfo
 */
export interface CountryCapitalInfo {
  /**
   * Coordinates of the capital city [latitude, longitude]
   * @type {number[] | undefined}
   * @example [-12.05, -77.05]
   */
  latlng?: number[];
}