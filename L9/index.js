"use strict";

//1. Them thuoc tinh major
const student = {
    name: "John",
    age: 20
};
student.major = "Computer Science";
console.log(student);

//2. Xoa thuoc tinh trong doi tuong
const person = {
    name: "Alice",
    age: 20,
    job: "Designer"
};
delete person.job;
console.log(person);

//3. Dem so luong thuoc tinh trong doi tuong
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};
let number_attributes = 0;
for (let key in car) {
    number_attributes += 1;
}
let count = Object.keys(car).length;
console.log(number_attributes);

//4. Chuyen cac doi tuong thanh mang cap key-value
const product = {
    name: "Laptop",
    price: 1000
};
const result = Object.entries(product);
console.log(result);

//5. Tim doi tuong co thuoc tinh name = "Camera"
const products = [
    { name: "Phone", price: 500 },
    { name: "Camera", price: 300 },
    { name: "Tablet", price: 700 }
];
const foundProduct = products.find(item => item.name === "Camera");
console.log(foundProduct);

//6. Loc ra cac san pham co gia lon hon 100
const products2 = [
    { name: "Phone", price: 50 },
    { name: "Camera", price: 300 },
    { name: "Tablet", price: 700 }
];
const filtedProduct = products2.filter(item => item.price > 100);
console.log(filtedProduct);

//7. Cap nhat gia tri thuoc tinh trong doi tuong
const person2 = {
    name: "Bob",
    age: 25,
    job: "Developer"
};
person2.age = 30;
console.log(person2);

//8. Gop 2 doi tuong
const opj1 = {
    a: 1,
    b: 2
};
const opj2 = {
    c: 3,
    d: 4
};
const mergedOpj = Object.assign(Object.assign({}, opj1), opj2);
console.log(mergedOpj);

//9. Duyet qua doi tuong va in ra key-value
const animal = {
    type: "dog",
    name: "Buddy",
    age: 3
};
for (let key in animal) {
    console.log(key + ": " + animal[key]);
}

//10. Kiem tra doi tuong co thuoc tinh "color"
const car2 = {
    brand: "BMW",
    model: "X5"
};
const hasColor = car2.hasOwnProperty("color");
console.log(hasColor);