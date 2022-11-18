import styled from 'styled-components';
import { COLOR, MOBILE_BREAKPOINT, SIZE } from '../../Constants/style';

export const DivWeatherListHeader = styled.div`
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
    font-size: ${SIZE(6)};
  }
`;

export const DivWeatherListTitle = styled.div`
  font-size: 20px;
  text-align: left;
  font-weight: 200;
`;

export const DivWeatherListInfoWrapper = styled.div`
  margin: 30px 0 0 0;
`;

export const DivWeatherListTemp = styled.div`
  text-align: left;
  .curr-temp {
    font-size: 64px;
    font-weight: bold;
    margin: 0;
  }
  .max-temp {
    color: ${COLOR.LIGHT_BLUE};
    font-weight: 300;
    font-size: 30px;
  }
`;

export const DivWeatherListInfo = styled.div`
  color: ${COLOR.LIGHT_BLUE};
  font-size: 12px;
  text-align: left;
`;

export const DivWeatherListWrapper = styled.div`
  margin: 20px 0 0 0;
  padding: ${SIZE(8)} ${SIZE(14)};

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DivWeatherListItem = styled.div`
  color: ${COLOR.GREY_TEXT};
  padding: 15px 10px;
  min-width: 33.3333333%;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  .curr-temp {
    color: ${COLOR.WHITE};
    margin: 0 3px;
  }
  .min-temp {
    margin: 0 3px;
  }

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    justify-content: center;
  }
`;

export const DivWeatherListName = styled.div`
  margin: 0;
`;
