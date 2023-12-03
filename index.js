import process from 'node:process'
import * as logger from './utils/logger.js'
import solve from './utils/solve.js'

const args = process.argv.slice(2)
const day = Number(args[0])
const part = Number(args[1] || 1)
const inputFile = args[2] || 'input'
logger.debug('ARGS: ', {day, part, inputFile, all: args})

if (typeof day !== 'number') {
	throw new TypeError('"day" input must be a number (e.g. `npm run day 1`)')
} else if (day < 0 || day > 25) {
	throw new Error('This is the advent celendar, bro. "day" must be between 1 and 25.')
}

if (typeof part !== 'number') {
	throw new TypeError('"part" input must be a number (e.g. `npm run day 1 1`)')
} else if (part < 0 || part > 3) {
	throw new Error('Advent of code problems can only have 1 - 3 parts.')
}

if (typeof inputFile !== 'string') {
	throw new TypeError('"inputFile" must be a string (e.g. `npm run day 1 1 example` | `npm run day 1 1 input`')
}

const solversPath = `./day${args[0]}/index.js`
const solvers = await import(solversPath)
if (!solvers.part1) {
	throw new Error(`${solversPath} must export a \`part1\` function`)
}

const solution = await solve(solvers[`part${part}`], day, part, inputFile)
logger.log(solution, '\n')
