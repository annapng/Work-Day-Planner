// collecting my necessary variables, wrapping them so they'll get collected after the page loads.
  var currentDay = $(document).getElementById(currentDay);
  var hour9 = $(document).getElementById('hour9');
  var hour10 = $(document).getElementById('hour10');
  var hour11 = $(document).getElementById('hour11');
  var hour12 = $(document).getElementById('hour12');
  var hour13 = $(document).getElementById('hour13');
  var hour14 = $(document).getElementById('hour14');
  var hour15 = $(document).getElementById('hour15');
  var hour16 = $(document).getElementById('hour16');
  var hour17 = $(document).getElementById('hour17');

// calling all my functions to make the local storage work
  work();
  nineAM();
  tenAM();
  elevenAM();
  twelvePM();
  onePM();
  twoPM();
  threePM();
  fourPM();
  fivePM();


function work() {

//inserting dayjs into the code
  var today = dayjs();


// Code to display the current day of the week
  var hourOfTheDay = today.format('H');
  console.log(hourOfTheDay);
  var dayWeek = today.format('[Today is] dddd, MMMM D, YYYY');
  $('#currentDay').text(dayWeek);


//Code to apply the CSS classes to the right boxes - would love to find a more efficient way to do this one day. Kept wracking my brain to find one but this'll have to do for now....
  if (hourOfTheDay > 9) { hour9.classList.add('past'); }
  else if (hourOfTheDay == 9) { hour9.classList.add('present'); }
  else if (hourOfTheDay < 9) { hour9.classList.add('future'); }

  if (hourOfTheDay > 10) { hour10.classList.add('past'); }
  else if (hourOfTheDay == 10) { hour10.classList.add('present'); }
  else if (hourOfTheDay < 10) { hour10.classList.add('future'); }

  if (hourOfTheDay > 11) { hour11.classList.add('past'); }
  else if (hourOfTheDay == 11) { hour11.classList.add('present'); }
  else if (hourOfTheDay < 11) { hour11.classList.add('future'); }

  if (hourOfTheDay > 12) { hour12.classList.add('past'); }
  else if (hourOfTheDay == 12) { hour12.classList.add('present'); }
  else if (hourOfTheDay < 12) { hour12.classList.add('future'); }

  if (hourOfTheDay > 13) { hour13.classList.add('past'); }
  else if (hourOfTheDay == 13) { hour13.classList.add('present'); }
  else if (hourOfTheDay < 13) { hour13.classList.add('future'); }

  if (hourOfTheDay > 14) { hour14.classList.add('past'); }
  else if (hourOfTheDay == 14) { hour14.classList.add('present'); }
  else if (hourOfTheDay < 14) { hour14.classList.add('future'); }

  if (hourOfTheDay > 15) { hour15.classList.add('past'); }
  else if (hourOfTheDay == 15) { hour15.classList.add('present'); }
  else if (hourOfTheDay < 15) { hour15.classList.add('future'); }

  if (hourOfTheDay > 16) { hour16.classList.add('past'); }
  else if (hourOfTheDay == 16) { hour16.classList.add('present'); }
  else if (hourOfTheDay < 16) { hour16.classList.add('future'); }

  if (hourOfTheDay > 17) { hour17.classList.add('past'); }
  else if (hourOfTheDay == 17) { hour17.classList.add('present'); }
  else if (hourOfTheDay < 17) { hour17.classList.add('future'); }

}

// Below are my functions that run from the start - that will get the user input into storage and on refreshes.
// As with the colors / classes, I'd love to be able to find a more efficient way to solve this problem
function nineAM() {
  var saveBtn9am = document.getElementById("9ambtn");
  var input9am = document.getElementById("9amtext");
// event listener - when clicked, saved the input data in local storage
  saveBtn9am.addEventListener("click", function () {
    console.log(input9am.value);
    localStorage.setItem("text9", input9am.value);
  });
// this line of code below ensures previously entered data pops back up next time you reload the page
  input9am.textContent = localStorage.getItem("text9");
}

function tenAM() {
  var saveBtn10am = document.getElementById("10ambtn");
  var input10am = document.getElementById("10amtext");

  saveBtn10am.addEventListener("click", function () {
    console.log(input10am.value);
    localStorage.setItem("text10", input10am.value);
  });

  input10am.textContent = localStorage.getItem("text10");
}

function elevenAM() {
  var saveBtn11am = document.getElementById("11ambtn");
  var input11am = document.getElementById("11amtext");

  saveBtn11am.addEventListener("click", function () {
    console.log(input11am.value);
    localStorage.setItem("text11", input11am.value);
  });

  input11am.textContent = localStorage.getItem("text11");
}

function twelvePM() {
  var saveBtn12pm = document.getElementById("12pmbtn");
  var input12pm = document.getElementById("12pmtext");

  saveBtn12pm.addEventListener("click", function () {
    console.log(input12pm.value);
    localStorage.setItem("text12", input12pm.value);
  });

  input12pm.textContent = localStorage.getItem("text12");
}

function onePM() {
  var saveBtn1pm = document.getElementById("1pmbtn");
  var input1pm = document.getElementById("1pmtext");

  saveBtn1pm.addEventListener("click", function () {
    console.log(input1pm.value);
    localStorage.setItem("text1", input1pm.value);
  });

  input1pm.textContent = localStorage.getItem("text1");
}

function twoPM() {
  var saveBtn2pm = document.getElementById("2pmbtn");
  var input2pm = document.getElementById("2pmtext");

  saveBtn2pm.addEventListener("click", function () {
    console.log(input2pm.value);
    localStorage.setItem("text2", input2pm.value);
  });

  input2pm.textContent = localStorage.getItem("text2");
}

function threePM() {
  var saveBtn3pm = document.getElementById("3pmbtn");
  var input3pm = document.getElementById("3pmtext");

  saveBtn3pm.addEventListener("click", function () {
    console.log(input3pm.value);
    localStorage.setItem("text3", input3pm.value);
  });

  input3pm.textContent = localStorage.getItem("text3");
}

function fourPM() {
  var saveBtn4pm = document.getElementById("4pmbtn");
  var input4pm = document.getElementById("4pmtext");

  saveBtn4pm.addEventListener("click", function () {
    console.log(input4pm.value);
    localStorage.setItem("text4", input4pm.value);
  });

  input4pm.textContent = localStorage.getItem("text4");
}

function fivePM() {
  var saveBtn5pm = document.getElementById("5pmbtn");
  var input5pm = document.getElementById("5pmtext");

  saveBtn5pm.addEventListener("click", function () {
    console.log(input5pm.value);
    localStorage.setItem("text5", input5pm.value);
  });

  input5pm.textContent = localStorage.getItem("text5");
}