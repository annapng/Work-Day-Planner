var currentDay = document.getElementById(currentDay);
var hour9 = document.getElementById('hour9');
var hour10 = document.getElementById('hour10');
var hour11 = document.getElementById('hour11');
var hour12 = document.getElementById('hour12');
var hour13 = document.getElementById('hour13');
var hour14 = document.getElementById('hour14');
var hour15 = document.getElementById('hour15');
var hour16 = document.getElementById('hour16');
var hour17 = document.getElementById('hour17');
var saveButton = document.getElementsByClassName('saveBtn');

work();



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. https://api.jquery.com/wrap/
function work() {
  
  var today = dayjs();

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

     saveButton.addEventListener("click", function(){

      var stored = localStorage.setItem();


       });


 
    // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding text area elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //



  // TODO: Add code to display the current date in the header of the page.
// day of the week
  var hourOfTheDay = today.format('H');
  console.log(hourOfTheDay);
  var dayWeek = today.format('[Today is] dddd, MMMM D, YYYY');
  $('#currentDay').text(dayWeek);



  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
    if (hourOfTheDay < 9) {hour9.classList.add('past');}
    else if (hourOfTheDay == 9) {hour9.classList.add('present');}
    else if (hourOfTheDay > 9) {hour9.classList.add('future');}

    if (hourOfTheDay < 10) {hour10.classList.add('past');}
    else if (hourOfTheDay == 10) {hour10.classList.add('present');}
    else if (hourOfTheDay > 10) {hour10.classList.add('future');}

    if (hourOfTheDay < 11) {hour11.classList.add('past');}
    else if (hourOfTheDay == 11) {hour11.classList.add('present');}
    else if (hourOfTheDay > 11) {hour11.classList.add('future');}

    if (hourOfTheDay < 12) {hour12.classList.add('past');}
    else if (hourOfTheDay == 12) {hour12.classList.add('present');}
    else if (hourOfTheDay > 12) {hour12.classList.add('future');}

    if (hourOfTheDay < 13) {hour13.classList.add('past');}
    else if (hourOfTheDay == 13) {hour13.classList.add('present');}
    else if (hourOfTheDay > 13) {hour13.classList.add('future');}

    if (hourOfTheDay < 14) {hour14.classList.add('past');}
    else if (hourOfTheDay == 14) {hour14.classList.add('present');}
    else if (hourOfTheDay > 14) {hour14.classList.add('future');}

    if (hourOfTheDay < 15) {hour15.classList.add('past');}
    else if (hourOfTheDay == 15) {hour15.classList.add('present');}
    else if (hourOfTheDay > 15) {hour15.classList.add('future');}

    if (hourOfTheDay < 16) {hour16.classList.add('past');}
    else if (hourOfTheDay == 16) {hour16.classList.add('present');}
    else if (hourOfTheDay > 16) {hour16.classList.add('future');}

    if (hourOfTheDay < 17) {hour17.classList.add('past');}
    else if (hourOfTheDay == 17) {hour17.classList.add('present');}
    else if (hourOfTheDay > 17) {hour17.classList.add('future');}
};


