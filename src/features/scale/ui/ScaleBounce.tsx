import Image from 'next/image';
import * as styles from './ScaleBounce.css';

export default function ScaleBounce() {
    return (
        <div
            style={{
                display: 'flex',
                height: '1000px',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Image className={styles.floatingBox} src={'/images/yeger.png'} width={100} height={100} alt=""></Image>
        </div>
    );
}
