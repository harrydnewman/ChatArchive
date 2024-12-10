import styles from '../../styles/HomePageChatHeader.module.css' 
import FaceTimeIcon from '../../assets/images/facetimeicon.png'
import React, { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Update the time every second
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    // Format the time as 00:00:00
    const formatTime = (date) => {
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        // const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${hours}:${minutes}`;
    };

    return <p>{formatTime(time)}</p>;
}

export default function HomePageChatHeader(){
    return (
        <div className={styles.HomePageHeaderDiv}>
            <div className={styles.TopSection}>
                <Clock/>
                <p>📶🔋</p>
            </div>
            <div className={styles.BottomSection}>
                <div className={styles.BackButton}>
                    {/* <p>〈 4</p> */}
                    <p className={styles.BackButtonArrow}>‹</p>
                    <p className={styles.BackButtonNumber}>4</p>
                </div>
                <div className={styles.chatPerson}>
                    <div className={styles.chatImage}>
                        <p>💬</p>
                    </div>
                    <p className={styles.chatPersonName}>chat &lt;3</p>
                </div>
                <div className={styles.facetimeIconDiv}>
                    <img src={FaceTimeIcon} alt='facetime icon'/>
                </div>
            </div>
        </div>
    )
}