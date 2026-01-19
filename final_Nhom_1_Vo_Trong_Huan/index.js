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

        // Shuffle boxes
        shuffleGrid();
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

// Solve button for testing (Im noob at this game X_X)
 const solve_button = document.getElementById('solve-button');

solve_button.addEventListener('click', () => {
    const grid_container = document.querySelector('.minigame-display-box');
    const boxes = Array.from(grid_container.children);

    // Sort boxes
    boxes.sort((a, b) => {
        const numA = parseInt(a.id.replace('box-', ''));
        const numB = parseInt(b.id.replace('box-', ''));
        return numA - numB;
    });

    grid_container.innerHTML = '';
    boxes.forEach(box => grid_container.appendChild(box));
});


// Function to shuffle boxes in the grid display
function shuffleGrid() {
    const grid_container = document.querySelector('.minigame-display-box');
    const boxes = Array.from(grid_container.children);

    // Fisher-Yates shuffle algorithm
    for (let i = boxes.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [boxes[i], boxes[j]] = [boxes[j], boxes[i]];
    }

    grid_container.innerHTML = '';
    boxes.forEach(box => grid_container.appendChild(box));
}

// Make the black box moveable
const grid_container = document.querySelector('.minigame-display-box');

document.addEventListener('keydown', (e) => {
    // User can only move the black box when the game is started
    if (status_started === false) return;

    const boxes = Array.from(grid_container.children);
    const box12 = document.getElementById('box-12');
    const current_index = boxes.indexOf(box12);
    
    let target_index = -1;

    // Calculate target index
    if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') {
        if (current_index >= 4) target_index = current_index - 4;
    } 
    else if (e.key === 'ArrowDown' || e.key.toLowerCase() === 's') {
        if (current_index < 8) target_index = current_index + 4;
    } 
    else if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') {
        if (current_index % 4 !== 0) target_index = current_index - 1;
    } 
    else if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') {
        if (current_index % 4 !== 3) target_index = current_index + 1;
    }

    // If a valid move was made, swap the boxes
    if (target_index !== -1) {
        swapBoxes(boxes, current_index, target_index);
    }
});

// Function to swap boxes
function swapBoxes(boxes, idx1, idx2) {
    const node1 = boxes[idx1];
    const node2 = boxes[idx2];

    // Swap in the DOM
    const afterNode2 = node2.nextSibling;
    if (afterNode2 === node1) {
        grid_container.insertBefore(node1, node2);
    } else {
        node1.replaceWith(node2);
        grid_container.insertBefore(node1, afterNode2);
    }
}