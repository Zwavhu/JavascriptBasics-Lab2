console.log("Loading a module");
require("./mod");
console.log("Done");

console.log("Loading a module");
let mod = require("./mod");
console.log("Mod:", mod);
console.log("Done");

let fs = require("fs");
fs.readFile("./ELEN4010.txt", "utf8", (err, data) => {
  // utf8 is the encoding of the file
  if (err) throw err; // callbacks usually get errors in this format
  // err will either contain the error or null
  console.log(data); // if there weren't errors, send the data to the console
});

// CHALLANGE---- USING dolor MODULE TO GENERATE A SENTENCE
console.log("Loading a dolor module");
require("./dolor");
console.log("Done Loading a dolor module");

// USING fs MODULE TO FILL TEXT

let inputText = require("fs");

fs.readFile("./ELEN4006.txt", "utf8", (erro, someText) => {
  // utf8 is the encoding of the file
  if (erro) throw erro; // callbacks usually get errors in this format
  // err will either contain the error or null
  console.log(someText); // if there weren't errors, send the data to the console
});

let genText = "Heellllloooo, Woooooooooorld"; // replace with word generator

//  WRITTING THE GENERATED TEXT TO A FILE
fs.writeFile("./output.txt", genText, er => {
  if (er) throw err;
});
