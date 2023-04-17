import { styled } from 'styled-components';
import globalToken from '../../tokens/global.json';

// 디자인 토큰에 지정된 값을 사용해 스타일을 지정합니다.
const { White, boxShadow, borderRadius } = globalToken;

// ModalBackDrop 컴포넌트의 스타일
export const ModalBackDrop = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background-color: ${(props) => (props.backdrop ? boxShadow.modal.color.value : 'none')};
`;

// Modal 컴포넌트의 스타일
export const Modal = styled.div`
  background-color: ${White.value};
  box-shadow: ${boxShadow.modal.x.value}px ${boxShadow.modal.y.value}px
    ${boxShadow.modal.blur.value}px ${boxShadow.modal.color.value};
  border-radius: ${borderRadius[8].value}px;
`;
