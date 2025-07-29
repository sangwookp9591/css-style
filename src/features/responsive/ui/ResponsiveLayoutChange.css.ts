import { style } from '@vanilla-extract/css';

// 레이아웃 위치 순서 바꾸기
export const flexSection = style({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2rem',
    padding: '2rem',
    flexWrap: 'wrap',

    '@media': {
        'screen and (max-width: 768px)': {
            flexDirection: 'column',
        },
    },
});

export const textBlock = style({
    flex: 1,
    order: 1,

    '@media': {
        'screen and (max-width: 768px)': {
            order: 2,
        },
    },
});

export const imageBlock = style({
    flex: 1,
    order: 2,

    '@media': {
        'screen and (max-width: 768px)': {
            order: 1,
        },
    },
});
