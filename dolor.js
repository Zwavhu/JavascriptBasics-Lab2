console.log("I'm inside a dolor module!!!")

// sentence generator
var dolor = require('dolor')

let sent = dolor.sentence() //# returns a single sentence
let tweet = dolor.tweet() //   # returns 3 individual sentence

console.log(`GENERATED SENTENCE: ${sent}`)
console.log('<---------------------------------------->')
console.log(`TWEET: ${tweet}`)
