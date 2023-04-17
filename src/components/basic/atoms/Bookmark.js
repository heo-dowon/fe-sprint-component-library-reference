import { Icon } from './Icon';
import globalToken from '../../../tokens/global.json';

const { Yellow, Gray } = globalToken;

export const Bookmark = ({ isMarked, ...rest }) => {
  return (
    <Icon
      icon='Star'
      color={isMarked ? Yellow.value : Gray[700].value}
      fill={isMarked ? Yellow.value : 'none'}
      {...rest}
    />
  );
};
