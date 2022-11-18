import styled from 'styled-components';
import { COLOR } from './Constants/style';

export const DivApp = styled.div`
  background-color: ${COLOR.BACKGROUND_BLUE};
  display: flex;
  font-family: Roboto , "Helvetica Neue", Helvetica, Arial,
   文泉驛正黑, "WenQuanYi Zen Hei", "Hiragino Sans GB",
   "儷黑 Pro", "LiHei Pro", "Heiti TC", 微軟正黑體, "Microsoft JhengHei UI",
   "Microsoft JhengHei", sans-serif;
  min-height: 100vh;
  justify-content: center;
  margin: 0 auto;
  width: 100vw;
  font-kerning: normal;
  word-spacing: normal;
  letter-spacing: normal;

  p, span, p span {
    user-select:  none;
    font-kerning: normal;
    word-spacing: normal;
    letter-spacing: normal;
  }
`;
