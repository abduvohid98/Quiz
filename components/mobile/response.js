import React from 'react'
import styles from './Response.module.scss'
export function Response() {
    let dot = React.createRef();
    let count = 5000;
    return (
        <div className={styles.response}>
           <p className={styles.response_callBackText}>дождись вопроса</p>
           <p className={styles.response__repleyButtonText}>Отвечай</p>
            <div className={styles.response_tableContiner}
            >
                <div className={styles.response__swipeArea}
                onMouseDown={onMouseDown}
                onTouchStart={onTouchStart}>
                    <div className={styles.response__swipeAreaButton}/>
                    <div className={styles.response__swipeAreaTitle}>Мои очки</div>
                    <div className={styles.response__swipeAreaMyPoints}>{count.toString().replace(/(\d)(?=(\d{3})+$)/, '$1 ')}</div>
                </div>
                <div className={styles.response__table}>
                <div className={styles.response__tableTitle}>Общие результаты</div>
                <div className={styles.response_tableCol}>
                    <div className={styles.response__tablwRowNames}>Новикова Татьяна</div>
                    <div className={styles.response_tableRowPoints}>10500</div>
                </div> 
                <div className={styles.response_tableCol}>
                    <div className={styles.response__tablwRowNames}>Новикова Татьяна</div>
                    <div className={styles.response_tableRowPoints}>10500</div>
                </div>
                <div className={styles.response_tableCol}>
                    <div className={styles.response__tablwRowNames}>Новикова Татьяна</div>
                    <div className={styles.response_tableRowPoints}>10500</div>
                </div>
                <div className={styles.response_tableCol}>
                    <div className={styles.response__tablwRowNames}>Новикова Татьяна</div>
                    <div className={styles.response_tableRowPoints}>10500</div>
                </div>
                <div className={styles.response_tableCol}>
                    <div className={styles.response__tablwRowNames}>Новикова Татьяна</div>
                    <div className={styles.response_tableRowPoints}>10500</div>
                </div>
                <div className={styles.response_tableCol}>
                    <div className={styles.response__tablwRowNames}>Новикова Татьяна</div>
                    <div className={styles.response_tableRowPoints}>10500</div>
                </div>
                <div className={styles.response_tableCol}>
                    <div className={styles.response__tablwRowNames}>Новикова Татьяна</div>
                    <div className={styles.response_tableRowPoints}>10500</div>
                </div>
                <div className={styles.response_tableCol}>
                    <div className={styles.response__tablwRowNames}>Новикова Татьяна</div>
                    <div className={styles.response_tableRowPoints}>10500</div>
                </div>
                <div className={styles.response_tableCol}>
                    <div className={styles.response__tablwRowNames}>Новикова Татьяна</div>
                    <div className={styles.response_tableRowPoints}>10500</div>
                </div>
                <div className={styles.response_tableCol}>
                    <div className={styles.response__tablwRowNames}>Новикова Татьяна</div>
                    <div className={styles.response_tableRowPoints}>10500</div>
                </div>
                <div className={styles.response_tableCol}>
                    <div className={styles.response__tablwRowNames}>Новикова Татьяна</div>
                    <div className={styles.response_tableRowPoints}>10500</div>
                </div> 
                <div className={styles.response_tableCol}>
                    <div className={styles.response__tablwRowNames}>Новикова Татьяна</div>
                    <div className={styles.response_tableRowPoints}>10500</div>
                </div>
                <div className={styles.response_tableCol}>
                    <div className={styles.response__tablwRowNames}>Новикова Татьяна</div>
                    <div className={styles.response_tableRowPoints}>10500</div>
                </div>
                <div className={styles.response_tableCol}>
                    <div className={styles.response__tablwRowNames}>Новикова Татьяна</div>
                    <div className={styles.response_tableRowPoints}>10500</div>
                </div>
                <div className={styles.response_tableCol}>
                    <div className={styles.response__tablwRowNames}>Новикова Татьяна</div>
                    <div className={styles.response_tableRowPoints}>10500</div>
                </div> 
                
                </div>                                
            </div>
        </div>
    )
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