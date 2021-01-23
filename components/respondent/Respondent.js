import styles from './Respondent.module.scss'

export function Respondent() {
    return (
        <div className = {styles.ld_respondent}>
            <div className = {styles.ld_respondent_container}>
                <div className = {styles.ld_respondent_name}>Лавров Сергей</div>
                <div className = {styles.ld_respondent_mark}>-200</div>
                <div className = {styles.ld_respondent_plus_minus}>
                    <div className = {styles.ld_respondent_minus}><img src = {'/images/minus.svg'}></img></div>
                    <div className = {styles.ld_respondent_requeted_mark}>5655</div>
                    <div className = {styles.ld_respondent_plus}><img src = {'/images/plus.svg'}></img></div>
                </div>                
            </div>
        </div>
    )
}
