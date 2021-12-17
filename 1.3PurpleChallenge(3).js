/*------------------------------*/ (Sprint4, Types and Comparisons)
/*------------------------------*/ (2nd part of Reward Icon - purple challenges)
(2021.12.17)


/*------------------------------*/ (exo 4/10)
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


/*------------------------------*/ (exo 5/10)
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




