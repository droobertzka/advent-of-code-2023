#!/bin/bash

set -e

read -p "What day of the month should I create files for? " day

echo ""

if ! [[ "$day" =~ ^[0-9]+$ ]]
then
    echo "Day input must be an integer"
    exit 1
fi

mkdir "day$day"
echo -e 'export const part1 = input => {\n\tconsole.log(input)\n}' > "day$day/index.js"
touch "day$day/example.txt"
touch "day$day/input.txt"

echo -e "Successfully created files in a day$day directory!"
