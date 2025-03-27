/**
 * Interface representing country currencies
 * @interface Currencies
 */
export interface Currencies {
  /**
   * Currency code as key with name and symbol information
   * @type {Object}
   * @example { "USD": { name: "United States dollar", symbol: "$" } }
   */
  [key: string]: {
    /**
     * Name of the currency
     * @type {string}
     * @example "United States dollar", "Euro"
     */
    name: string;

    /**
     * Symbol used for the currency
     * @type {string}
     * @example "$", "€", "£"
     */
    symbol: string;
  };
}