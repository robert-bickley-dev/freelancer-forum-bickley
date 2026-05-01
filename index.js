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
/** @returns {Freelancer} a freelancer profile object with name, occupation, rate. */
function makeFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate =
    PRICE_RANGE.min +
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min));
  return { name, occupation, rate };
}

const freelancers = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);

/** @returns {number} the average rate of all freelancers in the state*/
function getAverageFreelancerRate(freelancers) {
  const totalRates = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.rate,
    0,
  );
  const averageRates = totalRates / freelancers.length;
  return averageRates;
}
