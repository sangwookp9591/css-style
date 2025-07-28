import { style } from '@vanilla-extract/css';

export const container = style({
    width: '300px',
});

export const dropdownOpen = style({
    height: '100px',
    opacity: 1,
    overflow: 'hidden',
    transition: 'height 0.3s ease, opacity 0.3s ease',
});

export const dropdownClosed = style({
    height: '0',
    opacity: 0,
    overflow: 'hidden',
    transition: 'height 0.3s ease, opacity 0.3s ease',
});
