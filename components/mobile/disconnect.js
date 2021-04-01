
import Logo from './logo';
import styles from './disconnect.module.scss'
export default function Disconnect(){
    return(
        <div className={styles.container}>
            <Logo text={'Твоя викторина'}></Logo>
            <div className={styles.container__content}>
                <img className={styles.content__clock} src = {'./images/warning.svg'}/>
                <div className={styles.content__text}>Ведущий исключил вас из викторины</div>
                <div className={styles.content__text2}>Узнайте у ведущего причины исключения и повторите вход в викторину</div>
                <button className={styles.content__button}>Попробовать снова</button>
            </div>
        </div>
    )
}