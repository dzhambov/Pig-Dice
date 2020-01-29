// Game Object
function gameObj() {
  this.players = [],
  this.id = id
}

gameObj.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players.push(player);
}

gameObj.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

gameObj.prototype.switchPlayer = function() {
    if (this.players[id] === 1) {
      return 0;
    } else {
      return 1;
    }
  }

//Player/Computer Objects
function playerObj() {
  this.total = total
}

//RNG
function diceRoll() {
  return Math.floor(Math.random()*6) + 1;
}

function pass(gameObj, score) {
  gameObj.players.total += score;
  var newID = gameObj.switchPlayer();
  return newID;
}

//UI
