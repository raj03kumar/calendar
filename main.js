//Get all necessary elements from the DOM
const prevMonthBtn = document.getElementById("prev-month-btn");
const nextMonthBtn = document.getElementById("next-month-btn");
const currentMonthEl = document.getElementById("current-month");
const calendarDatesEl = document.getElementById("calendar-dates");
const calendarBody = document.querySelector(".calendar-body");

//Get the current date
let currentDate = new Date();
//Get the current month
const currentMonth = new Date().getMonth();
//Get the current year
const currentYear = new Date().getFullYear(); 

//Function to update the calendar display
const updateCalendar = () => {
    //Get the Year
    const year = currentDate.getFullYear();
    //Get the Month
    const month = currentDate.getMonth();
    //Get the first day of the month
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    //Get the number of days in the current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    //Get today's date in current month
    const today = new Date().getDate();

    //Place Sunday as the last day of the week
    if(firstDayOfMonth === 0){
        firstDayOfMonth = 7;
    }

    //Add the full month name and year in the title
    currentMonthEl.innerHTML = `${currentDate.toLocaleDateString("en-US", {month: "long"})} ${year}`;

    //Variable that will hold the HTML for the calendar
    let calendarDatesHtml = "";

    //Fill in previous blank month's days
    for(let i=1; i<firstDayOfMonth; i++){
        calendarDatesHtml += '<td class="empty"></td>';
    }
    //Fill in the current month's days
    for(let i=1; i<=daysInMonth; i++){
        //If the current day is today, add the today class
        if(i === today && month===currentMonth && year ===currentYear){
            calendarDatesHtml += `<td class="today">${i}</td>`;
        } 
        else {
            calendarDatesHtml += `<td>${i}</td>`;
        }
        //If the current day is the last day of the week, start a new row
        if(new Date(year, month, i).getDay() === 0){
            calendarDatesHtml += '</tr><tr>';
        }
    }
    //output the cells to the HTML
    calendarDatesEl.innerHTML = `<tr>${calendarDatesHtml}</tr>`;

    //Add fade out/in animation
    calendarBody.style.transition = "none";
    calendarBody.style.opacity = 0;
    setTimeout(() => {
        calendarBody.style.transition = "150ms";
        calendarBody.style.opacity = 1;
    }, 160);
};

//Run the function initially
updateCalendar();

//Event listener for the previous month button
prevMonthBtn.addEventListener("click", () => {
    //Set the month to the previous month
    currentDate.setMonth(currentDate.getMonth() - 1);
    //Update the calendar with the new month
    updateCalendar();
});

//Event listener for the next month button
nextMonthBtn.addEventListener("click", () => {
    //Set the month to the next month
    currentDate.setMonth(currentDate.getMonth() + 1);
    //Update the calendar with the new month
    updateCalendar();
});

// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="S".charCodeAt(0)){
        return false;
    }
};