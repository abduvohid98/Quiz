import styles from './LearnisLogo.module.scss'

export function LearnisLogo(props) {
    return(
        <div className = {styles.learnis_logo}>
            <div className = {styles.learnis_logo_img}>
                <img src = {'./images/learnislogo.svg'}></img>
            </div>
            <div className = {styles.learnis_logo_text}>
                <b>{props.text}</b>
            </div>
        </div>
    )    
}

