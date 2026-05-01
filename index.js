/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// === State ===
/*
 * **State** refers to data that _might_ change or update during the liftetime
 * of an application. Different HTML is rendered based on the current state.
 */

/** @returns {Freelancer} a quote with a random sentence and random author */
function makeFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate = PRICE_RANGE[Math.floor(Math.random() * PRICE_RANCE.length)];

  return { name, occupation, rate };
}

const quotes = Array.from({ length: NUM_QUOTES }, makeQuote);
