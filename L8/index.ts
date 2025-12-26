// 1. In ra phan tu dau va cuoi cua mang
function printArrayHeadAndTail() {
    let array: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

    console.log(array[0]);
    console.log(array[array.length - 1]);
}

// 2. Thay gia tri o vi tri thu 2 trong mang thanh Mary 
function changeValueArray() {
    const name: string[] = ["John", "Jane", "Jim", "Jake"];

    name[1] = "Mary";

    console.log(name);
}

// 3. In ra gia tri cua mang bang for
function printArray() {
    const names: string[] = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

    for(let i: number = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

// 4. Chen Mindx vao cuoi mang va in mang
function insertArrayTail() {
    const names: string[] = ["Alice", "Bob", "Charlie", "David"];

    names[names.length] = "Mindx";

    console.log(names);    
}

// 5. Loc ra cac so le trong mang
function filtOddArray() {
   const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   let result: number[] = [];
   for(let i = 0; i < numbers.length; i++) {
        if(!(numbers[i] % 2 === 0)){
            result[result.length] = numbers[i];
        }
   }
   console.log(result);
}

// 6. Tim ten "David" trong mang va in ra
function findNameInArray() {
   const names: string[] = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
   const name: string = "David";
   if (names.includes(name)) {
        console.log("Tim thay " + name);
   } else {
    console.log("Khong tim thay " + name)
   }
}

//7. Dem so lan xuat hien cua mot so trong mang
function countANumberInArray() {
   const numbers = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
   const targetCounting: number = 2;
   let count: number = 0;
   for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === targetCounting) {
            count++;
        }
   }
   console.log(count);
}

//8. In ra so lon nhat trong mang
function findLargestInArray() {
   const numbers = [5, 2, 9, 3, 7, 11, 8];
   let max: number = numbers[0];
   for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
   }
   console.log(max);
}

//9. Dao nguoc mang
function reversesArray() {
   const array = [1, 2, 3, 4, 5];
   array.reverse();

   console.log(array);
}

//10. Xoa phan tu trung lap trong mang
function removeDulpicatesArray() {
    const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];
    let result: number[] = [];

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

    console.log(result);
}

function removeDulpicatesArray2() {
    const duplicatesArray: number[] = [1, 2, 2, 3, 4, 4, 5];
    const result: number[] = [...new Set(duplicatesArray)];
    console.log(result);
}

//11. Tinh tong cac phan tu trong mang
function sumValuesInArray() {
    let sum: number = 0;
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    console.log(sum);
}

function sumValuesInArray2() {
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const sum: number = numbers.reduce((acc, cur) => acc + cur, 0);
    console.log(sum);
}