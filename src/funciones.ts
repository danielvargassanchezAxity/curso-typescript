function validateScore(): void {
    console.log("hola desde validate score")
}
function validateScoreWithParams(message: string): void {
    console.log(message);
}
function sumarDosnumeros(a: number, b: number): void {
    console.log(`La suma de los dos valores es: ${a + b}`);
}
function addNumbers(a: number, b: number): number {
    return a + b;
}
// validateScoreWithParams("Esta es una funcion con parametros");
// sumarDosnumeros(10,20);
// console.log(`La suma de 10 y 20 es: ${addNumbers(10,20)}`);


// arrow function
() => {
    console.log("hola desde arrow function")
}

const adddNumber = (a: number, b: number): number => {
    return a + b;
}
console.log(`El resultado es: ${adddNumber(10, 20)}`);
