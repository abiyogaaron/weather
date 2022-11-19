import React, { FC } from 'react';
import { COLOR } from '../../Constants/style';
import { DivLoader } from './style';

const Loader: FC = () => {
  return (
    <DivLoader data-testid="app-loader">
      <svg width="34" height="12" viewBox="-1 0 33 12">
        <circle
          data-testid="circle-loader"
          className="stardust-spinner"
          cx="4"
          cy="6"
          r="4"
          fill={COLOR.PRIMARY_BLUE}
        />
        <circle
          data-testid="circle-loader"
          className="stardust-spinner"
          cx="16"
          cy="6"
          r="4"
          fill={COLOR.PRIMARY_BLUE}
        />
        <circle
          data-testid="circle-loader"
          className="stardust-spinner"
          cx="28"
          cy="6"
          r="4"
          fill={COLOR.PRIMARY_BLUE}
        />
      </svg>
    </DivLoader>
  );
};

export default Loader;
