import { IHomeState } from '../Interface/state';

export const HOME_INITIAL_STATE: IHomeState = {
  lat: 0,
  lon: 0,
  city: '',
  isLoading: true,
  isSearching: false,
  searchData: [],
  forecastData: {},
  closestPosWeather: -1,
};
