//Task 1
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};

function propsCount(obj) {
    let count = 0;
    for (let key in obj) {
        count++;
    }
    return count;
}

console.log(propsCount(mentor));

//Task 2
let phone = {
    manufacturer: "Apple",
    model: "iPhone 14",
    ram: "6GB",
    cpu: "A15 Bionic",
    price: 799
};

function showProps(obj) {
    let props = [];
    for (let key in obj) {
        console.log(key);
    }
    return props;
}

console.log(showProps(phone));

//Task 3
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(middleName) {
        return `${this.name} ${this.surname} ${middleName}`;
    }
    showCourse() {
        let currentyear = new Date().getFullYear();
        return currentyear - this.year;
    }
}

const student = new Student('Mikhailo', 'Kapusniak', 2020);
console.log(student.showFullName("Serhiiovich"));
console.log("Зараз вчиться на " + student.showCourse() + " курсі");

//Task 4
class Worker {
    constructor(fullName, dayRate, woringDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.woringDays = woringDays;
    }
    showSalary() {
        return this.dayRate * this.woringDays;
    }
    #_experience = 1.2;
    showSalaryWithExperience() {
        return this.showSalary() * this.#_experience;
    }
    get experience() {
        return this.#_experience;
    }
    set experience(value) {
        this.#_experience = value;
    }
}

let worker1 = new Worker("Volodymyr Velykyi", 58, 23);
console.log(worker1.fullName);
console.log(worker1.fullName + " зарплата: " + worker1.showSalary());
console.log("Новий досвід: " + worker1.experience);
console.log(worker1.fullName + " зарплата: " + worker1.showSalaryWithExperience());
worker1.experience = 1.5;
console.log("Новий досвід: " + worker1.experience);
console.log(worker1.fullName + " зарплата: " + worker1.showSalaryWithExperience());

let worker2 = new Worker("Tom Jerry", 46, 31);
console.log(worker2.fullName);
console.log(worker2.fullName + " зарплата: " + worker2.showSalaryWithExperience());

let worker3 = new Worker("Bob Sponge", 13, 24);
console.log(worker3.fullName);
console.log(worker3.fullName + " зарплата: " + worker3.showSalaryWithExperience());

function showSortedWorkers(workers){
    workers.sort((a,b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());
    workers.forEach(worker => console.log(worker.fullName + " " + worker.showSalaryWithExperience()));
}

console.log("Сортування за зарплатою: ");
showSortedWorkers([worker1, worker2, worker3]);

//Task 5
class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Triangle extends GeometricFigure {
    constructor(a, b, c) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getArea() {
        let p = (this.a + this.b + this.c) / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }
}

class Square extends GeometricFigure {
    constructor(a) {
        super();
        this.a = a;
    }
    getArea() {
        return this.a * this.a;
    }
}

function handleFigures(figure) {
    let sum = 0;
    for(let i = 0; i < figure.length; i++){
        sum += figure[i].getArea();
        console.log("Площа об'єкта " + figure[i].toString() + " рівна " + figure[i].getArea());
    }
    return sum;
}

const figures = [new Triangle(4, 5, 6), new Square(7), new Circle(5)];
console.log(handleFigures(figures));