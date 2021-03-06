// Enemies our player must avoid

var Enemy = function(y,x) {
  "use strict";
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  this.speed = 300;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  "use strict";
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x += this.speed*dt;
  
  if (this.x >= 550) {
    this.x = -200;
    var nH =  Math.floor((Math.random() * 10) + 1);
    if (nH <=2) {
      this.y =50;
      this.speed = 700;
    }
    else if (nH<=4) {
      this.y = 150;
      this.speed = 600;
    }
    else if (nH<=6) {
      this.y = 200;
      this.speed = 500;
    }
    else if (nH<=8) {
      this.y = 300;
      this.speed = 400;
    }
    else if (nH<=10) {
      this.y = 400;
      this.speed = 300;
    }
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  "use strict";
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
  "use strict";
  this.x =  200;
  this.y =  400;
  this.speed = 50;
  this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {
  "use strict";
  this.x = this.x;
  this.y = this.y;
};

Player.prototype.render = function() {
  "use strict";
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.moveLeft = function() {
  "use strict";
  this.x -= this.speed +10;
};

Player.prototype.moveDown = function() {
  "use strict";
  this.y += this.speed;
};

Player.prototype.moveUp = function() {
  "use strict";
  this.y -= this.speed;
};

Player.prototype.moveRight = function() {
  "use strict";
  this.x += this.speed+10;
};

Player.prototype.handleInput = function(key) {
  "use strict";
  switch(key) {
    case 'down':
    if(this.y == 400) {
      this.y = 400;
      console.log("out of bounds");
      break;
    }
    else if(this.y <= 399) {
      this.moveDown();
      console.log("down");
      break;
    }

    case 'up':
    if(this.y === 0) {
      this.y = 0;
      console.log("out of bounds");
      break;
    }
    else if(this.y >= 1) {
      this.moveUp();
      console.log("up");
      break;
    }
    
    case 'left': 
    if(this.x === 0) {
      this.x = 0;
      console.log("out of bounds");
      break;
    }
    else if(this.x >= 1) {
      this.moveLeft();
      console.log("left");
      break;
    }

    case 'right':
    if(this.x == 400) {
      this.x = 400;
      console.log("out of bounds");
      break;
    }
    else if(this.x <= 399) {
      this.moveRight();
      console.log("right");
      break;
    }
  }
};
var goal = function(y,x) {
  "use strict";
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  this.goal;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
  this.sprite = 'images/Selector.png';
};

goal.prototype.update = function() {
  "use strict";
  this.goal =  Math.floor((Math.random() * 10) + 1);
};

goal.prototype.render = function() {
  "use strict";
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var go = new goal(50,0);
var allEnemies = [];
var enemy1 = new Enemy(50,-200);
var enemy2 = new Enemy(150,-100);
var enemy3 = new Enemy(250,-300);
allEnemies.push(enemy1, enemy2, enemy3);
var player = new Player();

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  "use strict";
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
    };
  player.handleInput(allowedKeys[e.keyCode]);
});