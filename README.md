# Clear the Chunk

A Minesweeper-style browser game built as a static web application.

## Description

"Clear the Chunk" is a classic Minesweeper game with a Minecraft-inspired theme. This project implements the game as a single-page static web app that runs entirely in the browser.

**Current Phase:** Phase 1 - Static scaffold with placeholder board

## Prerequisites

- Node.js and npm installed on your system

## Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Run `npm install` to install dependencies

## Running

1. Start the local development server: `npm start`
2. Open your browser and navigate to `http://localhost:3000`
3. Open `index.html` to view the game

The app will load a default 9x9 board with placeholder cell states for demonstration.

## Testing

- Run `npm test` to execute placeholder tests (currently just outputs a message)
- Manually test by opening the app in a browser and verifying:
  - No console errors
  - 9x9 grid displays with mixed cell states
  - Layout fits desktop viewport
  - Title, status, and reset button are visible

## Project Structure

- `index.html` - Main HTML structure
- `styles.css` - Basic styling
- `game.js` - Game logic and initialization
- `package.json` - NPM configuration
- `README.md` - This file
- `TODO.md` - Implementation task tracking
- `DONE.md` - Completed task tracking

## Limitations (Phase 1)

- No actual gameplay mechanics implemented
- Static placeholder board only
- No win/loss detection
- No user interactions beyond reset button (placeholder)