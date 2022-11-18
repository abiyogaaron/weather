import Moment from 'moment';

import { 
  IForecastResponses, 
  TSearchResponses,
} from '../Interface/responses';
import { ISearchData } from '../Interface/state';
import { API_KEY, END_POINTS, LIMIT_SEARCH } from '../Constants';

import { AppThunk } from '../Redux';
import { 
  setClosestWeather,
  setForecastData,
  setIsLoading,
  setIsSearching,
  setSearchData,
  setWeatherInfo,
  TForecastPayload,
} from '../Redux/home';

import httpCall, { HttpReqCfg } from '../Utils/httpCall';
import { formatDate } from '../Utils';
import { batch } from 'react-redux';

export const getCities = (cityName: string): AppThunk => async (dispatch) => {
  try {
    const config: HttpReqCfg = {
      method: 'GET',
    };

    if (!cityName) {
      dispatch(setSearchData([]));
      return;
    }

    dispatch(setIsSearching(true));
    const url = END_POINTS.SEARCH_CITY
      .replace('{city}', cityName)
      .replace('{limit}', LIMIT_SEARCH.toString())
      .replace('{apiKey}', API_KEY || '');

    const response = await httpCall<TSearchResponses>(url, config);
    const searchData: ISearchData[] = response.map((item) => {
      let prefixState = item.state ? `, ${item.state}` : '';
      return {
        lat: item.lat,
        lon: item.lon,
        city: `${item.name}${prefixState}, ${item.country}`,
      };
    });

    dispatch(setSearchData(searchData));
  } catch (err) {
    console.error(err);
  } finally {
    dispatch(setIsSearching(false));
  }
};

export const getForecast = (
  lat: string, 
  lon: string,
  isInitial: boolean,
  specificDate?: string,
  isRefetch?: boolean,
): AppThunk => async (dispatch) => {
  try {
    const config: HttpReqCfg = {
      method: 'GET',
    };
    if (!isRefetch) {
      dispatch(setIsLoading(true));
    }
    const url = END_POINTS.GET_FORECAST
      .replace('{lat}', lat.toString())
      .replace('{lon}', lon.toString())
      .replace('{apiKey}', API_KEY || '');

    const response = await httpCall<IForecastResponses>(url, config);
    const data = parsingForecastResp(response, specificDate);
    
    batch(() => {
      dispatch(setForecastData(data.listForecast));
      dispatch(setClosestWeather(data.closestPosWeather));
      if (isInitial) {
        dispatch(setWeatherInfo({
          lat: response.city.coord.lat,
          lon: response.city.coord.lon,
          city: response.city.name,
        }));
      }
    });
  } catch (err) {
    console.error(err);
  } finally {
    if (!isRefetch) {
      dispatch(setIsLoading(false));
    }
  }
};

const parsingForecastResp = (data: IForecastResponses, specificDate?: string) => {
  let listForecast: TForecastPayload = {};
  for (let i = 0; i < data.list.length; i++) {
    let item = data.list[i];
    let key = item.dt_txt.split(' ')[0];
    
    if (!listForecast[key]) {
      listForecast[key] = [];
    }
    listForecast[key].push(item);
  }

  let today = formatDate(new Date());
  if (specificDate) {
    today = specificDate;
  }

  let closestPosWeather: number = 0;
  let diff: number = Infinity;
  for (let i = 0; i < listForecast[today].length; i++) {
    const weather = listForecast[today][i];
    let currDiff = Math.abs(Moment(new Date()).diff(weather.dt_txt));

    if (diff > currDiff) {
      closestPosWeather = i;
      diff = currDiff;
    }
  }

  return { listForecast, closestPosWeather };
};
