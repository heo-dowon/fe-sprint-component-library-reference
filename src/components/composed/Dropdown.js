import globalToken from '../../tokens/global.json';
import { ChevronButton } from '../basic/buttons/ChevronButton';
import { styled } from 'styled-components';
import { Modal } from './Modal';

const { Spacing, White } = globalToken;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacing.base.value}px;
  position: relative;
  width: fit-content;
`;

// Modal 스타일 컴포넌트를 확장하여 스타일을 정의합니다.
const DropdownList = styled(Modal)`
  margin-top: ${Spacing.base.value}px;
  background-color: ${White.value};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
`;

export const Dropdown = ({ label, children, isExpanded, onButtonClick, ...rest }) => {
  return (
    <DropdownContainer {...rest}>
      <ChevronButton isExpanded={isExpanded} label={label} onClick={onButtonClick} />
      {isExpanded && <DropdownList>{children}</DropdownList>}
    </DropdownContainer>
  );
};
