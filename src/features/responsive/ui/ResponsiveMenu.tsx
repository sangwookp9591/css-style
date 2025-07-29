'use client';

import { useState } from 'react';
import * as styles from './ResponsiveMenu.css';

export default function ResponsiveMenu() {
    // app/responsive/page.tsx

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            {/* ✅ 1. 반응형 네비게이션 바 */}
            <header className={styles.navbar}>
                <div className={styles.logo}>MyApp</div>
                <nav className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>
                <button className={styles.hamburger} onClick={() => setIsMenuOpen((prev) => !prev)}>
                    &#9776;
                </button>
            </header>
        </div>
    );
}
