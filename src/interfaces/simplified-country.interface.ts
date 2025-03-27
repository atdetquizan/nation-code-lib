export interface SimplifiedCountry {
  code: string;
  name: {
    common: string;
    official: string;
  };
  flag: {
    png: string;
    svg: string;
    emoji: string; // Added emoji flag field
  };
  phoneCode: string | undefined;
}