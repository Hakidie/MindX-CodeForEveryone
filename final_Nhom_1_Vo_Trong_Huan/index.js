// Start button

// Select elements in html
const start_button = document.getElementById('start-button');
const time_display = document.getElementById('time-display');

let status_started = false;
let total_seconds = 0;
let timer_interval;

start_button.addEventListener('click', () => {
    if (status_started === false){
        status_started = true;
        start_button.innerText = "Kết thúc";
        start_button.style.backgroundColor = "red";
        start_button.style.color = "white";

        // Start the time display
        timer_interval = setInterval(() => {
            total_seconds++;
            const mins = Math.floor(total_seconds / 60).toString().padStart(2, '0');
            const secs = (total_seconds % 60).toString().padStart(2, '0');
            
            time_display.innerText = `${mins}:${secs}`;
        }, 1000);
    }
    else {
        status_started = false;
        start_button.innerText = "Bắt đầu";
        start_button.style.backgroundColor = "";
        start_button.style.color = "";

        clearInterval(timer_interval);
        total_seconds = 0;
        time_display.innerText = "00:00";
    }
});