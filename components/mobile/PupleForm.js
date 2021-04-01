import React from 'react'
import Link from 'next/link'
import styles from './PupleForm.module.scss'
import {VictoryLogo} from '../logos/VictoryLogo'
export function PupleForm(props) {
    return (
        <div className = {styles.ld_pupleform_container}>
           <Link href = '/'><a ><VictoryLogo text = 'Твоя викторина'/></a></Link> 
           <div className = {styles.ld_pupleform}>
               <label>Ваше имя</label>
               <input onChange={props.onChange} type = 'text' placeholder = 'Впишите сюда'></input>
               <button onClick={props.onClick}>Писоединиться к викторину</button>
           </div>
        </div>
    )
}
