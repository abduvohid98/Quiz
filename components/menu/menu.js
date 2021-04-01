import styles from './Menu.module.scss'
import {GameCode} from '../gamecode/GameCode'
import {PlayersList} from '../tables/PlayersList'

export function Menu (props){ 
     return (
        <div style  = {{minHeight:props.open? '100%' : 0}} className = {`${styles.left_decorotiv_pic} ${styles.container}` }>
            {props.open ? <div className = {styles.inside_container}> <GameCode number={props.gameNumber}/> <PlayersList players={props.players}/> </div> : null}    
        </div> 
    )
}


