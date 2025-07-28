'use client';

import { useState } from 'react';
import * as styles from './PageEnterExit.css';

export default function PageEnterExit() {
    const [isEnter, setIsEnter] = useState(false);

    const handleChange = () => {
        setIsEnter((prev) => !prev);
    };
    return (
        <div>
            <button onClick={handleChange}>Enter Exit</button>
            <div className={isEnter ? styles.pageEnter : styles.pageExit}>페이지나 모달 같은 컴포넌트</div>
        </div>
    );
}
