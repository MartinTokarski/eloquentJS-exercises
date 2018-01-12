var boardContent = "";
var boardSize = 16;
var boardColumn = 0;
var boardRow;

for (boardColumn; boardColumn < boardSize; boardColumn++) {
	for (boardRow = 0; boardRow < boardSize; boardRow++) {
 	 if ( (boardRow + boardColumn) % 2 == 0)
 	 boardContent += "#";
     else
      boardContent += " ";
	}
   boardContent += "\n";
}
console.log(boardContent);


//funkcyjnie