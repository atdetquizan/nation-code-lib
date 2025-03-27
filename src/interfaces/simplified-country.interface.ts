export interface SimplifiedCountry {
  code: string;
  name: {
    common: string;
    official: string;
  };
  flag: {
    png: string;
    svg: string;
  };
  phoneCode: string | undefined;
}