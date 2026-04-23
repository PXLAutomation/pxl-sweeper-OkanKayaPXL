# IMPLEMENTATION_PHASE1.md

## Phase 1: Establish static scaffold, delivery scripts, and default playable board

### Overview
This blueprint provides a surgical execution guide for Phase 1 of the "Clear the Chunk" project. Phase 1 focuses on creating the foundational static web application scaffold, ensuring package-based setup, and delivering a minimal default board configuration that loads without errors. This phase establishes the project's runnable baseline without implementing core gameplay logic, which is reserved for Phase 2.

**Goal:** Deliver a static one-page web app that loads a default board placeholder in the browser, supports npm-based testing and local delivery, and provides clear documentation for local execution.

**Scope Limitations:**
- No gameplay mechanics (reveal, flag, win/loss) implemented
- No dynamic board generation or state management
- Minimal styling focused on layout and readability
- Static HTML/JS/CSS only; no build tools or frameworks

### 1. Architectural Design

#### Data Structures
For Phase 1, data structures are minimal and placeholder-based:

```javascript
// Placeholder board configuration (static, no logic)
const DEFAULT_BOARD_CONFIG = {
  width: 9,      // Standard beginner width
  height: 9,     // Standard beginner height
  mineCount: 10  // Standard beginner mines
};

// Placeholder cell representation (visual only)
const CELL_STATES = {
  HIDDEN: 'hidden',
  REVEALED: 'revealed',
  FLAGGED: 'flagged'
};

// Static board data structure (array of arrays for rendering)
type Board = Cell[][];
type Cell = {
  state: 'hidden' | 'revealed' | 'flagged';
  displayValue: string;  // For placeholder: empty, number, or 'M' for mine
};
```

#### State Definitions
- **App State:** Single static state with default board configuration
- **Board State:** Predefined static board layout for visual placeholder
- **UI State:** Fixed layout with mandatory regions (title, board, status, reset)

#### Function Signatures
Phase 1 functions are initialization and rendering focused:

```javascript
// Core initialization
function initApp(): void {
  // Load default config and render initial UI
}

// Board rendering (static placeholder)
function renderBoard(board: Board): void {
  // Create DOM elements for board grid
}

// UI region setup
function setupUIRegions(): void {
  // Create title, status, reset button regions
}

// Placeholder board generation (visual only)
function createPlaceholderBoard(config: typeof DEFAULT_BOARD_CONFIG): Board {
  // Return static board with mixed states for demo
}
```

### 2. File-Level Strategy

#### Files to Create/Modify
1. **`index.html`** - Main HTML structure with semantic layout
   - Responsibility: Define DOM structure for title, board, status, and reset regions
   - Key elements: `<main>`, board container `<div>`, status display, reset button
   - Include script and stylesheet links

2. **`styles.css`** - Basic styling for layout and visual states
   - Responsibility: Ensure one-screen desktop layout, distinguish cell states, readable typography
   - Key styles: Grid layout for board, cell state classes, responsive container

3. **`game.js`** - Minimal JavaScript for initialization and placeholder rendering
   - Responsibility: Initialize app on load, render static board, handle reset button (placeholder)
   - Key functions: `initApp()`, `renderBoard()`, `createPlaceholderBoard()`

4. **`package.json`** - NPM package configuration
   - Responsibility: Define project metadata, test script, and local delivery script
   - Key fields: `name`, `version`, `scripts` (test, start), `description`

5. **`README.md`** - Local run instructions and project overview
   - Responsibility: Document how to run the app locally, basic project description
   - Sections: Installation, Running, Testing

6. **`TODO.md`** - Task tracking for implementation phases
   - Responsibility: List checkboxes for Phase 1 and placeholder entries for future phases
   - Format: Markdown checkboxes with phase organization

7. **`DONE.md`** - Completed task tracking
   - Responsibility: Empty initially, will track verified completed work
   - Format: Mirror TODO.md structure

8. **`.gitignore`** - Version control exclusions
   - Responsibility: Exclude node_modules, build artifacts, and editor files
   - Standard web project exclusions

### 3. Atomic Execution Steps

Based on the high-level TODO.md entries for Phase 1:

#### [ ] Create `index.html`, `styles.css`, and `game.js` as the static game scaffold
**Plan:**
- Design semantic HTML structure with mandatory UI regions
- Create minimal CSS for grid layout and basic cell styling
- Write initialization JS that renders a static placeholder board on load
- Ensure no console errors and board is visible

**Act:**
1. Create `index.html` with `<div id="app">` containing title, board, status, reset sections
2. Add `<link rel="stylesheet" href="styles.css">` and `<script src="game.js"></script>`
3. In `styles.css`, define `.board` as CSS grid, `.cell` with state classes (hidden, revealed, flagged)
4. In `game.js`, implement `initApp()` to call `renderBoard(createPlaceholderBoard(DEFAULT_BOARD_CONFIG))`
5. Use `document.addEventListener('DOMContentLoaded', initApp)`

**Validate:**
- Open `index.html` in browser: no console errors
- Board grid renders as 9x9 with mixed cell states
- Layout fits desktop viewport without scrolling
- Title, status, reset regions are present and positioned

#### [ ] Add `package.json` with `test` and local delivery scripts
**Plan:**
- Create standard package.json with minimal fields
- Include `test` script that runs a placeholder test
- Add `start` script for local HTTP server delivery
- Ensure npm install works and scripts execute

**Act:**
1. Create `package.json` with:
   ```json
   {
     "name": "clear-the-chunk",
     "version": "0.1.0",
     "description": "Minesweeper-style browser game",
     "scripts": {
       "test": "echo 'No tests yet'",
       "start": "npx http-server . -p 3000"
     }
   }
   ```
2. Run `npm install` to verify package setup
3. Test `npm test` outputs expected message
4. Test `npm start` serves files locally

**Validate:**
- `npm install` completes without errors
- `npm test` runs and outputs placeholder message
- `npm start` starts HTTP server on port 3000
- Accessing localhost:3000/index.html loads the app

#### [ ] Add local run instructions in `README.md`
**Plan:**
- Update existing README.md with clear installation and run steps
- Include prerequisites (Node.js/npm)
- Document browser testing and expected behavior

**Act:**
1. Add "Installation" section: `npm install`
2. Add "Running" section: `npm start` then open browser to localhost:3000
3. Add "Testing" section: `npm test` and manual browser checks
4. Include project description and Phase 1 limitations

**Validate:**
- README.md contains step-by-step local run instructions
- Instructions are accurate and executable
- No missing prerequisites or unclear steps

#### [ ] Create or refresh `TODO.md` and `DONE.md` to match phase planning
**Plan:**
- Create TODO.md with Phase 1 checkboxes and future phase placeholders
- Create empty DONE.md
- Ensure alignment with IMPLEMENTATION_PLAN.md

**Act:**
1. Create `TODO.md` with:
   ```
   # TODO.md

   ## Phase 1: Establish static scaffold...
   - [ ] Create `index.html`, `styles.css`, and `game.js`...
   - [ ] Add `package.json`...
   - [ ] Add local run instructions...
   - [ ] Create or refresh `TODO.md` and `DONE.md`...

   ## Phase 2: Implement core Minesweeper game engine...
   - [ ] Implement board generation...
   // etc.
   ```
2. Create `DONE.md` as empty file with header

**Validate:**
- TODO.md exists with Phase 1 checkboxes and future phases
- DONE.md exists and is empty
- Checkboxes match IMPLEMENTATION_PLAN.md exactly

### 4. Edge Case & Boundary Audit

#### Browser Compatibility
- **Failure Mode:** App fails to load in older browsers lacking ES6 support
- **Boundary:** Minimum browser versions (Chrome 60+, Firefox 55+, Safari 12+)
- **Trap:** Using modern JS features without transpilation

#### Viewport Sizing
- **Failure Mode:** Board overflows on smaller desktop windows
- **Boundary:** Minimum viewport 1024x768, maximum reasonable desktop size
- **Trap:** Fixed pixel dimensions instead of responsive units

#### File Loading
- **Failure Mode:** 404 errors for CSS/JS if paths are incorrect
- **Boundary:** Files must be in same directory as index.html
- **Trap:** Case-sensitive file names on case-sensitive file systems

#### Static Content
- **Failure Mode:** Placeholder board appears broken or incomplete
- **Boundary:** All cells must render, states must be visually distinct
- **Trap:** CSS not loading, causing unstyled cells

#### Package Scripts
- **Failure Mode:** npm scripts fail due to missing dependencies
- **Boundary:** Node.js 14+ required for http-server
- **Trap:** Assuming global http-server instead of npx

### 5. Verification Protocol

#### Automated Test Cases
- **Test 1:** Package.json validation
  - Run: `npm install && npm test`
  - Expected: No errors, placeholder test output
- **Test 2:** HTTP server startup
  - Run: `npm start` (background), then curl localhost:3000
  - Expected: HTTP 200 response for index.html

#### Manual UX Checks
1. **Load Test:** Open index.html directly in browser
   - [ ] Page loads without console errors
   - [ ] Board grid displays 9x9 cells
   - [ ] Mixed cell states are visible (hidden, revealed, flagged)
   - [ ] Layout fits within viewport without scrolling

2. **UI Regions Check:**
   - [ ] Title region displays "Clear the Chunk" or equivalent
   - [ ] Status region shows "Ready to play" or placeholder
   - [ ] Reset button is visible and clickable (no function yet)
   - [ ] Board region contains the grid layout

3. **Styling Validation:**
   - [ ] Cells have distinct visual states (colors/patterns)
   - [ ] Grid is properly aligned and spaced
   - [ ] Text is readable at default zoom
   - [ ] No overlapping or misaligned elements

4. **Local Delivery Test:**
   - [ ] `npm start` launches server successfully
   - [ ] Browser access to localhost:3000 loads app
   - [ ] All assets (CSS, JS) load without 404 errors
   - [ ] App behavior matches direct file opening

5. **Documentation Verification:**
   - [ ] README.md contains accurate run instructions
   - [ ] TODO.md lists Phase 1 tasks as checkboxes
   - [ ] DONE.md exists and is appropriately empty

#### Exit Criteria Checklist
- [ ] All automated tests pass
- [ ] All manual UX checks pass
- [ ] No browser console errors on load
- [ ] App serves correctly via local HTTP server
- [ ] Documentation is complete and accurate
- [ ] All Phase 1 TODO items can be checked off
- [ ] Ready for Phase 2 implementation

### 6. Code Scaffolding

#### index.html Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clear the Chunk</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="app">
    <header id="title">Clear the Chunk</header>
    <main id="board"></main>
    <section id="status">Ready to play</section>
    <button id="reset">New Game</button>
  </div>
  <script src="game.js"></script>
</body>
</html>
```

#### styles.css Boilerplate
```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f0f0f0;
}

#app {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

#board {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 2px;
  margin: 20px 0;
  justify-content: center;
}

.cell {
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
}

.cell.hidden {
  background-color: #ddd;
}

.cell.revealed {
  background-color: #fff;
}

.cell.flagged {
  background-color: #fdd;
  color: red;
}
```

#### game.js Structure
```javascript
// Configuration
const DEFAULT_BOARD_CONFIG = {
  width: 9,
  height: 9,
  mineCount: 10
};

// Cell states
const CELL_STATES = {
  HIDDEN: 'hidden',
  REVEALED: 'revealed',
  FLAGGED: 'flagged'
};

// Placeholder board creation
function createPlaceholderBoard(config) {
  const board = [];
  for (let y = 0; y < config.height; y++) {
    const row = [];
    for (let x = 0; x < config.width; x++) {
      // Create mixed states for visual demo
      const state = Math.random() > 0.7 ? CELL_STATES.REVEALED :
                   Math.random() > 0.5 ? CELL_STATES.FLAGGED : CELL_STATES.HIDDEN;
      const displayValue = state === CELL_STATES.REVEALED ?
                          (Math.random() > 0.8 ? 'M' : Math.floor(Math.random() * 9)) : '';
      row.push({ state, displayValue });
    }
    board.push(row);
  }
  return board;
}

// Board rendering
function renderBoard(board) {
  const boardEl = document.getElementById('board');
  boardEl.innerHTML = '';
  board.forEach(row => {
    row.forEach(cell => {
      const cellEl = document.createElement('div');
      cellEl.className = `cell ${cell.state}`;
      cellEl.textContent = cell.displayValue;
      boardEl.appendChild(cellEl);
    });
  });
}

// App initialization
function initApp() {
  const board = createPlaceholderBoard(DEFAULT_BOARD_CONFIG);
  renderBoard(board);
  
  // Placeholder reset handler
  document.getElementById('reset').addEventListener('click', () => {
    // For now, just re-render the same board
    renderBoard(board);
  });
}

// Start app on load
document.addEventListener('DOMContentLoaded', initApp);
```

#### package.json Template
```json
{
  "name": "clear-the-chunk",
  "version": "0.1.0",
  "description": "A Minesweeper-style browser game with Minecraft-inspired presentation",
  "main": "index.html",
  "scripts": {
    "test": "echo \"No tests implemented yet\"",
    "start": "npx http-server . -p 3000 -c-1"
  },
  "keywords": ["game", "minesweeper", "browser", "javascript"],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "http-server": "^14.1.1"
  }
}
```

#### .gitignore Template
```
# Node modules
node_modules/

# Build outputs
dist/
build/

# OS generated files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/

# Logs
*.log
npm-debug.log*
```

This blueprint provides the complete technical specification for Phase 1 implementation. All changes are scoped to static files with no external dependencies beyond Node.js for local serving. The scaffold establishes a solid foundation for Phase 2's game engine development while maintaining clear separation of concerns.</content>
<parameter name="filePath">/home/okan-kaya/Documents/Automation1/pxl-sweeper-OkanKayaPXL/IMPLEMENTATION_PHASE1.md