import { useState } from 'react';
import { Dropdown } from './Dropdown';
import { ItemBox } from '../basic/ItemBox';

export default {
  title: 'Composed/Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

const Template = ({ label, list, ...args }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectItem, setSelectItem] = useState(label);

  return (
    <Dropdown
      isExpanded={isExpanded}
      label={selectItem}
      onButtonClick={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      {list.map((item) => (
        <ItemBox
          text={item}
          onClick={() => {
            setSelectItem(item);
            setIsExpanded(!isExpanded);
          }}
        />
      ))}
    </Dropdown>
  );
};

export const Sample = (args) => <Template {...args} />;
Sample.args = {
  label: '프로젝트',
  list: ['운동', '습관 만들기', '업무'],
};
