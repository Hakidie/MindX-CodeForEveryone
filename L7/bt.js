"use strict";
//  Ham nhap so nguyen
function inputInteger(message) {
    let input;
    do {
        input = Number(prompt(message));
    } while (!Number.isInteger(input));
    return input;
}

// Ham nhap so nguyen duong
function inputIntegerPositive(message) {
    let input;
    do {
        input = Number(prompt(message));
    } while (!Number.isInteger(input) || input <= 0);
    return input;
}

//  1. Tinh tong tu 1 den 100
function sumOneToHundred() {
    let sum = 0;
    for(let i = 0; i < 100; i++) {
        sum++;
    }
    return sum;
}

//  2. In ra cac so tu 0 den 100 chia het cho 3 va 5
function printZeroToHundred() {
    for(let i = 0; i <= 100; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            console.log(i + " ");
        }
    }
}

//  3. Tinh giai thua cua so nguyen
function calFactorial() {
    let integer_input = inputInteger("3. Nhap so nguyen");
    let result = 1;
    for(let i = 1; i <= integer_input; i++) {
        result = result * i;
    }
    return result;
}

//  4. In bang cuu chuong tu 2 den 9
function printMultiplicationTable() {
    for(let i = 2; i <= 9; i++) {
        console.log(`Bang cuu chuong ${i}:`)
        for(let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ` + i*j);
        }
    }
}

//  5. In ra ma nhi phan cua 1 so nguyen duong
function convertToBinary() {
    let input = inputIntegerPositive("5. Nhap so nguyen duong:");
    let temp = input;
    let binary = [];
    while (temp > 0) {
        binary.push(temp % 2);
        temp = Math.floor(temp / 2);
    }
    const result = binary.reverse().join("");
    console.log(result);
    return result;
}

//  6. Tinh can bac hai 
function calculateSquareRootOne() {
    let input = inputInteger("6. Nhap so nguyen:");
    let sum = 0;
    for (let i = 1; i <= input; i++) {
        sum = Math.sqrt(i + sum);
    }
    console.log(sum);
    return sum;
}

//  7. Tinh can bac hai
function calculateSquareRootTwo() {
    let input = inputInteger("7. Nhap so nguyen:");
    let sum = 0;
    for (let i = input; i > 0; i--) {
        sum = Math.sqrt(i + sum);
    }
    console.log(sum);
    return sum;
}

console.log(sumOneToHundred());
console.log(printZeroToHundred());
console.log(calFactorial());
printMultiplicationTable();
convertToBinary();
calculateSquareRootOne();
calculateSquareRootTwo();