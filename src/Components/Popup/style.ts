import styled from 'styled-components';

import { COLOR, SIZE } from '../../Constants/style';

export const DivPopupContainer = styled.div<{ open: boolean }>`
  text-align: left;
  visibility: ${(p) => (p.open ? 'visible' : 'hidden')}; 
  height: 100vh;
  width: 100%;
  z-index: 5;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivPopup = styled.div`
  width: ${SIZE(305)};
  border-radius: ${SIZE(10)};
  background-color: ${COLOR.WHITE};
  text-align: center;
  border-radius: ${SIZE(4)};
`;

export const DivPopupContent = styled.div`
  padding: ${SIZE(20)};
`;

export const DivPopupTitle = styled.div`
  font-size: ${SIZE(16)};
  font-weight: 500;
  margin-bottom: ${SIZE(16)};
`;

export const DivPopupDesc = styled.div`
  font-size: ${SIZE(14)};
  color: ${COLOR.DISABLED_GREY};
  text-align: left;
`;

export const HrPopup = styled.hr`
  margin: 0;
  border: ${SIZE(1)} solid ${COLOR.GREY_09};
`;

export const DivPopupCta = styled.div`
  padding: ${SIZE(12)};
  font-size: ${SIZE(16)};
  color: ${COLOR.PRIMARY_BLUE};
  cursor: pointer;
`;
