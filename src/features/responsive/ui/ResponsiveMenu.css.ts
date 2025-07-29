// app/responsive/ResponsiveExamples.css.ts
import { style } from '@vanilla-extract/css';

// ✅ 1. 반응형 네비게이션 바
export const navbar = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#333',
    color: 'white',
});

export const logo = style({
    fontWeight: 'bold',
    fontSize: '1.5rem',
});

export const navLinks = style({
    display: 'flex',
    gap: '1.5rem',

    '@media': {
        'screen and (max-width: 768px)': {
            display: 'none',
            flexDirection: 'column',
            position: 'absolute',
            top: '60px',
            right: '0',
            backgroundColor: '#444',
            padding: '1rem',
            zIndex: 10,
        },
    },
});

export const open = style({
    '@media': {
        'screen and (max-width: 768px)': {
            display: 'flex',
        },
    },
});

export const hamburger = style({
    display: 'none',
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer',

    '@media': {
        'screen and (max-width: 768px)': {
            display: 'block',
        },
    },
});
