import React, { FC, memo } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  DivPopup,
  DivPopupContainer,
  DivPopupContent,
  DivPopupCta,
  DivPopupDesc,
  DivPopupTitle,
  HrPopup,
} from './style';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  icon?: IconDefinition;
  title?: string;
  desc?: string;
  close?: string;
}

const Popup: FC<PopupProps> = (props) => {
  const {
    isOpen,
    onClose,
    icon,
    title,
    desc,
    close,
  } = props;

  return (
    <DivPopupContainer open={isOpen}>
      <DivPopup data-testid="popup-body">
        <DivPopupContent>
          {icon && <FontAwesomeIcon icon={icon} size="2x" />}
          {title && <DivPopupTitle>{title}</DivPopupTitle>}
          {desc && <DivPopupDesc>{desc}</DivPopupDesc>}
        </DivPopupContent>
        <HrPopup />
        <DivPopupCta data-testid="popup-button" onClick={onClose} role="button">{close || 'Ok'}</DivPopupCta>
      </DivPopup>
    </DivPopupContainer>
  );
};

export default memo(Popup);
