const isPossible = (actual, game) => {
    return game.sets.every(({ red = 0, green = 0, blue = 0}) => {
        return red <= actual.red && green <= actual.green && blue <= actual.blue
    })
}

const lineToGame = line => {
        const [start, end] = line.split(': ')
        const sets = end.split('; ')

        return {
            id: Number(start.split(' ')[1]),
            sets: sets.map(
                set => set.split(', ').reduce(
                    (acc, curr) => {
                        const [n, color] = curr.split(' ')
                        acc[color] = Number(n)

                        return acc
                    },
                    {}
                )
            )
        }
    }

export const part1 = input => {
    const games = input.split('\n').map(lineToGame)
    const actual = {red: 12, green: 13, blue: 14}
    let result = 0

    for (const game of games) {
        if (isPossible(actual, game)) {
            result += game.id
        }
    }

    return Promise.resolve(result)
}

const findMinimums = game => {
    return game.sets.reduce((acc, {red = 0, green = 0, blue = 0}) => ({
        red: Math.max(acc.red, red),
        green: Math.max(acc.green, green),
        blue: Math.max(acc.blue, blue),
    }),
    {red: 0, green: 0, blue: 0}
    )
}

export const part2 = input => {
    const games = input.split('\n').map(lineToGame)
    
    let result = 0
    for (const game of games) {
        const {red, green, blue} = findMinimums(game)
        result += red * green * blue
    }

    return Promise.resolve(result)
}