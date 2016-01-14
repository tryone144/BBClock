var date, time;
var month = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli",
             "August", "September", "Oktober", "November", "Dezember"];
var day = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag",
           "Samstag", "Sonntag"];

function renderDate() {
    var d = new Date();
    date.html(day[d.getDay()] + ", " + d.getDate() + ". " + month[d.getMonth()]
              + " " + d.getFullYear());

    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    time.html("");
    time.append((h < 10 ? "0" : "") + h);
    time.append($('<span class="colon">').html(":"));
    time.append((m < 10 ? "0" : "") + m);
    time.append($('<span class="colon">').html(":"));
    time.append((s < 10 ? "0" : "") + s);
}

$(document).ready(function() {
    date = $('#date');
    time = $('#time');

    // Output Date
    renderDate();
    setInterval(function() {
        renderDate();
    }, 1000);
});
