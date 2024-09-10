export default function GameBoard({ onSelectSquare, board }) {
    

  // const [GameBoard, SetGameBoard] = useState(initialGameBoard)
  
  // function handleSelectSquare(rowIndex, colIndex) {
    // SetGameBoard((prevGameBoard) => {
       // const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
       // updatedBoard[rowIndex][colIndex] = activePlayerSim;
       // return updatedBoard;
   // });

   // onSelectSquare();
 // }

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                {row.map((playerSymbol, colIndex) => (
                <li key = {colIndex}>
                    <button 
                    onClick={() => onSelectSquare(rowIndex, colIndex)} 
                    disabled={playerSymbol !== null}
                    > 
                    {playerSymbol} 
                    </button>
                    </li>
                    
                    ))}
                </ol>
            </li> 
            ))}
        </ol>
    );

}