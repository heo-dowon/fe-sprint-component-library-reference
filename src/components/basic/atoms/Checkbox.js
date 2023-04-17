import { Icon } from './Icon';
import globalToken from '../../../tokens/global.json';

const { Accent, Gray } = globalToken;

export const Checkbox = ({ isChecked, ...rest }) => {
  return (
    <Icon
      icon={isChecked ? 'CheckCircle' : 'Circle'}
      color={isChecked ? Accent.value : Gray[700].value}
      {...rest}
    />
  );
};
