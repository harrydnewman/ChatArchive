import styles from '../styles/ImageRightTextLeft.module.css' 

export default function ImageRightTextLeft({image, text}){
    return (
        <div className={styles.mainDiv}>
            <div className={styles.text}>
            <p dangerouslySetInnerHTML={{ __html: text }} />
            </div>
            <div className={styles.image}>
                <img src={image}></img> 
            </div>
        </div>
    )
}