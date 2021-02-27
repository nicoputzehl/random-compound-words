const { horror } = require("./words/adjectives");
const { nouns } = require("./words/nomen");
const { numbers } = require("./words/numbers");

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomElement(array) {
	return array[getRandomIntInclusive(0, array.length - 1)];
}

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = function randomCompoundWord() {
	const adjective = capitalize(randomElement(horror));
	const noun = randomElement(nouns);
	const number = randomElement(numbers);

	return adjective + noun + number;
}
