$(document).ready(function() {
  // Pin the current day to the heading
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

  // Tie the page to the moment.js clock
  var time = moment().format("H");
  var rowTime = [9, 10, 11, 12, 1, 2, 3, 4, 5];

  // for loop statement to apply CSS to rows based on time
  for (i = 0; i < 9; i++) {
    //     <div id="5" class="row time-block">
    // <div class="col-sm-1 hour">
    //   5PM
    // </div>
    // <textarea class="col-sm-10 description">
    //   Text Area Here
    // </textarea>
    // <div class="col-sm-1 saveBtn">
    //   Save
    // </div>
    //   </div>
    // $(".container").append("<div></div>");
    // create element
    var meridian = " AM";
    if (i > 2) meridian = " PM";

    //
    var row = $("<div>");
    row.addClass("row time-block");
    console.log(time, rowTime[i]);
    if (time > rowTime[i]) row.addClass("past");
    else if ((time = rowTime[i])) row.addClass("present");
    else if (time < rowTime[i]) row.addClass("future");

    // add content
    // append to page
    row.html(
      '<div class="col-sm-1 hour">' +
        rowTime[i] +
        meridian +
        '</div><textarea class="col-sm-10 description placeholder="Add Text Here"></textarea><div class="col-sm-1 saveBtn"><i class="fas fa-lock-open"></i></div>'
    );
    $(".container").append(row);
  }
});
