// Pirate's Path — Choose Your Own Adventure
// Data-driven story graph with at least 10 endings

const img = (url, alt) => ({ url, alt });

// Royalty-friendly image sources (Unsplash)
const images = {
  port: img("https://thumbs.dreamstime.com/b/breathtaking-digital-painting-masterful-blend-artistic-detail-historical-accuracy-portrays-magnificent-old-ship-371168479.jpg?q=80&w=1600&auto=format&fit=crop", "Sunlit harbor with ships"),
  deckNight: img("https://i.pinimg.com/originals/0d/f9/c5/0df9c5caea3de55f62dc95cb605ba1d4.jpg?q=80&w=1600&auto=format&fit=crop", "Moonlit ship deck at night"),
  map: img("https://img.freepik.com/premium-photo/weathered-treasure-map_431161-23905.jpg?w=2000?q=80&w=1600&auto=format&fit=crop", "Weathered treasure map"),
  storm: img("https://img.freepik.com/premium-photo/large-ship-sailing-storm-against-background-raging-sea-lightning_124507-192729.jpg?q=80&w=1600&auto=format&fit=crop", "Raging sea storm"),
  island: img("https://th.bing.com/th/id/OIP.zn-lwYhDU8ys5rHVdcJ2OAHaEK?w=295&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3?q=80&w=1600&auto=format&fit=crop", "Tropical island cove"),
  cave: img("https://img.freepik.com/premium-photo/cave-with-glowing-light-person-standing-front-it_445983-4559.jpg?q=80&w=1600&auto=format&fit=crop", "Cave with glowing light"),
  navy: img("https://th.bing.com/th/id/OIP.xc0xtudKLmL-lAB7tl-CxgHaEK?w=243&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3?q=80&w=1600&auto=format&fit=crop", "Sails on the horizon"),
  ghost: img("https://img.freepik.com/premium-photo/ghost-ship-sailing-through-foggy-sea-night_1282444-43855.jpg?q=80&w=1600&auto=format&fit=crop", "Ghostly ship on foggy seas"),
  treasure: img("https://thumbs.dreamstime.com/b/rustic-pirate-treasure-chest-overflowing-gold-hidden-rocky-cave-326329069.jpg?q=80&w=1600&auto=format&fit=crop", "Chest overflowing with gold"),
  gallows: img("https://thumbs.dreamstime.com/b/dark-foreboding-castle-fortress-towers-ramparts-looming-over-landscape-omi-ominous-shadows-cast-moonlight-301380702.jpg?q=80&w=1600&auto=format&fit=crop", "Fortress with looming danger"),
  marooned: img("https://thumbs.dreamstime.com/b/tropical-island-paradise-calm-turquoise-water-three-palm-trees-stand-small-sandbar-sunrise-soft-waves-caress-beach-354334632.jpg?q=80&w=1600&auto=format&fit=crop", "Tiny sandbar with palm tree"),
  retire: img("https://as2.ftcdn.net/v2/jpg/09/07/48/11/1000_F_907481158_te1T4zWKqyomB2GyMwZ6g4RPP333fkE1.jpg?q=80&w=1600&auto=format&fit=crop", "Quiet seaside village at sunset"),
};

const story = {
  start: {
    title: "Port of Beginnings",
    text: "Your ship, the Sea Finch, bobs in the harbor. A tattered map promises treasure beyond the horizon. The crew awaits your command.",
    image: images.port,
    choices: [
      { text: "Sail by moonlight", next: "nightWatch", style: "primary" },
      { text: "Recruit more crew", next: "recruit", style: "" },
      { text: "Study the map", next: "mapStudy", style: "" },
    ]
  },

  nightWatch: {
    title: "Moonlit Departure",
    text: "Under a silver sky, you slip from the harbor. Lanterns glow dim. The wind is with you.",
    image: images.deckNight,
    choices: [
      { text: "Head toward the storm", next: "stormRisk", style: "warn" },
      { text: "Hug the coastline", next: "coastSafe", style: "" },
      { text: "Follow strange fog", next: "ghostlyFog", style: "danger" }
    ]
  },

  recruit: {
    title: "Tavern Trials",
    text: "At the Salty Mermaid, a brawler and a navigator offer their services—at a price.",
    image: images.port,
    choices: [
      { text: "Hire the brawler", next: "brawler", style: "" },
      { text: "Hire the navigator", next: "navigator", style: "success" },
      { text: "Hire both (risky)", next: "bothHire", style: "warn" }
    ]
  },

  mapStudy: {
    title: "Marks on Parchment",
    text: "You notice a hidden glyph that reveals a shortcut through reefs to an uncharted island.",
    image: images.map,
    choices: [
      { text: "Trust the glyph", next: "reefRun", style: "primary" },
      { text: "Ignore it; take open sea", next: "openSea", style: "" }
    ]
  },

  stormRisk: {
    title: "Into the Tempest",
    text: "Waves hammer the hull. Lightning forks like angry cutlasses.",
    image: images.storm,
    choices: [
      { text: "Reef the sails and endure", next: "endure", style: "warn" },
      { text: "Turn back", next: "turnBack", style: "" }
    ]
  },

  coastSafe: {
    title: "Coastal Cunning",
    text: "Fishing villages whisper of a Navy patrol ahead.",
    image: images.navy,
    choices: [
      { text: "Evade at night", next: "evadeNavy", style: "primary" },
      { text: "Parley with the Navy", next: "parleyNavy", style: "" }
    ]
  },

  ghostlyFog: {
    title: "Whispers in the Fog",
    text: "A spectral ship glides alongside. Lanterns burn blue.",
    image: images.ghost,
    choices: [
      { text: "Board the ghost ship", next: "boardGhost", style: "danger" },
      { text: "Flee at full sail", next: "fleeGhost", style: "" }
    ]
  },

  brawler: {
    title: "Muscle on Deck",
    text: "The brawler keeps order but picks fights. Morale is... spicy.",
    image: images.port,
    choices: [
      { text: "Sail immediately", next: "openSea", style: "" },
      { text: "Replace him at next port", next: "mutinyRisk", style: "warn" }
    ]
  },

  navigator: {
    title: "Stars & Sextants",
    text: "Your new navigator charts a swift, safe course to a hidden cove.",
    image: images.map,
    choices: [
      { text: "Make for the cove", next: "hiddenCove", style: "success" },
      { text: "Test a faster route", next: "reefRun", style: "warn" }
    ]
  },

  bothHire: {
    title: "Crowded Quarters",
    text: "They hate each other. The crew takes sides.",
    image: images.port,
    choices: [
      { text: "Back the brawler", next: "mutiny", style: "danger" },
      { text: "Back the navigator", next: "hiddenCove", style: "success" }
    ]
  },

  reefRun: {
    title: "Threading the Reefs",
    text: "Coral claws at the keel, but you spy an island protected by jagged teeth of stone.",
    image: images.island,
    choices: [
      { text: "Anchor in the lagoon", next: "lagoon", style: "primary" },
      { text: "Circle for another inlet", next: "openSea", style: "" }
    ]
  },

  openSea: {
    title: "Wide Blue Yonder",
    text: "Weeks pass. The crew grows restless.",
    image: images.storm,
    choices: [
      { text: "Promise a bonus", next: "bonus", style: "success" },
      { text: "Crack down", next: "mutiny", style: "danger" }
    ]
  },

  endure: {
    title: "Eye of the Storm",
    text: "You survive the night. A rainbow arcs over an island ahead.",
    image: images.island,
    choices: [
      { text: "Make landfall", next: "lagoon", style: "primary" },
      { text: "Sail past", next: "openSea", style: "" }
    ]
  },

  turnBack: {
    title: "Return to Port",
    text: "Fortunes favor the bold—today you were cautious. Opportunity slips away.",
    image: images.retire,
    ending: true
  },

  evadeNavy: {
    title: "Shadow & Silence",
    text: "You slip by unseen and find a secret cave with etchings of a treasure vault.",
    image: images.cave,
    choices: [
      { text: "Enter the cave", next: "vaultDoor", style: "primary" },
      { text: "Mark it and move on", next: "openSea", style: "" }
    ]
  },

  parleyNavy: {
    title: "Letters of Marque",
    text: "You strike a deal with the Navy to share future spoils in exchange for amnesty.",
    image: images.navy,
    ending: true // Ally with Navy ending
  },

  boardGhost: {
    title: "Curse of the Deep",
    text: "The ghost captain brands your soul. The Sea Finch sails forever at midnight.",
    image: images.ghost,
    ending: true // Cursed ending
  },

  fleeGhost: {
    title: "Escaped the Abyss",
    text: "You flee—but night whispers follow your wake. You live to sail another day.",
    image: images.deckNight,
    ending: true
  },

  hiddenCove: {
    title: "The Hidden Cove",
    text: "Turquoise waters hide a narrow tunnel to an inner grotto.",
    image: images.island,
    choices: [
      { text: "Swim through", next: "vaultDoor", style: "primary" },
      { text: "Blow the rocks", next: "rockBlast", style: "warn" }
    ]
  },

  mutinyRisk: {
    title: "Tension Boils",
    text: "The brawler resists. A spark could ignite a mutiny.",
    image: images.gallows,
    choices: [
      { text: "Demote him peacefully", next: "openSea", style: "success" },
      { text: "Throw him overboard", next: "mutiny", style: "danger" }
    ]
  },

  mutiny: {
    title: "Mutiny!",
    text: "Steel flashes. The deck runs chaotic.",
    image: images.gallows,
    ending: true // Captured/overthrown ending
  },

  bonus: {
    title: "Coin Talks",
    text: "Morale lifts. A lookout spots gulls—land nearby!",
    image: images.island,
    choices: [
      { text: "Land at lagoon", next: "lagoon", style: "primary" },
      { text: "Search for fresh water", next: "marooned", style: "warn" }
    ]
  },

  lagoon: {
    title: "Lagoon Landing",
    text: "A waterfall tinkles behind vines; a cave mouth yawns darkly.",
    image: images.cave,
    choices: [
      { text: "Explore the cave", next: "vaultDoor", style: "primary" },
      { text: "Set up camp", next: "retireVillage", style: "" }
    ]
  },

  marooned: {
    title: "Marooned",
    text: "A sudden squall wrecks the longboat. You await rescue under a lonely palm.",
    image: images.marooned,
    ending: true
  },

  retireVillage: {
    title: "A Quiet Life",
    text: "You trade your map for a cottage and peace.",
    image: images.retire,
    ending: true
  },

  rockBlast: {
    title: "Boom & Echoes",
    text: "The blast reveals a carved obsidian door marked with a skull.",
    image: images.cave,
    choices: [
      { text: "Open the door", next: "vaultDoor", style: "primary" },
      { text: "It's a trap—leave", next: "openSea", style: "" }
    ]
  },

  vaultDoor: {
    title: "The Vault",
    text: "A riddle reads: 'Share what you take, or suffer what you make.' Two chests sit side by side.",
    image: images.treasure,
    choices: [
      { text: "Take all the gold", next: "curseGreed", style: "danger" },
      { text: "Share with crew", next: "treasureShared", style: "success" },
      { text: "Offer half to the Navy", next: "allyNavyKing", style: "primary" }
    ]
  },

  curseGreed: {
    title: "Greed's Price",
    text: "The chest clamps shut on your legacy. Riches vanish at dawn.",
    image: images.ghost,
    ending: true // Cursed treasure ending
  },

  treasureShared: {
    title: "Legend of Fair Shares",
    text: "Your name becomes a toast in every port. The crew is loyal, the ship swift.",
    image: images.treasure,
    ending: true // Good crew ending
  },

  allyNavyKing: {
    title: "King of Pirates (Kind of)",
    text: "With amnesty and gold, you rule trade lanes from the shadows.",
    image: images.navy,
    ending: true // King of pirates w/ navy alliance
  }
};

// ====== App State & Rendering ======
let currentKey = "start";

const el = {
  title: document.getElementById("scene-title"),
  text: document.getElementById("scene-text"),
  img: document.getElementById("scene-image"),
  choices: document.getElementById("choices"),
  restart: document.getElementById("restartBtn"),
};

function render() {
  const node = story[currentKey];
  if (!node) return;

  // Update content
  el.title.textContent = node.title || "";
  el.text.textContent = node.text || "";

  // Image (fallback if missing)
  const src = node.image?.url || "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop";
  el.img.src = src;
  el.img.alt = node.image?.alt || "Scene illustration";

  // Choices
  el.choices.innerHTML = "";
  if (node.ending) {
    // Ending: show restart call to action
    const done = document.createElement("div");
    done.className = "ending-banner";
    done.innerHTML = "<p><strong>Ending reached.</strong> Choose a new path!</p>";
    el.choices.appendChild(done);
  } else if (Array.isArray(node.choices)) {
    node.choices.forEach((c, idx) => {
      const btn = document.createElement("button");
      btn.className = `btn ${c.style || ""}`;
      btn.textContent = c.text;
      btn.setAttribute("aria-label", c.text);
      btn.addEventListener("click", () => {
        currentKey = c.next;
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      el.choices.appendChild(btn);
    });
  }
}

function restart() {
  currentKey = "start";
  render();
}

el.restart.addEventListener("click", restart);

// Kickoff
render();
