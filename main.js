console.log('Loading a module')
require('./mod')
console.log('Done')

console.log('Loading a module')
let mod = require('./mod')
console.log('Mod:', mod)
console.log('Done')

let fs = require('fs')
fs.readFile('./ELEN4010.txt', 'utf8', (err, data) => {
  // utf8 is the encoding of the file
  if (err) throw err // callbacks usually get errors in this format
  // err will either contain the error or null
  console.log(data) // if there weren't errors, send the data to the console
})
