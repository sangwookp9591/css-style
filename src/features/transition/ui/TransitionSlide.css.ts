import { style } from '@vanilla-extract/css';

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
    justifyContent: 'center',
});

export const commonSlide = style({
    width: '200px',
    height: '100px',
    background: 'purple',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
    transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
    position: 'relative', // 필요 시
});

export const slideIn = style([
    {
        transform: 'translateX(0)',
        opacity: 1,
    },
    commonSlide,
]);

export const slideOut = style([
    {
        transform: 'translateX(-100%)',
        opacity: 0,
    },
    commonSlide,
]);
