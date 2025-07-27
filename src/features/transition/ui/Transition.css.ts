import { style } from '@vanilla-extract/css';

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
});

const baseBox = {
    width: '300px',
    backgroundColor: 'purple',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
    transition: 'height 0.5s ease',
    overflow: 'hidden',
};

export const expand = style([
    baseBox,
    {
        height: '200px',
    },
]);

export const collapse = style([
    baseBox,
    {
        height: '50px',
    },
]);
