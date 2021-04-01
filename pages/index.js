import Head from 'next/head'
import styles from './index.module.scss'
import {useState, useEffect} from 'react'

import {Header} from '../components/header/Header'
import { Menu} from '../components/menu/menu'
import {ThemeTable} from '../components/tables/ThemeTable'
import {ResultTable} from '../components/tables/ResultTable'
import { Question} from '../components/question/Question'
import { Response} from '../components/mobile/response'
//import { Response} from '../components/mobile/response'


import End from '../components/mobile/end';

import io from 'socket.io-client';
const socket = io('http://10.33.172.148:8080');
function getQuestionId(event){
  const questionId = event.target.id;
  const themeId = event.target.parentElement.getAttribute('id');
  const data = { "qustionId":questionId, "themeId": themeId };
  socket.emit("questionUsed", data);
}


const data = [
  {
    name:"a",
    age:1
  },
  {
    name:"b",
    age:2
  },
  {
    name:"c",
    age:3
  },
  {
    name:"d",
    age:1
  },
  {
    name:"e",
    age:4
  },
  {
    name:"f",
    age:5
  }
]


export default  function Medium(props){
  const[players, setPlayers] = useState(data)

  
const handleDelete = (e) => {
e.target.parentNode.parentNode.remove()//.parentNode.removeChild(e.parentNode.parentNode);
// console.log(el)
 // var id = e.target.id;
 // id = Number(id)
 // const index = players.filter(a => a.age === id)
 // console.log(index)
 // for(var i = 0;  i < players.length; i++){
 //   console.log(typeof id)
 //   if(players[i].age === id){
  //    console.log("jewhnvrebwhoivhef;pewihgioerhg0irheg09reg0reug0reg09reuger0g0re9ug0rerw")
 //     players.slice(i, 1)
      //setPlayers(players);
 //     console.log(players)
 //     console.log("kdbvjhrebivbe")
  //  }
 // }
}
  var l = 0;
    return(
      <div >
       {/*  <button onClick={()=> setS(true)}>Click me</button>
        <div className={styles.con1}>
          <div className={styles.cong}>5</div>
          <div className={styles.conb}>5</div>
          <div className={styles.con} style={{}}>5</div>
    </div>*/}

    
        {
          
          players.map((d) => {
            l = l + 1;
            if(3 >= l){
              return (
                <div style={{display:'flex'}}>
                  <h1>{d.name}</h1>
                  <h2>{d.age}</h2>
                 <div> <h3 onClick={handleDelete} id={d.age}>X</h3> </div>
                </div>
              )}  
          })
        }
      </div>
  )
}





















/*
export async function getServerSideProps(context) {
  let activity = await getActivityByNumber(100000032, ObjectId('5f8b294af3c2cb3b48d54d3e'));
  console.log(activity);
  return {
    props: {'activity':{...activity, '_id': activity._id.toString(),'userId':activity.userId.toString()}},
  }   
}
*/



/*
{
  import Head from 'next/head'
import styles from './index.module.scss'
import {useState} from 'react'
import {getActivityByNumber} from './api/getActivityByNumber';
import {ObjectId} from './../utils/mongodb'
import {Header} from '../components/header/Header'
import { Menu} from '../components/menu/menu'
import {ThemeTable} from '../components/tables/ThemeTable'
import {ResultTable} from '../components/tables/ResultTable'
import { Question} from '../components/question/Question'

import io from 'socket.io-client';
const socket = io('http://10.33.172.148:8080');

export default  function Medium(props){
  const [isMenu, setIsMenu] = useState(false)
  const [isQuestion, setIsQuestion] = useState(false)
  const [taskId, setTaskId] = useState(0)
  const [themeId, setThemeId] = useState(0)
  const [ball, setBall] = useState(0)

  const[displayStatus, setDisplayStatus] = useState("")

 const changeStatusOfMenu = () => {
   setIsMenu(!isMenu)
   const data = {roomName:props.activity.number, status:isMenu};
   socket.emit('statusOfMenu', data);
 }
 console.log(props.activity.number)
 function clickHandler(event){
   setTaskId(event.target.id);
   setThemeId(event.target.parentElement.getAttribute('id'));
   console.log(event.target.parentElement.getAttribute('key'))
   setBall(event.target.textContent);
   setIsQuestion(!isQuestion)
 }

  return(
    <div className={styles.container}>
          <Head>
              <title>Learnis Test Page</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header 
          handleState = {changeStatusOfMenu} 
          isMenu = {isMenu}/> 
          <Menu  open = {isMenu}/>
          <div className={styles.container_content}>
            <ThemeTable 
            style={{display:isQuestion?'none':'block'}} 
            themes = {props.activity.variants} 
            onClick={clickHandler}/>  
            <Question 
            style={{display:isQuestion?'block':'none'}} 
            onClick={()=>{setIsQuestion(!isQuestion)}} 
            title={props.activity.variants[themeId].title}
            image={props.activity.variants[themeId].tasks[taskId].content}
            ball={ball}/>
            <ResultTable onClick={() => {setIsMenu(!isMenu)}}/>
          </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  let activity = await getActivityByNumber(100000032, ObjectId('5f8b294af3c2cb3b48d54d3e'));
  console.log(activity);
  return {
    props: {'activity':{...activity, '_id': activity._id.toString(),'userId':activity.userId.toString()}},
  }   
}
}*/


