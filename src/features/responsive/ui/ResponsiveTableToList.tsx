import * as styles from './ResponsiveTableToList.css';

export default function ResponsiveTableToList() {
    return (
        <div>
            {/* ✅ 2. 테이블 → 리스트 뷰 변환 */}
            <section className={styles.tableSection}>
                <h2>Order History</h2>
                <div className={styles.responsiveTable}>
                    <div className={styles.tableRow}>
                        <div className={styles.cell} data-label="Order ID">
                            #12345
                        </div>
                        <div className={styles.cell} data-label="Date">
                            2025-07-28
                        </div>
                        <div className={styles.cell} data-label="Total">
                            $50
                        </div>
                    </div>
                    <div className={styles.tableRow}>
                        <div className={styles.cell} data-label="Order ID">
                            #12346
                        </div>
                        <div className={styles.cell} data-label="Date">
                            2025-07-27
                        </div>
                        <div className={styles.cell} data-label="Total">
                            $35
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
