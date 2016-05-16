/**
 * BBClock
 * Simple Digital Clock
 * 
 * (c) 2016 Bernd Busse
 * The MIT License (MIT)
 **/

var _ = chrome.i18n.getMessage;
var date, hour, minute, second, period;
var colons, offset;


function initLocale() {
    document.title = _("appName");

    dateFormat.i18n = {monthNames: [], dayNames: []};
    dateFormat.i18n.monthNames = _("monthsShort").split(';').concat(_("monthsLong").split(';'));
    dateFormat.i18n.dayNames = _("daysShort").split(';').concat(_("daysLong").split(';'));
}


function update() {
    blink();
    offset = renderDate();
    setTimeout(update, 1000 - offset);
}
    
function renderDate() {
    var d = new Date();
    date.html(d.format(_("dateFormat")));

    var t = d.format(_("timeFormat")).split(':');
    hour.html(t[0]);
    minute.html(t[1]);
    second.html(t[2]);
    period.html(t[3] ? t[3] : "");

    return d.getMilliseconds();
}

function blink() {
    colons.css("visibility", "visible");
    colons.fadeIn(100, function() {
        setTimeout(function(elem) {
            elem.fadeOut(100, function() {
                elem.css({"visibility": "hidden",
                             "display": "inline-block"});
            });
        }, 400, $(this));
    });
}

$(document).ready(function() {
    initLocale();

    date = $('#date');
    hour = $('#hour');
    minute = $('#minute');
    second = $('#second');
    period = $('#period');

    colons = $('.colon');

    // Output Date
    update();
});
