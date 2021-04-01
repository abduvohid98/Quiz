import { useRouter } from 'next/router';
import io from 'socket.io-client';
import React, {useEffect, useState, useRef} from 'react';
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
import Cookie from 'js-cookie'

const socket =  io('http://10.33.172.148:8080');

export default function Code(props){
    const [isMenu, setIsMenu] = useState(false)
    const [themes, setThemes] = useState(props.game.variants)
    const [isQuestion, setIsQuestion] = useState(false)
    const [taskId, setTaskId] = useState(0)
    const [themeId, setThemeId] = useState(0)
    const [score, setScore] = useState(0)
    const [players, setPlayers] = useState(props.game.players)
    const [myData, setMyData] = useState(players[0]);
    const[status, setStatus] = useState(false)
    const router = useRouter();
    const {activity} = router.query;
    useEffect(() => {
      socket.on('players', (data) => {
        setPlayers(data)
        setMyData(data[0])
      })
      click()
    }, [router.asPath])
   

    const click = () => {
      setStatus(!status)
    }
    
    const handleMenuStatus = () => {
        setIsMenu(!isMenu)
        socket.emit('menuStatus', {"isMenu":isMenu, "number":'100000032'});
    }
    
    function handleQouestions(event){
        setTaskId(event.target.id);
        setThemeId(event.target.parentElement.getAttribute('id'));
        setScore(event.target.textContent);
        setIsQuestion(!isQuestion)
        socket.emit('activePlayersButton', "active");
    } 
    
    if(activity === "author"){ 
        return(
            <div className={styles.container}>
                  <Header 
                  handleState = {handleMenuStatus} 
                  isMenu = {isMenu}/> 
                  <Menu  open = {isMenu} 
                  gameNumber={props.game.number}
                  players={players}/>
                  <div className={styles.container_content}>
                    <ThemeTable 
                    style={{display:isQuestion?'none':'block'}} 
                    themes = {themes} 
                    onClick={handleQouestions}/>  
                    <Question 
                    style={{display:isQuestion?'block':'none'}} 
                    onClick={()=>{setIsQuestion(!isQuestion)}} 
                    title={props.game.variants[themeId].title}
                    image={props.game.variants[themeId].tasks[taskId].content}
                    ball={score}/>
                    <ResultTable onClick={handleMenuStatus} players={players}/>
                  </div>
            </div>
          )
    }
    //при обновление состояние в этот рендере то есть в стороне ученика не обновляеется состоянии 
    else{
    return(
      <div>
        <Response 
        player={myData}
        users={players}
        onClick={raiseHand} />
      </div>
    )
  }
}

export async function getServerSideProps(context) {
    var game = await fetch("http://localhost:8080/api/" + 100000032)
    const post = await game.json();
    console.log(post.players)
    return{props: { "game":{...post}}  } 
} 

const raiseHand = (e) => {
    //socket.emit('raiseHand')
} 

