/* eslint-env browser */

const game = {
  config: {
    playerToken: 'X',
    cpuToken: 'O',
    isActive: true,
  },
  cpuAI: {
    takeTurn: function turn() {
      const vals = board.getBlockVals();
      const block = board.blocks[vals.findIndex(el => el === '')];
      block.innerHTML = game.config.cpuToken;
    },
  },
};

const board = {
  element: document.querySelector('.board'),
  blocks: document.querySelectorAll('.block'),
  resetBtn: document.querySelector('.reset'),
  announcement: document.querySelector('.announcement'),
  winningCombo: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],

  getBlockVals: function get() {
    const blockVals = [];
    for (let i = 0; i < this.blocks.length; i++) {
      blockVals[i] = this.blocks[i].innerHTML;
    }

    return blockVals;
  },
  clearBoard: function clear() {
    for (let i = 0; i < this.blocks.length; i++) {
      this.blocks[i].innerHTML = '';
    }
  },
  findWinner: function check() {
    const blockVals = this.getBlockVals();

    for (const combo of this.winningCombo) {
      if (blockVals[combo[0]] !== ''
        && blockVals[combo[0]] === blockVals[combo[1]]
        && blockVals[combo[1]] === blockVals[combo[2]]) return combo;
    }

    return !blockVals.includes('') ? 'tie' : false;
  },
};

// EVENT LISTENERS
board.element.addEventListener('click', handleBoardClick);
board.resetBtn.addEventListener('click', handleReset);

// EVENT LISTENER FUNCTIONS
function handleBoardClick(e) {
  if (!game.config.isActive) return;
  if (!e.target.classList.contains('block')) return;

  e.target.innerHTML = game.config.playerToken;
  checkGameOver();

  if (!game.config.isActive) return;
  game.cpuAI.takeTurn();
  checkGameOver();
}

function handleReset() {
  game.config.isActive = true;
  board.clearBoard();
  board.announcement.innerHTML = '';
}

// HELPER FUNCTIONS
function checkGameOver() {
  const winningCombo = board.findWinner();
  if (!winningCombo) return;

  if (winningCombo === 'tie') board.announcement.innerHTML = 'It\'s a Draw!';
  else {
    const winner = board.blocks[winningCombo[0]].innerHTML;
    board.announcement.innerHTML = `Player '${winner}' is the winner!`;
  }

  game.config.isActive = false;
}
