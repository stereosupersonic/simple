var target_date = new Date('Jun 28 2016 18:15:00 GMT+0200 (CEST)').getTime();

// variables for time units
var days, hours, minutes, seconds;

// update the tag with id "countdown" every 1 second
setInterval(function() {

    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    days_view = "";
    if (days > 0) {
      days_view = '<span STYLE="font-size: 70px" class="days">' + days + ' <b>Days</b></span>';
    }

    hours_view   = '<span STYLE="font-size: 70px" class="hours">' + hours + ' <b>Hours</b></span>';
    minutes_view = '<span STYLE="font-size: 70px" class="minutes">' + minutes + ' <b>Minutes</b></span>';
    seconds_view = '<span STYLE= "font-size: 70px" class="seconds">' + seconds + ' <b>Seconds</b></span>';

    document.getElementById('countdown').innerHTML = days_view + hours_view + minutes_view + seconds_view;

}, 1000);
