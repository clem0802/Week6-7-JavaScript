// Practice your string and number comparisons by coding a budgeting app.
var budget = 3200;
var savingPriority = "high";
var rent = 1100;
var utilities = 370;
var newLaptop = 1200;
var totalCosts = rent + utilities;
var budgetLeft = budget - totalCosts;
var buyLaptop = budgetLeft >= newLaptop;
console.log(buyLaptop); // true
console.log(savingPriority === "high"); // true

budget = 2500;
savingPriority = "low";
rent = 800;
var utilities = 200;
console.log(buyLaptop); // true
