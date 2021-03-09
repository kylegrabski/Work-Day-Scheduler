// ------------------------global variables----------------------------------------
// gets date from moment and formats time
var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm a");

// gets current hour from moment
// DOUBLE CHECK + OPERATOR
var currentHour = +moment().format("HH");

// -------------------------assigned to HTML---------------------------------------

// variable linked to our #currentDay HTML element
var $currentDay = $("#currentDay");
var $timeBlock = $(".time-block");

// **************************CURRENT TIME******************************************

// show present time upon opening
$currentDay.text(currentDay);
// have time update every minute

// calls createTimeBlocks function for hours 9 - 17(5pm)
for (let i = 9; i <= 17; i++) {
  $timeBlock.append(createTimeBlocks(i));
}

// **********************CREATE BTNS AND TEXT AREAS********************************

// populates our content
function createTimeBlocks(time) {
  // create in JS timeblocks from 9a - 5p (9 - 17)

  var backgroundColor;

  // if time/i is less then the current hour, add the 'past' style to variable
  if (time < currentHour) {
    backgroundColor = "past";
  }

  // if time/i is equal to the current hour, add the 'present' style to variable
  else if (time === currentHour) {
    backgroundColor = "present";
  } else {
    // everything left would be in the future, add the 'future' style to variable
    backgroundColor = "future";
  }

  // creating div elem for our timeBlock
  var timeBlock = $("<div>")
    .addClass("time-block row ")
    .attr("id", "hour-" + time);

  // showing the time on the side of the timeBlock
  var $time = $("<div>").addClass("col-1 hour").text(formatTime(time));

  // text area for user to type in timeBlock.
  var $textArea = $("<textarea>")
    .addClass("col-10 description " + backgroundColor)
    .attr("id", "text-area-" + time);

  // create the SAVE BUTTONS
  $button = $("<button>")
    .addClass("col-1 saveBtn ")
    .append($("<i>").addClass("fas fa-save"))
    .attr("id", "save-button-" + time);

  // returns timeBlock var data with text area and save button saved to it
  return timeBlock.append($time, $textArea, $button);

  // function to format the time to 12 hour time
  function formatTime(time) {
    if (time > 12) {
      return time - 12 + "PM";
    } else {
      return time + "AM";
    }
  }
}

// *******************SAVE BUTTON VARS ASSIGNED TO HTML****************************

var $button9 = document.querySelector("#save-button-9");
var $textArea9 = document.querySelector("#text-area-9");

var $button10 = document.querySelector("#save-button-10");
var $textArea10 = document.querySelector("#text-area-10");

var $button11 = document.querySelector("#save-button-11");
var $textArea11 = document.querySelector("#text-area-11");

var $button12 = document.querySelector("#save-button-12");
var $textArea12 = document.querySelector("#text-area-12");

var $button13 = document.querySelector("#save-button-13");
var $textArea13 = document.querySelector("#text-area-13");

var $button14 = document.querySelector("#save-button-14");
var $textArea14 = document.querySelector("#text-area-14");

var $button15 = document.querySelector("#save-button-15");
var $textArea15 = document.querySelector("#text-area-15");

var $button16 = document.querySelector("#save-button-16");
var $textArea16 = document.querySelector("#text-area-16");

var $button17 = document.querySelector("#save-button-17");
var $textArea17 = document.querySelector("#text-area-17");

// *********************CREATE SAVE FUNCTION***************************************

// -----------------------BUTTON9--------------------------------------------------
// SAVE and RENDER it back onto the page
$button9.addEventListener("click", function (event) {
  // keep page from reloading upon click
  event.preventDefault();

  // var equal to the content inside #text-area-9
  var userText = $textArea9.value;

  // saves text to local storage
  localStorage.setItem("User Text 9 AM", userText);
});

// -----------------------BUTTON10-------------------------------------------------
$button10.addEventListener("click", function (event) {
  event.preventDefault();

  var userText = $textArea10.value;

  localStorage.setItem("User Text 10 AM", userText);
});

// -----------------------BUTTON11-------------------------------------------------
$button11.addEventListener("click", function (event) {
  event.preventDefault();

  var userText = $textArea11.value;

  localStorage.setItem("User Text 11 AM", userText);
});

// -----------------------BUTTON12-------------------------------------------------
$button12.addEventListener("click", function (event) {
  event.preventDefault();

  var userText = $textArea12.value;

  localStorage.setItem("User Text 12 PM", userText);
});

// -----------------------BUTTON13-------------------------------------------------
$button13.addEventListener("click", function (event) {
  event.preventDefault();

  var userText = $textArea13.value;

  localStorage.setItem("User Text 1 PM", userText);
});

// -----------------------BUTTON14-------------------------------------------------
$button14.addEventListener("click", function (event) {
  event.preventDefault();

  var userText = $textArea14.value;

  localStorage.setItem("User Text 2 PM", userText);
});

// -----------------------BUTTON15-------------------------------------------------
$button15.addEventListener("click", function (event) {
  event.preventDefault();

  var userText = $textArea15.value;

  localStorage.setItem("User Text 3 PM", userText);
});

// -----------------------BUTTON16-------------------------------------------------
$button16.addEventListener("click", function (event) {
  event.preventDefault();

  var userText = $textArea16.value;

  localStorage.setItem("User Text 4 PM", userText);
});

// -----------------------BUTTON17-------------------------------------------------
$button17.addEventListener("click", function (event) {
  event.preventDefault();

  var userText = $textArea17.value;

  localStorage.setItem("User Text 5 PM", userText);
});

// ****************RENDER TEXT FUNCTIONS*******************************************

// -----------------------BUTTON9--------------------------------------------------
function renderUserText9() {
  var content = localStorage.getItem("User Text 9 AM");
  $textArea9.textContent = content;
}

// -----------------------BUTTON10-------------------------------------------------
function renderUserText10() {
  var content = localStorage.getItem("User Text 10 AM");
  $textArea10.textContent = content;
}

// -----------------------BUTTON11-------------------------------------------------
function renderUserText11() {
  var content = localStorage.getItem("User Text 11 AM");
  $textArea11.textContent = content;
}

// -----------------------BUTTON12-------------------------------------------------
function renderUserText12() {
  var content = localStorage.getItem("User Text 12 PM");
  $textArea12.textContent = content;
}

// -----------------------BUTTON13-------------------------------------------------
function renderUserText13() {
  var content = localStorage.getItem("User Text 1 PM");
  $textArea13.textContent = content;
}

// -----------------------BUTTON14-------------------------------------------------
function renderUserText14() {
  var content = localStorage.getItem("User Text 2 PM");
  $textArea14.textContent = content;
}

// -----------------------BUTTON15-------------------------------------------------
function renderUserText15() {
  var content = localStorage.getItem("User Text 3 PM");
  $textArea15.textContent = content;
}

// -----------------------BUTTON16-------------------------------------------------
function renderUserText16() {
  var content = localStorage.getItem("User Text 4 PM");
  $textArea16.textContent = content;
}

// -----------------------BUTTON17-------------------------------------------------
function renderUserText17() {
  var content = localStorage.getItem("User Text 5 PM");
  $textArea17.textContent = content;
}

// ********************CALL RENDER FUNCTIONS***************************************
renderUserText9();
renderUserText10();
renderUserText11();
renderUserText12();
renderUserText13();
renderUserText14();
renderUserText15();
renderUserText16();
renderUserText17();

// erases local storage
// localStorage.clear();
