module.exports = function check(str, bracketsConfig) {
	if (str.length < 2 || str.length % 2 !== 0) return false;
	console.log(str)

	const stack = []
	const pairs = {
		'{': '}',
		'(': ')',
		'[': ']'
	}
	let paralls = 0

	const configArr = Array.from(bracketsConfig)
	const openBracketsArr = [];
	const closeBracketsArr = [];

	for (let symbol of str.split('')) {
		// console.log(symbol, 'symbol')

		if (stack[stack.length - 1] === '|') {
			paralls += 1
			stack.pop()
			// console.log(paralls, 'parallsparalls')
		} else if (stack[stack.length - 1] === symbol && symbol !== '|') {
			// console.log(stack[stack.length - 1], '222')
			// console.log(symbol, '3333')
			stack.pop()
		}
		else stack.push(pairs[symbol])
	}

	for (let i = 0; i < str.length; i++) {
		let current = str[i]

		if (pairs[current]) {
			stack.push(pairs[current])
		}
		else if (current !== stack.pop()) {
			return false;
		}
	}

	for (let i = 0; i < configArr.length; i++) {
		let pairs = configArr[i];

		const openSign = Array.from(pairs[0]);
		const closeSign = Array.from(pairs[1]);

		openBracketsArr.push(openSign.toString());
		closeBracketsArr.push(closeSign.toString());
	}

	// console.log(paralls, 'paralls')
	// console.log(paralls % 2, 'paralls')

	return !stack.length && paralls % 2 === 0
}