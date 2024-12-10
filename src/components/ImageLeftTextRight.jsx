import styles from '../styles/ImageRightTextLeft.module.css' 

export default function ImageLeftTextRight({text, image}){
    return (
        <div className={styles.mainDiv}>
            <div className={styles.image}>
                <img src={image}></img>
            </div>
            <div className={styles.text}>
                <p dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </div>
    )
}