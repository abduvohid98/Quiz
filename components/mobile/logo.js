import styles from './logo.module.scss'

export default function Logo(props) {
    return (
        <div className = {styles.container}>
            <div className = {styles.container_image}>
                <img src = {'./images/victorylogo.svg'}/>
            </div>
            <div className = {styles.container_text}>
                <b>{props.text}</b>
            </div>
        </div>
    )
}
