import { useState } from 'react';
import { Icon } from '../basic/atoms/Icon';
import { Modal, ModalBackDrop } from './Modal';
import { BodyText } from '../basic/atoms/Typography';
import { Button } from '../basic/buttons/Button';

const Template = ({ backdrop, align, ...args }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <Button primary={!isOpened} label='Open Modal' onClick={() => setIsOpened(!isOpened)} />
      {isOpened && (
        <ModalBackDrop backdrop={backdrop} {...args}>
          <Modal
            style={{
              width: '30rem',
              padding: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div>
              <BodyText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quae, consequatur amet
                quasi expedita dolorem?
              </BodyText>
            </div>
            <Icon icon='X' size={40} onClick={() => setIsOpened(!isOpened)} />
          </Modal>
        </ModalBackDrop>
      )}
    </div>
  );
};

export default {
  title: 'Composed/Modal',
  component: Template,
  parameters: {
    backgrounds: {
      default: { value: 'light' },
    },
  },

  controls: { hideNoControlsWarning: true },
};

export const WithBackdrop = (args) => <Template {...args} />;
WithBackdrop.args = {
  backdrop: true,
};
export const WithoutBackdrop = (args) => <Template {...args} />;
WithoutBackdrop.args = {
  backdrop: false,
};
