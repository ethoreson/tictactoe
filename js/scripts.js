// business logic:

function Player(mark) {
  this.mark = mark;
}

function Game() {
  this.gameOver = false;
  this.xTurn = true;
}
Player.prototype.markAs = function() {
  return this.mark;
}

Game.prototype.endGame = function() {
  alert("Game over! Player " + "wins");
}

Game.prototype.getAllIndexes = function(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

Game.prototype.doesItInclude = function(letterArray) {
  if ((letterArray.includes(0) && letterArray.includes(1) && letterArray.includes(2)) || (letterArray.includes(3) && letterArray.includes(4) && letterArray.includes(5)) || (letterArray.includes(6) && letterArray.includes(7) && letterArray.includes(8)) || (letterArray.includes(0) && letterArray.includes(3) && letterArray.includes(6)) || (letterArray.includes(1) && letterArray.includes(4) && letterArray.includes(7)) || (letterArray.includes(2) && letterArray.includes(5) && letterArray.includes(8)) || (letterArray.includes(0) && letterArray.includes(4) && letterArray.includes(8)) || (letterArray.includes(2) && letterArray.includes(4) && letterArray.includes(6))) {
    alert("Winner!");
  } 
};

//user interface:

$(document).ready(function() {
//initiate new player:
var playerX = new Player("X");
var playerO = new Player("O");
var xCell = playerX.mark;
var oCell = playerO.mark;

//initiate new game:
var newGame = new Game();
var whosTurn = newGame.xTurn;

//calculating a win logic:
var finishedArray = [null, null, null, null, null, null, null, null, null];


// A CELL:
  $("#x0y0").click(function(event) {
    event.preventDefault();
    if (finishedArray[0] === null) {
    if (whosTurn === true) {
    $("#x0y0").append("<h2>" + xCell + "</h2>");
    finishedArray[0] = xCell;
    var xIndexes = newGame.getAllIndexes(finishedArray, "X");
    newGame.doesItInclude(xIndexes);
    console.log(xIndexes);
  } else {
    $("#x0y0").append("<h2>" + oCell + "</h2>");
    finishedArray[0] = oCell;
    var oIndexes = newGame.getAllIndexes(finishedArray, "O");
    newGame.doesItInclude(oIndexes);
  };
    whosTurn = !whosTurn;
  } else {
    alert("This square is taken!");
  }
  });

// B CELL:
  $("#x1y0").click(function(event) {
    event.preventDefault();
    if (finishedArray[1] === null) {
    if (whosTurn === true) {
    $("#x1y0").append("<h2>" + xCell + "</h2>");
    finishedArray[1] = xCell;
    var xIndexes = newGame.getAllIndexes(finishedArray, "X");
    newGame.doesItInclude(xIndexes);
  } else {
    $("#x1y0").append("<h2>" + oCell + "</h2>");
    finishedArray[1] = oCell;
    var oIndexes = newGame.getAllIndexes(finishedArray, "O");
    newGame.doesItInclude(oIndexes);
  };
      whosTurn = !whosTurn;
    } else {
      alert("This square is taken!");
    }
  });

// C CELL:
  $("#x2y0").click(function(event) {
    event.preventDefault();
    if (finishedArray[2] === null){
    if (whosTurn === true) {
    $("#x2y0").append("<h2>" + xCell + "</h2>");
    finishedArray[2] = xCell;
    var xIndexes = newGame.getAllIndexes(finishedArray, "X");
    newGame.doesItInclude(xIndexes);
  } else {
    $("#x2y0").append("<h2>" + oCell + "</h2>");
    finishedArray[2] = oCell;
    var oIndexes = newGame.getAllIndexes(finishedArray, "O");
  };
    whosTurn = !whosTurn;
  } else {
    alert("This square is taken!");
  }
  });

// D CELL:
  $("#x0y1").click(function(event) {
    event.preventDefault();
    if (finishedArray[3] === null){
    if (whosTurn === true) {
    $("#x0y1").append("<h2>" + xCell + "</h2>");
    finishedArray[3] = xCell;
    var xIndexes = newGame.getAllIndexes(finishedArray, "X");
    newGame.doesItInclude(xIndexes);
  } else {
    $("#x0y1").append("<h2>" + oCell + "</h2>");
    finishedArray[3] = oCell;
    var oIndexes = newGame.getAllIndexes(finishedArray, "O");
    newGame.doesItInclude(oIndexes);
  };
    whosTurn = !whosTurn;
  } else {
    alert("This square is taken!");
  }
  });

// E CELL:
  $("#x1y1").click(function(event) {
    event.preventDefault();
    if (finishedArray[4] === null) {
    if (whosTurn === true) {
    $("#x1y1").append("<h2>" + xCell + "</h2>");
    finishedArray[4] = xCell;
    var xIndexes = newGame.getAllIndexes(finishedArray, "X");
    newGame.doesItInclude(xIndexes);
  } else {
    $("#x1y1").append("<h2>" + oCell + "</h2>");
    finishedArray[4] = oCell;
    var oIndexes = newGame.getAllIndexes(finishedArray, "O");
    newGame.doesItInclude(oIndexes);
  };
    whosTurn = !whosTurn;
  } else {
    alert("This square is taken!");
  }
  });

// F CELL:
  $("#x2y1").click(function(event) {
    event.preventDefault();
    if (finishedArray[5] === null) {
    if (whosTurn === true) {
    $("#x2y1").append("<h2>" + xCell + "</h2>");
    finishedArray[5] = xCell;
    var xIndexes = newGame.getAllIndexes(finishedArray, "X");
    newGame.doesItInclude(xIndexes);
  } else {
    $("#x2y1").append("<h2>" + oCell + "</h2>");
    finishedArray[5] = oCell;
    var oIndexes = newGame.getAllIndexes(finishedArray, "O");
    newGame.doesItInclude(oIndexes);
  };
    whosTurn = !whosTurn;
  } else {
    alert("This square is taken!");
  }
  });

// G CELL:
  $("#x0y2").click(function(event) {
    event.preventDefault();
    if (finishedArray[6] === null) {
    if (whosTurn === true) {
    $("#x0y2").append("<h2>" + xCell + "</h2>");
    finishedArray[6] = xCell;
    var xIndexes = newGame.getAllIndexes(finishedArray, "X");
    newGame.doesItInclude(xIndexes);
  } else {
    $("#x0y2").append("<h2>" + oCell + "</h2>");
    finishedArray[6] = oCell;
    var oIndexes = newGame.getAllIndexes(finishedArray, "O");
    newGame.doesItInclude(oIndexes);
  };
    whosTurn = !whosTurn;
  } else {
    alert("This square is taken!");
  }
  });

// H CELL:
  $("#x1y2").click(function(event) {
    event.preventDefault();
    if (finishedArray[7] === null) {
    if (whosTurn === true) {
    $("#x1y2").append("<h2>" + xCell + "</h2>");
    finishedArray[7] = xCell;
    var xIndexes = newGame.getAllIndexes(finishedArray, "X");
    newGame.doesItInclude(xIndexes);
  } else {
    $("#x1y2").append("<h2>" + oCell + "</h2>");
    finishedArray[7] = oCell;
    var oIndexes = newGame.getAllIndexes(finishedArray, "O");
    newGame.doesItInclude(oIndexes);
  };
    whosTurn = !whosTurn;
  } else {
    alert("This square is taken!");
  }
  });

// I CELL:
  $("#x2y2").click(function(event) {
    event.preventDefault();
    if (finishedArray[8] === null) {
    if (whosTurn === true) {
    $("#x2y2").append("<h2>" + xCell + "</h2>");
    finishedArray[8] = xCell;
    var xIndexes = newGame.getAllIndexes(finishedArray, "X");
    newGame.doesItInclude(xIndexes);
  } else {
    $("#x2y2").append("<h2>" + oCell + "</h2>");
    finishedArray[8] = oCell;
    var oIndexes = newGame.getAllIndexes(finishedArray, "O");
    newGame.doesItInclude(oIndexes);
  };
    whosTurn = !whosTurn;
  } else {
    alert("This square is taken!");
  }
  });

});
