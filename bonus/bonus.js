/**
 * Takes in color and returns whether or not the color is a primary color.
 * The primary colors are "Red", "Yellow", and "Blue"
 * @param {string} color - The color.
 * @returns {boolean} - Whether the color is a primary color
 */
//function isPrimaryColor() {}
const isPrimaryColor = (color) => {
  return (color === "red" || color === "blue" || color === "yellow") ?
  true : false;
}

/**
 * Takes in color and returns whether or not the color is a primary color.
 * Uses exactly one if statement in its definition
 * @param {string} color - The color.
 * @returns {boolean} - If primary color or not
 */
function isPrimaryColorOneIf(color) {
  if(color === "red" || color === "blue" || color === "yellow") {
      return true;
  } else {
      return false;
  }
}

/**
 * Takes in two words and returns the word that comes first in lexicographical order.
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @returns {string} - The word that is smaller in lexicographical order
 */
//function lexicographicalOrder(word1, word2) {}
const lexicographicalOrder = (word1, word2) => {
  return (word1 < word2) ? word1 : word2
}


/**
 * Takes in a word and returns "large" if its length is 5 character or more.
 * Otherwise returns "small"
 * @param {string} word
 * @returns {string} - "large" or "small"
 */
function largeOrSmall(word) {
  return (word.length >= 5) ? "large" : "small"
}

/**
 * Takes in two words and returns the longer word.
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @returns {string} - The longer word
 */
const longerWord = (word1, word2) => {
  return (word1.length > word2.length) ? word1 : word2
}

/**
 * Takes in three words and returns the shortest word.
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @param {string} word3 - The third word.
 * @returns {string} - The shortest word
 */
function shortestWord(word1, word2, word3) {
  if((word1.length < word2.length) && (word1.length < word3.length)){
      return word1;
  } else if((word2.length < word1.length) && (word2.length < word3.length)){
      return word2;
  } else {//if((word3.length < word1.length) && (word3.length < word2.length)){
      return word3;
}
}

module.exports = {
  isPrimaryColor,
  isPrimaryColorOneIf,
  lexicographicalOrder,
  largeOrSmall,
  longerWord,
  shortestWord,
};
