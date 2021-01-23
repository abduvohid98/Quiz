import styles from './VictoryLogo.module.scss'
import React from 'react'

export  function VictoryLogo(props) {
    return (
        <div className = {styles.victory_logo}>
            <div className = {styles.victory_logo_img}>
                <img src = {'./images/victorylogo.svg'}/>
            </div>
            <div className = {styles.victory_logo_text}>
                <b>{props.text}</b>
            </div>
        </div>
    )
}
