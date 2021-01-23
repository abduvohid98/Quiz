import React from 'react'
import Link from 'next/link'
import styles from './PupleForm.module.scss'
import {VictoryLogo} from '../logos/VictoryLogo'
export function PupleForm() {
    return (
        <div className = {styles.ld_pupleform_container}>
           <Link href = '/'><a ><VictoryLogo text = 'Твоя викторина'/></a></Link> 
           <form className = {styles.ld_pupleform}>
               <label>Ваше имя</label>
               <input type = 'text' placeholder = 'Впишите сюда'></input>
               <button >Писоединиться к викторину</button>
           </form>
          
        </div>
    )
}
