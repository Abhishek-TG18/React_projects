import Card from "../cards/Card";
import { useState } from "react";
import isWinner from "../../helper/helper";
import './Grid.css'

function Grid({size}){
    const [board , Setboard] = useState(Array(size).fill(" "));
    const[turn , setTurn] = useState(true) // true => O  else X
    const[winner , setWinner] = useState(null);

    function play(index){

        if(turn === true)
            board[index] = "O" ;
        else{
            board[index] = "X";
        }
        const win = isWinner(board , turn? "O":"X")
        if(win){
            setWinner(win);
        }
        Setboard([...board]);
        setTurn(!turn);
    }
    function reset(){
        setTurn(true);
        setWinner(null)
        Setboard(Array(size).fill(" "));

    }    
    return(

       <div className="frid-wrapper">
        {
            winner && (
                <>
                <h1 className="turn-highlight" > Winner is {winner}</h1>
                <button className="rest" onClick={reset} > Rest Game</button>
                </>
            )
        }
        <h1 className="turn-highlight">Current Turn : {(turn)?'O':'X'} </h1>
         <div className="grid">
            {board.map((el,idx)=> <Card gameend={winner?true : false} key={idx} onPlay={play} player={el} index={idx} />)}
        </div>
       </div>
    );

}
export default Grid;