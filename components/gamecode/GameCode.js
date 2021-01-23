import styles from './GameCode.module.scss'

export  function GameCode() {    
    return (
        <div  className = {styles.ld_gamecode}>
            <div className = {styles.ld_gamecode_head}>Номер игры для подключения игроков</div>
            <div id = 'game' className = {styles.ld_gamecode_code}>120682000</div>
            <span className = {styles.ld_gamecode_text}>Оставайтесь в Меню, пока не подключатся все игроки. Удалить лишних игроков можно в Списке игроков.</span>
        </div>
    )
}
