# Addendum — Pirate's Path (ITC-505 Mid‑Term)

## Planning
I sketched a branching flow with a start node, mid‑journey decision clusters (storm/coast/ghost; recruit/map), and multiple terminal endings (10 total). I encoded each node as a key in a single `story` object. Each node contains: `title`, `text`, `image`, and either `choices` or `ending: true`.

## Structure
- **index.html**: Semantic layout (header/main/sections/footer), image, story text, buttons, restart, and required Last Modified footer script.
- **style.css**: Clean, colorful dark theme, responsive grid, accessible contrast, large tap targets.
- **script.js**: Data‑driven narrative graph with a `render()` function that updates DOM and binds event listeners. A simple `restart()` resets state.

## Endings (10)
1. Turn Back (cautious retreat)  
2. Ally with Navy (letters of marque)  
3. Cursed by Ghosts (eternal midnight)  
4. Escape the Ghosts (live to sail)  
5. Mutiny (overthrown)  
6. Marooned (wrecked longboat)  
7. Quiet Retirement (village life)  
8. Greed’s Curse (treasure vanishes)  
9. Treasure Shared (legendary fairness)  
10. King of Pirates (with amnesty)

## Testing
I walked each branch to confirm reachability and correct images. I included simple fallbacks for missing nodes/images and ensured mobile layout works down to ~320px width.

## Challenges
- **Dead ends / unreachable nodes**: Solved via up‑front mapping, then encoding as keys.  
- **Image licensing & reliability**: Used Unsplash hotlinks and ALT text; each ending displays a distinct image.

## Improvements (If iterating)
- Add sound effects & subtle animations.
- Persist path history; show a mini map of visited nodes.
- Add difficulty modes that randomly reorder hazards.
