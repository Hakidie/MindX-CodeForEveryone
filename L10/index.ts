//  1. Ham tinh gia tri phuong trinh bac nhat
//  parameter: a: number, b: number, x: number
//  return: result
function findX(a: number, b: number, x: number): number {
    let result: number = a * x + b;
    console.log(`f(${result})`);
    return result;
}

//  2. Tinh chu vi hinh chu nhat
//  parameter: width: number, length: number
//  return: perimeter
function calculateRetanglePerimeter(width: number, length: number): number {
    let perimeter = 2 * (width + length);
    return perimeter;
}

//  3. Tinh dien tich hinh tron
//  parameter: r: number
//  return: area
function areaOfCircle(r: number): number {
    let area = Math.PI * r * r;
    area = Math.round(area * 100) / 100;
    return area;
}

//  4. Kiem tra n co phai so nguyen to
//  parameter: n: number
//  return: true/false
function isPrime(n: number): boolean {
    let prime: boolean = true;
    for(let i = 2; i < n; i++) {
        if(n % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

//  5. Tinh tong cac tham so 
//  parameter: ...numbers: number
//  return: true/false
function sumALL(...numbers: number[]): number {
    return numbers.reduce((sum, current) => sum + current, 0);
}

//  6. Tinh tong mot day so tu start den end
//  parameter: start: number, end: number
//  return: sum
function sumStartToEnd(start: number, end: number): number {
    let sum = 0;
    for(let i = start; i <= end; i++) {
        sum = sum + i;
    }
    return sum;
}

//  7. Kiem tra chuoi co doi xung khong
//  parameter: string: string
//  return: true/false
function isPalindrome(string: string): boolean {
    let palindrome: boolean = true;
    let head: number = 0;
    let tail: number = string.length -1;
    
    while(head < tail) {
        if(string[head] !== string[tail]) {
            palindrome = false;
            break;
        }
        
        head++;
        tail--
    }
    
    return palindrome;
}

//  8. Kiem tra tat cac so trong mot ham co chan khong
//  parameter: array: number[]
//  return: true/false
function isArrayEven(array: number[]): boolean {
    let even = true;
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 != 0) {
            even = false;
            break;
        }
    }
    return even;
}

//  9. Tinh tong tat cac so chan trong ham bo qua so am
//  parameter: array: number[]
//  return: sum
function sumArrayPositive(array: number[]): number {
    let sum: number = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] >= 0) {
            sum = sum + array[i];
        }
    }
    return sum;
}

//  10. Tim gia tri lon nhat trong mang, su dung Rest Operator
//  parameter: array: number[]
//  return: gia tri lon nhat: maxValue
function largestInArray(array: number[]): number {
    let maxValue: number = Math.max(...array);
    return maxValue;
}