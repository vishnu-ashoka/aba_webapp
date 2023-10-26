document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete"){
        initapp();
    }
})

const initapp = () => {
    const onePointer = document.getElementById("1_pointer");
    onePointer.addEventListener("click", (event) => {
        running=false;
        onepointerscript();
        resetTheTimer();
    })
    const twoPointer = document.getElementById("2_pointer");
    twoPointer.addEventListener("click", (event) => {
        running=false;
        twopointerscript();
        resetTheTimer();
    })
    const threePointer = document.getElementById("3_pointer");
    threePointer.addEventListener("click", (event) => {
        running=false;
        threepointerscript();
        resetTheTimer();
    })
    const timeout = document.getElementById("time_out");
    timeout.addEventListener("click", (event) => {
        running=false;
        timeOutScript();
        resetTheTimer();
        
    })
    const startClock = document.getElementById("start_clock");
    startClock.addEventListener("click", (event) => {
        startTimer(running);
        if (running == true){
            return; // already running
        }
        else{
            running = true;
            startTimer();
        }
    })
    const stopClock = document.getElementById("stop_clock");
    stopClock.addEventListener("click", (event) => {
        console.log("stop");
        running=false;
        stopTimer();
    })
    const shotClock = document.getElementById("shot_clock");
    shotClock.addEventListener("click", (event) => {
        running=false;
        stopTimer();
        resetTheTimer();
        startTimer();
        running=true;
    })
}

const resetTheTimer = () => {
    stopTimer();
    var seconds = document.getElementById("seconds");
    var deciseconds = document.getElementById("deciseconds");
    seconds.value = 14;
    deciseconds.value = 0.0;
    
}

const startTimer = () => {
    var seconds = document.getElementById("seconds");
    var deciseconds = document.getElementById("deciseconds");
    var secs = seconds.value;
    if (secs==14){
        secs -= 1;
    }
    var decisecs = secs*10 ;
    seconds.value = secs
    deciseconds.value = decisecs-((Math.floor(decisecs/10))*10);
    var secdec;
    var dsecdec;
    function timer(){
        secdec = setInterval(secondsdecrement, 1000);
        dsecdec = setInterval(decisecondsdecrement, 100);

    }
    function secondsdecrement(){
        secs--;
        seconds.value = secs;
        
    }
    function decisecondsdecrement() {
        decisecs--;
        console.log(secs, decisecs);
        deciseconds.value = decisecs-((Math.floor(decisecs/10))*10);
        if (decisecs==0){
            clearInterval(dsecdec);
            clearInterval(secdec);
            seconds.value = 0;
            deciseconds.value = 0;
        }
        if (running==false){
            clearInterval(dsecdec);
            clearInterval(secdec);
        }
    }
    timer();
    // what happens when timer = 0
    timeOutScript(); //?
}

const stopTimer = () => {
    running=false
    var seconds = document.getElementById("seconds");
    var deciseconds = document.getElementById("deciseconds");
    var secs = seconds.value;
    var decisecs = deciseconds.value;
    seconds.value = secs;
    deciseconds.value = decisecs;
}

const onepointerscript = () => {console.log("blue");}
const twopointerscript = () => {console.log("pink");}
const threepointerscript = () => {console.log("green");}
const timeOutScript = () => {console.log("red")}