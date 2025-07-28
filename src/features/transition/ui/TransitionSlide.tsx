'use client';

import { useState } from 'react';
import * as styles from './TransitionSlide.css';

export default function TransitionSlide() {
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <div>
            <button onClick={handleChange}>Toggle slide</button>
            <div className={isOpen ? styles.slideIn : styles.slideOut}></div>
        </div>
    );
}
