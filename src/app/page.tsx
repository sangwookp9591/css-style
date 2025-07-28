import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Link href={'/animation/scale'}>scale</Link>
                <Link href={'/animation/fade'}>fade</Link>
                <Link href={'/animation/transition'}>transition</Link>
                <Link href={'/animation/skeleton'}>transition</Link>
            </main>
        </div>
    );
}
