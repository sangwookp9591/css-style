'use client';

import { useState } from 'react';
import * as styles from './Fade.css';
//fade sss
export default function Fade() {
    const [visible, setVisible] = useState(true);

    return (
        <div className={styles.container}>
            <button onClick={() => setVisible(!visible)}>Toggle</button>
            <div className={visible ? styles.fadeIn : styles.fadeOut}>Hello Fade</div>
        </div>
    );
}
