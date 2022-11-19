import { rest } from 'msw';
import { END_POINTS } from '../../Constants';

import * as Home from '../mock/home';

export const requestHandlers = [
  rest.get(
    END_POINTS.SEARCH_CITY,
    Home.getSearchRes,
  ),
  rest.get(
    END_POINTS.GET_FORECAST,
    Home.getForecasts,
  ),
];
