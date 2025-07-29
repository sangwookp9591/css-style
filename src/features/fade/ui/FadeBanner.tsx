// components/Banner.tsx
'use client';

import { useEffect, useState } from 'react';
import * as styles from './FadeBanner.css';
export default function Banner() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 4000); // 5초 후 사라지게

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`${styles.banner} ${isVisible ? styles.bannerFadeIn : styles.bannerFadeOut}`}>
            🎉 지금 가입하면 30% 할인!
        </div>
    );
}
