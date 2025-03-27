export interface MappedCountry {
  code: string;
  name: string;
  officialName: string;
  flag: {
    png: string;
    svg: string;
  };
  phoneCode: string | undefined;
}