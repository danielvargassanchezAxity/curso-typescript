// function getArray(items: any[]): any[] {
//     return new Array().concat(items);
// }
// let numberArray = getArray([5, 10, 15, 20]);
// let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
// numberArray.push(25);                       // OK
// stringArray.push('Rabbits');                // OK
// numberArray.push('This is not a number');   // OK
// stringArray.push(30);                       // OK
// console.log(numberArray);                   // [5, 10, 15, 20, 25, "This is not a number"]
// console.log(stringArray);                   // ["Cats", "Dogs", "Birds", "Rabbits", 30]


// function getArray<T>(items: T[]): T[] {
//     return new Array<T>().concat(items);
// }
// let numberArray = getArray<number>([1,2,3,4,5,6]);
// numberArray.push(9);


// let stringArray = getArray<string>(["Cats","Dogs","Birds"]);
// stringArray.push("Rabbits");



// function identity<T, U>(value: T, message: U): T {
//     console.log(message);
//     return value;
// }
// let returnNumber = identity<number, string>(100, "hi");
// let returnString = identity<string, string>('100', 'Hola!');
// let returnBoolean = identity<boolean, string>(true, 'Bonjour!');

// let tupla: [number, string, boolean];
// tupla = [returnNumber, returnString, returnBoolean];
// console.log(tupla);

type ValidTypes = string | number;

function identity<T extends ValidTypes, U>(value: T, message: U): T {
    console.log(message);
    return value;
}

let returnNumber = identity<number, string>(100, "hi");
let returnString = identity<string, string>('100', 'Hola!');
// let returnBoolean = identity<boolean, string>(true, 'Bonjour!');
