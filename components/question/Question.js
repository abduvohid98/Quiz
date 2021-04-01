import styles from './Question.module.scss'
export function Question(props) {
    return (
        <div style={props.style} className = {styles.question}>
            <div className = {styles.question__head}>
                <div className = {styles.question__backButton} onClick={props.onClick}><img src= '/images/backicon.svg'/> <span>назад</span></div>
                <div className={styles.question__theme}>
                {props.title}
                    <div className={styles.question__point}>{props.ball}</div>
                </div>
            </div>
                <img className={styles.question__image}  src={`http://static.learnis.ru/${props.image}`} />
        </div>             
    )
}

{/*
import styles from './Question.module.scss'
export function Question(props) {]
    return (
        <div style={props.style} className = {styles.question}>
            <div className = {styles.question__head}>
                <div className = {styles.question__backButton} onClick={props.onClick}><img src= '/images/backicon.svg'/> <span>назад</span></div>
                <div className={styles.question__theme}>
                   {props.title}
                    <div className={styles.question__point}>{props.ball}</div>
                </div>
            </div>
                <img className={styles.question__image} src={`http://static.learnis.ru/${props.image}`} />
        </div>             
    )
}
 */}



/*
 import { useRouter } from 'next/router';
import io from 'socket.io-client';
import {useEffect, useState} from 'react';
import CheckGame from './check';
import {PupleForm} from '../components/mobile/PupleForm';
import InActive from '../components/mobile/inActive';
import Block from '../components/mobile/block';
import {Response} from '../components/mobile/response';
import styles from './index.module.scss'

import {Header} from '../components/header/Header'
import { Menu} from '../components/menu/menu'
import {ThemeTable} from '../components/tables/ThemeTable'
import {ResultTable} from '../components/tables/ResultTable'
import { Question} from '../components/question/Question'

const socket = io('http://10.33.172.148:8080');




export default function Code(props){
    const[checkForm, setCheckForm] = useState(true);
    const[inactiveGame, setInactiveGame] = useState(false);
    const[joinForm, setJoinForm] = useState(false);
    const[inactiveMenu, setInactiveMenu] = useState(false);
    const[responceButton, setResponceButton] = useState(false);
    const[code, setCode] = useState('');
    const[name, setName] = useState(props.name);
    const [isMenu, setIsMenu] = useState(false)
    const [themes, setThemes] = useState(false)
    const [isQuestion, setIsQuestion] = useState(false)
    const [taskId, setTaskId] = useState(0)
    const [themeId, setThemeId] = useState(0)
    const [score, setScore] = useState(0)




    const router = useRouter();
    const {activity} = router.query;
    useEffect(() => {
        socket.on('isGameActive', data => {
            if(data)
            {
                setJoinForm(data)
                setCheckForm(false)
            }             
            else if(!data) {
                setCheckForm(false) 
                setInactiveGame(true)
            } 
        })

        socket.on("joinToRoom", (data) => {
            setPlayerForm(data)
        })
    })
    const isGameActive = () => {
        if(code !== ""){
            socket.emit('isGameActive', code)
        }
    }

    const isActive = (e) => {
        setCode(Number(e.target.value))
    }

    const getName = (e) => {
        setName(e.target.value)
    }
    const join = () => {
        if(name !== ""){
            socket.emit('joinToRoom', name)
        }
    }

    var data = {
        name:name,
        surname:"Sherboev"   
    }

    const  setLocal = () => {
        localStorage.setItem('myData', JSON.stringify(data))
    }
    

    const getLocal = () =>{
         var n = JSON.parse(localStorage.getItem('myData'));
         alert(n.name +' ' + n.surname)
    }

    const handleMenuStatus = () => {
        setIsMenu(!isMenu)
        socket.emit('statusOfMenu', isMenu);
    }

    function handleQouestions(event){
        setTaskId(event.target.id);
        setThemeId(event.target.parentElement.getAttribute('id'));
        setScore(event.target.textContent);
        setIsQuestion(!isQuestion)
    }

    if(activity === "author"){
        return(
            <div className={styles.container}>
                  <Header 
                  handleState = {handleMenuStatus} 
                  isMenu = {isMenu}/> 
                  <Menu  open = {isMenu}/>
                  <div className={styles.container_content}>
                    <ThemeTable 
                    style={{display:isQuestion?'none':'block'}} 
                    themes = {themes} 
                    onClick={handleQouestions}/>  
                    <Question 
                    style={{display:isQuestion?'block':'none'}} 
                    onClick={()=>{setIsQuestion(!isQuestion)}} 
                    title={props.activity.variants[themeId].title}
                    image={props.activity.variants[themeId].tasks[taskId].content}
                    ball={score}/>
                    <ResultTable onClick={handleMenuStatus}/>
                  </div>
            </div>
          )
    }

    return(
        <div> 
            <input onChange={e=>setName(e.target.value)}></input>
            <h1>{name}</h1>
            { checkForm === true? <CheckGame 
            onClick={isGameActive(code)} 
            onChange={isActive}/>:null } 
            { inactiveGame === true? <InActive/>:null }  
            { joinForm === true? <PupleForm 
            onChange={getName} 
            onClick={join}/>:null }
            { inactiveMenu === true? <Block/>:null }
            { responceButton? <Response/>:null}
        </div>
    ) 
          
}

export async function getServerSideProps(context) {
    var game = await fetch("http://localhost:8080/api/" + 100000032)
    const post = game.json();
    console.log(post)
    return{props: {game}  } 
}
*/