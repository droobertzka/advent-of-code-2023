const isNumber = x => !Number.isNaN(Number(x))

export const part1 = input => {
	const lines = input.split('\n')

	const sum = lines.reduce((acc, curr) => {
		const chars = [...curr]
		const first = chars.find(isNumber)
		const last = chars.reverse().find(isNumber)

		return acc + Number(first + last)
	}, 0)

	return sum
}

const stringReverse = string_ => [...string_].reverse().join('')

const mappings = {
	one: '1',
	two: '2',
	three: '3',
	four: '4',
	five: '5',
	six: '6',
	seven: '7',
	eight: '8',
	nine: '9',
}

const reverseMappings = Object.fromEntries(Object.entries(mappings).map(([key, value]) => [stringReverse(key), value]))

const wordsToNumbers = (mappings, string_) => string_.replace(
	new RegExp(Object.keys(mappings).join('|')),
	match => mappings[match],
)
	.split('') // eslint-disable-line unicorn/prefer-spread

export const part2 = input => {
	const lines = input.split('\n')

	const sum = lines.reduce((acc, curr) => {
		const withFirst = wordsToNumbers(mappings, curr)
		const first = withFirst.find(isNumber)
		const withLast = wordsToNumbers(
			reverseMappings,
			[...curr].reverse().join(''),
		)
		const last = withLast.find(isNumber)

		return acc + Number(first + last)
	}, 0)

	return sum
}
