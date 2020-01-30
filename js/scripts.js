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
  Game.addPlayer(playerComp);
  Game.addPlayer(playerOne);
  var playerNum = 1;
  var currentPlayer = Game.players[playerNum];
  
  function Roll() {
    var roll = diceRoll();
    if (roll === 1) {
      score = 0;
      $(".rollscore").text(score);
      // Hold();
      currentPlayer = Game.players[playerNum];
      playerNum = pass(currentPlayer.id);
    } else {
      score += roll;
      $(".rollscore").text(score);
    }
  }

  function Hold(){
    currentPlayer = Game.players[playerNum];
    currentPlayer.total += score;
    if (currentPlayer.total >= 100) {
      alert (currentPlayer.name + "WIN!!!!");
    } else if (currentPlayer.name === "PlayerOne") {
      $(".PlayerOneScore").text(currentPlayer.total);
    } else {
      $(".EvilComputerScore").text(currentPlayer.total);
    }
    score = 0;
    playerNum = pass(currentPlayer.id);
    $(".rollscore").text(score);
    console.log(currentPlayer.name);
  }

  function Comp(){
      for (var turn = 1; turn < 3; turn++){
        Roll();
      }
      Hold();
    }

  $("#roll").click(function(){
    Roll();
  });

  $("#hold").click(function(){
    Hold();
    // Comp();
  });
});