import { useState } from 'react';
import { Bookmark as Template } from './Bookmark';

export default {
  title: 'Atoms/Bookmark',
  component: Template,
  parameters: {
    backgrounds: { default: 'light' },
    controls: { hideNoControlsWarning: true },
  },
};

export const Bookmark = (args) => {
  const [isMarked, setIsMarked] = useState(args.isMarked);
  return <Template isMarked={isMarked} onClick={() => setIsMarked(!isMarked)} />;
};
