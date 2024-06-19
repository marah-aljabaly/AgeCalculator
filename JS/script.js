//input date
let ageDay = document.querySelector('.js-day');
let ageMonth = document.querySelector('.js-month');
let ageYear = document.querySelector('.js-year');  

let month = [31,28,31,30,31,30,31,31,30,31,30,31];

// current date
const currentTime = new Date();
let currentDay = currentTime.getDate();
let currentMonth = currentTime.getMonth() + 1;
let currentYear = currentTime.getFullYear();

//important data
let yearError = document.querySelector('.year-error');
let monthError = document.querySelector('.month-error');
let dayError = document.querySelector('.day-error');
let p_year = document.querySelector('.p-year');
let p_month = document.querySelector('.p-month');
let p_day = document.querySelector('.p-day');


//function
function ageCalculator() {

  //'the field is erquired' case
  if (ageYear.value == '' || ageMonth.value == '' || ageDay.value == '') {
    if (ageDay.value == '') {
      requiredField('day');
    }
    if (ageYear.value == '') {
      requiredField('month');
    }
    if (ageMonth.value == '') {
      requiredField('year');
    }
  }

  else{
    isLeapYear(ageYear.value); //check number of day in feb. month

    if (ageMonth.value > 12 || ageMonth.value === 0){
      invalid('month');

      if (ageYear.value > currentYear) {
        invalid('year');
      }

      if (ageDay.value > 30 || ageDay.value < 1) {
        invalid('day');
      }

      if (ageYear.value === currentYear) {
        if (ageMonth.value > currentMonth){
          invalid('month');
        }
      }
    }

    else {
      valid('month');

      if (ageDay.value > month[ageMonth.value - 1] || ageDay.value < 1) {
        invalid('day');
      } 
      else {
        valid('day');

        if (ageYear.value > currentYear) {
          invalid('year');
        }
        else if (ageYear.value === currentYear) {
          if (ageMonth.value > currentMonth){
            invalid('month');
          }
        }
        else {
          valid('year');
          calculate();
        }
      }
    }
  } 
}


function requiredField (value) {
  if (value === 'day') {
    p_day.classList.add('p-name-js');
    dayError.classList.add('error-js');
    dayError.innerHTML = 'This field is required';
    ageDay.classList.add('input-border-color');
  }
  else if (value === 'month') {
    p_month.classList.add('p-name-js');
    monthError.classList.add('error-js');
    monthError.innerHTML = 'This field is required';
    ageMonth.classList.add('input-border-color');
  }
  else{
    p_year.classList.add('p-name-js');
    yearError.classList.add('error-js');
    yearError.innerHTML = 'This field is required';
    ageYear.classList.add('input-border-color');
  }
}

function invalid (value){
  if (value === 'day') {
    p_day.classList.add('p-name-js');
    dayError.classList.add('error-js');
    dayError.innerHTML = 'Must be a valid day';
    ageDay.classList.add('input-border-color');
  }
  else if (value === 'month') {
    p_month.classList.add('p-name-js');
    monthError.classList.add('error-js');
    monthError.innerHTML = 'Must be a valid month';
    ageMonth.classList.add('input-border-color');
  }
  else {
    p_year.classList.add('p-name-js');
    yearError.classList.add('error-js');
    yearError.innerHTML = 'Must be a valid year';
    ageYear.classList.add('input-border-color');
  }
}

function valid (value){
  if (value === 'day') {
    p_day.classList.remove('p-name-js');
    dayError.classList.remove('error-js');
    dayError.innerHTML = '';
    ageDay.classList.remove('input-border-color');
    ageDay.classList.remove('input-border-color:focus');
  }
  else if (value === 'month') {
    p_month.classList.remove('p-name-js');
    monthError.classList.remove('error-js');
    monthError.innerHTML = '';
    ageMonth.classList.remove('input-border-color');
  }
  else {
    p_year.classList.remove('p-name-js');
    yearError.classList.remove('error-js');
    yearError.innerHTML = '';
    ageYear.classList.remove('input-border-color');
  }
}

function calculate(){
  if (ageDay.value > currentDay){
    currentDay += month[ageMonth.value - 1];
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
