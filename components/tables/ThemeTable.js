import styles from './ThemeTable.module.scss'
import React, {useEffect, useState} from 'react'
//import  { data}  from "../../pages/fakeApi";
///let data = require("../../pages/fakeApi");




export function ThemeTable(props) {
  const[activBall, setActiveBall] = useState([])

 let count = 0;


return (
    <div className = {styles.table} style={props.style}>
      {props.themes.map((data, index) => {
        count = 0;
        return(        
          <div className = {styles.table_col} id={data.id}>
            <div className = {styles.table_col_theme}  key={index}>{data.title}</div>
            {
              data.tasks.map((task) => {
                count = count + 100;
                return(
                  <div className = {styles.table_col_glasses} onClick={props.onClick} id={task.id}>{count}</div>
                )
              })
            }         
          </div>
        )
      })
    }
  </div>   
  ) 
} 
