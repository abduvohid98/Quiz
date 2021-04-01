import Logo from './logo';
import styles from './inActive.module.scss'
export default function InActive(){
    return(
        <div className={styles.container}>
            <Logo text={'Твоя викторина'}></Logo>
            <img className={styles.container__clock} src = {'./images/clock.svg'}/>
            <div className={styles.container__text}>Викторина пока не запушена</div>
            <div className={styles.container__text2}>Дождитесь начала игры</div>
        </div>
    )
}