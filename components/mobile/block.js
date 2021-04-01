import Logo from './logo';
import styles from './block.module.scss'
export default function Block(){
    return(
        <div className={styles.container}>
            <Logo text={'Твоя викторина'}></Logo>
            <div className={styles.container__content}>
                <img className={styles.context__clock} src = {'./images/lock.svg'}/>
                <div className={styles.context__text}>Нельзя подкллючиться</div>
                <div className={styles.context__text2}>Попросите автора викторини перейти в "Меню" чтобы вы могли подключиться</div>
            </div>
        </div>
    )
}