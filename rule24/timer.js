let downSec = 60;
let downMin = 19;

let downMin3 = 3;
let downSec3 = 60;
let secNum = document.getElementById("secNum");
let minNum = document.getElementById("minNum");
let startBtn = document.getElementById("startBtn");
let start3MinBtn = document.getElementById("start3MInBtn");
let selectedSound = new Audio('audio/signal1.mp3');
let whichMode = document.getElementById("whichMode");

function startFunc() {
    
    whichMode.classList.add("whichModeAnimation");
    whichMode.innerText = "You are in 20 minutes mode"
    startBtn.style.visibility = "hidden";
    const timer = setInterval(function() {
        
        downSec--;
        secNum.innerHTML = downSec;
        minNum.innerHTML = downMin;
        document.title = `${downMin}:${downSec}`;
        if (downSec === 0) {
          downMin--;
          downSec = 60;
          
        }
            if (downMin === -1) {
                selectedSound.play();
                clearInterval(timer);
                start3MinBtn.style.visibility = "visible";
                minNum.innerHTML = 4;
                secNum.innerHTML = "00"
            }
            
      }, 1000);
}

/*under for 3 minutes*/
    start3MinBtn.onclick = function() {

        function min3start() {
            whichMode.innerText = "You are in 4 minutes mode"
            start3MinBtn.style.visibility = "hidden";
            downMin3 = 3;
            downSec3 = 60;
            selectedSound.pause()
            const timer3 = setInterval(function() {
                downSec3--;
                minNum.innerHTML = downMin3;
                secNum.innerHTML = downSec3;
        
                if (downSec3 === 0) {
                downSec3 = 60;
                downMin3--;
                }
                if (downMin3 === -1) {
                    clearInterval(timer3);
                    location.reload()
                    
                }
            }, 1000);
        }
        min3start()

    }
/*above for 3 minutes*/


/*below for alert when close or unload the tab*/
window.addEventListener('beforeunload', function (e) { 
    e.preventDefault(); 
    e.returnValue = 'Are you sure ?'; 
}); 
/*above for alert when close or unload the tab*/

document.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        if (startBtn.style.visibility == "") {
            startFunc();
        }else if(start3MinBtn.style.visibility == "visible"){
            min3start();
        } else{
            console.log("already started");
        }
    }
  });
  