import { render, screen, within } from '@testing-library/react';
import { setupServer } from 'msw/node';
import Moment from 'moment';

import { requestHandlers } from '../../Mocks/handlers';
import Home from '../../Modules/Home';
import { weatherResp } from '../../Mocks/mock/home';

import {
  renderWithProvider,
  renderWithRouter,
} from '../../test-utils';
import { formatDate, FormatTemp } from '../../Utils';

const mswServer = setupServer(...requestHandlers);
const { city } = weatherResp;

describe('Home Page', () => {
  beforeAll(() => mswServer.listen() );
  afterEach(() => mswServer.resetHandlers() );
  afterAll(() => mswServer.close() );

  it('Should get current Location forecast', async () => {
    const { ui } = renderWithRouter({
      children: (<Home />),
      path: '/',
      route: '/',
    });
    const { ui: children, store } = renderWithProvider({ ui });
    render(children);
    
    /** Loader */
    const appLoader = screen.getByTestId('app-loader');
    expect(appLoader).toBeVisible();

    /** the wrapper */
    const weatherWrapper = await screen.findByTestId('weather-wrapper');
    expect(weatherWrapper).toBeVisible();

    const weatherHeaderTitle = await screen.findByText(city.name);
    expect(weatherHeaderTitle).toBeVisible();

    const { forecastData, closestPosWeather } = await store.getState().home;
    const today = formatDate(new Date());
    const todayWeather = forecastData[today][closestPosWeather];
    
    const weatherTemp = await screen.findAllByText(FormatTemp(todayWeather.main.temp));
    expect(weatherTemp[0]).toBeVisible();
    
    const weatherMain = await screen.findByText(todayWeather.weather[0].main);
    expect(weatherMain).toBeVisible();

    const weatherDesc = await screen.findByText(todayWeather.weather[0].description);
    expect(weatherDesc).toBeVisible();

    const weatherDate = await screen.findByText(Moment(todayWeather.dt_txt).format('MMM Do YY'));
    expect(weatherDate).toBeVisible();

    const weatherWind = await screen.findByText(`${todayWeather.wind.speed} m/s`);
    const wind = await screen.findByText('Wind');
    expect(weatherWind).toBeVisible();
    expect(wind).toBeVisible();

    const weatherHumid = await screen.findByText(`${todayWeather.main.humidity}%`);
    const humid = await screen.findByText('Humidity');
    expect(weatherHumid).toBeVisible();
    expect(humid).toBeVisible();

    const weatherInfoDetail = await screen.findByTestId('weather-info-detail');
    expect(weatherInfoDetail).toBeVisible();

    const weatherMaxTemp = await within(
      weatherInfoDetail,
    ).findAllByText(FormatTemp(todayWeather.main.temp_max));
    expect(weatherMaxTemp[0]).toBeVisible();

    const weatherMinTemp = await within(
      weatherInfoDetail,
    ).findAllByText(FormatTemp(todayWeather.main.temp_min));
    expect(weatherMinTemp[0]).toBeVisible();
  });
});
