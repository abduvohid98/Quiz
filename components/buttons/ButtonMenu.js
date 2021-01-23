import styles from './ButtonMenu.module.scss'

const menuIcon =  '/images/menulogo.svg'
const closeIcon =  '/images/closeicon.svg'

export function ButtonMenu(props){
    return (
        <div className = {styles.menu_button} onClick = {props.handleState} >
             <img src={props.isMenu? closeIcon : menuIcon}/>
            <p>{props.isMenu? 'Закрыть' : 'Меню'}</p>    
        </div>
    )
}
