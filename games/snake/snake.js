/* eslint-env browser */
/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint guard-for-in: 0 */

/*------------------
 SETUP CANVAS & SETTINGS
------------------*/
// game config settings
const dimensions = 300;
const unit = 25;
const box = dimensions / unit;
const startingFPS = 5;
const speedIncrease = 1;
// game defaults
let fps = startingFPS;
let paused = true;
let gameOver = false;
let gotHighscore = false;
// canvas and context
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = dimensions;
canvas.height = dimensions;

/*------------------
 GAME ASSETS
------------------*/
const score = {
  value: 0,
  element: document.querySelector('.score'),

  draw() {
    this.element.innerHTML = this.value;
  },
  increment(num = 1) {
    this.value += num;
    this.draw();
  },
  reset() {
    this.value = 0;
    this.draw();
  },
};

const highscore = {
  element: document.querySelector('.highscore'),
  value: parseInt(localStorage.getItem('highscore'), 10) || 15,

  set(num) {
    console.log(num, this.value);
    if (num > this.value) localStorage.setItem('highscore', num);
    this.value = parseInt(localStorage.getItem('highscore'), 10) || 0;
    highscore.draw();
  },
  draw() {
    this.element.innerHTML = this.value;
  },
};

const food = {
  x: (Math.floor(Math.random() * (unit - 1)) + 1) * box,
  y: (Math.floor(Math.random() * (unit - 1)) + 1) * box,

  randomize() {
    this.x = (Math.floor(Math.random() * (unit - 1)) + 1) * box;
    this.y = (Math.floor(Math.random() * (unit - 1)) + 1) * box;
  },
  draw() {
    ctx.fillStyle = '#3f3';
    ctx.fillRect(this.x, this.y, box, box);
  },
};

const snake = {
  body: [{ x: 9 * box, y: 10 * box }],
  direction: 'RIGHT',
  dirChanged: false,

  draw() {
    for (let i = 0; i < this.body.length; i++) {
      ctx.fillStyle = (i === 0) ? '#777' : '#333';
      ctx.fillRect(snake.body[i].x, snake.body[i].y, box, box);
    }
  },
  checkCollision(head) {
    // check if hitting wall
    if (head.x < 0 || head.x >= unit * box) return true;
    if (head.y < 0 || head.y >= unit * box) return true;
    // check if hitting self
    for (const block of this.body) {
      if (head.x === block.x && head.y === block.y) return true;
    }
    // no collision
    return false;
  },
  update() {
    // create new head position using old head position
    const newHead = { x: this.body[0].x, y: this.body[0].y };
    // did snake eat? if not, remove tail
    if (newHead.x === food.x && newHead.y === food.y) scorePoint();
    else this.body.pop();
    // update new head position based on direction
    if (this.direction === 'UP') newHead.y -= box;
    else if (this.direction === 'DOWN') newHead.y += box;
    else if (this.direction === 'LEFT') newHead.x -= box;
    else if (this.direction === 'RIGHT') newHead.x += box;
    this.dirChanged = false;
    // check if game over
    if (this.checkCollision(newHead)) endGame();
    // add new head
    this.body.unshift(newHead);
  },
  setDirection(direction) {
    if (this.dirChanged) return;
    this.direction = direction;
    this.dirChanged = true;
  },
  reset() {
    this.body = [{ x: 9 * box, y: 10 * box }];
    snake.setDirection('RIGHT');
  },
};

const text = {
  centerX: canvas.width / 2,
  centerY: canvas.height / 2,

  showPause() {
    ctx.font = '36px "Press Start 2P"';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#eee';
    ctx.fillText('paused', this.centerX, this.centerY);
  },
  showGameover() {
    ctx.font = '28px "Press Start 2P"';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#eee';
    ctx.fillText('GAME OVER', this.centerX, this.centerY);
  },
  showHighscore() {
    ctx.font = '16px "Press Start 2P"';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#eee';
    ctx.fillText('NEW HIGHSCORE!', this.centerX, this.centerY);
  },
  showTitle() {
    ctx.font = '11px "Press Start 2P", verdana, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#eee';
    ctx.fillText('PRESS "SPACEBAR" TO START', this.centerX, this.centerY);
  },
};

const sounds = {
  isMuted: true,
  events: {
    gameOver: new Audio('sounds/sad-trombone.m4a'),
    score: new Audio('sounds/score.wav'),
    coin: new Audio('sounds/coin.wav'),
    newHighscore: new Audio('sounds/newHighscore.m4a'),
  },
  // themes: {
  //   undertale: new Audio('sounds/undertale.m4a'),
  // },

  setVolume(level = 0.1) {
    for (const sound in this.events) { this.events[sound].volume = level; }
    // for (const sound in this.themes) { this.themes[sound].volume = level; }
  },
};

/*------------------
 EVENT LISTENERS
------------------*/
document.addEventListener('keydown', handleKeyDown);
sounds.events.newHighscore.onended = handleEndNewHighscore;


function handleKeyDown(e) {
  if (e.keyCode === 32) togglePause();
  else if (paused) console.log('no moving while paused');
  else if (e.keyCode === 37 && snake.direction !== 'RIGHT') snake.setDirection('LEFT');
  else if (e.keyCode === 38 && snake.direction !== 'DOWN') snake.setDirection('UP');
  else if (e.keyCode === 39 && snake.direction !== 'LEFT') snake.setDirection('RIGHT');
  else if (e.keyCode === 40 && snake.direction !== 'UP') snake.setDirection('DOWN');
}

function handleEndNewHighscore() {
  gotHighscore = false;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  text.showGameover();
}

/*------------------
 HELPER FUNCTIONS
------------------*/
function togglePause() {
  if (paused && !gameOver && !gotHighscore) {
    paused = false;
    game = setInterval(draw, 1000 / fps);
  } else if (gameOver && !gotHighscore) {
    resetGame();
  } else if (!paused && !gameOver && !gotHighscore) {
    paused = true;
    text.showPause();
    clearInterval(game);
  }
}

function scorePoint() {
  score.increment();
  // play sound based on score
  // if (score.value === 10) {
  //   sounds.themes.undertale.currentTime = 0;
  //   sounds.themes.undertale.play();
  // }
  if (score.value % 5 === 0) {
    sounds.events.coin.currentTime = 0;
    sounds.events.coin.play();
  } else {
    sounds.events.score.currentTime = 0;
    sounds.events.score.play();
  }
  // create new food block
  food.randomize();
  // increase game speed
  clearInterval(game);
  fps += speedIncrease;
  game = setInterval(draw, 1000 / fps);
}

function endGame() {
  clearInterval(game);
  gameOver = true;

  if (score.value > highscore.value) newHighscore();
  else showGameOver();

  highscore.set(score.value);
}

function newHighscore() {
  gotHighscore = true;
  sounds.events.newHighscore.currentTime = 0;
  sounds.events.newHighscore.play();
  text.showHighscore();
}

function showGameOver() {
  text.showGameover();
  sounds.events.gameOver.currentTime = 0;
  sounds.events.gameOver.play();
}

function resetGame() {
  score.reset();
  snake.reset();
  food.randomize();
  fps = startingFPS;
  gameOver = false;
  game = setInterval(draw, 1000 / ++fps);
}

/*------------------
 GAME LOOP
------------------*/
// run once
text.showTitle();
score.draw();
highscore.draw();
sounds.setVolume();
let game = paused;

// function that will loop
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snake.update();
  snake.draw();
  food.draw();
}
