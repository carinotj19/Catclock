var nightTime = 18;
var afternoon = 12;
var morning = 6;
var oneSecond = 1000;

var showCurrentTime = function(){
    var time = document.getElementById('time');
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    //Setting Hours
    if(hours >= afternoon){
        meridian = "PM";
    }

    if(hours > afternoon){
        hours = hours - 12;
    }

    //Setting minutes
    if(minutes < 10){
        minutes = "0" + minutes;
    }
                
    //Setting seconds
    if(seconds < 10){
        minutes = "0" + minutes;
    }

    
    //Concatenating
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;

    time.innerText = clockTime;
};

var updatingClock = function(){
    var time = new Date().getHours();
    var messageText = document.getElementById("message");
    var image = document.getElementById("catImage");

    if (time < afternoon)
    {
        image.src = "/images/morningcat.png"
        messageText.innerText = "Good morning!";
    }
    else if (time >= nightTime)
    {
        image.src = "/images/nightcat.jpg"
        messageText.innerText = "Good evening!";
    }
    else
    {
        image.src = "/images/afternooncat.jpg"
        messageText.innerText = "Good afternoon!";
    }


    console.log(messageText);
    showCurrentTime();
};
updatingClock();

setInterval(updatingClock, oneSecond);
