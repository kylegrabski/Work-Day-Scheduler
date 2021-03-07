
// ------------------------global variables----------------------------------------
// gets date from moment and format
var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm a");

// gets current hour from moment
// DOUBLE CHECK + OPERATOR
var currentHour = + moment().format("HH");

// -------------------------assigned to HTML---------------------------------------

// variable linked to our #currentDay HTML element
var $currentDay = $("#currentDay");
var $timeBlock = $(".time-block");

// --------------------------------------------------------------------------------

// show present time upon opening
$currentDay.text(currentDay);
// have time update every minute

// calls createTimeBlocks function for hours 9 - 17(5pm)
for (let i = 9; i <= 17; i++) {
  $timeBlock.append(createTimeBlocks(i));
}

// ------------------------FUNCTIONS-----------------------------------------------

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
  };

  // creating div elem for our timeBlock
  var timeBlock = $("<div>").addClass("time-block row ").attr("id", "hour-" + time);

  // showing the time on the side of the timeBlock
  var $time = $("<div>").addClass("col-1 hour").text(formatTime(time));

  // text area for user to type in timeBlock.
  var $textArea = $("<textarea>").addClass("col-10 description " + backgroundColor).attr("id", "text-area-" + time);

    // create the SAVE BUTTONS
    $button = $("<button>").addClass("col-1 saveBtn ").attr("id", "save-button-" + time)

    
    // var userText = localStorage.getItem("User Text");
    // SAVE FUNCTION
    // function saveButton(e){
      // };
      
      // on click, save text area 
      // prevent default so item persists
      
      
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
};


// -------------------------SAVE BUTTON VARS & FUNCTIONS---------------------------

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

// SAVE and RENDER it back onto the page
$button9.addEventListener("click", function(event){
  // keep page from reloading upon click
  event.preventDefault();

  // var equal to the content inside #text-area-9
  var userText = document.querySelector("#text-area-9").value;

  // saves text to local storage
  localStorage.setItem("User Text 9 AM", userText);
  console.log(userText)
});

// -----------------------BUTTON10-------------------------------------------------
$button10.addEventListener("click", function(event){
  event.preventDefault();
  
  var userText = document.querySelector("#text-area-10").value;

  localStorage.setItem("User Text 10 AM", userText);
  console.log(userText)
});

// -----------------------BUTTON11-------------------------------------------------
$button11.addEventListener("click", function(event){
  event.preventDefault();
  
  var userText = document.querySelector("#text-area-11").value;

  localStorage.setItem("User Text 11 AM", userText);
  console.log(userText)
});

// -----------------------BUTTON12-------------------------------------------------
$button12.addEventListener("click", function(event){
  event.preventDefault();
  
  var userText = document.querySelector("#text-area-12").value;

  localStorage.setItem("User Text 12 PM", userText);
  console.log(userText)
});

// -----------------------BUTTON13-------------------------------------------------
$button13.addEventListener("click", function(event){
  event.preventDefault();
  
  var userText = document.querySelector("#text-area-13").value;

  localStorage.setItem("User Text 1 PM", userText);
  console.log(userText)
});

// -----------------------BUTTON14-------------------------------------------------
$button14.addEventListener("click", function(event){
  event.preventDefault();
  
  var userText = document.querySelector("#text-area-14").value;

  localStorage.setItem("User Text 2 PM", userText);
  console.log(userText)
});

// -----------------------BUTTON15-------------------------------------------------
$button15.addEventListener("click", function(event){
  event.preventDefault();
  
  var userText = document.querySelector("#text-area-15").value;

  localStorage.setItem("User Text 3 PM", userText);
  console.log(userText)
});

// -----------------------BUTTON16-------------------------------------------------
$button16.addEventListener("click", function(event){
  event.preventDefault();
  
  var userText = document.querySelector("#text-area-16").value;

  localStorage.setItem("User Text 4 PM", userText);
  console.log(userText)
});

// -----------------------BUTTON17-------------------------------------------------
$button17.addEventListener("click", function(event){
  event.preventDefault();
  
  var userText = document.querySelector("#text-area-17").value;

  localStorage.setItem("User Text 5 PM", userText);
  console.log(userText)
});




// render text content function
function renderUserText9(){
  var content = localStorage.getItem("User Text 9 AM");
  $textArea9.textContent = content;
}


renderUserText9();







// erases local storage
// localStorage.clear();



// can enter text in each timeblock

// timeblocks in past have grey background color(.past in CSS)

// timeblock in present has red background color (.present CSS)

// timeblocks in future have green background color (.future in CSS)

// each timeblock has a save button

// if clicked, the text in the timeblock is saved to local storage.
