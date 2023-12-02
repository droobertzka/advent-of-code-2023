import path from 'node:path'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'url'
import * as logger from './logger.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


/**
 * Takes a day number and a file name and returns the contents of the file
 * @param {number} day - the number of the day in the advent calendar
 * @param {string} inputFile - the path of the input from the ROOT of the project (e.g. 'example1')
 * @returns {Promise<String>}
 */
export const readInput = async (day, inputFile) => {
    const inputFilePath = `./day${day}/${inputFile}.txt`
    const inputPath = path.resolve(__dirname, '../', inputFilePath)
    logger.debug('Resolved input path: ', inputPath)

    return readFile(inputPath, {encoding: 'utf8'})
}