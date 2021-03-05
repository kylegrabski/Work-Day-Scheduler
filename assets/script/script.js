// can assign this as a variable and assign it to our HTML

// creating the current date
var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm a")
console.log(currentDate)

// variable linked to our #currentDay HTML element
// var $currentDay = document.getElementById("currentDay");
var $currentDay = $('#currentDay');

// assigning the text content of our currentDay HTML element
// to the current date variable
$currentDay.text(currentDate);




