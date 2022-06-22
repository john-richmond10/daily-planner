let events = [];
let eventTime = '';
let eventText = '';
let currentTime = moment().hour();
//Get the current day and time
let todaysTime = moment().format("dddd, MMMM Do, YYYY");
// Add current day and time to top of page
$('#currentDay').text(todaysTime);
//Check time and apply applicable class
$('.time-block').each(function() {
    let timeBlock = parseInt($(this).attr('id'));

    if(timeBlock < currentTime) {
        $(this).addClass('past');
        $(this).removeClass('present');
        $(this).removeClass('future');
    } else if (timeBlock === currentTime) {
        $(this).addClass('present');
        $(this).removeClass('future');
        $(this).removeClass('past');
    } else {
        $(this).addClass('future');
        $(this).removeClass('past');
        $(this).removeClass('present');
    }
})
//Clicking save button saves to local storage
$('.saveBtn').on('click', function() {
    let time = $(this).siblings().attr('id');
    let eventText = $(this).siblings('.description').val();

    localStorage.setItem(time, eventText);
})

$('#6, .description').val(localStorage.getItem('6'));
$('#7, .description').val(localStorage.getItem('7'));
$('#8, .description').val(localStorage.getItem('8'));
$('#9, .description').val(localStorage.getItem('9'));
$('#10, .description').val(localStorage.getItem('10'));
$('#11, .description').val(localStorage.getItem('11'));
$('#12, .description').val(localStorage.getItem('12'));
$('#13, .description').val(localStorage.getItem('13'));
$('#14, .description').val(localStorage.getItem('14'));
$('#15, .description').val(localStorage.getItem('15'));
$('#16, .description').val(localStorage.getItem('16'));
$('#17, .description').val(localStorage.getItem('17'));