export default function CheckGame(props){
    return(
        <div>
            <h1>Check Game</h1>
            <input placeholder="Введите код игры" onChange={props.onChange}></input>
            <button onClick={props.onClick}>Send</button>
        </div>
    )
}