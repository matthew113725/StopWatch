let hr = min = sec = ms = "0" + 0,
    startTimer;

const startButton = document.querySelector(".start"),
    stopButton = document.querySelector(".stop"),
    resetButton = document.querySelector(".reset"); 

    startButton.addEventListener("click", start);
    stopButton.addEventListener("click", stop);
    resetButton.addEventListener("click", reset);

    function start() {
        startButton.classList.add("inactive");
        stopButton.classList.remove("inactive");
        resetButton.classList.add("inactive");
            if (document.querySelector(".start").value === "") {
                startButton.disabled = true;
                stopButton.disabled = false;
                resetButton.disabled = true;
            } else {
                startButton.disabled = false;
            }
        
        startTimer = setInterval(()=>{
            ms++
            ms = ms < 10 ? "0" + ms : ms;

            if(ms == 100) {
                sec++;
                sec = sec < 10 ? "0" + sec : sec;
                ms = "0" + 0;
            }
            if(sec == 60) {
                min++;
                min = min < 10 ? "0" + min : min;
                sec = "0" + 0;
            }
            if(min == 60) {
                hr++;
                hr = hr < 10 ? "0" + hr : hr;
                min = "0" + 0

             }
            putValue();
        },10);
    }

    function stop() {
        startButton.classList.remove("inactive");
        stopButton.classList.add("inactive");
        resetButton.classList.remove("inactive");
        clearInterval(startTimer);

        if (document.querySelector(".stop").value === "") {
            startButton.disabled = false;
            resetButton.disabled = false;
        } 

    }
    function reset() {
        startButton.classList.remove("inactive");
        stopButton.classList.add("inactive");
        resetButton.classList.add("inactive");
        clearInterval(startTimer);

        if (document.querySelector(".reset").value === "") {
            startButton.disabled = false;
            stopButton.disabled = true;
        } 

        let hr = min = sec = ms = "0" + 0;
        putValue ();
    }

    function putValue () {
        document.querySelector(".millisecond").innerText = ms;
        document.querySelector(".second").innerText = sec;
        document.querySelector(".minute").innerText = min;
        document.querySelector(".hour").innerText = hr;
    }


    


    

    