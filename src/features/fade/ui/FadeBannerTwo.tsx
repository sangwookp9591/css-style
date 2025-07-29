'use client';

import { useEffect, useState } from 'react';
import * as styles from './FadeBanner.css';

const bannerTexts = ['🎉 지금 가입하면 30% 할인!', '🚚 전 상품 무료배송 이벤트!', '🎁 신규 회원에게 5천원 쿠폰 증정!'];

export default function FadeBannerTwo() {
    const [index, setIndex] = useState(0);
    const [fadeState, setFadeState] = useState<'fadeIn' | 'fadeOut'>('fadeIn');

    useEffect(() => {
        const fadeOutTimer = setTimeout(() => {
            setFadeState('fadeOut');
        }, 4000); // 4초 후 FadeOut 시작

        const changeTextTimer = setTimeout(() => {
            setIndex((prev) => (prev + 1) % bannerTexts.length); // 다음 배너로 이동
            setFadeState('fadeIn'); // 다음 배너는 FadeIn
        }, 4600); // FadeOut 이후 약간 기다렸다가 다음 배너

        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(changeTextTimer);
        };
    }, [index]);

    return (
        <div className={`${styles.banner} ${fadeState === 'fadeIn' ? styles.bannerFadeIn : styles.bannerFadeOut}`}>
            {bannerTexts[index]}
        </div>
    );
}
