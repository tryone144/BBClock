/**
 * BBClock
 * Simple Digital Clock
 * 
 * (c) 2016 Bernd Busse
 * The MIT License (MIT)
 **/
var date, hour, minute, second;
var month = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli",
             "August", "September", "Oktober", "November", "Dezember"];
var day = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag",
           "Freitag", "Samstag"];

function renderDate() {
    var d = new Date();
    date.html(day[d.getDay()] + ", " + d.getDate() + ". " + month[d.getMonth()]
              + " " + d.getFullYear());

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
