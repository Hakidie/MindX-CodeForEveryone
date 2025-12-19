// In ra phan tu dau va cuoi cua mang
function printArrayHeadAndTail() {
    let array: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

    console.log(array[0]);
    console.log(array[array.length - 1]);
}

// Thay gia tri o vi tri thu 2 trong mang thanh Mary 
function changeValueArray() {
    const name: string[] = ["John", "Jane", "Jim", "Jake"];

    name[1] = "Mary";

    console.log(name);
}

// In ra gia tri cua mang bang for
function printArray() {
    const names: string[] = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

    for(let i: number = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

// Chen Mindx vao cuoi mang va in mang
function insertArrayTail() {
    const names: string[] = ["Alice", "Bob", "Charlie", "David"];

    names[names.length] = "Mindx";

    console.log(names);    
}