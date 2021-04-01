import React from 'react'
import styles from './PlayersList.module.scss';
//import io from 'socket.io-client';
//const socket = io('http://10.33.172.148:8080');
export  function PlayersList(props) {
    return (
        <div className = {styles.table}>
            <div className = {styles.table_name}>Список игроков</div>
            <div className = {styles.table_header}>
                <div className = {styles.table_header_player}>Игрок</div>
                <div className = {styles.table_header_glasses}>очки</div>
                <div className = {styles.table_header_management}>управление</div>
            </div>
            {
                props.players.map((player) => {
                    return(
                        <div className = {styles.table_row}>
                            <div className = {styles.table_row_data1}>{player.name}</div>
                            <div className = {styles.table_row_data2}>{player.score}</div>
                            <div className = {styles.table_row_data3}>
                                <div className={styles.delete_button} onClick={props.manage} id={player.id}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


const handleDelete = (e) => {
    const id = e.target.id;
    e.target.parentNode.parentNode.remove()
    socket.emit("deletPlayer", id);
}