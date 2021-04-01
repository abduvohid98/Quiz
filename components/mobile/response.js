import React, {useEffect, useState} from 'react'
import io from 'socket.io-client';
import styles from './Response.module.scss'

const socket = io('http://10.33.172.148:8080');

export function Response(props) {
    const[players, setPlayers] = useState(props.users)
    const[my, setMy] = useState(players[0])
    var feedBackText = handleFeedBack(my.button);
    var buttonText = handleButton(my.button);
    var buttonEvents= handleClickArea(my.button)
    var background = handleBackground(props.player.button)
    useEffect(() => {
        socket.on('players', data => {
            setPlayers(data)
            console.log(players)
        })
    })
  
    let dot = React.createRef();
    const count = 50000;
  //  console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
    return (
        <div className={styles.response} style={{background:props.player.button === 'active' ? 'black': null}} >
           <div className={styles.response__clickArea} 
           style={{pointerEvents:buttonEvents}} 
           onClick={props.onClick}/>
           <div className={styles.response_feedBackText}>{feedBackText}</div>
           <div className={styles.response__buttonText}>{buttonText}</div>
            <div className={styles.response_tableContiner}>
                <div className={styles.response__swipeArea}
                onMouseDown={onMouseDown}
                onTouchStart={onTouchStart}
                ref={dot}>
                    <div className={styles.response__swipeAreaButton}/>
                    <div className={styles.response__swipeAreaTitle}>Мои очки</div>
                    <div className={styles.response__swipeAreaMyPoints}>{handleFormat(5000)}</div>
                </div>
                <div className={styles.response__table}>
                <div className={styles.response__tableTitle}>Общие результаты</div>
                {
                    props.users.map((player, index) => {
                        return (
                            <div className={styles.response_tableRaw} key={index}>
                                <div className={styles.response__tablwColNames}>{player.name}</div>
                                <div className={styles.response_tableColPoints}>{handleFormat(player.score)}</div>
                            </div> 
                        )
                    })
                }
                </div>                                
            </div>
        </div>
    )
}

const handleBackground = (button) => {
    if(button === "active")
       return "#3AB8BC";
    else if(button === "answer")
       return "#FF8800";
    else return "#006666";
}

const handleClickArea = (button) => {
    if(button === "block")
       return "none";
    else if(button === "answer")
       return "none";
    else return "all";
}

const handleFeedBack = (button) => {
    if(button === "block")
       return "дождись вопроса";
    else if(button === "active")
       return "НАЖМИ, ЧТОБЫ";
    else return null;
}

const handleButton = (button) => {
    if(button === "active")
       return "ОТВЕТИТЬ";
    else if(button === "answer")
       return "ОТВЕЧАЙ";
    else return null;
}

const handleFormat = (score) => {
    return score.toString().replace(/(\d)(?=(\d{3})+$)/, '$1 ')
}

function onMouseDown(e){
    e.preventDefault();
    e.stopPropagation();
    let pos
    let newPos;
    let parent = document.getElementsByClassName(styles.response_tableContiner)[0];
    let containerRect = parent.parentNode.getBoundingClientRect();
    let parentRect = e.target.parentNode.getBoundingClientRect();

    let minTop = containerRect.height - parentRect.height;
    let maxTop = (parentRect.height / 100) * 80;
   
    const onMouseMove = (e) => {
        pos = e.pageY;
        if(pos >= minTop && pos <= maxTop){
            newPos = pos;
            console.log(newPos)
            parent.style.top = newPos + 'px';    
        }
    }

    const onMouseUp = (e) => {
        e.stopPropagation();
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
}

function onTouchStart(){
    let pos
    let newPos;
    let parent = document.getElementsByClassName(styles.response_tableContiner)[0];
    let parentRect = parent.getBoundingClientRect();
    let containerRect = parent.parentNode.getBoundingClientRect();
    let minTop = containerRect.height - parentRect.height;
    let maxTop = (parentRect.height / 100) * 80;
  
    const onTouchMove = (e) => {
        pos = e.changedTouches[0].pageY;
        if(pos >= minTop && pos <= maxTop){
            newPos = pos;
            parent.style.top = newPos + 'px';
        }
    }

    const onTouchEnd = () => {
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchEnd', onTouchEnd);
    }
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchEnd', onTouchEnd);
}



const users = [{
    name:"Ivan",
    ball:500
},
{
    name:"Ivan",
    ball:5000
}]



const raiseHand = (e) => {
    socket.emit('raiseHand')
}