import { style } from '@vanilla-extract/css';

export const commonSlide = style({
    height: '200px',
    width: '50px',
    background: 'black',
    transition: 'tranform 0.4s ease, opacity 0.4s ease',
});

export const slideIn = style([
    {
        transform: 'translateY(0)',
        opacity: 1,
    },
    commonSlide,
]);

export const slideOut = style([
    {
        transform: 'translateY(-20px)',
        opacity: 0,
    },
    commonSlide,
]);
