import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt,
  faChevronLeft,
  faDroplet,
  faTemperatureHigh,
  faTemperatureLow,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import Moment from 'moment';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { AppDispatch, RootState } from '../../Redux';

import { IForecast } from '../../Interface/responses';
import { SIZE } from '../../Constants/style';
import { ICON_LIST } from '../../Constants';

import { getForecast } from '../../Services/home';

import {
  DivCol,
  Divider, 
  DivRow,
  DivWeatherImage,
  DivWeatherInfo,
  DivWeatherWrapper,
  DivWrapperHome,
  TextWrapper,
} from '../Home/style';
import {
  DivWeatherListHeader,
  DivWeatherListInfo,
  DivWeatherListInfoWrapper,
  DivWeatherListItem,
  DivWeatherListName,
  DivWeatherListTemp,
  DivWeatherListTitle,
  DivWeatherListWrapper,
} from './style';
import { resetState } from '../../Redux/home';

import Image from '../../Components/Image';
import Loader from '../../Components/Loader';
import { FormatTemp } from '../../Utils';
import { TWeatherParams } from '../../Interface';

const ForecastList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigator = useNavigate();
  const { lat, lon } = useParams<TWeatherParams>();

  const posWeather = useSelector((state: RootState) => state.home.closestPosWeather);
  const isLoading = useSelector((state: RootState) => state.home.isLoading);
  const forecastList = useSelector((state: RootState) => state.home.forecastData, shallowEqual);

  const tomorrow = Moment().add(1, 'days').format('yyyy-MM-DD');

  const currentWeather: IForecast | undefined = useMemo(() => {
    if (forecastList[tomorrow]) {
      return forecastList[tomorrow][posWeather];
    }
  }, [forecastList, posWeather]);

  /** Local variable */
  const IconWeather = currentWeather?.weather[0].icon || '01d';
  const tomorrowTemp = FormatTemp(currentWeather?.main.temp || 0);
  const tomorrowMaxTemp = FormatTemp(currentWeather?.main.temp_max || 0);
  const tomorrowWeather = currentWeather?.weather[0].main || '';
  const tomorrowWeatherDesc = currentWeather?.weather[0].description || '';
  const WeatherHumid = currentWeather?.main.humidity || 0;
  const WeatherWind = currentWeather?.wind.speed || 0;
  const WeatherMaxTemp = FormatTemp(currentWeather?.main.temp_max || 0);
  const WeatherMinTemp = FormatTemp(currentWeather?.main.temp_min || 0);

  const renderingWeatherList = useCallback(() => {
    let content = [];
    for (let key in forecastList) {
      if (forecastList[key]) {
        const icon = forecastList[key][0].weather[0].icon;
        const weather = forecastList[key][0].weather[0].main;
        const currTemp = FormatTemp(forecastList[key][0].main.temp);
        const minTemp = FormatTemp(forecastList[key][0].main.temp_min);
        
        content.push(
          <DivRow key={key} onClick={() => navigator(`/${lat}/${lon}/${key}`)}>
            <DivWeatherListItem>
              {Moment(key).format('ddd')}
            </DivWeatherListItem>
            <DivWeatherListItem>
              <Image 
                width={SIZE(32)} 
                height={SIZE(32)}
                breakPointHeight={SIZE(16)}
                breakPointWidth={SIZE(16)}
                src={`${ICON_LIST[icon]}`}
              />
              <DivWeatherListName>{weather}</DivWeatherListName>
            </DivWeatherListItem>
            <DivWeatherListItem>
              <span className="curr-temp">{currTemp}&#176;</span>
              <span className="min-temp">/{minTemp}&#176;</span>
            </DivWeatherListItem>
          </DivRow>,
        );
      }
    }
    return content;
  }, [forecastList]);

  useEffect(() => {
    dispatch(getForecast(lat || '0', lon || '0', true, tomorrow));
    return () => {
      dispatch(resetState());
    };
  }, [lat, lon]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <DivWrapperHome>
      <DivWeatherWrapper>
        <DivWeatherInfo>
          <DivWeatherListHeader>
            <FontAwesomeIcon 
              className="arrow-back" 
              icon={faChevronLeft}
              onClick={() => navigator(`/${lat}/${lon}`)}
            />
            <FontAwesomeIcon icon={faCalendarAlt} />
            &nbsp;
            5 days
          </DivWeatherListHeader>
          <DivWeatherListInfoWrapper>
            <DivRow>
              <DivCol maxWidth={40}>
                <DivWeatherImage>
                  <Image 
                    width={SIZE(96)} 
                    height={SIZE(96)}
                    breakPointHeight={SIZE(24)}
                    breakPointWidth={SIZE(24)}
                    src={`${ICON_LIST[IconWeather]}`}
                  />
                </DivWeatherImage>
              </DivCol>
              <DivCol maxWidth={60}>
                <DivWeatherListTitle>
                  Tomorrow
                </DivWeatherListTitle>
                <DivWeatherListTemp>
                  <p className="curr-temp">
                    {tomorrowTemp}
                    <small className="max-temp">
                      /
                      {tomorrowMaxTemp}
                      <span>&#176;</span>
                    </small>
                  </p>
                </DivWeatherListTemp>
                <DivWeatherListInfo>
                  {`${tomorrowWeather}-${tomorrowWeatherDesc}`}
                </DivWeatherListInfo>
              </DivCol>
            </DivRow>
          </DivWeatherListInfoWrapper>
          <Divider />
          <DivRow>
            <DivCol maxWidth={25}>
              <FontAwesomeIcon icon={faWind} size="1x" />
              <TextWrapper>
                {`${WeatherWind} m/s`}
              </TextWrapper>
              <span className="desc">Wind</span>
            </DivCol>
            <DivCol maxWidth={25}>
              <FontAwesomeIcon icon={faDroplet} size="1x" />
              <TextWrapper>
                {`${WeatherHumid}%`}
              </TextWrapper>
              <span className="desc">Humidity</span>
            </DivCol>
            <DivCol maxWidth={25}>
              <FontAwesomeIcon icon={faTemperatureHigh} size="1x" />
              <TextWrapper>
                {WeatherMaxTemp}
                <span>&#176; <small>C</small></span>
              </TextWrapper>
              <span className="desc">Max Temp</span>
            </DivCol>
            <DivCol maxWidth={25}>
              <FontAwesomeIcon icon={faTemperatureLow} size="1x" />
              <TextWrapper>
                {WeatherMinTemp}
                <span>&#176; <small>C</small></span>
              </TextWrapper>
              <span className="desc">Min Temp</span>
            </DivCol>
          </DivRow>
        </DivWeatherInfo>

        <DivWeatherListWrapper>
          {renderingWeatherList()}
        </DivWeatherListWrapper>
      </DivWeatherWrapper>
    </DivWrapperHome>
  );
};

export default ForecastList;
