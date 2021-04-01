import styles from './GameCode.module.scss'

export  function GameCode(props) {    
    return (
        <div  className = {styles.ld_gamecode}>
            <div className = {styles.ld_gamecode_head}>Номер игры для подключения игроков</div>
            <div id = 'game' className = {styles.ld_gamecode_code}>{props.number}</div>
            <span className = {styles.ld_gamecode_text}>Оставайтесь в Меню, пока не подключатся все игроки. Удалить лишних игроков можно в Списке игроков.</span>
        </div>
    )
}
