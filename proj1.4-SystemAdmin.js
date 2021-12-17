// Use JavaScript to check if a user is a system admin

var account = "admin";
var status = "active";
var isAdmin = account === "admin";
var isValid = status !== "inactive";

account = "regular";
console.log("Admin: " + isAdmin);
console.log("Valid: " + isValid);
