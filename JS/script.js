//input date
let ageDay = document.querySelector('.js-day');
let ageMonth = document.querySelector('.js-month');
let ageYear = document.querySelector('.js-year'); 

//important data
yearError = document.querySelector('.year-error');
monthError = document.querySelector('.month-error');
dayError = document.querySelector('.day-error');
p_year = document.querySelector('.p-year');
p_month = document.querySelector('.p-month');
p_day = document.querySelector('.p-day');

let month = [31,28,31,30,31,30,31,31,30,31,30,31];


// current date
const currentTime = new Date();
let currentDay = currentTime.getDate();
let currentMonth = currentTime.getMonth() + 1;
let currentYear = currentTime.getFullYear();


//function
function ageCalculator() {
  //'the field is erquired' case
  if (ageYear.value == '' || ageMonth.value == '' || ageDay.value == '') {
    if (ageDay.value == '') {
      ageDay.style.borderColor = "hsl(0, 100%, 67%)";
      dayError.innerHTML = 'This field is required';
      dayError.style.color = 'hsl(0, 100%, 67%)';
      dayError.style.fontStyle = 'italic';
      dayError.style.fontWeight = '500';
      p_day.style.color = 'hsl(0, 100%, 67%)';
    }
    if (ageYear.value == '') {
      ageYear.style.borderColor = "hsl(0, 100%, 67%)"; 
      yearError.innerHTML = 'This field is required';
      yearError.style.color = 'hsl(0, 100%, 67%)';
      yearError.style.fontStyle = 'italic';
      yearError.style.fontWeight = '500';
      p_year.style.color = 'hsl(0, 100%, 67%)';
    }
    if (ageMonth.value == '') {
      ageMonth.style.borderColor = "hsl(0, 100%, 67%)";
      monthError.innerHTML = 'This field is required';
      monthError.style.color = 'hsl(0, 100%, 67%)';
      monthError.style.fontStyle = 'italic';
      monthError.style.fontWeight = '500';
      p_month.style.color = 'hsl(0, 100%, 67%)';
    }
  }
  else{
    isLeapYear(ageYear.value); //check number of day in feb. month

    if (ageDay.value > month[ageMonth.value - 1] || ageDay.value < 1 || ageDay.value > currentDay) {
      inValidDay();
      if (ageMonth.value > 12 || ageMonth.value === 0) {
        inValidMonth();
      }
      if (ageYear.value > currentYear) {
        inValidYear();
      }
    }
    else if (ageMonth.value > 12 || ageMonth.value === 0) {
      inValidMonth();
      if (ageDay.value < 1 || ageDay.value > month[ageMonth.value - 1]) {
        inValidDay();
      }
      if (ageYear.value > currentYear) {
        inValidYear();
      }
    }
    else if (ageYear.value > currentYear) {
      inValidYear();
      if (ageDay.value < 1 || ageDay.value > month[ageMonth.value - 1]) {
        inValidDay();
      }
      if (ageMonth.value > 12 || ageMonth.value === 0) {
        inValidMonth();
      }
    }
    else {
      calculate();
    }
  }  
}


function inValidDay() {
    dayError.innerHTML = "Must be a valid day";
    dayError.style.color = 'hsl(0, 100%, 67%)';
    dayError.style.fontStyle = 'italic';
    dayError.style.fontWeight = '500';
    p_day.style.color = 'hsl(0, 100%, 67%)';
    ageDay.style.borderColor = 'hsl(0, 100%, 67%)';
}

function inValidMonth(){
    monthError.innerHTML = "Must be a valid month";
    monthError.style.color = 'hsl(0, 100%, 67%)';
    monthError.style.fontStyle = 'italic';
    monthError.style.fontWeight = '500';
    p_month.style.color = 'hsl(0, 100%, 67%)';
    ageMonth.style.borderColor = 'hsl(0, 100%, 67%)';
}


function inValidYear() {
    yearError.innerHTML = "Must be in the past";
    yearError.style.color = 'hsl(0, 100%, 67%)';
    yearError.style.fontStyle = "italic";
    yearError.style.fontWeight = '500';
    p_year.style.color = 'hsl(0, 100%, 67%)';
    ageYear.style.borderColor = 'hsl(0, 100%, 67%)';
}

function calculate(){
  if (ageDay.value > currentDay){
    currentDay = currentDay + month[ageMonth - 1];
    currentMonth = currentMonth - 1;
  }
  if (ageMonth.value > currentMonth) {  
    currentYear = currentYear - 1;  
    currentMonth = currentMonth + 12;
  }

  //result data 
  let yearResult = currentYear - ageYear.value;
  let monthResult = currentMonth - ageMonth.value;
  let dayResult = currentDay - ageDay.value;

  // display result 
  document.querySelector('#year-result').innerHTML = yearResult;
  document.querySelector('#month-result').innerHTML = monthResult;
  document.querySelector('#day-result').innerHTML = dayResult;

  localStorage.removeItem(toString(ageDay.value),toString(ageMonth.value),toString(ageYear.value));
}

//check a leap year to updat day numbers of feb. month
function isLeapYear(year) {
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
        month[1] = 29;
    } else {
        month[1] = 28;
    }
}



