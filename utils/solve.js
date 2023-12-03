import * as logger from './logger.js'
import {readInput} from './read-input.js'

const solve = async (solver, day, part, inputFile) => {
	const input = await readInput(day, inputFile).catch(error => {
		logger.error(`Error reading part ${part} input`, inputFile)
		throw error
	})
	logger.debug(`Part ${part} input: `, input)

	try {
		const solution = solver(input)
		logger.log(`_PART ${part}____`)

		return solution
	} catch (error) {
		logger.error(`Error solving part ${part}`)

		throw error
	}
}

export default solve
