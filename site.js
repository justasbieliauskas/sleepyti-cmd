function retDate(dateObj) {
    var formatted = '';
    var pm = false;
    if(dateObj.getHours() > 12) {
        formatted = dateObj.getHours() - 12;
        pm = true;
    } else if(dateObj.getHours() < 12 && dateObj.getHours() != 0) {
        formatted = dateObj.getHours();
    } else if(dateObj.getHours() == 0) {
        formatted = "12";
    } else if(dateObj.getHours() == 12) {
        formatted = "12";
        pm = true;
    }
    if(dateObj.getMinutes() < 10) {
        formatted = formatted + ":0" + dateObj.getMinutes();
    } else {
        formatted = formatted + ":" + dateObj.getMinutes();
    }
    if(pm == true) {
        formatted = formatted + " PM";
    } else {
        formatted = formatted + " AM";
    }
    return formatted;
}

function calculateFromSpecificTime($) {
    var setTime = new Date();

    if($('#hour').val() == 12) {
        $('#hour').val(0);
    }

    if($('#ampm').val() == "AM") {
        setTime.setHours($('#hour').val());
    }
    else if($('#ampm').val() == "PM") {
        setTime.setHours(+$('#hour').val() + 12);
    }

    setTime.setMinutes($('#minute').val());

    var res1 = new Date(setTime.getTime() - 270*60000);
    var res2 = new Date(res1.getTime() - 90*60000);
    var res3 = new Date(res2.getTime() - 90*60000);
    var res4 = new Date(res3.getTime() - 90*60000);

    $('#result4').html(String(retDate(res1)));
    $('#result3').html(String(retDate(res2)));
    $('#result2').html(String(retDate(res3)));
    $('#result1').html(String(retDate(res4)));
}

function calculateFromNow($) {
    var zDate = new Date();

    var res1 = new Date(zDate.getTime() + 104*60000);
    var res2 = new Date(res1.getTime() + 90*60000);
    var res3 = new Date(res2.getTime() + 90*60000);
    var res4 = new Date(res3.getTime() + 90*60000);
    var res5 = new Date(res4.getTime() + 90*60000);
    var res6 = new Date(res5.getTime() + 90*60000);

    $('#resultNow1').html(String(retDate(res1)));
    $('#resultNow2').html(String(retDate(res2)));
    $('#resultNow3').html(String(retDate(res3)));
    $('#resultNow4').html(String(retDate(res4)));
    $('#resultNow5').html(String(retDate(res5)));
    $('#resultNow6').html(String(retDate(res6)));
}

module.exports = {
    calculateFromSpecificTime,
    calculateFromNow
};
