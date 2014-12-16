var board = {
  rc11: 0,
  rc12: 0,
  rc13: 0,
  rc14: 0,
  rc15: 0,
  rc16: 0,
  rc17: 0,
  rc18: 0,

  rc21: 0,
  rc22: 0,
  rc23: 0,
  rc24: 0,
  rc25: 0,
  rc26: 0,
  rc27: 0,
  rc28: 0,

  rc31: 0,
  rc32: 0,
  rc33: 0,
  rc34: 0,
  rc35: 0,
  rc36: 0,
  rc37: 0,
  rc38: 0,

  rc41: 0,
  rc42: 0,
  rc43: 0,
  rc44: 0,
  rc45: 0,
  rc46: 0,
  rc47: 0,
  rc48: 0,

  rc51: 0,
  rc52: 0,
  rc53: 0,
  rc54: 0,
  rc55: 0,
  rc56: 0,
  rc57: 0,
  rc58: 0,

  rc61: 0,
  rc62: 0,
  rc63: 0,
  rc64: 0,
  rc65: 0,
  rc66: 0,
  rc67: 0,
  rc68: 0,

  rc71: 0,
  rc72: 0,
  rc73: 0,
  rc74: 0,
  rc75: 0,
  rc76: 0,
  rc77: 0,
  rc78: 0,

  rc81: 0,
  rc82: 0,
  rc83: 0,
  rc84: 0,
  rc85: 0,
  rc86: 0,
  rc87: 0,
  rc88: 0
}

function newGame() {
  var val;
  for(i=1; i<=8; i++) {
    for(j=1; j<=8; j++) {
      val = Math.floor(Math.random() * 10 + 1);
      if(val == 1) {
        board["rc" + String(i) + String(j)] = 4;
      }
      else if(val <= 3) {
        board["rc" + String(i) + String(j)] = 3;
      }
      else if(val <= 6) {
        board["rc" + String(i) + String(j)] = 2;
      }
      else {
        board["rc" + String(i) + String(j)] = 1;
      }
    }
  }
  console.log(board);
  updateBoard();
}

function updateBoard() {
  var rc;
  for(i=1; i<=8; i++) {
    for(j=1; j<=8; j++) {
      rc = "rc" + String(i) + String(j);
      $("#" + rc).html("<p>" + board[rc] + "</p>");
    }
  }
  colorBoard();
}

function colorBoard() {
  var rc;
  for(i=1; i<=8; i++) {
    for(j=1; j<=8; j++) {
      rc = "rc" + String(i) + String(j);
      switch(board[rc]) {
        case 1:
          //lime green
          $("#" + rc).css("background-color", "#00ff00");
          break;
        case 2:
          //Yellow
          $("#" + rc).css("background-color", "#ffff00");
          break;
        case 3:
          //Pale orange
          $("#" + rc).css("background-color", "#ff9900");
          break;
        case 4:
          //Red
          $("#" + rc).css("background-color", "#ff0000");
          break;
        case 5:
          //Magenta
          $("#" + rc).css("bacgkround-color", "#ff0066");
          break;
        case 6:
          //Lavender
          $("#" + rc).css("background-color", "#ff00ff");
          break;
        case 7:
          //Pale blue
          $("#" + rc).css("background-color", "#6666ff");
          break;
        case 8:
          //Blue
          $("#" + rc).css("background-color", "#0000ff");
          break;
        case 9:
          //Light blue
          $("#" + rc).css("background-color", "#00ffff");
          break;
        default:
          //Grey
          $("#" + rc).css("background-color", "#dddddd");
      }
    }
  }
}

$("#newGame").click(function() {
  newGame();
})
