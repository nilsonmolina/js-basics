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
  isGameOver: function check() {
    const blockVals = this.getBlockVals();

    return this.checkRows(blockVals)
        || this.checkCols(blockVals)
        || this.checkDiag(blockVals)
        || this.checkTie(blockVals);
  },
  checkRows: function check(b) {
    return (b[0] === b[1] && b[1] === b[2] && b[0] !== '')
        || (b[3] === b[4] && b[4] === b[5] && b[3] !== '')
        || (b[6] === b[7] && b[7] === b[8] && b[6] !== '');
  },
  checkCols: function check(b) {
    return (b[0] === b[3] && b[3] === b[6] && b[0] !== '')
        || (b[1] === b[4] && b[4] === b[7] && b[1] !== '')
        || (b[2] === b[5] && b[5] === b[8] && b[2] !== '');
  },
  checkDiag: function check(b) {
    return (b[0] === b[4] && b[4] === b[8] && b[0] !== '')
        || (b[2] === b[4] && b[4] === b[6] && b[2] !== '');
  },
  checkTie: function check(b) {
    return !b.includes('');
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
}

function checkGameOver() {
  if (!board.isGameOver()) return;

  game.config.isActive = false;
}
