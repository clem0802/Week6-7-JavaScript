/*------------------------------*/ (Sprint4, Types and Comparisons)
/*------------------------------*/ (2nd part of Reward Icon - purple challenges)
(2021.12.17)


/*------------------------------*/ (exo 5/10)
// Gretchen's Grocery is offering a deal this week: 12 cans of corn for $4.99. 
// Hank's General Store wants to compete, so they offer 13 cans of corn for $5.50. 
// Write a program that calculates and saves the per-unit price and then compares the results.
// (Gretchen's has the better deal!) => (ignore this instruction, cause confusing and won't pass)

var gretchens = 4.99/12; // (add this line)
var hanks = 5.50/13; // (add this line)

if (hanks < gretchens) {
    console.log("Hank's has the better deal!");
} else {
    console.log("Hank's price can't compete!");
}


/*------------------------------*/ (exo 6/10)
var values = ["true", false, true, true, "true", "false", false, false, "true",
 true
];

for (var i = 0; i < values.length; i++) {
 if (values[i - 1]  === values[i]) {  // add "==="
  console.log("Duplicate at position " + i);
  console.log("Duplicate: " + values[i]);
 };
};

/*
Duplicate at position 3
Duplicate: true
Duplicate at position 7
Duplicate: false
*/


/*------------------------------*/ (exo 7/10)
// A patron won 100 points at the arcade and then redeemed their points for several prizes (etc etc)

var points = 100;
points -= 20;
points -= 35;
points -= 2;
points -= 8;

if (points > 0) { // add "points > 0"
 console.log("Points Remaining: " + points); // add "+ points"
} else {
 console.log("No Points Remaining");
}


/*------------------------------*/ (exo 8/10)
// Weather Forecast

var high_temperature = 76;
var low_temperature = 63;
var conditions = "Partly Cloudy";
var city = "Washington, DC";
var weather_advisory = true;

console.log("Today's forecast calls for a high of " + high_temperature + " degrees and a low of " + low_temperature + " degrees. Conditions will be " + conditions + " in " + city + ".");
if (weather_advisory === true) {
 console.log("The National Weather Service has issued a weather advisory.")
}

// Today's forecast calls for a high of 76 degrees and a low of 63 degrees. 
// Conditions will be Partly Cloudy in Washington, DC.
// The National Weather Service has issued a weather advisory.


/*------------------------------*/ (exo 9/10)
// Add a console.log statement to the loop body to concatenate the player at location i 
// with their corresponding number of points. 
// Hint: To access an element in an array, you can use bracket syntax. 
// Keep in mind that an array is indexed starting at 0. 
// For example, console.log(array[1]) would display Sarah in the console.

var players = ["Kevin", "Sarah", "Ashley", "Cameron"];
var points = [23, 26, 34, 16];

for (var i = 0; i < players.length; i++) {
  console.log(players[i] + ": " + points[i]); // (add what is in parenthesis of console)
}

// Kevin: 23
// Sarah: 26
// Ashley: 34
// Cameron: 16


/*------------------------------*/ (exo 10/10)
// First, declare the variable search_term and assign it the value "Jason".
// Next, implement the if statement parameter such that the if statement triggers 
// when the guest exactly matches the search_term.

var guests = ["Frank", "Bill", "Sarah", "Jason", "Ashley", "John"];
var search_term = "Jason"; // (add this line)

for (var i = 0; i <= guests.length; i++) {
 if (guests[i] === search_term) { // (add what is in parenthesis)
  console.log("Guest found!");
 }
}
// Guest found!


