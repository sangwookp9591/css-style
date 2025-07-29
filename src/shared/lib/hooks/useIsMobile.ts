import { useEffect, useState } from 'react';

export function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkWidth = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        checkWidth(); // 초기 확인
        window.addEventListener('resize', checkWidth); // 리사이즈 감지

        return () => window.removeEventListener('resize', checkWidth);
    }, [breakpoint]);

    return isMobile;
}
