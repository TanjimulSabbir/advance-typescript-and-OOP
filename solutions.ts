// =======================
// Problem 1
// =======================
function filterEvenNumbers(arr: number[]): number[] {
    const result: number[] = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i]! % 2 === 0) {
            result[result.length] = arr[i]!;
        }
    }

    return result;
}

// =======================
// Problem 2
// =======================
function reverseString(str: string): string {
    let reversed: string = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i]!;
    }

    return reversed;
}

// =======================
// Problem 3
// =======================

type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {

    if (typeof value === "string") {
        return "String";
    } else {
        return "Number";
    }
}

// =======================
// Problem 4
// =======================

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}


// =======================
// Problem 5
// =======================

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {

    const updatedBook: Book & { isRead: boolean } = {
        title: book.title,
        author: book.author,
        publishedYear: book.publishedYear,
        isRead: true
    };

    return updatedBook;
}

// =======================
// Problem 6
// =======================

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

// Sample Input
const student = new Student("Alice", 20, "A");


// =======================
// Problem 7
// =======================

function getIntersection(arr1: number[], arr2: number[]): number[] {

    const result: number[] = [];

    for (let i = 0; i < arr1.length; i++) {

        for (let j = 0; j < arr2.length; j++) {

            if (arr1[i] === arr2[j]) {

                let exists = false;

                for (let k = 0; k < result.length; k++) {

                    if (result[k] === arr1[i]) {
                        exists = true;
                        break;
                    }
                }

                if (!exists) {
                    result[result.length] = arr1[i]!;
                }
            }
        }
    }

    return result;
}