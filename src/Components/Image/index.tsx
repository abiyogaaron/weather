import React, { FC } from 'react';
import styled from 'styled-components';
import { Property } from 'csstype';
import { MOBILE_BREAKPOINT } from '../../Constants/style';

interface ImageProps {
  alt?: string;
  height?: string;
  breakPointHeight?: string;
  breakPointWidth?: string;
  id?: string;
  src: string;
  objectFit?: Property.ObjectFit;
  onClick?: () => void;
  width?: string;
  zIndex?: Property.ZIndex;
  circle?: boolean;
  borderRadius?: string;
}
const Image: FC<ImageProps> = (p) => (
  <ImgPlaceholder
    breakPointHeight={p.breakPointHeight}
    breakPointWidth={p.breakPointWidth}
    alt={p.alt || 'image'}
    className="sp-voucher_img"
    height={p.height || 'auto'}
    id={p.id}
    objectFit={p.objectFit || 'fill'}
    onClick={p.onClick}
    src={p.src}
    width={p.width || '100%'}
    zIndex={p.zIndex || 'auto'}
    circle={p.circle}
    borderRadius={p.borderRadius}
  />
);

const ImgPlaceholder = styled.img<ImageProps>`
  height: ${(p) => p.height};
  object-fit: ${(p) => p.objectFit};
  width: ${(p) => p.width};
  z-index: ${(p) => p.zIndex};
  align-self: center;
  border-radius: ${(p) => (p.circle ? '50%' : '0%')};
  border-radius: ${(p) => p.borderRadius};

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    height: ${(p) => p.breakPointHeight};
    width: ${(p) => p.breakPointWidth};
  }
`;

export default Image;
