/**
 * Average the values of an grades documents. Return value with only 1 decimal place.
 *
 * Example: problemOne({CS230: 95, CS250: 89, CS133: 91}) should return 91.7
 *
 * Values can be numbers or strings. If a value is a string, ignore it.
 *
 * Numbers will be between 0 and 100. Handle situations where the number is not in this range.
 *
 * @param {object} obj - The object of class grades.
 *
 * @returns {number}
 */
function problemOne(obj) {
  let values = Object.values(obj).filter(value => typeof value === 'number' && value >= 0 && value <= 100);
  if (values.length === 0) return undefined;
  let avg = values.reduce((sum, value) => sum + value, 0) / values.length;
  return parseFloat(avg.toFixed(1));
}
// Example:
console.log(problemOne({ CS230: 95, CS250: 89, CS133: 91 })); // Output: 91.7
console.log(problemOne({ CS230: '', CS250: '', CS133: '' })); // Output: undefined


/**
 * Convert an object to an array, where the keys are the first element in each subarray, and the values are the second element
 * Example (input): {a: 1, b: 2, c: 3}
 * Example (output): [['a', 1], ['b', 2], ['c', 3]]
 *
 * @param {object} obj
 *
 * @returns {array}
 */
// Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
function problemTwo(obj) {
  let arr = Object.entries(obj).map(([key, value]) => {
    if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
      return [key, Object.entries(value)];}
    return [key, value];
  });
  return arr;}
console.log(problemTwo({a: 1, b: 2, c: {d: 3}})); // Expected: [['a', 1], ['b', 2], ['c', [['d', 3]]]]
/**



 * You are given a hand of five playing cards.
 * Each card is represented as an object with a suit and a value.
 * Example: [
 * {suit: 'clubs', value: 10},
 * {suit: 'hearts', value: 10},
 * {suit: 'spades', value: 1},
 * {suit: 'hearts', value: 'J'},
 * {suit: 'spades', value: 'A'}]
 *
 * Write a function that return whether you have a
 * straight flush, four of a kind, full house, flush, straight, three of a kind, two pair, one pair, or high card.
 *
 * A straight flush is a hand that contains five cards of sequential value, all of the same suit.
 * A four of a kind is a hand that contains four cards of the same value.
 * A full house is a hand that contains three cards of one value, and two cards of another value.
 * A flush is a hand that contains five cards of the same suit.
 * A straight is a hand that contains five cards of sequential value.
 * A three of a kind is a hand that contains three cards of the same value.
 * A two pair is a hand that contains two cards of one value, and two cards of another value.
 * A one pair is a hand that contains two cards of the same value.
 * A high card is any hand that does not fit any of the above categories.
 *
 * Think about how you would structure this logic to be easy to read and understand
 * especially when it comes to the definitions of these hands.*/

function problemThree(hand) {
  // Extract the values and suits from the hand
  const values = hand.map(card => card.value);
  const suits = hand.map(card => card.suit);

  // Helper function to count occurrences of each item in an array
  const countOccurrences = arr => arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  // Count how many times each value and suit appears
  const valueCounts = countOccurrences(values);
  const suitCounts = countOccurrences(suits);

  // Check if all cards have the same suit (flush)
  const isFlush = Object.values(suitCounts).includes(5);

  // Order of card values for comparison
  const valueOrder = 'A23456789TJQK';
  // Convert card values to their order index and sort them
  const sortedValues = values.map(value => valueOrder.indexOf(value.toString())).sort((a, b) => a - b);
  // Check if the sorted values form a sequence (straight)
  const isStraight = sortedValues.every((value, index) => index === 0 || value === sortedValues[index - 1] + 1) ||
                     (sortedValues.includes(0) && sortedValues.slice(-4).every((value, index) => index === 0 || value === sortedValues.slice(-4)[index - 1] + 1));

  // Get the counts of each value
  const counts = Object.values(valueCounts);
  // Helper function to check if a certain count exists
  const hasCount = count => counts.includes(count);

  // Determine the type of hand based on the counts and checks
  if (isFlush && isStraight) return 'straight flush'; // All cards are in sequence and have the same suit
  if (hasCount(4)) return 'four of a kind'; // Four cards have the same value
  if (hasCount(3) && hasCount(2)) return 'full house'; // Three cards of one value and two cards of another value
  if (isFlush) return 'flush'; // All cards have the same suit
  if (isStraight) return 'straight'; // All cards are in sequence
  if (hasCount(3)) return 'three of a kind'; // Three cards have the same value
  if (counts.filter(count => count === 2).length === 2) return 'two pair'; // Two different pairs of cards
  if (hasCount(2)) return 'one pair'; // Two cards have the same value
  return 'high card'; // None of the above, so the highest card is the best
}






/**
 * Check if two objects are equal in keys and values.
 * This has to handle deeply nested objects.
 *
 * @param {object} objOne
 * @param {object} objTwo
 * @returns {boolean}
 */
function problemFour(objOne, objTwo) {
  // Helper function to check if two values are deeply equal
  function deepEqual(a, b) {
    if (a === b) return true;

    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;

    let keysA = Object.keys(a), keysB = Object.keys(b);

    if (keysA.length != keysB.length) return false;

    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }

    return true;
  }

  return deepEqual(objOne, objTwo);
}

// Test the function
console.log(problemFour({}, {})); // Expected: true
console.log(problemFour({a: 1}, {a: 1})); // Expected: true
console.log(problemFour({a: 1, b: 2, c: 3}, {'a': 1, 'b': 2, 'c': 3})); // Expected: true
console.log(problemFour({a: 1, b: 2, c: 3}, {a: 1, b: 2})); // Expected: false
console.log(problemFour({a: 1, b: {c: 3, d: 4}}, {a: 1, b: {c: 3, d: 4}})); // Expected: true
console.log(problemFour({a: 1, b: {c: 3, d: 4}}, {a: 1, b: {c: 3, d: 5}})); // Expected: false
console.log(problemFour({a: 1, b: {c: 3, d: {e: 5}}}, {a: 1, b: {c: 3, d: {e: 5}}})); // Expected: true
