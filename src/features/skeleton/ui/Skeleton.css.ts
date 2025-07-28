import { style, keyframes } from '@vanilla-extract/css';

export const skeletonKeyframe = keyframes({
    '0%': { backgroundPosition: '200% 0' },
    '100%': { backgroundPosition: '-200% 0' },
});

export const skeleton = style({
    background: 'linear-gradient(90deg, #eee, #f5f5f5, #eee)',
    backgroundSize: '200% 100%',
    animation: `${skeletonKeyframe} 1.2s infinite linear`, // ✅ keyframe 연결
});
