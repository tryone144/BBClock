/**
 * BBClock
 * Simple Digital Clock
 * 
 * (c) 2016 Bernd Busse
 * The MIT License (MIT)
 **/
var date, hour, minute, second;
var month = ["January", "February", "March", "April", "May", "June", "July",
             "August", "September", "October", "November", "December"];
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
           "Friday", "Saturday"];

function renderDate() {
    var d = new Date();
    date.html(day[d.getDay()] + ", " + month[d.getMonth()] + " " + d.getDate()
              + ",  " + d.getFullYear());

    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    hour.html((h < 10 ? "0" : "") + h);
    minute.html((m < 10 ? "0" : "") + m);
    second.html((s < 10 ? "0" : "") + s);
}

function startBlink() {
    $('.colon').addClass('blink');
}

$(document).ready(function() {
    date = $('#date');
    hour = $('#hour');
    minute = $('#minute');
    second = $('#second');

    // Output Date
    renderDate();
    startBlink();
    setInterval(function() {
        renderDate();
    }, 1000);
});
