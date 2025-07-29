import { style } from '@vanilla-extract/css';

//  테이블 → 리스트 뷰 변환
export const tableSection = style({
    padding: '2rem',
});

export const responsiveTable = style({
    display: 'grid',
    gap: '1rem',
});

export const tableRow = style({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    backgroundColor: '#f4f4f4',
    padding: '1rem',
    borderRadius: '8px',

    '@media': {
        'screen and (max-width: 768px)': {
            gridTemplateColumns: '1fr',
        },
    },
});

export const cell = style({
    padding: '0.5rem 0',

    selectors: {
        '&::before': {
            content: 'attr(data-label) ": "', //데이터 라벨을 가져옴
            fontWeight: 'bold',
            display: 'none',
        },
    },

    '@media': {
        'screen and (max-width: 768px)': {
            selectors: {
                '&::before': {
                    display: 'block',
                },
            },
        },
    },
});

/**
 * 예시:
css
복사
편집
.title::before {
  content: '🔥';
}
html
복사
편집
<h1 class="title">공지사항</h1>
👉 실제로는 이렇게 보입니다:

복사
편집
🔥 공지사항
📌 ::before는 요소의 맨 앞에 삽입되는 가상 요소입니다.
 */
