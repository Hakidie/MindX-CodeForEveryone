//  1. Tinh dien tich va chu vi hinh chu nhat
function calRectangleArea(width, length) {
    let area = width * length;
    return area;
}

function calRectanglePerimeter(width, length) {
    let perimeter = 2 * (width + length);
    return perimeter;
}

function printRecAreaAndPerimeter() {
    let width = 10;
    let length = 5;

    console.log("1. chieu dai = " + width + ", chieu rong = " + length + ":");

    let area = calRectangleArea(width, length);
    console.log("Dien tich = " + area);

    let perimeter = calRectanglePerimeter(width, length);
    console.log("Chu vi = " + perimeter);
}


//  2. Chuyen doi giay sang gio-phut-giay
function convertToHourMinSec() {
    let inputSec = Number(prompt("2. Nhap so giay: "));

    let hour = (inputSec - inputSec%3600) / 3600;
    let minute = ((inputSec % 3600) - (inputSec % 3600) % 60) / 60;
    let second = inputSec - minute*60 - hour*3600;

    console.log("2. So giay: " + inputSec);
    console.log(hour + "h " + minute + "m " + second + "s");
}


//  3. Tinh luy thua
function printPower() {
    let number = Number(prompt("3. Nhap co so:"));
    let power = Number(prompt("3. Nhap so mu:"));

    let result = Math.pow(number, power);

    console.log("3. " + number + "^" + power + " = " + result);
}


//  4. Tinh trun binh cong 3 so bat ky
function printAverage() {
    let first_number = Number(prompt("4. Nhap so thu nhat:"));
    let second_number = Number(prompt("4. Nhap so thu hai:"));
    let third_number = Number(prompt("4. Nhap so thu ba:"));

    let result = (first_number + second_number + third_number) / 3;

    console.log("4. (" + first_number + " + " + second_number + " + " + third_number + ") / 3 = " + result);
}


//  5. Tinh khoang cach 2 diem
function printPointsDistance() {
    let x1 = Number(prompt("5. Nhap diem thu 1 x:"));
    let y1 = Number(prompt("5. Nhap diem thu 1 y:"));
    let x2 = Number(prompt("5. Nhap diem thu 2 x:"));
    let y2 = Number(prompt("5. Nhap diem thu 2 y:"));

    let distance = Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));

    console.log(`5. Khoang cach A(${x1}, ${y1}), B(${x2}, ${y2}): ` + distance);
}

//  6. Kiem tra so thu nhat co phai so lon nhat
function checkFirstIsLargest() {
    let first_number = Number(prompt("6. Nhap so thu nhat:"));
    let second_number = Number(prompt("6. Nhap so thu hai:"));
    let third_number = Number(prompt("6. Nhap so thu ba:"));

    if(first_number > second_number) {
        if(first_number > third_number){
            console.log("true");
            return true;
        } else {
            console.log("false");
            return false;
        }
    } else {
        console.log("false");
        return false;
    }
}

//  7. Kiem tra 2 chuoi co giong nhau khong
function checkStringsIsTheSame() {
    let first_string = prompt("7. Nhap chuoi thu nhat:");
    let second_string = prompt("7. Nhap chuoi thu hai:");

    if(first_string === second_string) {
       console.log("true");
       return true;
    } else {
        console.log("false");
        return false;
    }
}

//  8. Kiem tra so duong
function checkPositive() {
    let number = Number(prompt("8. Nhap so:"));

    if(Number.isInteger(number) && number > 0) {
        console.log("true");
        return true;
    } else {
        console.log("false");
        return false;
    }    
}

// 9. Kiem tra nam co nhuan khong
function checkLeapYear() {
    let year = Number(prompt("9. Nhap nam:"));

    if(year%400 == 0 || (year%4 == 0 && year%100 != 0)) {
        console.log("true");
        return true;
    } else {
        console.log("false");
        return false;
    }  
}

//  10. So sanh 2 moc thoi gian
function inputTime(min, max, message) {
    let x;

    do {
        x = Number(prompt(message));
    } while (!Number.isInteger(x) || x < min || x > max);

    return x;
}

function compareTimes() {
    let h1 = inputTime(0, 23, "Nhap gio dau tien:");
    let m1 = inputTime(0, 59, "Nhap phut dau tien:")
    let h2 = inputTime(0, 23, "Nhap gio thu hai:");
    let m2 = inputTime(0, 59, "Nhap phut thu hai:");

    let time1 = `${h1}${m1}`;
    let time2 = `${h2}${m2}`;

    let result = (time1 > time2) ? true : false;

    if(result) {
        console.log(`${h1}h:${m1}m lon hon ${h2}h:${m2}m`);
        return true;
    } else {
        console.log(`${h1}h:${m1}m nho hon ${h2}h:${m2}m`);
        return false;
    }
}

//  1. Tinh dien tich va chu vi hinh chu nhat
printRecAreaAndPerimeter();

//  2. Chuyen doi giay sang gio-phut-giay
convertToHourMinSec();

//  3. Tinh luy thua
printPower();

//  4. Tinh trun binh cong 3 so bat ky
printAverage();

//  5. Tinh khoang cach 2 diem
printPointsDistance();

//  6. Tinh trun binh cong 3 so bat ky
checkFirstIsLargest();

//  7. Kiem tra 2 chuoi co giong nhau khong
checkStringsIsTheSame();

//  8. Kiem tra so duong
checkPositive();

//  9. Kiem tra nam co nhuan khong
checkLeapYear();

//  10. So sanh 2 moc thoi gian
compareTimes();