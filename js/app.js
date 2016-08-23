$(function(){

    /* Januar is 0 in Timestamp --> August 7
    * From this datum every two weeks starts a new counter
    * new Date(year, month starting with 0, day, hours, minutes)
    * */
    var referenceDat = new Date(2016, 7, 9, 19, 0);

    /* every 14 days */
    var interval = 14;

    Date.prototype.addDays = function(days)
    {
        var dat = new Date(this.valueOf());
        dat.setDate(dat.getDate() + days);
        return dat;
    };

    /* Checks if date is in the past */
    function datIsInPast(dat){
        var actDat = new Date();
        return actDat > dat;
    }

    /* Adds the number if interval days to date */
    function addTwoWeeks(dat) {
        dat = dat.addDays(interval);
        return dat;
    }

    var dat = referenceDat;

    while(datIsInPast(dat)) {
        dat = addTwoWeeks(dat);
    }

    $("#countdown")
        .countdown(dat, function(event) {
            var hours = event.strftime('%H');
            var minutes = event.strftime('%M');
            var seconds = event.strftime('%S');
            var days = event.strftime('%D');

            if(days != "00") {
                $('span.days').text("Tage: " + days);
            }

            $('span.hours').text("Stunden: " + hours);
            $('span.minutes').text("Minuten: " + minutes);
            $('span.seconds').text("Sekunden: " + seconds);
        });
});