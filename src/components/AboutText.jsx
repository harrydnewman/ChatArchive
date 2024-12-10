import styles from '../styles/AboutText.module.css' 

export default function AboutText({text}){
    return (
        <div className={styles.AboutTextDiv}>
            <p dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    )
}