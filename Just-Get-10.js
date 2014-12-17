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
var selected = {
  rc11: false,
  rc12: false,
  rc13: false,
  rc14: false,
  rc15: false,
  rc16: false,
  rc17: false,
  rc18: false,

  rc21: false,
  rc22: false,
  rc23: false,
  rc24: false,
  rc25: false,
  rc26: false,
  rc27: false,
  rc28: false,

  rc31: false,
  rc32: false,
  rc33: false,
  rc34: false,
  rc35: false,
  rc36: false,
  rc37: false,
  rc38: false,

  rc41: false,
  rc42: false,
  rc43: false,
  rc44: false,
  rc45: false,
  rc46: false,
  rc47: false,
  rc48: false,

  rc51: false,
  rc52: false,
  rc53: false,
  rc54: false,
  rc55: false,
  rc56: false,
  rc57: false,
  rc58: false,

  rc61: false,
  rc62: false,
  rc63: false,
  rc64: false,
  rc65: false,
  rc66: false,
  rc67: false,
  rc68: false,

  rc71: false,
  rc72: false,
  rc73: false,
  rc74: false,
  rc75: false,
  rc76: false,
  rc77: false,
  rc78: false,

  rc81: false,
  rc82: false,
  rc83: false,
  rc84: false,
  rc85: false,
  rc86: false,
  rc87: false,
  rc88: false
};

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
      selected["rc" + String(i) + String(j)] = false;
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
function highlight(picked) {
  if(selected[picked] == true) {
    $("#" + picked).css("background-color", "#ffffff");
  }
}
function checkNext(picked) {
  r = Number(picked.slice(2, 3));
  c = Number(picked.slice(3, 4));
  var up = "rc" + String(r-1) + String(c);
  var right = "rc" + String(r) + String(c+1);
  var down = "rc" + String(r+1) + String(c);
  var left = "rc" + String(r) + String(c-1);
  if(board[up] == board[picked] && selected[up] == false) {
    selected[up] = true;
    selected[picked] = true;
    highlight(up);
    highlight(picked);
    checkNext(up);
  }
  if(board[left] == board[picked] && selected[left] == false) {
    selected[left] = true;
    selected[picked] = true;
    highlight(left);
    highlight(picked);
    checkNext(left);
  }
  if(board[down] == board[picked] && selected[down] == false) {
    selected[down] = true;
    selected[picked] = true;
    highlight(down);
    highlight(picked);
    checkNext(down);
  }
  if(board[right] == board[picked] && selected[right] == false) {
    selected[right] = true;
    selected[picked] = true;
    highlight(right);
    highlight(picked);
    checkNext(right);
  }
}
function combine(picked) {
  var rc;
  var final = board[picked] + 1;
  board[picked] = final;
  selected[picked] = false;
  for(i=1; i<=8; i++) {
    for(j=1; j<=8; j++) {
      rc = "rc" + String(i) + String(j);
      if(selected[rc] == true) {
        board[rc] = 0;
      }
    }
  }
}
function fall() {
  var rc;
  for(n=1; n<=8; n++) {
    for(i=1; i<=8; i++) {
      for(j=1; j<=8; j++) {
        rc = "rc" + String(i) + String(j);
        up = "rc" + String(i-1) + String(j);
        if(board[rc] == 0) {
          board[rc] = board[up];
          board[up] = 0;
        }
        if(board[rc] == undefined) {
          board[rc] = 0;
        }
      }
    }
  }
}
function fillNumbers() {
  var rc;
  var val;
  for(i=1; i<=8; i++) {
    for(j=1; j<=8; j++) {
      rc = "rc" + String(i) + String(j);
      if(board[rc] == 0) {
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
  }
}

$("#newGame").click(function() {
  newGame();
});

$("div.box").click(function() {
  var clicked = $(this).attr("id");
  if(selected[clicked] == false) {
    checkNext(clicked);
  }
  else if(selected[clicked] == true) {
    combine(clicked);
    var rc;
    for(i=1; i<=8; i++) {
      for(j=1; j<=8; j++) {
        rc = "rc" + String(i) + String(j);
        selected[rc] = false;
      }
    }
    fall();
    fillNumbers();
    colorBoard();
    updateBoard();
  }
});
