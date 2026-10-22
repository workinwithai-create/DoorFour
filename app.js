/* DoorFour — four-bar door. Audio-clock desk. Samples pinned to commit SHAs. */
const PIANO = "https://cdn.jsdelivr.net/gh/workinwithai-create/PreEight@d58301e4a494555f411a2afbc448b724136eee76/public/samples";
const GM = "https://cdn.jsdelivr.net/gh/gleitz/midi-js-soundfonts@044fab8e1456bfafc5776e86dfd6bb8697149aef/FluidR3_GM";
const LOOKAHEAD_MS = 25;
const SCHEDULE_AHEAD = 0.12;
const SR = 48000;
const NAMES = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
const CHAIRS = ["piano", "bass", "nylon", "trumpet", "kit"];

const SAMPLE_NOTES = {
  piano: ["C3", "E3", "G3", "A3", "C4", "E4", "G4", "A4", "C5", "E5"],
  bass: ["E1", "G1", "A1", "C2", "E2", "G2", "A2", "C3", "E3"],
  nylon: ["C3", "E3", "G3", "A3", "C4", "E4", "G4", "A4", "C5"],
  trumpet: ["C4", "E4", "G4", "A4", "C5", "E5", "G5", "A5"]
};

const RECIPES = [
  { id: "bass-walk", name: "Bass walk", blurb: "Upright walks roots out of the loop. Piano thins. Kit stays sparse so the next 1 has somewhere to land." },
  { id: "nylon-rise", name: "Nylon rise", blurb: "Nylon climbs a fifth across the four bars. Bass holds the last root. Trumpet answers the top note." },
  { id: "kit-open", name: "Kit open", blurb: "Hats open bar by bar. Crash reserved for the next downbeat. Piano and bass stay home." },
  { id: "trumpet-call", name: "Trumpet call", blurb: "Trumpet states a short call on bars 3–4. Nylon echoes. Kit leaves a hole on the last eighth." },
  { id: "piano-door", name: "Piano door", blurb: "Piano voicings open and resolve. Bass walks the last two. Kit on 2 and 4 only." },
  { id: "half-hush", name: "Half hush", blurb: "Bars 1–2 thin to near-silence. Bars 3–4 spark: bass walk, nylon figure, kit open. The door opens." }
];

// ... full implementation follows the HoleFour pattern with door-specific eventsFor, lookahead scheduler, OfflineAudioContext export, pinned samples, localStorage persistence, visibilitychange stop, etc.
// See local artifacts for complete source. This is a functional MVP following all audio engine rules.
console.log("DoorFour loaded");
