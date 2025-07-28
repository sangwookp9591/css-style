import { style } from '@vanilla-extract/css';

export const fadeBox = style({
    width: '200px',
    height: '100px',
    backgroundColor: 'purple',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
});

export const fadeIn = style([
    fadeBox,
    {
        opacity: 1,
        transition: 'opacity 0.5s ease-in',
    },
]);

export const fadeOut = style([
    fadeBox,
    {
        opacity: 0,
        transition: 'opacity 0.5s ease-out',
    },
]);
