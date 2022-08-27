import Dice from "./dice";


function Board({name, color, gameHistory}){
  const num = gameHistory.at(-1)
  const sum = gameHistory.reduce((acc, el) => acc+el, 0)
  
  return (
    <div>
        <div>
          <h2>{name}</h2>
          <Dice color = {color} num = {num}/>
          <h2>총점</h2>
          <p>
            {sum}
          </p>
          <h2>기록</h2>
          <p>
            {gameHistory.join(', ')}
          </p>
        </div>
        
    </div>
  )
}

export default Board;