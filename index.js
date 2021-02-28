const { horror } = require("./words/horrorwords");
const { nouns } = require("./words/nouns");

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
export function randomCompoundWord() {
	const adjective = capitalize(randomElement(horror));
	const noun = randomElement(nouns);
	const number = randomElement(getRandomIntInclusive(1,1337));

	return adjective + noun + number;
}
