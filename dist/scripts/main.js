$(document).ready (function () {

  const playerX = 'X';
  const playerO = 'O';

  var currentPlayer = playerX;
  var Winner = false;
  var winGame = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6],
    [1,4,7], [2,5,8], [0,4,8], [2,4,6]
  ];

  var setStatus = function (msg) {
  $('div.status').text(msg);
}

  var startOver = function () {
    Winner = false;
    $('.board td').text('');
    setStatus("Ready to Play");
  }

  var checkWinner = function () {
    [playerX, playerO].forEach(function (playerToken) {
      winGame.forEach(function (winningMoves) {
      var won = winningMoves.every(function(space) {
        var cell =$('.board td') [space];
        return $(cell).text() == player;
      });

      if (winner) {
        setStatus(playerToken + "has won the game!");
        Winner = true;
        setTimeout(startOver, 1000);
      }
    });
  });


  $('.board td').click(function () {
    $(this).text(currentPlayer);

    if (currentPlayer === playerX) {
      currentPlayer = playerO;
    }
    else {
      currentPlayer = playerX;

    setStatus("It's " + currentPlayer + "'s turn now");
  };

  checkWinner();
});

   startOver()
