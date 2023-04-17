/*** 2.TODO: ChevronButton의 스타일 및 스토리를 구현하세요. ***/

import { styled } from 'styled-components';
import { LabelText } from '../atoms/Typography';
import { Icon } from '../atoms/Icon';
import globalToken from '../../../tokens/global.json';

// 디자인 토큰에 지정된 값을 사용해 스타일을 지정합니다.
const { Spacing, borderRadius, Primary, Gray, SecondaryDefault } = globalToken;

export const ChevronButtonContainer = styled.button`
  /* 기본 스타일 제거*/
  border: none;
  outline: none;
  background-color: transparent;

  /* 레이아웃 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${Spacing[64].value}px;

  /* 커스텀 스타일 */
  /*** 2-1.TODO: Figma를 참고해 커스텀 스타일을 지정하세요. ***/
  padding: ${Spacing[8].value}px ${Spacing[16].value}px;
  color: ${Primary.value};
  border-radius: ${borderRadius[8].value}px;

  &:hover {
    background-color: ${Gray[500].value};
  }

  &:focus {
    background-color: transparent;
    padding: ${Spacing[8].value - SecondaryDefault.width.value}px
      ${Spacing[16].value - SecondaryDefault.width.value}px;
    border: ${SecondaryDefault.width.value}px ${SecondaryDefault.style.value}
      ${SecondaryDefault.color.value};
  }
`;

export const ChevronButton = ({ label, isExpanded, ...rest }) => {
  return (
    <ChevronButtonContainer {...rest}>
      {/*** 2-2.TODO: props로 label을 전달받았다면 LabelText로 label이 표시되도록 구현하세요. ***/}
      {label && <LabelText children={label} />}
      <Icon icon={isExpanded ? 'ChevronUp' : 'ChevronDown'} color={Gray[700].value} />
    </ChevronButtonContainer>
  );
};
