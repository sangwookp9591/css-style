import { breakpoints } from '@/shared/style/theme.css';
import { style } from '@vanilla-extract/css';

export const gridContainer = style({
    display: 'grid',
    gap: '16px',
    padding: '20px',
    gridTemplateColumns: '1fr', // 기본: 모바일

    '@media': {
        [breakpoints.tablet]: {
            gridTemplateColumns: '1fr 1fr', // 태블릿
        },
        [breakpoints.desktop]: {
            gridTemplateColumns: '1fr 1fr 1fr 1fr', // 데스크탑
        },
    },
});
