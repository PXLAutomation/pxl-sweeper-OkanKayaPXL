// game.js - Minimal JavaScript for Clear the Chunk Phase 1

// Placeholder board configuration (static, no logic)
const DEFAULT_BOARD_CONFIG = {
  width: 9,      // Standard beginner width
  height: 9,     // Standard beginner height
  mineCount: 10  // Standard beginner mines
};

// Placeholder cell states
const CELL_STATES = {
  HIDDEN: 'hidden',
  REVEALED: 'revealed',
  FLAGGED: 'flagged'
};

// Core initialization
function initApp() {
  const board = createPlaceholderBoard(DEFAULT_BOARD_CONFIG);
  renderBoard(board);
  setupResetButton();
}

// Placeholder board generation (visual only)
function createPlaceholderBoard(config) {
  const board = [];
  for (let row = 0; row < config.height; row++) {
    const boardRow = [];
    for (let col = 0; col < config.width; col++) {
      // Create mixed states for demo
      let state, displayValue;
      const rand = Math.random();
      if (rand < 0.3) {
        state = CELL_STATES.REVEALED;
        displayValue = Math.floor(Math.random() * 3) + 1; // 1, 2, or 3
      } else if (rand < 0.4) {
        state = CELL_STATES.FLAGGED;
        displayValue = 'F';
      } else if (rand < 0.5) {
        state = CELL_STATES.REVEALED;
        displayValue = 'M'; // Mine
      } else {
        state = CELL_STATES.HIDDEN;
        displayValue = '';
      }
      boardRow.push({ state, displayValue: displayValue.toString() });
    }
    board.push(boardRow);
  }
  return board;
}

// Board rendering (static placeholder)
function renderBoard(board) {
  const boardElement = document.getElementById('board');
  boardElement.innerHTML = '';
  boardElement.className = 'board';

  board.forEach(row => {
    row.forEach(cell => {
      const cellElement = document.createElement('div');
      cellElement.className = `cell ${cell.state}`;
      cellElement.textContent = cell.displayValue;
      boardElement.appendChild(cellElement);
    });
  });
}

// Setup reset button (placeholder functionality)
function setupResetButton() {
  const resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', () => {
    // Placeholder: just re-render the board
    const board = createPlaceholderBoard(DEFAULT_BOARD_CONFIG);
    renderBoard(board);
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initApp);