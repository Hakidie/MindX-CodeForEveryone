//  Ham nhap so nguyen
function inputInteger(message: string): number {
    let input: number;
    do {
        input = Number(prompt(message));
    } while(!Number.isInteger(input))
    return input;
}

//  Ham nhap so nguyen duong
function inputIntegerPositive(message: string): number {
    let input: number;
    do {
        input = Number(prompt(message));
    } while(!Number.isInteger(input) || input <= 0)
    return input;
}

//  5. In ra ma nhi phan cua 1 so nguyen duong


//  5. In ra ma nhi phan cua 1 so nguyen duong
function convertToBinary() {
    
    let input: number = inputIntegerPositive("5. Nhap so nguyen duong:");
    let temp: number = input;
    let binary: number[] = []; 

    while(temp > 0) {
        binary.push(temp%2);
        temp = Math.floor(temp/2);
    }

    const result = binary.reverse().join("");

    return result
}

//  6. Tinh can bac hai 
function calculateSquareRootOne() {
    let input: number = inputInteger("6. Nhap so nguyen:");
    let sum: number = 0;

    for(let i = 1; i <= input; i++) {
        sum = Math.sqrt(i + sum);
    }

    console.log(sum);
    return sum;
}

//  7. Tinh can bac hai
function calculateSquareRootTwo() {
    let input: number = inputInteger("7. Nhap so nguyen:");
    let sum: number = 0;

    for(let i = input; i > 0; i--) {
        sum = Math.sqrt(i + sum);
    }

    console.log(sum);
    return sum;
}