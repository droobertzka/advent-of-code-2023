import * as logger from './logger.js'
import { readInput } from './read-input.js'

export default async (solver, day, part, inputFile) => {
    const input = await readInput(day, inputFile).catch(error => {
        logger.error(`Error reading part ${part} input`, inputFile)
        throw error
    })
    logger.debug(`Part ${part} input: `, input)

    const solution = await solver(input).catch((error) => {
        logger.error(`Error solving part ${part}`)

        throw error
    })

    logger.log(`\n_PART ${part}____\n`)

    return solution
}