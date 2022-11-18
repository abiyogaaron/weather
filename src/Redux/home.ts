import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HOME_INITIAL_STATE } from '../Constants/state';
import { IForecast } from '../Interface/responses';
import { IHomeState, ISearchData } from '../Interface/state';

export type TWeatherInfoPayload = Pick<IHomeState, 'lat' | 'city' | 'lon'>;
export type TForecastPayload = Record<string, IForecast[]>;

const HomeSlice = createSlice({
  name: 'home',
  initialState: HOME_INITIAL_STATE,
  reducers: {
    setIsSearching: (state: IHomeState, action: PayloadAction<boolean>) => {
      state.isSearching = action.payload;
    },
    setIsLoading: (state: IHomeState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setSearchData: (state: IHomeState, action: PayloadAction<ISearchData[]>) => {
      state.searchData = action.payload;
    },
    setWeatherInfo: (state: IHomeState, action: PayloadAction<TWeatherInfoPayload>) => {
      const { city, lat, lon } = action.payload;
      state.city = city;
      state.lat = lat;
      state.lon = lon;
    },
    setForecastData: (state: IHomeState, action: PayloadAction<TForecastPayload>) => {
      state.forecastData = action.payload;
    },
    setClosestWeather: (state: IHomeState, action: PayloadAction<number>) => {
      state.closestPosWeather = action.payload;
    },
    resetState: (state: IHomeState) => {
      //eslint-disable-next-line @typescript-eslint/no-unused-vars
      state = HOME_INITIAL_STATE;
    },
  },
});

export const  {
  setIsSearching,
  setIsLoading,
  setSearchData,
  setWeatherInfo,
  setForecastData,
  setClosestWeather,
  resetState,
} = HomeSlice.actions;
export default HomeSlice;
