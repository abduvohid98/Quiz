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

export default  function Medium(props){
  const [isMenu, setIsMenu] = useState(false)
  const [isQuestion, setIsQuestion] = useState(false)
  const [taskId, setTaskId] = useState(0)
  const [themeId, setThemeId] = useState(0)
  const [ball, setBall] = useState(0)

 function clickHandler(event){
   setTaskId(event.target.id);
   setThemeId(event.target.parentElement.getAttribute('id'));
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
          handleState = {() => {setIsMenu(!isMenu)}} 
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
  let activity = await getActivityByNumber(100000032, ObjectId());
  console.log(activity);
  return {
    props: {'activity':{...activity, '_id': activity._id.toString(),'userId':activity.userId.toString()}},
  }   
}