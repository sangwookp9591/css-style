import { style, keyframes } from '@vanilla-extract/css';

export const slideFadeIn = keyframes({
    '0%': {
        opacity: 0,
        transform: 'translateY(-100%)',
    },
    '100%': {
        opacity: 1,
        transform: 'translateY(0)',
    },
});

export const slideFadeOut = keyframes({
    '0%': {
        opacity: 1,
        transform: 'translateY(0)',
    },
    '100%': {
        opacity: 0,
        transform: 'translateY(100%)',
    },
});

export const banner = style({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '60px',
    backgroundColor: '#fdd835',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '1rem',
    zIndex: 9999,
});

export const bannerFadeIn = style({
    animation: `${slideFadeIn} 0.6s ease-out forwards`,
});

export const bannerFadeOut = style({
    animation: `${slideFadeOut} 0.6s ease-out forwards`,
});
