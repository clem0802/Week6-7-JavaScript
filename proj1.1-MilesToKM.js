/*------------------------------*/ (Sprint4, JavaScript)
/*------------------------------*/ (proj-1, miles to KM)
(2021.12.15)

/*------------------------------*/ 
var miles = 24;
var kilometers = 40;
var number = 1.609344;
var kilometersToMiles = kilometers / number;
var milesToKilometers = miles * number;

console.log("Distance conversions");
console.log("-----------------------");
console.log(kilometers + " kilometers are:");
console.log(kilometersToMiles + " miles");
console.log("----");
console.log(miles + " miles are:");
console.log(milesToKilometers + " kilometers");
console.log("\n");

var celsius = 5;
var fahrenheit = 41;
var celsiusToFahrenheit = (celsius * 9 / 5) + 32;
var fahrenheitToCelsius = (fahrenheit - 32) * 5 / 9;

console.log("Temperature conversions");
console.log("-----------------------");
console.log(fahrenheit + " degrees fahrenheit are:");
console.log(fahrenheitToCelsius + " degrees celsius");
console.log("----");
console.log(celsius + " degrees celsius  are:"); // (2 spaces in the SOLUTION)
console.log(celsiusToFahrenheit + " degrees fahrenheit");
