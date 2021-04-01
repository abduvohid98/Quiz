import styles from './ResultTable.module.scss'
var lengthOfData = 0;
export  function ResultTable(props) {
    return (
      <div className = {styles.resulttable}>
        <div className = {styles.table_name}>Таблица результатов</div>    
        <div className ={styles.table_header}>
          <div className = {styles.table_header_player}>Игрок</div>
          <div className = {styles.table_header_glasses}>очки</div>
        </div>
        <div className = {styles.table}>
        {
          props.players.map((data) => {
            lengthOfData = lengthOfData + 1;
            if(lengthOfData <= 3){
              return(
              <div className ={styles.table_col}>
                <div className = {styles.table_row_player}>{data.name}</div>
                <div className = {styles.table_row_glasses}>{data.score}</div>
              </div>
              )
            }
          })
        }
        </div>
        <div className = {styles.table_link_to_menu} onClick={props.onClick}>смотреть всю таблицу в меню</div>      
      </div>
    )
  }
  