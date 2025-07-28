import { style, keyframes } from '@vanilla-extract/css';

export const keyframeBounce = keyframes({
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
    '100%': { transform: 'translateY(0)' },
});

export const fadeInUp = keyframes({
    '0%': {
        opacity: 0,
        transform: 'translateY(30px)',
    },
    '100%': {
        opacity: 1,
        transform: 'translateY(0)',
    },
});

export const box = style({
    width: '150px',
    height: '150px',
    backgroundColor: 'coral',
    borderRadius: '12px',
    animation: `${fadeInUp} 0.6s ease-out forwards`,
    selectors: {
        '&:hover': {
            animation: `${fadeInUp} 0.6s ease-out forwards, ${keyframeBounce} 1.5s ease-in-out infinite`,
            transform: 'scale(1.05)',
        },
    },
});
