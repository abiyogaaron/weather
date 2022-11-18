import { TForecastPayload } from '../Redux/home';

export interface ISearchData {
  lat: number;
  lon: number;
  city: string;
}

export interface IHomeState {
  lat: number;
  lon: number;
  city: string;
  isLoading: boolean;
  isSearching: boolean;
  searchData: ISearchData[];
  forecastData: TForecastPayload;
  closestPosWeather: number;
}
