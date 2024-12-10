import styles from '../../styles/LoadingBubble.module.css';   
import { useEffect, useState } from 'react';
export default function LoadingBubbleAgain({ duration }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);
        return () => clearTimeout(timer); // Clear timeout if component unmounts
    }, [duration]);

    return visible ? (
        <div className={styles.loadingBubbleDiv}>
            <div className={styles.loadingBubble}>
                <div className={styles.dotDiv}>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                </div>
            </div>
        </div>
    ) : null;
}
