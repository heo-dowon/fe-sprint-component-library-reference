import { useState } from 'react';
import { Checkbox as Template } from './Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Template,
  parameters: {
    backgrounds: { default: 'light' },
    controls: { hideNoControlsWarning: true },
  },
};

export const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(true);
  return <Template isChecked={isChecked} onClick={() => setIsChecked(!isChecked)} />;
};
