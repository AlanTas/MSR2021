solve(puzzleString) {
    var board = this.boardParser(puzzleString)
    var emptySpot = this.getDot(board);
    var row = emptySpot[0];
    var column = emptySpot[1];

    // full board condition
    if (this.solved(board)) {
      return puzzleString;
    }

    for (var i = 1; i <= 9; i++) {
      if (this.checkvalue(board, row, column, i)) {
        board[row][column] = i;
        var boardString = this.stringifyBoard(board);
        var result = this.solve(boardString);
        if(result !== false){
            return result;
        }
      }
    }

    // if board is unsolvable return false
    return false;
  }
