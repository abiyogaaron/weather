import styled from 'styled-components';
import { COLOR, MOBILE_BREAKPOINT, SIZE } from '../../Constants/style';

interface IDivOverlay {
  isOn: boolean;
}
interface IDivWeatherCardActive {
  isActive: boolean;
}
interface IWeatherCardHourText {
  isActive: boolean;
}
interface IWeatherInner {
  currentIndex: number;
}
interface IDivCol {
  maxWidth: number;
}

export const DivWrapperHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Poppins', sans-serif;
`;

export const DivInputWrapper = styled.div`
  margin: ${SIZE(12)} ${SIZE(12)};
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 2;

  .autocomplete-wrapper {
    position: absolute;
    width: inherit;
    top: 37px;
    left: 0;
    right: 0;
    background-color: ${COLOR.WHITE};
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    .autocomplete-item {
      border: 0;
      z-index: 99;
      padding: ${SIZE(8)} ${SIZE(12)};
      cursor: pointer;

      @media (min-width: ${MOBILE_BREAKPOINT}px) {
        padding: ${SIZE(2)} ${SIZE(2)};
      }
    }

    @media (min-width: ${MOBILE_BREAKPOINT}px) {
      top: 50px;
    }

    .autocomplete-item-loader {
      animation: skeleton-loading 1s linear infinite alternate;
      margin: 10px 10px;
    }
    
    @keyframes skeleton-loading {
      0% {
        background-color: hsl(200, 20%, 80%);
      }
      100% {
        background-color: hsl(200, 20%, 95%);
      }
    }
  }
`;

export const InputSearch = styled.input`
  height: 32px;
  border: 0;
  border-radius: 6px;
  padding: ${SIZE(12)} ${SIZE(12)};
  font-size: 16px;
  box-sizing: border-box;

  :focus {
    outline: none;
  }

  ::-webkit-input-placeholder {
    font-family: 'Poppins', sans-serif;
  }
  :-ms-input-placeholder {
    font-family: 'Poppins', sans-serif;
  }
  :-moz-placeholder {
    font-family: 'Poppins', sans-serif;
  }
  ::-moz-placeholder {
    font-family: 'Poppins', sans-serif;
  }

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    padding: ${SIZE(6)} ${SIZE(6)};
  }
`;

export const DivWeatherWrapper = styled.div`
  position: relative;
`;

export const DivWeatherInfo = styled.div`
  background-image: linear-gradient(to bottom, ${COLOR.THIRD_BLUE}, ${COLOR.PRIMARY_BLUE}, ${COLOR.SECONDARY_BLUE}, ${COLOR.FOURTH_BLUE});
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  box-shadow: 0 0 0 1.5px ${COLOR.BORDER_BLUE}, 0 1em 0 0 ${COLOR.SHADOW_BLUE};
  padding: ${SIZE(20)};

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    border-radius: 0;
    box-shadow: none;
    padding: ${SIZE(8)};
  }
`;

export const DivOverlay = styled.div<IDivOverlay>`
  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    ${(p) => {
    if (p.isOn) {
      return (`
          position: absolute;
          min-height: 100vh;
          top: -2px;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0,0,0,0.6);
          z-index: 1;
        `);
    }
    return '';
  }}
  }
`;

export const DivWeatherTitle = styled.div`
  font-size: ${SIZE(18)};
  color: ${COLOR.WHITE};
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;

  .arrow-back {
    float: left;
    cursor: pointer;
  }

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    font-size: ${SIZE(8)};
  }
`;

export const DivWeatherImage = styled.div`
  display: flex;
  justify-content: center;
  padding: ${SIZE(6)};

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    padding: ${SIZE(2)};
  }
`;

export const TemparetureText = styled.h1`
  color: ${COLOR.WHITE};
  font-weight: bold;
  margin: 10px 0;
  text-align: center;
  font-size: 72px;

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    font-size: 48px;
  }
`;
export const TemparetureTextSmall = styled.h1`
  color: ${COLOR.WHITE};
  font-weight: bold;
  margin: 0;
  text-align: center;
  font-size: 14px;
`;
export const WeatherText = styled.h5`
  font-weight: 500;
  color: ${COLOR.WHITE};
  text-align: center;
  font-size: 24px;
  margin: 0;
`;
export const DescText = styled.p`
  font-weight: 200;
  color: ${COLOR.WHITE};
  text-align: center;
  font-size: 14px;
  margin: 0;
`;
export const Divider = styled.hr`
  border-top: 1px solid ${COLOR.LIGHT_BLUE};
  opacity: 0.5;
  width: 75vw;
`;

export const DivRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const DivCol = styled.div<IDivCol>`
  color: ${COLOR.WHITE};
  padding: 10px;
  min-width: ${(p) => `${p.maxWidth}`}%;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;

  .desc {
    font-size: 10px;
    color: ${COLOR.LIGHT_BLUE};
  }
`;
export const DivDate = styled.div`
  color: ${COLOR.WHITE};
  padding: 10px;
  align-items: baseline;
  display: flex;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0 0 0;
  justify-content: center;
`;

export const WeatherDetails = styled.div`
  margin: 20px 0 0 0;
  padding: ${SIZE(8)} ${SIZE(14)};
`;
export const WeatherDetailsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .current-weather {
    color: ${COLOR.WHITE};
    font-size: 18px;
  }
  .details-weather {
    cursor: pointer;
    font-size: 14px;
    color: ${COLOR.DISABLED_GREY};
  }
`;

export const WeatherHourlyWrapper = styled.div`
  overflow: hidden;
`;
export const WeatherHourlyInner = styled.div<IWeatherInner>`
  display: flex;
  white-space: nowrap;
  transition: transform;
  transform: ${(p) => `translateX(-${p.currentIndex * 100}%)`};
  transition: transform 1s; 
`;
export const WeatherCardHourly = styled.div<IDivWeatherCardActive>`
  display: flex;
  flex-direction: column;
  border-radius: 30%;
  margin: ${SIZE(4)};
  padding: ${SIZE(4)} ${SIZE(12)};
  box-sizing: border-box;
  min-width: 23%;
  max-width: 25%;
  text-align: center;
  flex: 1;
  ${(p) => {
    if (p.isActive) {
      return `
        background-image: linear-gradient(to bottom, ${COLOR.THIRD_BLUE}, ${COLOR.PRIMARY_BLUE}, ${COLOR.SECONDARY_BLUE}, ${COLOR.FOURTH_BLUE});
        border: 1px solid ${COLOR.BORDER_BLUE};
      `;
    }
    return `
      border: 1px solid ${COLOR.DISABLED_GREY};
    `;
  }}
  cursor: pointer;

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    border: 1px solid ${COLOR.BORDER_BLUE };
    border-radius: 8px;
    margin: ${SIZE(2)};
    padding: ${SIZE(2)} ${SIZE(6)};
  }
`;
export const WeatherCardHourText = styled.div<IWeatherCardHourText>`
  margin: 0;
  color: ${(p) => p.isActive ? COLOR.WHITE : COLOR.DISABLED_GREY}
`;

export const WeatherCardFooter = styled.div`
  display: flex;
  justify-content: center;
  color: ${COLOR.WHITE};
  margin-top: 10px;

  .arrow {
    margin: 0 8px;
    cursor: pointer;
  }
  .arrow-disabled {
    color: ${COLOR.DISABLED_GREY};
  }
`;
