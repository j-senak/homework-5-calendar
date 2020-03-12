// Pin the current day to the heading
$("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));

// Tie the page to the moment.js clock
var time = (moment().format("HH"));