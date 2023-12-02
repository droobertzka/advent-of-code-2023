import process from 'node:process'

const {LOG_LEVEL} = process.env

export const debug = (...args) => {
    if (LOG_LEVEL === 'debug') {
        console.log.apply(console, args)
    }
}

export const log = (...args) => {
    console.log.apply(console, args)
}

export const error = (...args) => {
    console.error.apply(console, args)
}