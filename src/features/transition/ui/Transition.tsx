'use client';

import { useState } from 'react';
import * as styles from './Transition.css';

export default function Transition() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={styles.container}>
            <button onClick={() => setExpanded(!expanded)}>Toggle Height</button>
            <div className={expanded ? styles.expand : styles.collapse}>
                Transition Box Transition BoxTransition BoxTransition BoxTransition BoxTransition BoxTransition
                BoxTransition BoxTransition Boxs
            </div>
        </div>
    );
}
