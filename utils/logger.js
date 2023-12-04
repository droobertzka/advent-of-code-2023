import process from 'node:process'

const {LOG_LEVEL} = process.env

export const debug = (...args) => {
	if (LOG_LEVEL === 'debug') {
		console.log(...args)
	}
}

export const info = (...args) => {
	if (LOG_LEVEL === 'info' || LOG_LEVEL === 'debug') {
		console.info(...args)
	}
}

export const log = (...args) => {
	console.log(...args)
}

export const error = (...args) => {
	console.error(...args)
}
