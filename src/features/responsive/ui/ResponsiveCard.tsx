'use client';

import * as styles from './ResponsiveCard.css';

export default function ResponsiveCard({ text }: { text: string }) {
    return <div className={styles.card}>{text}</div>;
}
