// import * as logger from '../utils/logger.js'

const symbolMatcher = /[~!@#$%^&*()_+=\-`[\]\\|}{'",<>?/;:]/
const numberMatcher = /(\d)+/g

const hasSymbol = string_ => string_ && symbolMatcher.test(string_)

const findNumbers = line =>
	[...line.matchAll(numberMatcher)].map(match => ({
		value: match[0],
		start: match.index,
		end: match.index + match[0].length,
	}))

// Unused so far
// const findSymbols = (line, y) =>
// 	line.matchAll(symbolMatcher).map(match => ({
// 		value: match[0],
// 		x: match.index,
// 		y,
// 	}))

export const part1 = input => {
	const lines = input.split('\n')

	let y = -1
	let result = 0
	for (const line of lines) {
		y++
		const previousLine = lines[y - 1]
		const nextLine = lines[y + 1]

		// 1. Find all the numbers in the line and document value & start/end indices
		const numbers = findNumbers(line)

		for (const number of numbers) {
			const startIndex = Math.max(number.start - 1, 0)
			const endIndex = Math.min(number.end + 1, line.length - 1)
			if (
				// 2. Check either side in SAME line
				hasSymbol(line.at(startIndex)) || hasSymbol(line.at(endIndex - 1))
				// 3. Check PREVIOUS line
				|| hasSymbol(previousLine && previousLine.slice(startIndex, endIndex))
				// 4. Check NEXT line
				|| hasSymbol(nextLine && nextLine.slice(startIndex, endIndex))
			) {
				result += Number(number.value)
			}
		}
	}

	// Note: During refactoring after getting answer, removing log statements
	// broke the logic due to RegExp.prototype.test being stateful when the
	// global ("g") flag is used. Fortunately, I've encountered a bug due to
	// this same unexpected behavior at work; so it only took 15 min to track
	// down instead of 150 (facepalm@ECMAScript).

	// 538636 -> TOO LOW (missed escape of "-" symbol in regex)
	// Answer: 556367
	return result
}
