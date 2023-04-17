import { useState } from 'react';
import { Toast } from './Toast';
import { styled } from 'styled-components';
import { useEffect } from 'react';

const ToastsContainer = styled.div`
  position: fixed;
  padding: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &.top-left {
    top: 0;
    left: 0;
  }

  &.top-right {
    top: 0;
    right: 0;
    align-items: flex-end;
  }

  &.bottom-left {
    bottom: 0;
    left: 0;
    justify-content: flex-end;
  }

  &.bottom-right {
    bottom: 0;
    right: 0;
    align-items: flex-end;
    justify-content: flex-end;
  }

  pointer-events: none;
`;

export const Toaster = ({ position, push, duration, toastStyle, ...args }) => {
  const [toasts, addToast] = useState([]);

  useEffect(() => {
    if (push) {
      addToast((prevToasts) => [...prevToasts, push]);
    }
  }, [push]);

  const removeToast = (id) => {
    addToast((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastsContainer className={position} {...args}>
      {toasts.map((toast) => (
        <Toast
          style={toastStyle}
          {...toast}
          key={toast.id}
          duration={duration}
          handleClose={() => removeToast(toast.id)}
        />
      ))}
    </ToastsContainer>
  );
};
