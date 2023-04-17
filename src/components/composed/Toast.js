import React, { useEffect, useState } from 'react';
import { styled, css, keyframes } from 'styled-components';
import globalToken from '../../tokens/global.json';
import { Modal } from './Modal';
import { BodyText, HeadingText } from '../basic/atoms/Typography';
import { Icon } from '../basic/atoms/Icon';

const { Spacing, Positive, Negative, Yellow } = globalToken;

const ToastContainer = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${Spacing[16].value}px ${Spacing[24].value}px;
  border-left: ${Spacing[8].value}px solid;
  border-color: ${(props) => {
    switch (props.level) {
      case 'success':
        return `${Positive.value}`;
      case 'warning':
        return `${Yellow.value}`;
      case 'error':
        return `${Negative.value}`;
      default:
        return `white`;
    }
  }};

  opacity: 0;
  transform: translateY(10px);
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  max-width: 25rem;
  z-index: 1;
  pointer-events: visible;

  ${(props) =>
    props.visible &&
    css`
      animation-name: ${toastFadeInAnimation};
    `}
  ${(props) =>
    !props.visible &&
    css`
      animation-name: ${toastFadeOutAnimation};
    `}
`;

const toastFadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const toastFadeOutAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
`;

export const Toast = ({ level, title, detail, duration, handleClose, ...rest }) => {
  const [visible, setVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (duration) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [duration]);

  useEffect(() => {
    if (!visible && isAnimating) {
      const animationTimeout = setTimeout(() => {
        handleClose();
        setIsAnimating(false);
      }, 300); // 애니메이션 시간(0.3초) 후에 컴포넌트를 제거합니다.

      return () => {
        clearTimeout(animationTimeout);
      };
    }
  }, [visible, isAnimating, handleClose]);

  return (
    <ToastContainer level={level} visible={visible} {...rest}>
      <div>
        <HeadingText>{title}</HeadingText>
        <BodyText>{detail}</BodyText>
      </div>
      <Icon icon='X' size={40} onClick={() => setVisible(false)} />
    </ToastContainer>
  );
};
