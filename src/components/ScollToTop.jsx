import styles from '../styles/ScrollToTop.module.css'

export default function ScrollToTop(){
    const scrollToTop = () => {
        const element = document.getElementById('navbar');
        element.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className={styles.BackToTop} onClick={() => scrollToTop()}>
                <p>↥ Back To Top ↥</p>
            </div>
    )
}