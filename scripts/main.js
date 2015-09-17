$(document).ready(function() {
  const playerOneToken = 'X';
  const playerTwoToken = 'O';

  var currentPlayerToken = playerOneToken;

  var hasWinner = false;

  var winConditions = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  var resetBoard = function() {
    hasWinner = false;
    $('.board td').text('');
    $('.board td').removeClass('played');
    setStatus("Let's play Tic-Tac-Toe! " + playerOneToken + " will go first");
  }

  var checkForWin = function() {
    [playerOneToken, playerTwoToken].forEach(function (playerToken) {
      winConditions.forEach(function(winningMoves) {
        var winner = winningMoves.every(function(space) {
          var cell = $('.board td')[space];
          return $(cell).text() == playerToken;
        });

        if (winner) {
          setStatus(playerToken + " is the winner!");
          hasWinner = true;
          setTimeout(resetBoard, 3000);
        }
      });
    });
  }

  var setStatus = function(msg) {
    $('.status').text(msg);
  }

  $('.board td').click(function () {
    if (!$(this).hasClass('played') && !hasWinner) {
      $(this).text(currentPlayerToken);
      $(this).addClass('played');

      currentPlayerToken = currentPlayerToken === playerOneToken
        ? playerTwoToken : playerOneToken;

      setStatus("It's " + currentPlayerToken + "'s turn now!");
    }
    checkForWin();
  });

  resetBoard();
});
