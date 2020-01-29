// Game Object
function gameObj() {
  this.players = [],
  this.playerId = 0;
}

gameObj.prototype.assignId = function() {
  this.playerId += 1;
  return this.playerId;
}

gameObj.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players.push(player);
  }

//Player/Computer Objects
function playerObj() {
  this.total = 0
}

//RNG
function diceRoll() {
  return Math.floor(Math.random()*6) + 1;
}

function pass(idNumber) {
  if (idNumber === 1) {
    return 1;
  } else {
    return 0;
  }
}

//UI
$(document).ready(function(){
  var Game = new gameObj();
  var playerOne = new playerObj();
  var playerComp = new playerObj();
  var score = 0;
  var playerNum = 0;
  var currentPlayer;

  Game.addPlayer(playerComp);
  Game.addPlayer(playerOne);

  $("#roll").click(function(){
    var roll = diceRoll();
    if (roll === 1) {
      score = 0;
      currentPlayer = Game.players[playerNum];
      playerNum = pass(currentPlayer.id)
      console.log("Player:"+currentPlayer.id);
    } else {
      score += roll;
      console.log("Roll:"+roll);
      console.log("Score:"+score);
    }
  });

  $("#hold").click(function(){
    currentPlayer = Game.players[playerNum];
    currentPlayer.total += score;
    score = 0;
    playerNum = pass(currentPlayer.id)
  });
});