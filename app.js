particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

var main__h1=document.getElementById('main__h1');

setInterval(getCurrentTime,1000);

function getCurrentTime(){
    var time = new Date();
    var currtime=time.toLocaleTimeString();
    var second=currtime[6]+currtime[7];
    var minute=currtime[3]+currtime[4];
    var hour=Number(currtime[0]+currtime[1]);
    var zone=" AM"
    if(hour>12){
        hour=hour-12;
        if(hour!=12)
            zone = " PM";
    }
    var finaltime = ((hour<10)? '0'+ String(hour):String(hour)) +':'+ minute + ':'+ second + zone;
    
    main__h1.innerText = finaltime;
}

// getCurrentTime();