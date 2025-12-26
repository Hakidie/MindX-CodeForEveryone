"use strict";

// 1. In ra phan tu dau va cuoi cua mang
function printArrayHeadAndTail() {
    const array = ["Alice", "Bob", "Charlie", "David", "Eve"];
    console.log("1. " + array.at(0));
    console.log("1. " + array.at(-1));
}

printArrayHeadAndTail();

// 2. Thay gia tri o vi tri thu 2 trong mang thanh Mary 
function changeValueArray() {
    const name = ["John", "Jane", "Jim", "Jake"];
    name[1] = "Mary";
    console.log("2. " + name);
}

changeValueArray();

// 3. In ra cac gia tri cua mang bang for
function printArray() {
    const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
    for (let i = 0; i < names.length; i++) {
        console.log("3. " + names[i]);
    }
}

printArray();

// 4. Chen Mindx vao cuoi mang va in mang
function insertArrayTail() {
    const names = ["Alice", "Bob", "Charlie", "David"];
    names[names.length] = "Mindx";
    console.log("4. " + names);
}

insertArrayTail();

// 5. Loc ra cac so le trong mang
function filtOddArray() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (!(numbers[i] % 2 === 0)) {
            result[result.length] = numbers[i];
        }
    }
    console.log("5. " + result);
}

filtOddArray();

// 6. Tim ten "David" trong mang va in ra
function findNameInArray() {
    const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
    const name = "David";
    if (names.includes(name)) {
        console.log("6. Tim thay " + name);
    }
    else {
        console.log("6. Khong tim thay " + name);
    }
}

findNameInArray();

//7. Dem so lan xuat hien cua mot so trong mang
function countANumberInArray() {
    const numbers = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
    const targetCounting = 2;
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === targetCounting) {
            count++;
        }
    }
    console.log("7. " + count);
}

countANumberInArray();

//8. In ra so lon nhat trong mang
function findLargestInArray() {
    const numbers = [5, 2, 9, 3, 7, 11, 8];
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    console.log("8. " + max);
}

findLargestInArray();

//9. Dao nguoc mang
function reversesArray() {
    const array = [1, 2, 3, 4, 5];
    array.reverse();
    console.log("9. " + array);
}

reversesArray();

//10. Xoa phan tu trung lap trong mang
function removeDulpicatesArray() {
    const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];
    let result = [];
    for (let i = 0; i < duplicatesArray.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < result.length; j++) {
            if (duplicatesArray[i] === result[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate)
            result[result.length] = duplicatesArray[i];
    }
    console.log("10. " + result);
}

removeDulpicatesArray();

function removeDulpicatesArray2() {
    const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];
    const result = [...new Set(duplicatesArray)];
    console.log(result);
}

//11. Tinh tong cac phan tu trong mang
function sumValuesInArray() {
    let sum = 0;
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    console.log("11. " + sum);
}

sumValuesInArray();

function sumValuesInArray2() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    console.log(sum);
}