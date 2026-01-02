
// 1. Them phan tu vao cuoi mang
function addAtTailArray(array: string[], value: string) {
    array[array.length] = value;
}

// 2. Binh phuong cac gia tri trong mang
function powerValuesInArray(array: number[]) {
    for(let i = 0; i < array.length; i++) {
        array[i] = array[i] * array[i];
    }
}

// 3. Loc ra cac so chan trong mang
function filterEvenInArray(array: number[], evenArray: number[]) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0)
            evenArray[evenArray.length] = array[i];
    }
}