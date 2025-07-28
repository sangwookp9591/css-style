import { style } from '@vanilla-extract/css';

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
    justifyContent: 'center',
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
    overflow: 'hidden', //글자 삐져나오는거 방지
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
