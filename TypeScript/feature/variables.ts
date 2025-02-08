let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];

// class
class Car {

}
let car: Car = new Car();

// Object literal
let point: {x: number; y:number} = {
    x: 20,
    y:10
}

// Function
const logNumber:(i:number) => string = (i:number) => {

    console.log(i);
    return 'resturnStr';
};