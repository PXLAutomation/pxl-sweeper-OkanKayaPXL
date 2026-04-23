# TODO.md

## Phase 1: Establish static scaffold, delivery scripts, and default playable board
- [x] Create `index.html`, `styles.css`, and `game.js` as the static game scaffold
- [x] Add `package.json` with `test` and local delivery scripts
- [x] Add local run instructions in `README.md`
- [x] Create or refresh `TODO.md` and `DONE.md` to match phase planning

## Phase 2: Implement core Minesweeper game engine and automated verification
- [ ] Implement board generation with mine placement and number calculation
- [ ] Add reveal logic with flood-fill propagation
- [ ] Add flag/unflag functionality
- [ ] Implement win/loss detection and first-click safety
- [ ] Add automated verification tests for game rules
- [ ] Update UI to reflect game state changes

## Phase 3: Add board rendering and desktop reveal/flag interactions
- [ ] Implement click handlers for reveal and flag actions
- [ ] Update board rendering to show current game state
- [ ] Add visual feedback for cell states and game outcome
- [ ] Ensure desktop-first responsive design

## Phase 4: Add game outcome state, reset flow, and status UI
- [ ] Implement game reset functionality
- [ ] Add status display for game state (playing, won, lost)
- [ ] Handle edge cases (first click on mine, etc.)
- [ ] Update reset button behavior

## Phase 5: Apply Minecraft-inspired presentation and accessible styling
- [ ] Apply Minecraft-themed visual design
- [ ] Ensure accessibility compliance (color contrast, keyboard navigation)
- [ ] Polish UI animations and transitions
- [ ] Finalize responsive layout

## Phase 6: Validate, document, and finalize static delivery
- [ ] Perform final validation and testing
- [ ] Update documentation and README
- [ ] Prepare for static deployment
- [ ] Final code review and cleanup