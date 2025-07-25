import { style } from '@vanilla-extract/css';

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
});

const baseFade = {
    width: '200px',
    height: '100px',
    backgroundColor: 'tomato',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
    transition: 'opacity 0.5s ease',
};

export const fadeIn = style([
    baseFade,
    {
        opacity: 1,
    },
]);

export const fadeOut = style([
    baseFade,
    {
        opacity: 0,
    },
]);
