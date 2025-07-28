import { style } from '@vanilla-extract/css';

// 등장 애니메이션
export const pageEnter = style({
    opacity: 1, // 완전 보이게
    transform: 'translateY(0)', // 제자리
    transition: 'opacity 0.3s ease, transform 0.3s ease', // 부드럽게 등장
});

// 퇴장 애니메이션
export const pageExit = style({
    opacity: 0, // 투명
    transform: 'translateY(10px)', // 아래로 10px 밀림
    transition: 'opacity 0.3s ease, transform 0.3s ease', // 부드럽게 사라짐
});
