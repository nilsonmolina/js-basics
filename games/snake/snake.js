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
let direction = 'RIGHT';
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

  value() { return localStorage.getItem('highscore') || '0'; },
  draw() {
    this.element.innerHTML = this.value();
  },
  set(num) {
    console.log(parseInt(this.value(), 10));
    if (num > parseInt(this.value(), 10)) localStorage.setItem('highscore', num);
    highscore.draw();
    console.log(parseInt(this.value(), 10));
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
    if (direction === 'UP') newHead.y -= box;
    else if (direction === 'DOWN') newHead.y += box;
    else if (direction === 'LEFT') newHead.x -= box;
    else if (direction === 'RIGHT') newHead.x += box;
    // check if game over
    if (this.checkCollision(newHead)) endGame();
    // add new head
    this.body.unshift(newHead);
  },
  reset() {
    this.body = [{ x: 9 * box, y: 10 * box }];
  },
};

const sounds = {
  isMuted: true,
  events: {
    gameOver: new Audio('sounds/sad-trombone.m4a'),
  },
  themes: {
    undertale: new Audio('sounds/sad-trombone.m4a'),
  },

  setVolume(level = 0.1) {
    for (const sound in this.events) { this.events[sound].volume = level; }
    for (const sound in this.themes) { this.themes[sound].volume = level; }
  },
};
sounds.setVolume();

/*------------------
 EVENT LISTENERS
------------------*/
document.addEventListener('keydown', handleKeyDown);


function handleKeyDown(e) {
  if (e.keyCode === 32) togglePause();
  else if (paused) console.log('nice try, cheater');
  else if (e.keyCode === 37 && direction !== 'RIGHT') direction = 'LEFT';
  else if (e.keyCode === 38 && direction !== 'DOWN') direction = 'UP';
  else if (e.keyCode === 39 && direction !== 'LEFT') direction = 'RIGHT';
  else if (e.keyCode === 40 && direction !== 'UP') direction = 'DOWN';
}

/*------------------
 HELPER FUNCTIONS
------------------*/
function togglePause() {
  if (paused && !gameOver) {
    paused = false;
    game = setInterval(draw, 1000 / fps);
  } else if (gameOver) {
    resetGame();
  } else {
    paused = true;
    clearInterval(game);
  }
}

function scorePoint() {
  score.increment();
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
  sounds.events.gameOver.currentTime = 0;
  sounds.events.gameOver.play();
  highscore.set(score.value);
}

function resetGame() {
  score.reset();
  snake.reset();
  food.randomize();
  fps = startingFPS;
  direction = 'RIGHT';
  gameOver = false;
  game = setInterval(draw, 1000 / ++fps);
}

/*------------------
 GAME LOOP
------------------*/
// run once
score.draw();
highscore.draw();
let game = paused;

// function that will loop
function draw() {
  // clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // update positions
  snake.update();
  // redraw assets
  snake.draw();
  food.draw();
}
