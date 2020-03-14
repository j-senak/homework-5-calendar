$(document).ready(function() {
  // Pin the current day to the heading
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

  // Tie the page to the moment.js clock
  var time = moment().format("H");
  var rowTime = [9, 10, 11, 12, 1, 2, 3, 4, 5];
  var textAreaInput = document.querySelector("textarea");
  var lockButtonSave = document.querySelector(".saveBtn"); 
  


  // for loop statement to apply CSS to rows based on time
  for (i = 0; i < 9; i++) {

    var meridian = " AM";
    if (i > 2) meridian = " PM";

    // Write a conditional 
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
      // !!!Toggle button image (cannot get to work right at the moment)
  //   $(<i class="fas fa-lock-open"></i>).hover(function() {
//     var lockClosed =  <i class="fas fa-lock-open"></i>;
//     if(!$(this).find("i").hasClass("i")) {
//         $(this).find("i").toggleClass("lockClosed");
//     }
//   });
});



        //Store Text Area input into Local Storage
        function init() {
            var storedTextArea = JSON.parse(localStorage.getItem("textarea"));
            if (storedTextArea !== null) {
                textAreaInput = storedTextArea;
              }

              renderTextArea()
              
              function storeTextArea() {
                localStorage.setItem("textarea", JSON.stringify(textAreaInput));
              }
              
              // When form is submitted...
              lockButtonSave.addEventListener("click", function(event) {
                event.preventDefault();
                storeTextArea()
              });
                renderTextArea()
            }
            console.log(storedTextArea)
