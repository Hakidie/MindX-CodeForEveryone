"use strict";

// In ra phan tu dau va cuoi cua mang
function printArrayHeadAndTail() {
    const array = ["Alice", "Bob", "Charlie", "David", "Eve"];
    console.log(array.at(0));
    console.log(array.at(-1));
}

//printArrayHeadAndTail();

// Thay gia tri o vi tri thu 2 trong mang thanh Mary 
function changeValueArray() {
    const name = ["John", "Jane", "Jim", "Jake"];
    name[1] = "Mary";
    console.log(name);
}

//changeValueArray();

// In ra cac gia tri cua mang bang for
function printArray() {
    const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

//printArray();

// Chen Mindx vao cuoi mang va in mang
function insertArrayTail() {
    const names = ["Alice", "Bob", "Charlie", "David"];
    names[names.length] = "Mindx";
    console.log(names);
}

insertArrayTail();