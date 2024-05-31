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

//result data 
let yearResult = currentYear - ageYear.value;
let monthResult = currentMonth - ageMonth.value;
let dayResult = currentDay - ageDay.value;


//validity function
function validity(){
  const validity = true;
  
}