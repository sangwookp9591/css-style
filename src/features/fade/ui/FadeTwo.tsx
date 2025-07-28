'use client';

import { useState } from 'react';
import * as styles from './FadeTwo.css';

export default function FadeTwo() {
    const [isFadeIn, setIsFadeIn] = useState<boolean>(true);

    const handleChange = () => {
        setIsFadeIn((prev) => !prev);
    };
    return (
        <div>
            <button onChange={handleChange}>{'Fade Two'}</button>
            <div className={isFadeIn ? styles.fadeIn : styles.fadeOut}>Fade Two</div>
        </div>
    );
}
