// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  const currentDate = dayjs().format('dddd, MMM D');
  const currentHour = dayjs().format('H');


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  const timeBlockArray = ["hour-09", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];
  for (var i = 0; i < 8; i++)
  {
    document.getElementById(timeBlockArray[i]).addEventListener('click', storeData.bind(this, timeBlockArray[i], document.getElementById(timeBlockArray[i]).children[1].value));
  }

  function storeData(timeBlockId, text)
  {
    localStorage.setItem(timeBlockId, text);
    console.log("saved " + localStorage.getItem(timeBlockId) + " to " + timeBlockId + " block data");
  }


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  $(".time-block").each(function()
  {
    var hour = this.id.replace("hour-", "");
    if (hour == currentHour) { this.classList.add("present"); }
    else if (hour <= currentHour) { this.classList.add("past"); }
    else if (hour >= currentHour) { this.classList.add("future"); }
  });


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  


  // TODO: Add code to display the current date in the header of the page.
  document.getElementById("currentDay").innerHTML = currentDate;

});
