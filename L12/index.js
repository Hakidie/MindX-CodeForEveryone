const headingOne = document.querySelector('h1.titleH1');

// 1. Su dung DOM de thay doi noi dung cua the h1
function changeHeadingText(element) {
    headingOne.innerText = "Đây là nội dung"
}
//changeHeadingText(headingOne);

// 2. Thay doi style coa the h1 tren
function changeHeadingStyle(element) {
    headingOne.style.backgroundColor = 'blue';
    headingOne.style.color = 'red';
}
//changeHeadingStyle(headingOne);

// 3.
const buttonChange = document.querySelector('button.btnClick');
let check = false;

buttonChange.onclick = function () {
    if(check === false) {
        changeHeadingText(headingOne);
        changeHeadingStyle(headingOne);
        check = true;
    }
    else {
        headingOne.innerText = "This is content";
        headingOne.style.backgroundColor = "";
        headingOne.style.color = "";
        check = false;
    }
}

// 4. 5.
const inputField = document.querySelector('input.input-field');
const submitButton = document.querySelector('button.add-button');
const outputField = document.querySelector('p.output-field');
const taskList = document.querySelector('ul.task-list');

let listTask = JSON.parse(localStorage.getItem("listTask")) || [];

function displayTasks() {
    taskList.innerHTML = "";

    listTask.forEach(task => {
        const li = document.createElement('li');
        li.innerText = task;
        taskList.appendChild(li);
    });
}
displayTasks();

submitButton.onclick = function() {
    const inputValue = inputField.value;

    if(inputValue !== "") {
        listTask.push(inputValue);
        localStorage.setItem("listTask", JSON.stringify(listTask));
        displayTasks();
    }
}

