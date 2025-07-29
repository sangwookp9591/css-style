import * as styles from './ResponsiveLayoutChange.css';

export default function ResponsiveLayoutChange() {
    return (
        <div>
            {/*  레이아웃 위치 순서 바꾸기 */}
            <section className={styles.flexSection}>
                <div className={styles.textBlock}>📝 설명 텍스트</div>
                <div className={styles.imageBlock}>🖼️ 이미지</div>
            </section>
        </div>
    );
}
