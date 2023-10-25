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
        resetTheTimer();
        startTimer();
        running=false;
    })
}

const resetTheTimer = () => {
    var seconds = document.getElementById("seconds");
    var deciseconds = document.getElementById("deciseconds");
    seconds.value = 14;
    deciseconds.value = 0.0;
    stopClock();
}

const startTimer = () => {
    internal_breaksequence=false;
    var seconds = document.getElementById("seconds");
    var deciseconds = document.getElementById("deciseconds");
    var secs = seconds.value;
    var decisecs = secs*10 + 1;
    function timer(){
        if (running=false){
            internal_breaksequence=true;
            return;
        }
        setTimeout(secondsdecrement, 1000);
        decitimer();
    }
    function secondsdecrement(){
        if (internal_breaksequence){
            return;
        }

        secs--;
        seconds.value = secs;
        if (secs==0){
            return;
        }
        timer();
    }
    function decitimer(){
        setTimeout(decisecondsdecrement ,100);
    }
    function decisecondsdecrement() {
        if (internal_breaksequence){
            return;
        }
        decisecs--;
        console.log(secs, decisecs-((Math.floor(decisecs/10))*10));
        deciseconds.value = decisecs-((Math.floor(decisecs/10))*10);
        if (deciseconds.value==0){
            return;
        }
        decitimer();
    }
    timer();
    // what happens when timer = 0
    timeOutScript(); //?
}

const stopTimer = () => {
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