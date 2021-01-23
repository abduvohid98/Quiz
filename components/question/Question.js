import styles from './Question.module.scss'
export function Question(props) {
    return (
        <div style={props.style} className = {styles.question}>
            <div className = {styles.question__head}>
                <div className = {styles.question__backButton} onClick={props.onClick}><img src= '/images/backicon.svg'/> <span>назад</span></div>
                <div className={styles.question__theme}>
                   {props.title}
                    <div className={styles.question__point}>{props.ball}</div>
                </div>
            </div>
                <img className={styles.question__image} src={`http://static.learnis.ru/${props.image}`} />
        </div>             
    )
}
