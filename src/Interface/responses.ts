export enum ELocalNames {
  af = 'af',
  ar = 'ar',
  ascii = 'ascii',
  az = 'az',
  bg = 'bg',
  ca = 'ca',
  da = 'da',
  de = 'de',
  el = 'el',
  en = 'en',
  eu = 'eu',
  fa = 'fa',
  feature_name = 'feature_name',
  fi = 'fi',
  fr = 'fr',
  gl = 'gl',
  he = 'he',
  hi = 'hi',
  hr = 'hr',
  hu = 'hu',
  id = 'id',
  it = 'it',
  ja = 'ja',
  la = 'la',
  lt = 'lt',
  mk = 'mk',
  nl = 'nl',
  no = 'no',
  pl = 'pl',
  pt = 'pt',
  ro = 'ro',
  ru = 'ru',
  sk = 'sk',
  sl = 'sl',
  sr = 'sr',
  th = 'th',
  tr = 'tr',
  vi = 'vi',
  zu = 'zu',
}

export type TLocalNames = Record<ELocalNames, string>;

export interface ISearchObject {
  name: string;
  local_names?: TLocalNames;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export type TSearchResponses = ISearchObject[];

export interface IForecast {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  },
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  cloud: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  },
  visibility: number;
  pop: number;
  rain: {
    '3h': number;
  };
  sys: {
    pod: number;
  };
  dt_txt: string;
}
export interface IForecastResponses {
  cod: number;
  message: number;
  cnt: number;
  list: IForecast[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: number;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  }
}
