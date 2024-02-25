var win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [6, 7, 8],
  [2, 5, 8],
  [1, 4, 7],
  [3, 4, 5],
  [2, 4, 6],
];
var count = 0;
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var flag = false;
var undobox = [];
function check(cell) {
  count++;
  if (count % 2 != 0) {
    document.getElementById(cell.value).innerHTML = "X";
    board[cell.value] = 1;
  } else {
    document.getElementById(cell.value).innerHTML = "O";
    board[cell.value] = -1;
  }
  undobox[count - 1] = cell.value;
  console.log(undobox);
  document.getElementById(cell.value).disabled = true;
  if (count > 4) {
    winner();
  }
  if (count == 9 && flag == false) {
    document.getElementById("wintag").innerHTML = "It is a draw!!";
  }
}
function winner() {
  var temp;
  for (var i = 0; i < win.length; i++) {
    temp = board[win[i][0]] + board[win[i][1]] + board[win[i][2]];
    console.log(temp);
    if (temp == 3) {
      document.getElementById("wintag").innerHTML = "Player X is the winner!!";
      flag = true;
    } else if (temp == -3) {
      flag = true;
      document.getElementById("wintag").innerHTML = "Player O is the winner!!";
    }

    if (flag == true) {
      for (var j = 0; j < 9; j++) {
        document.getElementById(j).disabled = true;
      }
      document.getElementById(win[i][0].toString()).style.backgroundColor =
        "green";
      document.getElementById(win[i][1].toString()).style.backgroundColor =
        "green";
      document.getElementById(win[i][2].toString()).style.backgroundColor =
        "green";
      return;
    }
  }
}
function reset() {
  count = 0;
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (var i = 0; i < 9; i++) {
    document.getElementById("wintag").innerHTML = "";
    document.getElementById(i).innerHTML = "";
    document.getElementById(i).disabled = false;
    document.getElementById(i.toString()).style.backgroundColor = "crimson";
  }
}
// function undo() {
//   count--;
//   if (count == -1) {
//     alert("No undo moves available");
//     count++;
//     return;
//   }
//   i = undobox[count];
//   board[i] = 0;
//   document.getElementById(i).innerHTML = "";
//   document.getElementById(i).disabled = false;
//   document.getElementById("wintag").innerHTML = "";
//   for (var j = 0; j < 9; j++) {
//     document.getElementById(j.toString()).style.backgroundColor = "crimson";
//   }
// }
