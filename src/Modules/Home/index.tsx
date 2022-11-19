import React, { 
  FC, 
  ReactNode, 
  useCallback, 
  useEffect, 
  useMemo, 
  useRef, 
  useState,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { batch, shallowEqual, useDispatch, useSelector } from 'react-redux';
import Moment from 'moment';

import { TWeatherParams } from '../../Interface';
import { IForecast } from '../../Interface/responses';
import { ISearchData } from '../../Interface/state';
import { FIVE_MINUTES, ICON_LIST, LIMIT_SEARCH } from '../../Constants';
import { SIZE } from '../../Constants/style';

import { AppDispatch, RootState } from '../../Redux';
import { resetState, setClosestWeather, setWeatherInfo } from '../../Redux/home';
import { getCities, getForecast } from '../../Services/home';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarDays,
  faChevronLeft,
  faChevronRight,
  faDroplet,
  faLocationDot,
  faTemperatureHigh,
  faTemperatureLow,
  faWarning,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { 
  DescText, 
  DivCol,
  DivDate,
  Divider,
  DivInputWrapper,
  DivOverlay,
  DivRow,
  DivWeatherImage,
  DivWeatherInfo,
  DivWeatherTitle,
  DivWeatherWrapper,
  DivWrapperHome,
  InputSearch,
  TemparetureText,
  TemparetureTextSmall,
  TextWrapper,
  WeatherCardFooter,
  WeatherCardHourly,
  WeatherCardHourText,
  WeatherDetails,
  WeatherDetailsHeader,
  WeatherHourlyInner,
  WeatherHourlyWrapper,
  WeatherText,
} from './style';
import { formatDate, FormatTemp } from '../../Utils';

import Image from '../../Components/Image';
import Loader from '../../Components/Loader';
import Popup from '../../Components/Popup';
import { useGeolocation } from './hooks';

const Home: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { lat: latParams, lon: lonParams, date } = useParams<TWeatherParams>();

  const navigator = useNavigate();

  const isSearching = useSelector((state: RootState) => state.home.isSearching);
  const isLoading = useSelector((state: RootState) => state.home.isLoading);
  const posWeather = useSelector((state: RootState) => state.home.closestPosWeather);
  const cityName = useSelector((state: RootState) => state.home.city.split(', ')[0] );
  const latitude = useSelector((state: RootState) => state.home.lat);
  const longitude = useSelector((state: RootState) => state.home.lon);
  const forecastList = useSelector((state: RootState) => state.home.forecastData, shallowEqual);
  const searchData = useSelector((state: RootState) => state.home.searchData, shallowEqual);

  const [isSearchBoxEmpty, setIsSearchBoxEmpty] = useState<boolean>(true);
  const [isSearchBoxfocus, setIsSearchBoxFocus] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  const specificDate = date ? date : formatDate(new Date());
  let timeout = useRef<number>(0);
  let interval = useRef<number>(0);
  
  const todayWeather: IForecast | undefined = useMemo(() => {
    if (forecastList[specificDate]) {
      return forecastList[specificDate][posWeather];
    }
  }, [forecastList, posWeather]);

  const WeatherTitle = useMemo(() => {
    if (
      Moment().isSame(todayWeather?.dt_txt, 'day') &&
      Moment().isSame(todayWeather?.dt_txt, 'month') &&
      Moment().isSame(todayWeather?.dt_txt, 'year')
    ) {
      return 'Today';
    }
    if (
      Moment().add(1, 'days').isSame(todayWeather?.dt_txt, 'day') &&
      Moment().add(1, 'days').isSame(todayWeather?.dt_txt, 'month') &&
      Moment().add(1, 'days').isSame(todayWeather?.dt_txt, 'year')
    ) {
      return 'Tomorrow';
    }
    return Moment(todayWeather?.dt_txt).format('MMM Do');
  }, [todayWeather]);

  /** Local variable */
  const IconWeather = todayWeather?.weather[0].icon || '01d';
  const WeatherTempt = FormatTemp(todayWeather?.main.temp || 0);
  const WeatherMain = todayWeather?.weather[0].main;
  const WeatherDesc = todayWeather?.weather[0].description;
  const WeatherHumid = todayWeather?.main.humidity || 0;
  const WeatherWind = todayWeather?.wind.speed || 0;
  const WeatherMaxTemp = FormatTemp(todayWeather?.main.temp_max || 0);
  const WeatherMinTemp = FormatTemp(todayWeather?.main.temp_min || 0);
  const WeatherDate = Moment(todayWeather?.dt_txt).format('MMM Do YY');
  const totalPages = forecastList[specificDate] ? Math.ceil(forecastList[specificDate].length / 4) : 0;
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === totalPages - 1;
  const isUseGeo = !!(latParams && lonParams);

  const { lat, lon, geoError } = useGeolocation(!isUseGeo);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(geoError.isError);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeout.current);

    if (!isSearchBoxfocus) {
      setIsSearchBoxFocus(true);
    }
    timeout.current = window.setTimeout(() => {
      const value = e.target.value;
      if (!value) {
        setIsSearchBoxEmpty(true);
        setIsSearchBoxFocus(false);
      } else if (value) {
        setIsSearchBoxEmpty(false);
      }

      dispatch(getCities(value));
    }, 500);
  }, [isSearchBoxEmpty, isSearchBoxfocus]);

  const handleClickCity = useCallback((item: ISearchData) => {
    batch(() => {
      setIsSearchBoxEmpty(true);
      setIsSearchBoxFocus(false);
      dispatch(setWeatherInfo({
        city: item.city,
        lat: item.lat,
        lon: item.lon,
      }));
      dispatch(getForecast(item.lat.toString(), item.lon.toString(), false, date));
    });
  }, []);

  const renderingSuggestions = useCallback((): ReactNode => {
    if (isSearchBoxEmpty) {
      return null;
    }

    if (isSearching) {
      let content = [];
      for (let i = 0; i < LIMIT_SEARCH; i++) {
        content.push(
          <div 
            className="autocomplete-item autocomplete-item-loader"
            key={`loader-${i}`}
          >
          </div>,
        );
      }
      return content;
    }

    return searchData.map((element, idx) => {
      return (
        <div 
          className="autocomplete-item" 
          key={`${element.city}-${idx}`}
          onClick={() => handleClickCity(element)}
        >
          {element.city}
        </div>
      );
    });
  }, [searchData, isSearchBoxEmpty, isSearching]);

  const renderingWeatherHourly = useCallback(() => {
    if (!forecastList[specificDate]) {
      return null;
    }

    return forecastList[specificDate].map((item, idx) => {
      const isActive = idx === posWeather;
      return (
        <WeatherCardHourly 
          key={`weathercard-${idx}`} 
          isActive={isActive}
          onClick={() => {
            if (isActive) {
              return;
            }
            dispatch(setClosestWeather(idx));
          }}
        >
          <TemparetureTextSmall>
            {FormatTemp(item.main.temp)}
            <span>&#176; <small>C</small></span>
          </TemparetureTextSmall>
          <Image 
            width={SIZE(32)} 
            height={SIZE(32)}
            breakPointHeight={SIZE(12)}
            breakPointWidth={SIZE(12)}
            src={`${ICON_LIST[item.weather[0].icon]}`}
          />
          <WeatherCardHourText isActive={isActive}>
            {`${Moment(item.dt_txt).format('HH:mm')}`}
          </WeatherCardHourText>
        </WeatherCardHourly>
      );
    });
  }, [forecastList, posWeather]);

  const renderingWeather = () => {
    return (
      <DivWeatherWrapper data-testid="weather-wrapper">
        <DivWeatherInfo>
          <DivWeatherTitle>
            <FontAwesomeIcon icon={faLocationDot} />
            &nbsp;
            {cityName}
          </DivWeatherTitle>

          <DivWeatherImage>
            <Image 
              width={SIZE(196)} 
              height={SIZE(196)}
              breakPointHeight={SIZE(48)}
              breakPointWidth={SIZE(48)}
              src={`${ICON_LIST[IconWeather]}`}
            />
          </DivWeatherImage>
          <TemparetureText>
            {WeatherTempt}
            <span>&#176; <small>C</small></span>
          </TemparetureText>
          <WeatherText>
            {WeatherMain}
          </WeatherText>
          <DescText>
            {WeatherDesc}
          </DescText>
          <DivDate>
            <FontAwesomeIcon icon={faCalendarDays}/>
            &nbsp;
            {WeatherDate}
          </DivDate>
          <Divider />

          <DivRow data-testid="weather-info-detail">
            <DivCol maxWidth={25}>
              <FontAwesomeIcon icon={faWind} size="2x" />
              <TextWrapper>
                {`${WeatherWind} m/s`}
              </TextWrapper>
              <span className="desc">Wind</span>
            </DivCol>
            <DivCol maxWidth={25}>
              <FontAwesomeIcon icon={faDroplet} size="2x" />
              <TextWrapper>
                {`${WeatherHumid}%`}
              </TextWrapper>
              <span className="desc">Humidity</span>
            </DivCol>
            <DivCol maxWidth={25}>
              <FontAwesomeIcon icon={faTemperatureHigh} size="2x" />
              <TextWrapper>
                {WeatherMaxTemp}
                <span>&#176; <small>C</small></span>
              </TextWrapper>
              <span className="desc">Max Temp</span>
            </DivCol>
            <DivCol maxWidth={25}>
              <FontAwesomeIcon icon={faTemperatureLow} size="2x" />
              <TextWrapper>
                {WeatherMinTemp}
                <span>&#176; <small>C</small></span>
              </TextWrapper>
              <span className="desc">Min Temp</span>
            </DivCol>
          </DivRow>
        </DivWeatherInfo>

        <WeatherDetails>
          <WeatherDetailsHeader>
            <p className="current-weather">{WeatherTitle}</p>
            <p className="details-weather" onClick={() => navigator(`/forecasts/${latitude}/${longitude}`)}>
              5 days <FontAwesomeIcon icon={faChevronRight} />
            </p>
          </WeatherDetailsHeader>
          <WeatherHourlyWrapper>
            <WeatherHourlyInner currentIndex={currentIndex}>
              {renderingWeatherHourly()}
            </WeatherHourlyInner>
          </WeatherHourlyWrapper>
            {totalPages > 1 && (
              <WeatherCardFooter>
                <FontAwesomeIcon 
                  className={isPrevDisabled ? 'arrow arrow-disabled' : 'arrow'} 
                  icon={faChevronLeft}
                  onClick={() => {
                    if (isPrevDisabled) {
                      return;
                    }
                    setCurrentIndex(currentIndex - 1);
                  }}
                />
                <FontAwesomeIcon 
                  className={isNextDisabled ? 'arrow arrow-disabled' : 'arrow'} 
                  icon={faChevronRight} 
                  onClick={() => {
                    if (isNextDisabled) {
                      return;
                    }
                    setCurrentIndex(currentIndex + 1);
                  }}
                />
              </WeatherCardFooter>
            )}
        </WeatherDetails>
        <DivOverlay 
          isOn={isSearchBoxfocus}
        />
        <Popup
          isOpen={isPopupOpen}
          title={geoError.title}
          desc={geoError.desc}
          icon={faWarning}
          onClose={() => setIsPopupOpen(false) }
        />
      </DivWeatherWrapper>
    );
  };

  useEffect(() => {
    if (geoError.isError) {
      setIsPopupOpen(true);
    }
  }, [geoError]);

  useEffect(() => {
    const latitudeParam = latParams ? latParams : lat.toString();
    const longitudeParam = lonParams ? lonParams : lon.toString();
    dispatch(getForecast(latitudeParam, longitudeParam, true, date));
    return () => {
      dispatch(resetState());
    };
  }, [lat, lon]);

  useEffect(() => {
    interval.current = window.setInterval(() => {
      dispatch(getForecast(latitude.toString(), longitude.toString(), true, date, true));
    }, FIVE_MINUTES);

    return () => {
      window.clearInterval(interval.current);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <DivWrapperHome>
      <DivInputWrapper>
        <InputSearch 
          type="text" 
          placeholder="Type a city name ..."
          onChange={handleChange}
        />
        <div className="autocomplete-wrapper">
          {renderingSuggestions()}
        </div>
      </DivInputWrapper>
      {renderingWeather()}
    </DivWrapperHome>
  );
};

export default Home;
