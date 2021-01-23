import React from 'react'
import styles from './PlayersList.module.scss'
export  function PlayersList() {
    return (
        <div className = {styles.table}>
            <div className = {styles.table_name}>Список игроков</div>
            <div className = {styles.table_header}>
                <div className = {styles.table_header_player}>Игрок</div>
                <div className = {styles.table_header_glasses}>очки</div>
                <div className = {styles.table_header_management}>управление</div>
            </div>
            
                <div className = {styles.table_row}>
                    <div className = {styles.table_row_data1}>Арамов Петр Михйлович</div>
                    <div className = {styles.table_row_data2}>0</div>
                    <div className = {styles.table_row_data3}><div className={styles.delete_button}/></div>
                </div>
                <div className = {styles.table_row}>
                    <div className = {styles.table_row_data1}>Арамов Петр Михйлович</div>
                    <div className = {styles.table_row_data2}>0</div>
                    <div className = {styles.table_row_data3}><div className={styles.delete_button}/></div>
                </div>
                <div className = {styles.table_row}>
                    <div className = {styles.table_row_data1}>Арамов Петр Михйлович</div>
                    <div className = {styles.table_row_data2}>0</div>
                    <div className = {styles.table_row_data3}><div className={styles.delete_button}/></div>
                </div>
        </div>
    )
}
