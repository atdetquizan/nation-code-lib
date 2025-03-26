export interface CountryName {
  common: string;
  official: string;
  nativeName?: { [key: string]: { official: string; common: string } };
}

export interface Currencies {
  [key: string]: {
    name: string;
    symbol: string;
  };
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface CountryTranslations {
  [key: string]: {
    official: string;
    common: string;
  } | undefined;
}

export interface CountryDemonyms {
  eng: { f: string; m: string };
  fra?: { f: string; m: string };
}

export interface CountryCapitalInfo {
  latlng?: number[];
}

export interface CountryPostalCode {
  format: string;
  regex?: string;
}

export interface Flag {
  png: string;
  svg: string;
  alt?: string;
}

export interface CountryCoatOfArms {
  png?: string;
  svg?: string;
}

export interface CountryMaps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Country {
  name: CountryName;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: string;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: string;
  subregion?: string;
  languages?: { [key: string]: string };
  translations?: CountryTranslations;
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms?: CountryDemonyms;
  flag: string;
  maps: CountryMaps;
  population: number;
  gini?: { [key: string]: number };
  fifa?: string;
  car: { signs?: string[]; side: string };
  timezones: string[];
  continents: string[];
  flags: Flag;
  coatOfArms?: CountryCoatOfArms;
  startOfWeek: string;
  capitalInfo: CountryCapitalInfo;
  postalCode?: CountryPostalCode;
}