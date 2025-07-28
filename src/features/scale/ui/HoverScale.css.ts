import { style } from '@vanilla-extract/css';

export const hoverCard = style({
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    selectors: {
        '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        },
    },
});
