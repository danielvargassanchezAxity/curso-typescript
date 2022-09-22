// boolean
let active: boolean = false;
if (!active) {
    console.log("no hay stock");
} else {
    console.log("el producto está activo");
}

// number
let exampleNumber: number = 15;
exampleNumber = -15;

console.log("exampleNumber: ", exampleNumber);

//string 
let message = "HOLA";
let messageTwo = " MUNDO"
console.log(message);


// array 
let numberList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
numberList.push(15);
let numberList2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const contactResult = numberList.concat(numberList2);
console.log(numberList2);


// tuplas
let data: [string, number, boolean];
data = ["edad", 25, false];
data = ["nombre", 10, true];

console.log("tupla: ", data[1]);


let tupleSameValues: [string, string];
tupleSameValues = ["nombre", "daniel"];

// enum o enumeraciones
enum HttpStatus {
    serverError,
    badRequest,
    timeOut,
    unautorized
}

const res = {
    status: 500
}

if (res.status === HttpStatus.unautorized) {
    console.log("redirigir al login");
}

// 0 - enviado
// 1 - en transito
// 2 - recibido
const packageStatus = 1;
enum PackageStatus {
    send = "enviado",
    inprogress = "en transito",
    recibido = "recibido",
    norecibido = "no recibido"
}

// any
let anyValue: any;
anyValue = 15;
anyValue = "";
anyValue = false;
anyValue = undefined;
anyValue = null;
anyValue = [];

// null y undefined
let undefinedValue: number;
// console.log(undefinedValue)



//  null
let nullExample = 15;
// nullExample = null;