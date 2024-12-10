import styles from '../../styles/NewEnterButton.module.css' 

import ChatBubbleIcon from '../../assets/images/enterbuttonbubble.png'

export default function NewEnterButton() {
    return (
        <div className={styles.enterButtonDiv}>
            <div className={styles.TitleSection}>
                <div className={styles.TopSection}>
                    <h1>CHAT</h1>
                    <div className={styles.imgDiv}>
                    <img src={ChatBubbleIcon} />
                    </div>
                    
                </div>
                <div className={styles.BottomSection}>
                    <h2>technology</h2>
                </div>
            </div>
            <div className={styles.enterButton}>
                <a href='/about'> &rarr;enter </a>
            </div>
        </div>
    )
}