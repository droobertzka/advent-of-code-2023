const isNumber = x => !isNaN(Number(x))

export const part1 = (input) => {
    const lines = input.split('\n')

    const sum = lines.reduce((acc, curr) => {
        const chars = curr.split('')
        const first = chars.find(isNumber)
        const last = chars.reverse().find(isNumber)

        return acc + Number(first + last)
    }, 0)

    return sum
}

const strReverse = str => [...str].reverse().join('')

const mappings = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
}

const reverseMappings = Object.entries(mappings).reduce((acc, [key, value]) => ({
    ...acc,
    [strReverse(key)]: value,
}), {})

const wordsToNumbers = (mappings, str) => {
    return str.replace(
            new RegExp(Object.keys(mappings).join('|')),
            match => mappings[match],
        )
        .split('')
}

export const part2 = (input) => {
    const lines = input.split('\n')

    const sum = lines.reduce((acc, curr, i) => {
        const withFirst = wordsToNumbers(mappings, curr)
        const first = withFirst.find(isNumber)
        const withLast = wordsToNumbers(
            reverseMappings,
            [...curr].reverse().join('')
        )
        const last = withLast.find(isNumber)

        return acc + Number(first + last)
    }, 0)

    return sum
}