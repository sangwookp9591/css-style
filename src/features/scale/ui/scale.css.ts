import { style } from '@vanilla-extract/css';

export const container = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
});

export const box = style({
    width: '200px',
    height: '200px',
    backgroundColor: 'royalblue',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    transition: 'transform 0.3s ease-in-out',
    selectors: {
        '&:hover': {
            transform: 'scale(1.2)',
        },
    },
});
