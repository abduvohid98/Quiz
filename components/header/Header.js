import Link from 'next/link'
import styles from './Header.module.scss'
import {LearnisLogo} from "../logos/LearnisLogo";
import {VictoryLogo} from "../logos/VictoryLogo";
import {ButtonMenu} from '../buttons/ButtonMenu'

export function Header (props){
  return(
    <div className = {`${styles.header}`}>
      <div className={styles.header_logo}>
        <Link href = '/'><a><LearnisLogo text = 'Learnis'></LearnisLogo></a></Link>   
        <Link href = '/'><a><VictoryLogo text = 'Твоя викторина'/></a></Link>
        </div>
        <ButtonMenu isMenu = {props.isMenu} handleState = {props.handleState}></ButtonMenu>
    </div>
  )
}
  

   
   