'use strict';

let sum = 0

for (let i = 0; i < 9; i++) {
  sum += 1
}

if (sum % 2 === 0) console.log('sum is even')
else console.log('sum is odd')

let a = 5
let b = 5

console.log(`Ten is ${a + b} and not ${a * b}.`)

let s = 'Hellos';

console.log(`a = ${s}, "s" is ${typeof s}`)

s = 5
s += 2

console.log(`s = ${s}, "s" is ${typeof s}`)

s = true

console.log(`s = ${s}, "s" is a ${typeof s}`)
