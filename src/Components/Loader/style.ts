import styled from 'styled-components';
import { COLOR } from '../../Constants/style';

export const DivLoader = styled.div`
  background-color: ${COLOR.BACKGROUND_BLUE};
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;

  .stardust-spinner {
    animation: 0.4s movement linear infinite;

    &:nth-child(2) {
      animation-delay: 0.1s;
    }

    &:nth-child(3) {
      animation-delay: 0.2s;
    }
  }

  @keyframes movement {
    0% {
      transform: translateY(2px);
    }

    50% {
      transform: translateY(-2px);
    }

    to {
      transform: translateY(2px);
    }
  }
`;
