import styles from './ResultTable.module.scss'

export  function ResultTable(props) {
    return (
      <div className = {styles.resulttable}>
        <div className = {styles.table_name}>Таблица результатов
        </div>    
      
        <div className ={styles.table_header}>
          <div className = {styles.table_header_player}>Игрок</div>
          <div className = {styles.table_header_glasses}>очки</div>
        </div>
        <div className = {styles.table}>
        <div className ={styles.table_col}>
          <div className = {styles.table_row_player}>1.Арамов Петр Михйлович</div>
          <div className = {styles.table_row_glasses}>0</div>
        </div>
         <div className ={styles.table_col}>
          <div className = {styles.table_row_player}>2.Арамов Петр Михйлович</div>
          <div className = {styles.table_row_glasses}>0</div>
        </div>
        <div className ={styles.table_col}>
          <div className = {styles.table_row_player}>3.Арамов Петр Михйлович</div>
          <div className = {styles.table_row_glasses}>0</div>
        </div>
        </div>
        <div className = {styles.table_link_to_menu} onClick={props.onClick}>смотреть всю таблицу в меню</div>      
      </div>
    )
  }
  