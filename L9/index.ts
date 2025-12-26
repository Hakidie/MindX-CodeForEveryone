//1.
interface student {
    name: string;
    age: number;
    major?: string;
}

const student: student = {
    name: "John", 
    age: 20 
} 

student.major = "Computer Science";

console.log(student);

//2.
interface person {
    name: string;
    age: number;
    job?: string;
}

const person: person = {
    name: "Alice", 
    age: 20,
    job: "Designer" 
} 

delete person.job;

console.log(person);

//3.
interface Car {
    brand: string;
    model: string;
    year: number;
}

const car: Car = {
    brand: "Toyota",
    model: "Camry", 
    year: 2020
} 

let number_attributes: number = 0;
for (let key in car) {
    number_attributes += 1;
}

console.log(number_attributes);

//4.
interface Product {
    name: string;
    price: number;
}

const product: Product = {
    name: "Laptop",
    price: 1000
} 

const result = Object.entries(product);

console.log(result);

//5
const products: Product[] = [
    {name: "Phone", price: 500 }, 
    { name: "Camera", price: 300 }, 
    { name: "Tablet", price: 700 }
] 

const foundProduct: Product = products.find(item => item.name === "Camera");

console.log(foundProduct);

//6
const products2: Product[] = [
    {name: "Phone", price: 50 }, 
    { name: "Camera", price: 300 }, 
    { name: "Tablet", price: 700 }
] 
const filtedProduct = products2.filter(item => item.price > 100);

console.log(filtedProduct);

//7
interface Person {
    name: string;
    age: number;
    job?: string;
}

const person: Person = {
    name: "Bob", 
    age: 25,
    job: "Developer" 
} 
person.age = 30;
console.log (person);

//8
interface Opj {
    a?: number;
    b?: number;
    c?: number;
    d?: number;
}

const opj1: Opj = {
    a: 1,
    b: 2
} 

const opj2: Opj = {
    c: 3,
    d: 4
} 

const mergedOpj = {...opj1, ...opj2}

console.log (mergedOpj);

//9
interface Animal {
    type: string;
    name: string;
    age: number;
}

const animal: Animal = {
    type: "dog",
    name: "Buddy",
    age: 3
} 

for (let key in animal) {
    console.log (key + ": " + animal[key as keyof Animal]);
}

//10
interface Car2 {
    brand: string;
    model: string;
}

const car: Car2 = {
    brand: "BMW",
    model: "X5"
} 

const hasColor = car2.hasOwnProperty("color");

console.log(hasColor);