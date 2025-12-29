"use strict";

//  1. Ham tinh gia tri phuong trinh bac nhat
//  parameter: a: number, b: number
//  return: result
function findX(a, b, x) {
    let result = a * x + b;
    console.log(`f(${x}) = ${result}`);
    return result;
}

let a = 3, b = 4;
let x = 5;
findX(a, b, x);


//  2. Tinh chu vi hinh chu nhat
//  parameter: width: number, length: number
//  return: perimeter
function calculateRetanglePerimeter (width, length) {
    let perimeter = 2 * (width + length);
    return perimeter;
}

let width = 10, length = 15;
let perimeter = calculateRetanglePerimeter(width, length);
console.log("Perimeter = " + perimeter);


//  3. Tinh dien tich hinh tron
//  parameter: r: number
//  return: area
function areaOfCircle(r) {
    let area = Math.PI * r * r;
    area = Math.round(area * 100) / 100;
    return area;
}

let r = 5;
let area = areaOfCircle(r);
console.log("Area = " + area);

//  4. Kiem tra n co phai so nguyen to
//  parameter: n: number
//  return: area
function isPrime(n) {
    let prime = true;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

let n = 17;
console.log(isPrime(n));


//  5. Tinh tong cac tham so 
//  parameter: ...numbers: number
//  return: true/false
function sumAll(...numbers) {
    return numbers.reduce((sum, current) => sum + current, 0);
}

let sumOfParaemters = sumAll(1, 2, 3, 4, 5);
console.log(sumOfParaemters);

//  6. Tinh tong mot day so tu start den end
//  parameter: start: number, end: number
//  return: sum
function sumStartToEnd(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum = sum + i;
    }
    return sum;
}

let start = 5, end = 10;
console.log(sumStartToEnd(start, end));


//  7. Kiem tra chuoi co doi xung khong
//  parameter: string: string
//  return: true/false
function isPalindrome(string) {
    let palindrome = true;
    let head = 0;
    let tail = string.length - 1;
    while (head < tail) {
        if (string[head] !== string[tail]) {
            palindrome = false;
            break;
        }
        head++;
        tail--;
    }
    return palindrome;
}

let str = "madam";
console.log(isPalindrome(str));


//  8. Kiem tra tat cac so trong mot ham co chan khong
//  parameter: array: number[]
//  return: true/false
function isArrayEven(array) {
    let even = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            even = false;
            break;
        }
    }
    return even;
}

let array = [2, 4, 6, 8];
console.log(isArrayEven(array));


//  9. Tinh tong tat cac so trong ham bo qua so am
//  parameter: array: number[]
//  return: sum
function sumArrayPositive(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            sum = sum + array[i];
        }
    }
    return sum;
}

let array2 = [3, -1, 4, -2, 5];
console.log(sumArrayPositive(array2));


//  10. Tim gia tri lon nhat trong mang, su dung Rest Operator
//  parameter: array: number[]
//  return: gia tri lon nhat: maxValue
function largestInArray(array) {
    let maxValue = Math.max(...array);
    return maxValue;
}

let max = [1, 3, 7, 0, -2];
console.log(largestInArray(max));