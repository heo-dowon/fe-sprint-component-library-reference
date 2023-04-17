import { Icon } from '../basic/atoms/Icon';
import { LabelText } from '../basic/atoms/Typography';
import { styled } from 'styled-components';
import globalToken from '../../tokens/global.json';

const { Spacing, Negative, Black, White, Gray, Secondary, borderRadius } = globalToken;

export const TabItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${Spacing[8].value}px;
  border-radius: ${borderRadius[8].value}px;
  color: ${Black.value};

  &:hover {
    color: ${Secondary.value};
    background-color: ${Gray[500].value};
  }

  &:focus {
    color: ${White.value};
    background-color: ${Secondary.value};
  }
`;

export const TabItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${Spacing[16].value}px;

  & > svg {
    color: inherit;
  }
`;

export const CountBadge = styled(LabelText)`
  color: ${Negative.value};
`;

export const TabItem = ({ icon, label, count, index, ...rest }) => {
  return (
    <TabItemContainer {...rest} tabIndex={index || 0}>
      <TabItemWrapper>
        <Icon icon={icon} />
        <LabelText>{label}</LabelText>
      </TabItemWrapper>
      <CountBadge>{count > 0 && count}</CountBadge>
    </TabItemContainer>
  );
};
