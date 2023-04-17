import { useState } from 'react';
import { Toaster } from './Toaster';
import { Button } from '../basic/buttons/Button';
import { Toast } from './Toast';

export default {
  title: 'Composed/Toast',
  component: Toaster,
  parameters: {
    backgrounds: {
      default: { value: 'light' },
    },
  },
  controls: { hideNoControlsWarning: true },
};

const ClickToastsTemplate = ({ position, duration, ...args }) => {
  const levels = ['success', 'error', 'warning'];
  const [toast, addToast] = useState(0);

  const makeToast = (level) => {
    const id = Date.now().toString(); // 고유한 ID 생성

    const newToast = {
      title: level[0].toUpperCase() + level.slice(1),
      detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      level,
      id,
    };

    addToast(newToast);
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
          gap: '8px',
        }}
      >
        {levels.map((level) => (
          <Button
            primary
            level={level}
            label={`${level[0].toUpperCase() + level.slice(1)} Toast`}
            onClick={() => makeToast(level)}
          />
        ))}
      </div>
      <Toaster push={toast} position={position} duration={duration} />
    </div>
  );
};

export const Sample = (args) => <ClickToastsTemplate {...args} />;
Sample.argTypes = {
  position: {
    options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    control: { type: 'radio' },
  },
};
Sample.args = {
  duration: 4000,
  position: 'bottom-right',
};

const ToastTemplate = (args) => <Toast {...args} />;

export const Success = (args) => <ToastTemplate {...args} />;
Success.argTypes = {
  level: { options: ['success', 'error', 'warning'], control: { type: 'radio' } },
};
Success.args = {
  level: 'success',
  title: 'Success',
  detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
};

export const Error = (args) => <ToastTemplate {...args} />;
Error.argTypes = {
  level: { options: ['success', 'error', 'warning'], control: { type: 'radio' } },
};
Error.args = {
  level: 'error',
  title: 'Error',
  detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
};

export const Warning = (args) => <ToastTemplate {...args} />;
Warning.argTypes = {
  level: { options: ['success', 'error', 'warning'], control: { type: 'radio' } },
};
Warning.args = {
  level: 'warning',
  title: 'Warning',
  detail: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
};
