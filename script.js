document.addEventListener('keydown', (event) => {
    console.log(event.keyCode);
    var key = event.keyCode;
    if(key == 65) 
        {
            var audio= new Audio("Heart_Beat-Zarabadeu-1492122436.wav");
            audio.currentTime=0;
            audio.play();
            document.getElementById('65').style.backgroundColor = "aqua";
            document.getElementById('65').style.boxShadow = "0px 0px 20px 0px aqua";
            setTimeout(function() {
                document.getElementById('65').style.backgroundColor="transparent";
                document.getElementById('65').style.boxShadow = "none";
            },500)
        }
        
    if(key == 83) 
        {
            var audio= new Audio("cartoon-birds-2_daniel-simion.wav");
            audio.currentTime=0;
            audio.play();
            document.getElementById('83').style.backgroundColor = "aqua"
            document.getElementById('83').style.boxShadow = "0px 0px 20px 0px aqua";
            setTimeout(function() {
                document.getElementById('83').style.backgroundColor="transparent";
                document.getElementById('83').style.boxShadow = "none";
            },500)
        }
    if(key == 68) 
        {
            var audio= new Audio("Little Girl Sigh-SoundBible.com-2035045030.wav");
            audio.currentTime=0;
            audio.play();
            document.getElementById('68').style.backgroundColor = "aqua"
            document.getElementById('68').style.boxShadow = "0px 0px 20px 0px aqua";
            setTimeout(function() {
                document.getElementById('68').style.backgroundColor="transparent";
                document.getElementById('68').style.boxShadow = "none";
            },500)
        }
    if(key == 70) 
        {
            var audio= new Audio("sms-alert-5-daniel_simon.wav");
            audio.currentTime=0;
            audio.play();
            document.getElementById('70').style.backgroundColor = "purple"
            document.getElementById('70').style.boxShadow = "0px 0px 20px 0px purple";
            setTimeout(function() {
            document.getElementById('70').style.backgroundColor="transparent";
            document.getElementById('70').style.boxShadow = "none";
            },500)
        }
    if(key == 71) 
        {
            var audio= new Audio("sms-alert-3-daniel_simon.wav");
            audio.currentTime=0;
            audio.play();
            document.getElementById('71').style.backgroundColor = "purple"
            document.getElementById('71').style.boxShadow = "0px 0px 20px 0px purple";
            setTimeout(function() {
            document.getElementById('71').style.backgroundColor="transparent";
            document.getElementById('71').style.boxShadow = "none";
            },500)
        }
    if(key == 72) 
        {
            var audio= new Audio("sms-alert-4-daniel_simon.wav");
            audio.currentTime=0;
            audio.play();
            document.getElementById('72').style.backgroundColor = "purple"
            document.getElementById('72').style.boxShadow = "0px 0px 20px 0px purple";
            setTimeout(function() {
            document.getElementById('72').style.backgroundColor="transparent";
            document.getElementById('72').style.boxShadow = "none";
            },500)
        }
    if(key == 74) 
        {
            var audio= new Audio("sms-alert-2-daniel_simon.wav");
            audio.currentTime=0;
            audio.play();
            document.getElementById('74').style.backgroundColor = "green"
            document.getElementById('74').style.boxShadow = "0px 0px 20px 0px green";
            setTimeout(function() {
            document.getElementById('74').style.backgroundColor="transparent";
            document.getElementById('74').style.boxShadow = "none";
            },500)
        }
    if(key == 75) 
        {
            var audio= new Audio("sms-alert-1-daniel_simon.wav");
            audio.currentTime=0;
            audio.play();
            document.getElementById('75').style.backgroundColor = "green"
            document.getElementById('75').style.boxShadow = "0px 0px 20px 0px green";
            setTimeout(function() {
            document.getElementById('75').style.backgroundColor="transparent";
            document.getElementById('75').style.boxShadow = "none";
            },500)
        }
    if(key == 76) 
        {
            var audio= new Audio("Mockingbird Call-SoundBible.com-2102424105.wav");
            audio.currentTime=0;
            audio.play();
            document.getElementById('76').style.backgroundColor = "green"
            document.getElementById('76').style.boxShadow = "0px 0px 20px 0px green";
            setTimeout(function() {
            document.getElementById('76').style.backgroundColor="transparent";
            document.getElementById('76').style.boxShadow = "none";
            },500)
        }
});

