## Date: 2023.10.09
## Reference: https://mimo.org/web/track/211/tutorial/1729/chapter/11579/project?lesson=7

let miles = 24;
let kilometers = 40;
let number = 1.609344;

let kilometersToMiles = kilometers/number;
let milesToKilometers = miles * number;

console.log("Distance conversions");

# km to mi
console.log("-----------------------");
console.log(kilometers + " kilometers are:");
console.log(kilometersToMiles + " miles");

# mi to km
console.log("----");
console.log(miles + " miles are:");
console.log(milesToKilometers + " kilometers");
console.log("\n");
