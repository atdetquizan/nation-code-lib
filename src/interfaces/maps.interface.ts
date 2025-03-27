/**
 * Interface representing country map links
 * @interface CountryMaps
 */
export interface CountryMaps {
  /**
   * Google Maps URL for the country
   * @type {string}
   * @example "https://goo.gl/maps/uDWEUaXNcZTng1fP6"
   */
  googleMaps: string;

  /**
   * OpenStreetMap URL for the country
   * @type {string}
   * @example "https://www.openstreetmap.org/relation/288247"
   */
  openStreetMaps: string;
}