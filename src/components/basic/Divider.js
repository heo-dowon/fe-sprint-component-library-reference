/*** 4.TODO: Divider의 스타일 및 스토리를 구현하세요. ***/

import { styled } from 'styled-components';
import { LabelText } from './atoms/Typography';
import globalToken from '../../tokens/global.json';

// 디자인 토큰에 지정된 값을 사용해 스타일을 지정합니다.
const { Spacing, Gray, divideBorderBottom } = globalToken;

/*** 4-1.TODO: 하드코딩된 값을 디자인 토큰의 값으로 변경하세요. ***/
export const DividerContainer = styled.div`
  padding: ${Spacing[8].value}px;
  color: ${Gray[700].value};
  border-bottom: ${divideBorderBottom.width.value}px ${divideBorderBottom.style.value}
    ${divideBorderBottom.color.value};
`;

export const Divider = ({ title, ...rest }) => {
  return (
    <DividerContainer {...rest}>
      <LabelText children={title} />
    </DividerContainer>
  );
};
