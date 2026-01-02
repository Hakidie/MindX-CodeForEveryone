"use strict";

// 1. Them phan tu vao cuoi mang
function addAtTailArray(array, value) {
    array[array.length] = value;
}

let namesF = ["John", "Alice"];
addAtTailArray(namesF, "Tom");
console.log(namesF);

let names = ["John", "Alice"];
names.push("Tom");
console.log(names);

// 2. Binh phuong cac gia tri trong mang
function powerValuesInArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * array[i];
    }
}

let numbersF = [1, 2, 3, 4]
powerValuesInArray(numbersF);
console.log(numbersF);

let numbers = [1, 2, 3, 4]
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

// 3. Loc ra cac so chan trong mang
function filterEvenInArray(array, evenArray) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0)
            evenArray[evenArray.length] = array[i];
    }
}

let unfilteredNumbersF = [5, 10, 15, 20, 25];
let filteredArrayF = [];
filterEvenInArray(unfilteredNumbersF, filteredArrayF);
console.log(filteredArrayF);

let unfilteredNumbers = [5, 10, 15, 20, 25];
let filteredArray = [];
filteredArray = unfilteredNumbers.filter(number => number % 2 === 0);
console.log(filteredArrayF);

// 4. Tim sv dau tien co diem so lon hon 8 trong mang object
const students = [
    {name: 'John', score: 7},
    {name: 'Alice', score: 9},
    {name: 'Tom', score: 8}
]
 const bestStudent = students.find(student => student.score >= 8);
 console.log(bestStudent);

 // 5. Tim index cua phan tu dau tien lon hon 10
 let array = [3, 5, 8, 12, 15]
 let index = array.findIndex(number => number > 10);
 console.log(index);
