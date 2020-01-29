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
function playerObj(name) {
  this.name = name,
  this.total = 0
}

//RNG
function diceRoll() {
  return Math.floor(Math.random()*6) + 1;
}

function pass(idNumber) {
  if (idNumber === 1) {
    $("span.PlayerOneScore").addClass("turn");
    $("span.EvilComputerScore").removeClass("turn");
    return 1;
  } else {
    $("span.EvilComputerScore").addClass("turn");
    $("span.PlayerOneScore").removeClass("turn");
    return 0;
  }
}

//UI
$(document).ready(function(){
  var Game = new gameObj();
  var playerOne = new playerObj("PlayerOne");
  var playerComp = new playerObj("EvilComputer");
  var score = 0;
  var playerNum = 0;
  var currentPlayer;

  Game.addPlayer(playerComp);
  Game.addPlayer(playerOne);

  $("#roll").click(function(){
    var roll = diceRoll();
    if (roll === 1) {
      score = 0;
      $(".rollscore").text(score);
      currentPlayer = Game.players[playerNum];
      playerNum = pass(currentPlayer.id)
    } else {
      score += roll;
      $(".rollscore").text(score);
    }
  });

  $("#hold").click(function(){
    currentPlayer = Game.players[playerNum];
    currentPlayer.total += score;
    if (currentPlayer.total >= 100) {
      alert (currentPlayer.name + "WIN!!!!")
    }
    console.log(currentPlayer.name);
    console.log(currentPlayer.name === "PlayerOne");
    if (currentPlayer.name === "PlayerOne") {
      $(".PlayerOneScore").text(currentPlayer.total);
    } else {
      $(".EvilComputerScore").text(currentPlayer.total);
    }
    score = 0;
    playerNum = pass(currentPlayer.id)
    $(".rollscore").text(score);
  });
});