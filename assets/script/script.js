// global variables

// gets date from moment and format
var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm a")


// variables assigned to HTML elements

// variable linked to our #currentDay HTML element
var $currentDay = $('#currentDay');
var $timeBlock = $('.time-block')

// show present time upon opening
$currentDay.text(currentDay);
// have time update every minute

for (let i = 9; i <= 17; i++) {
    $timeBlock.append(createTimeBlocks(i));
    console.log(i)
}
    function createTimeBlocks (time) {
    // create in JS timeblocks from 9a - 5p (9 - 17) ***LOOK AT OUR HTML AND CSS FOR ID/CLASS NAMES***
    var backgroundColor;
    if (time < currentDay){
        backgroundColor = "past";
    } else if (time === currentDay){
        backgroundColor = "present";
    } else {
        backgroundColor = "future";
    }
    var timeBlock = $("<div>");




    // can enter text in each timeblock

    // timeblocks in past have grey background color(.past in CSS)

    // timeblock in present has red background color (.present CSS)

    // timeblocks in future have green background color (.future in CSS)

    // each timeblock has a save button

    // if clicked, the text in the timeblock is saved to local storage.

}








    







