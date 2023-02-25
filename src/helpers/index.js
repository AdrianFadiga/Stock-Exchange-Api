function camelToSnake (str) {
	let snakeCase = str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
	if (snakeCase.charAt(0) === "_") {
		snakeCase = snakeCase.slice(1);
	}
	return snakeCase;
}

function objectKeysCamelToSnake(obj) {
	const snakeObj = {};
	for (let key in obj) {
		const snakeKey = camelToSnake(key);
		snakeObj[snakeKey] = obj[key];
	}
	return snakeObj;
}

module.exports = {
	camelToSnake, objectKeysCamelToSnake
};