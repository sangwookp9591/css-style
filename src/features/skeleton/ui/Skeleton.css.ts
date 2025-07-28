import { style, keyframes } from '@vanilla-extract/css';

/**
 * background-position: [x] [y];
 * x: 수평 위치 (left → right)

y: 수직 위치 (top → bottom)
생략하면 기본값은 0% 0% (즉, 좌상단)

애니메이션을 하려면 배경이 요소 전체를 지나가야 하잖아요?
그래서 background-size: 200% 100%처럼 배경을 크게 만들고,
그걸 200% → -200%으로 쭈우욱 움직이는 거예요.

----------------------
 0%와 100%는 애니메이션의 진행 시간

 애니메이션이 1.2초라면
- 0%: 0초 시점 → background-position: 200% 0
- 100%: 1.2초 시점 → background-position: -200% 0

✅ 예시 1: 퍼센트 (%)로 지정
ts
복사
편집
const fadeKeyframes = keyframes({
  '0%': { opacity: 0 },
  '50%': { opacity: 0.5 },
  '100%': { opacity: 1 },
});
애니메이션 시간 기준으로 0% ~ 100% 사이에서 상태가 어떻게 바뀌는지 정의함

✅ 예시 2: from / to 키워드 사용
ts
복사
편집
const fadeKeyframes = keyframes({
  from: { opacity: 0 }, // === 0%
  to: { opacity: 1 },   // === 100%
});
 */
export const skeletonKeyframe = keyframes({
    '0%': { backgroundPosition: '200% 0' },
    '100%': { backgroundPosition: '-200% 0' },
});

export const skeleton = style({
    background: 'linear-gradient(90deg, #eee, #f5f5f5, #eee)',
    backgroundSize: '200% 100%',
    animation: `${skeletonKeyframe} 1.2s infinite linear`, // ✅ keyframe 연결
});
