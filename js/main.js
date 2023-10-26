document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete"){
        initapp();
    }
})

const initapp = () => {
    const onePointer = document.getElementById("1_pointer");
    onePointer.addEventListener("click", (event) => {
        onepointerscript();
        resetTheTimer();
        running=true;
    })
    const twoPointer = document.getElementById("2_pointer");
    twoPointer.addEventListener("click", (event) => {
        twopointerscript();
        resetTheTimer();
        running=true;
    })
    const threePointer = document.getElementById("3_pointer");
    threePointer.addEventListener("click", (event) => {
        threepointerscript();
        resetTheTimer();
        running=true;
    })
    const timeout = document.getElementById("time_out");
    timeout.addEventListener("click", (event) => {
        timeOutScript();
        resetTheTimer();
        running=false;
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
        stopTimer();
        resetTheTimer();
        startTimer();
        running=true;
    })
}

const resetTheTimer = () => {
    var seconds = document.getElementById("seconds");
    var deciseconds = document.getElementById("deciseconds");
    seconds.value = 14;
    deciseconds.value = 0.0;
    stopTimer();
}

const startTimer = () => {
    var seconds = document.getElementById("seconds");
    var deciseconds = document.getElementById("deciseconds");
    var secs = seconds.value;
    var decisecs = secs*10 + 10;
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
        if (decisecs==0 || running==false){
            clearInterval(dsecdec);
            clearInterval(secdec);
            seconds.value = 0;
            deciseconds.value = 0;
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