import { style, keyframes } from '@vanilla-extract/css';

// 둥실둥실 떠다니는 애니메이션 정의
const float = keyframes({
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
    '100%': { transform: 'translateY(0)' },
});

export const floatingBox = style({
    width: '200px',
    height: '600px',
    background: 'lightblue',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease',
    selectors: {
        '&:hover': {
            transform: 'scale(2)',
            animation: `${float} 1.5s ease-in-out infinite`,
        },
    },
});
