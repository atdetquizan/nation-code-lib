import { NationAPI } from '../services/nation-api';

describe('NationAPI', () => {
  describe('getAllCountries', () => {
    it('should return all countries', () => {
      const countries = NationAPI.getAllCountries();
      expect(countries.length).toBeGreaterThan(0);
    });
  });

  describe('getCountryByCode', () => {
    it('should return country when valid cca2 code is provided', () => {
      const country = NationAPI.getCountryByCode('PE');
      expect(country).toBeDefined();
      expect(country?.cca2).toBe('PE');
    });

    it('should return country when valid cca3 code is provided', () => {
      const country = NationAPI.getCountryByCode('PER');
      expect(country).toBeDefined();
      expect(country?.cca3).toBe('PER');
    });

    it('should return country when valid ccn3 code is provided', () => {
      const country = NationAPI.getCountryByCode('604');
      expect(country).toBeDefined();
      expect(country?.ccn3).toBe('604');
    });

    it('should return undefined for invalid code', () => {
      const country = NationAPI.getCountryByCode('XX');
      expect(country).toBeUndefined();
    });
  });

  describe('getCountryByName', () => {
    it('should return country by common name', () => {
      const country = NationAPI.getCountryByName('Peru');
      expect(country).toBeDefined();
      expect(country?.name.common).toBe('Peru');
    });

    it('should return country by official name', () => {
      const country = NationAPI.getCountryByName('Republic of Peru');
      expect(country).toBeDefined();
      expect(country?.name.official).toBe('Republic of Peru');
    });

    it('should return undefined for invalid name', () => {
      const country = NationAPI.getCountryByName('Invalid Country');
      expect(country).toBeUndefined();
    });
  });

  describe('getCountriesByRegion', () => {
    it('should return countries in South America', () => {
      const countries = NationAPI.getCountriesByRegion('Americas');
      expect(countries.length).toBeGreaterThan(0);
      expect(countries.some(country => country.cca2 === 'PE')).toBeTruthy();
    });

    it('should return empty array for invalid region', () => {
      const countries = NationAPI.getCountriesByRegion('Invalid Region');
      expect(countries).toHaveLength(0);
    });
  });

  describe('getCountriesByContinent', () => {
    it('should return countries in South America', () => {
      const countries = NationAPI.getCountriesByContinent('South America');
      expect(countries.length).toBeGreaterThan(0);
      expect(countries.some(country => country.cca2 === 'PE')).toBeTruthy();
    });

    it('should return empty array for invalid continent', () => {
      const countries = NationAPI.getCountriesByContinent('Invalid Continent');
      expect(countries).toHaveLength(0);
    });
  });

  describe('getPhoneCode', () => {
    it('should return phone code for valid country', () => {
      const phoneCode = NationAPI.getPhoneCode('PE');
      expect(phoneCode).toBe('+51');
    });

    it('should return undefined for invalid country code', () => {
      const phoneCode = NationAPI.getPhoneCode('XX');
      expect(phoneCode).toBeUndefined();
    });

    it('should return undefined when country has no phone code data', () => {
      // Asumiendo que hay un país sin datos de código telefónico
      const phoneCode = NationAPI.getPhoneCode('AQ');
      expect(phoneCode).toBeUndefined();
    });
  });

  describe('getCountriesByLanguage', () => {
    it('should return countries that speak Spanish', () => {
      const countries = NationAPI.getCountriesByLanguage('Spanish');
      expect(countries.length).toBeGreaterThan(0);
      expect(countries.some(country => country.cca2 === 'ES')).toBeTruthy();
    });

    it('should return empty array for invalid language', () => {
      const countries = NationAPI.getCountriesByLanguage('Invalid Language');
      expect(countries).toHaveLength(0);
    });

    it('should return empty array when country has no language data', () => {
      const countries = NationAPI.getCountriesByLanguage('');
      expect(countries).toHaveLength(0);
    });
  });

  describe('getCountriesByCurrency', () => {
    it('should return countries that use USD', () => {
      const countries = NationAPI.getCountriesByCurrency('USD');
      expect(countries.length).toBeGreaterThan(0);
      expect(countries.some(country => country.cca2 === 'US')).toBeTruthy();
    });

    it('should return empty array for invalid currency', () => {
      const countries = NationAPI.getCountriesByCurrency('INVALID');
      expect(countries).toHaveLength(0);
    });

    it('should return empty array when country has no currency data', () => {
      const countries = NationAPI.getCountriesByCurrency('');
      expect(countries).toHaveLength(0);
    });
  });
});