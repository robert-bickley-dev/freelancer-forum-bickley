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
/**
 * @returns {Freelancer} a freelancer profile object with name, occupation, rate.
 */
function makeFreelancer() {
  const name = sample(NAMES);
  const occupation = sample(OCCUPATIONS);
  const rate =
    PRICE_RANGE.min +
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min));
  return { name, occupation, rate };
}

const freelancers = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);
const averageRate = getAverageFreelancerRate(freelancers);

/**
 * @param {Freelancer[]} freelancers array of freelancer objects
 * @returns {number} the average rate across the given freelancers
 */
function getAverageFreelancerRate(freelancers) {
  const totalRates = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.rate,
    0,
  );
  averageRate = totalRates / freelancers.length;
}

// === Components ===

function FreelancerRow({ name, occupation, rate }) {
  const $tr = document.createElement("tr");
  $tr.classList.add("freelancer");
  $tr.innerHTML = `
    <td>${name}</td>
    <td>${occupation}</td>
    <td>${rate}</td>
  `;
  return $tr;
}

function FreelancerRows() {
  const $tbody = document.createElement("tbody");
  const $freelancers = freelancers.map(FreelancerRow);
  $tbody.replaceChildren(...$freelancers);
  return $tbody;
}

function AverageRate() {
  const $p = document.createElement("p");
  $p.textContent = `The average rate is $${averageRate.toFixed(2)}.`;
  return $p;
}
