import { Divider } from '../basic/Divider';
import { TabItem } from './TabItem';

export default {
  title: 'Composed/Tabs',
  component: TabItem,
  parameters: {
    backgrounds: {
      default: { value: 'light' },
    },
  },
  controls: { hideNoControlsWarning: true },
};

const Template = ({ title, list, ...args }) => {
  return (
    <div {...args}>
      <Divider title={title} />
      {list.map((item, idx) => (
        <TabItem {...item} index={idx} />
      ))}
    </div>
  );
};

export const Sample = (args) => <Template {...args} />;
Sample.args = {
  title: '프로젝트',
  list: [
    {
      label: '전체',
      icon: 'List',
      count: 3,
    },
    {
      label: '중요',
      icon: 'Star',
      count: 0,
    },
    { label: '오늘 할 일', icon: 'Calendar', count: 1 },
  ],
  style: { width: '20rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' },
};

export const Default = {
  args: {
    label: '전체',
    icon: 'List',
    count: 3,
    style: { width: '20rem' },
  },
};
