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
function inputInteger() {
    let input;
    do {
        input = Number(prompt("3. Nhap so nguyen:"));
    } while(!Number.isInteger(input))
    return input;
}

function calFactorial() {
    let integer_input = inputInteger();
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

//console.log(sumOneToHundred());
//console.log(printZeroToHundred());
//console.log(calFactorial());
printMultiplicationTable();