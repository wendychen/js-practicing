## Date: 2023.10.09
## Reference: https://mimo.org/web/track/211/tutorial/1729/chapter/11579/project-done?tutor=false

let miles = 24;
let kilometers = 40;
let number = 1.609344;

let kilometersToMiles = kilometers/number;
let milesToKilometers = miles * number;

let celsius = 5;
let fahrenheit = 41;

let celsiusToFahrenheit = (celsius * 9 / 5) + 32;
let fahrenheitToCelsius = (fahrenheit - 32) * 5 / 9;

let gram = 500;
let kilometer = 5.27;

let gramToKilometer = (gram / 1000);
let kilometerToGram = (kilometer * 1000);


console.log("Distance conversions");
console.log("-----------------------");
console.log(kilometers + " kilometers are:");
console.log(kilometersToMiles + " miles");
console.log("----");
console.log(miles + " miles are:");
console.log(milesToKilometers + " kilometers");
console.log("\n");

console.log("Temperature conversions");
console.log("-----------------------");
console.log(fahrenheit + " degrees Fahrenheit are:");
console.log(fahrenheitToCelsius + " degrees Celsius");
console.log("----");
console.log(celsius + " degrees Celsius are:");
console.log(celsiusToFahrenheit + " degrees Fahrenheit");
console.log("\n");

console.log("Weight conversions");
console.log("-----------------------");
console.log(gram + " grams are:");
console.log(gramToKilometer + " Kilometer");
