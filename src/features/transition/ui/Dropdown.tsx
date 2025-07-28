'use client';

import { useState } from 'react';
import * as styles from './Dropdown.css';

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <div style={{ display: 'flex' }}>
            <div>
                <div className={`${styles.container} ${isOpen ? styles.dropdownOpen : styles.dropdownClosed}`}>
                    <ul>
                        <li>1111</li>
                        <li>2222</li>
                        <li>3333</li>
                    </ul>
                </div>
            </div>
            <button
                style={{
                    maxHeight: '20px',
                }}
                onClick={handleClick}
            >
                열려라
            </button>
        </div>
    );
}
