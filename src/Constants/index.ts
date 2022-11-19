import { EnvT } from '../Interface';

import ClearDay from '../images/clear-day.png';
import ClearNight from '../images/clear-night.png';
import FewCloudsDay from '../images/partly-cloudy-day.png';
import FewCloudsNight from '../images/partly-cloudy-night.png';
import Cloudy from '../images/cloudy.png';
import BrokenClouds from '../images/overcast.png';
import HeavyRain from '../images/heavy-showers.png';
import Rain from '../images/showers.png';
import Thunderstorm from '../images/thunderstorm-showers.png';
import Snow from '../images/snow.png';
import Mist from '../images/fog.png';

export const ENV: EnvT = (process.env.REACT_APP_ENV as EnvT) || 'development';
export const API_KEY = process.env.REACT_APP_API_KEY;

const PROTOCOL = window.location.protocol;
export const IMAGE_URL = `${PROTOCOL}//openweathermap.org/img/wn`;
export const BASE_URL = `${PROTOCOL}//api.openweathermap.org`;
export const LIMIT_SEARCH = 5;
export const END_POINTS = {
  SEARCH_CITY: `${BASE_URL}/geo/1.0/direct?q={city}&limit={limit}&appid={apiKey}`,
  GET_FORECAST: `${BASE_URL}/data/2.5/forecast?lat={lat}&lon={lon}&appid={apiKey}`,
};

export const ICON_LIST: Record<string, string> = {
  '01d': ClearDay,
  '01n': ClearNight,
  '02d': FewCloudsDay,
  '02n': FewCloudsNight,
  '03d': Cloudy,
  '03n': Cloudy,
  '04d': BrokenClouds,
  '04n': BrokenClouds,
  '09d': HeavyRain,
  '09n': HeavyRain,
  '10d': Rain,
  '10n': Rain,
  '11d': Thunderstorm,
  '11n': Thunderstorm,
  '13d': Snow,
  '13n': Snow,
  '50d': Mist,
  '50n': Mist,
};

export const FIVE_MINUTES = 1000 * 60 * 5;
export const USE_MOCK = false;
