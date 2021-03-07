
// ------------------------global variables-------------------
// gets date from moment and format
var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm a");

// gets current hour from moment
// DOUBLE CHECK + OPERATOR
var currentHour = + moment().format("HH");

// -------------------------assigned to HTML---------------------------------------

// variable linked to our #currentDay HTML element
var $currentDay = $("#currentDay");
var $timeBlock = $(".time-block");

// ---------------------------------------------------------------

// show present time upon opening
$currentDay.text(currentDay);
// have time update every minute

// calls createTimeBlocks function for hours 9 - 17(5pm)
for (let i = 9; i <= 17; i++) {
  $timeBlock.append(createTimeBlocks(i));
}

// ------------------------FUNCTIONS--------------------------------

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
  var $textArea = $("<textarea>").addClass("col-10 description " + backgroundColor).attr("id", "text-area " + time);

    // create the SAVE BUTTONS
    $button = $("<button>").addClass("col-1 saveBtn ").attr("id", "save-button " + time).on("click", saveButton(e));

    // SAVE FUNCTION
    function saveButton(e){
      
    }
    
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
}

// once that works for all, make save button individual for corresponding hour


// can enter text in each timeblock

// timeblocks in past have grey background color(.past in CSS)

// timeblock in present has red background color (.present CSS)

// timeblocks in future have green background color (.future in CSS)

// each timeblock has a save button

// if clicked, the text in the timeblock is saved to local storage.
