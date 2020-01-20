'use strict'; // Used for protection against double declarations, etc..

// variables
let sum = 0

for (let i = 0; i < 9; i++) {
  sum += 1
}

if (sum % 2 === 0) console.log('sum is even')
else console.log('sum is odd')

// Scripted functions

let a = 5
let b = 5

console.log(`Ten is ${a + b} and not ${a * b}.`)

let s = 'Hellos';
// Weak typing
console.log(`a = ${s}, "s" is ${typeof s}`)

s = 5
s += 2

console.log(`s = ${s}, "s" is ${typeof s}`)

s = true

console.log(`s = ${s}, "s" is a ${typeof s}`)

// Functions
const add = function (a, b) {
  return a + b
};

const result = add(2, 3)
console.log(result)

const anotherAdd = add
console.log(anotherAdd(12, 4))

// Exercise 4

const farToCel = function (faren) {
  return (faren - 32) * (5 / 9)
};

const conv = farToCel(0)
console.log(conv)
