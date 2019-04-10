/* eslint-env browser */
/* eslint no-param-reassign: ["error", { "props": false }] */
/*------------------
 SETUP CANVAS & SETTINGS
------------------*/
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
c.fillStyle = '#fff';

const fps = 30;
const controls = {
  moveUp: false,
  moveDown: false,
  moveLeft: false,
  moveRight: false,
  faceUp: false,
  faceDown: false,
  faceLeft: false,
  faceRight: false,
  shoot: false,
};

/*------------------
 GAME ASSETS
------------------*/
// BASE CLASS OF ALMOST EVERY ASSET
function Box(x, y, width, height, speed = 30) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.speed = speed;
}
Box.prototype.draw = function draw() {
  c.fillRect(this.x, this.y, this.width, this.height);
};
// PLAYER CLASS
function Player() {
  const box = new Box(canvas.width / 2, canvas.height / 2, 100, 100, 15);
  let aimBox = new Box(box.x + 30, box.y - 10, 40, 10, 15);
  let direction = 'UP';
  const bullets = [];

  this.bulletCount = function b() { console.log(bullets.length); };
  this.moveUp = function move() {
    if (box.y < 0) return;
    box.y -= box.speed;
    aimBox.y -= aimBox.speed;
  };
  this.moveDown = function move() {
    if (box.y > canvas.height - box.height) return;
    box.y += box.speed;
    aimBox.y += aimBox.speed;
  };
  this.moveLeft = function move() {
    if (box.x < 0) return;
    box.x -= box.speed;
    aimBox.x -= aimBox.speed;
  };
  this.moveRight = function move() {
    if (box.x > canvas.width - box.width) return;
    box.x += box.speed;
    aimBox.x += aimBox.speed;
  };
  this.faceUp = function face() {
    direction = 'UP';
    aimBox = new Box(box.x + 30, box.y - 10, 40, 10, 15);
  };
  this.faceDown = function face() {
    direction = 'DOWN';
    aimBox = new Box(box.x + 30, box.y + box.height, 40, 10, 15);
  };
  this.faceLeft = function face() {
    direction = 'LEFT';
    aimBox = new Box(box.x - 10, box.y + 30, 10, 40, 15);
  };
  this.faceRight = function face() {
    direction = 'RIGHT';
    aimBox = new Box(box.x + box.width, box.y + 30, 10, 40, 15);
  };
  this.shoot = function shoot() {
    const width = 10;
    const height = 10;
    const centerX = (box.x + box.width / 2) - (width / 2);
    const centerY = (box.y + box.height / 2) - (height / 2);

    bullets.push({
      bullet: new Box(centerX, centerY, width, height),
      direction,
    });
  };
  this.draw = function draw() {
    box.draw();
    aimBox.draw();
    // update existing bullets
    bullets.forEach((b, i, arr) => {
      if (b.direction === 'UP' && b.bullet.y > -b.bullet.speed) {
        b.bullet.y -= b.bullet.speed;
      } else if (b.direction === 'DOWN' && b.bullet.y < canvas.height) {
        b.bullet.y += b.bullet.speed;
      } else if (b.direction === 'LEFT' && b.bullet.x > -b.bullet.speed) {
        b.bullet.x -= b.bullet.speed;
      } else if (b.direction === 'RIGHT' && b.bullet.x < canvas.width) {
        b.bullet.x += b.bullet.speed;
      } else {
        arr.splice(i, 1);
        return;
      }
      b.bullet.draw();
    });
  };
}

/*------------------
 EVENT LISTENERS
------------------*/
document.addEventListener('keydown', checkKey);
document.addEventListener('keyup', unCheckKey);

/*------------------
  HELPER FUNCTIONS
------------------*/
// HELPER FUNCTIONS FOR GAME LOOP
function readInput() {
  if (controls.moveUp) player.moveUp();
  if (controls.moveDown) player.moveDown();
  if (controls.moveLeft) player.moveLeft();
  if (controls.moveRight) player.moveRight();
  if (controls.faceUp) player.faceUp();
  if (controls.faceDown) player.faceDown();
  if (controls.faceLeft) player.faceLeft();
  if (controls.faceRight) player.faceRight();
  if (controls.shoot) player.shoot();
}

// HELPER FUNCTIONS FOR EVENT LISTENERS
function checkKey(e) {
  if (e.keyCode === 87) controls.moveUp = true;
  else if (e.keyCode === 83) controls.moveDown = true;
  else if (e.keyCode === 65) controls.moveLeft = true;
  else if (e.keyCode === 68) controls.moveRight = true;
  else if (e.keyCode === 38) controls.faceUp = true;
  else if (e.keyCode === 40) controls.faceDown = true;
  else if (e.keyCode === 37) controls.faceLeft = true;
  else if (e.keyCode === 39) controls.faceRight = true;
  else if (e.keyCode === 32) controls.shoot = true;
}
function unCheckKey(e) {
  if (e.keyCode === 87) controls.moveUp = false;
  else if (e.keyCode === 83) controls.moveDown = false;
  else if (e.keyCode === 65) controls.moveLeft = false;
  else if (e.keyCode === 68) controls.moveRight = false;
  else if (e.keyCode === 38) controls.faceUp = false;
  else if (e.keyCode === 40) controls.faceDown = false;
  else if (e.keyCode === 37) controls.faceLeft = false;
  else if (e.keyCode === 39) controls.faceRight = false;
  else if (e.keyCode === 32) controls.shoot = false;
}

/*------------------
 GAME LOOP
------------------*/
// RUN ONCE
const player = new Player();
// THE LOOP
function gameLoop() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  readInput();
  player.draw();
}

setInterval(gameLoop, 1000 / fps);

// /*--------------------------------
//     ORIGINAL CODE
//         - EDOUARD DUPRAT
//         - OCTOBER 24, 2018
// ---------------------------------*/
// var canvas = document.querySelector('canvas');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// console.log(canvas);

// var c = canvas.getContext("2d");

// // //setInterval(function() {
// // //c.clearRect(0, 0, innerWidth, innerHeight);
// // //c.fillRect(x,y,100,100);
// // //x++;
// document.onkeydown = checkKey;
// document.onkeyup = uncheckKey;

// function Box(x, y, width, height, speed) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//     this.speed = 30;
// }
// // function Shot(x, y, dx, dy) {
// //     this.x = x;
// //     this.y = y;
// //     this.dx = dx;
// //     this.dy = dy;
// // }
// Box.prototype.draw = function () {
//     c.fillRect(this.x, this.y, this.width, this.height);
// }

// //                x    y    w     h   s
// let ed = new Box(100, 100, 100, 100, 15);
// let bullet = [];
// let redBox = new Box(140, 90, 10, 10, 15 )
// c.fillStyle="blue";
// //let redBox = new Box(100, 80, 20, 20, 15);
// //let redBox = new Box(100, 80, 20, 20, 15);

// let keys = [0, 0, 0, 0, 0];

// function checkKey(e) {
//     if (e.keyCode == '38') {
//         // up arrow
//         keys[0] = 1;
//     }
//     else if (e.keyCode == '40') {
//         // down arrow
//         keys[1] = 1;
//     }
//     else if (e.keyCode == '37') {
//         // left arrow
//         keys[2] = 1;
//     }
//     else if (e.keyCode == '39') {
//         // right arrow
//         keys[3] = 1;
//     }
//     else if (e.keyCode == '32') {
//         keys[4] = 1;
//     }
// }

// function uncheckKey(e) {

//     if (e.keyCode == '38') {
//         // up arrow
//         keys[0] = 0;
//     }
//     else if (e.keyCode == '40') {
//         // down arrow
//         keys[1] = 0;
//     }
//     else if (e.keyCode == '37') {
//         // left arrow
//         keys[2] = 0;
//     }
//     else if (e.keyCode == '39') {
//         // right arrow
//         keys[3] = 0;
//     }
//     else if (e.keyCode == '32') {
//         keys[4] = 0;
//     }
// }
// //          R,L,U,D
// var isBulletCreated = false;

// function gameLoop() {
//     c.clearRect(0, 0, innerWidth, innerHeight);


//     if (keys[0] == 1) {
//         ed.y -= ed.speed;
//         redBox.y -= redBox.speed;
//     }
//     if (keys[1] == 1) {
//         ed.y += ed.speed;
//         redBox.y += redBox.speed;
//     }
//     if (keys[2] == 1) {
//         ed.x -= ed.speed;
//         redBox.x -= redBox.speed;
//     }
//     if (keys[3] == 1) {
//         ed.x += ed.speed;
//         redBox.x += redBox.speed;
//     }
//     if (keys[4] == 1) {
//             if (isBulletCreated == false) {
//                 bullet.push(new Box(ed.x+20, ed.y+40, 10, 10))
//                 bullet.push(new Box(ed.x+40, ed.y+40, 10, 10))
//                 bullet.push(new Box(ed.x+60, ed.y+40, 10, 10))
//             }
//         }
//         ed.draw();
//         redBox.draw();
//         for (var i = 0; i < bullet.length; i++) {
//             bullet[i].y -= bullet[i].speed;
//             bullet[i].draw();
//         }
// }

// setInterval(gameLoop, 33);
