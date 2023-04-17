import { Button } from './Button';

export default {
  title: 'Basic/Buttons', // 스토리 분류 및 컴포넌트 이름
  component: Button, // 테스트할 컴포넌트(Button)
};

// Button 스토리 정의
export const Primary = {
  args: {
    /*** 1-3.TODO: Primary에 필요한 상태를 작성하세요. ***/
    /* HINT: 레퍼런스로 제공된 스토리북을 참고하여 구현하세요. */
    primary: true,
    label: '추가하기',
  },
};

/*** 1-4.TODO: Secondary에 필요한 상태를 작성하세요. ***/
/* HINT: 레퍼런스로 제공된 스토리북을 참고하여 구현하세요. */
export const Secondary = {
  args: {
    primary: false,
    label: '취소',
  },
};
