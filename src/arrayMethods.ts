// foreach
const exampl = [100, 312, 54.6, 1245.2, 212.4334, -12];
let numberIsInList = false;
exampl.forEach((item, index) => {
    // if (item === 31222) {
    //     numberIsInList = true;
    // }
})
// console.log(numberIsInList);


// concat
const cars = ["Saab", "Volvo", "BMW"];
const concatList = cars.concat(["VW", "Honda", "Mercedes"])
// console.log(cars);

const concat3List = ["Saab", "Volvo"].concat(["BMW", "VW"], ["Honda", "Mercedes"]);
// console.log(concat3List);


// fill
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 0, 1);
// console.log(fruits);

//filter
const exampl2 = [100, 312, 54.6, 1245.2, 212.4334, -12];
const filterArray = exampl2.filter((item) => item < 100 && item > 0 || item === 312);

// console.log(exampl2);
// console.log(filterArray);


const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const filterFruits = fruits2.filter((item) => item === "BANANA");
// console.log(filterFruits);


// find 
const data = [100, 2201, 2132, 21, 2, 1, 100];
const result = data.find(item => item > 0 && item < 100);
// console.log(result);

// findIndex 
const index = data.findIndex((item) => item > 3000 && item <= 10000);
if (index === -1) {
    // console.log("Ningun elemento cumple con la condición "+ data[index]);
} else {
    // console.log(`el elemento que cumple con la condición es: ${data[index]}`);
}
// console.log(index);


// includes
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
const numbersList = [10, 20, 30, 40, 50]
// console.log(numbersList.includes(15));


// map
const users = [
    {
        id: 0,
        name: "Daniel"
    },
    {
        id: 1,
        name: "Carlos"
    },
    {
        id: 2,
        name: "Ana"
    }
];

const newUsers = users.map((user) => {
    return {
        id: user.id,
        userName: user.name,
        status: user.id < 2,
        concatId: `${user.id}-${user.name}-${user.id < 2}`
    }
});
// console.log(newUsers);


const valueList = [
    {
        user: "Daniel",
        active: 0,
    },
    {
        user: "Juan",
        active: 1,
    },
    {
        user: "Pedro",
        active: 0,
    }
];

const newMapList = valueList.map(item => {
    return {
        user: item.user,
        active: item.active === 1
    }
})
// console.log(newMapList);

// reduce
const valueNumberList = [10, 20, 30, 40, 50];
// let total = 0;
const total = valueNumberList.reduce((previousValue, currectValue) => previousValue + currectValue, 0);
const messageInList = ["Hola", "que", "tal"];



const message = messageInList.reduce((message, activeValue) => `${message} ${activeValue}`, "");


// valueNumberList.forEach((item)=>{
//     total += item;
// });
// console.log(message);


// join
const joinMessage = messageInList.join(" ");
// console.log(joinMessage);

// some
const numbersListExample = [10, 20, 30, 40, 50, 1000, 2000, 3000];
const validationResult = numbersListExample.some(item => item >= 3001);
// console.log(validationResult)

const exampl10 = [100, 312, 54.6, 1245.2, 212.4334, -12];
let numberIsInList10 = false;
numberIsInList10 = exampl10.some((item) => item === 100);
// console.log(numberIsInList10);



// every
const exampl11 = [100, 312, 54.6, 212.4334];
const validationResult2 = exampl11.every(item => item > 0 && item < 1000);
// console.log(validationResult2);

const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
const selectedItem = "BANANA";
const filterFruits2 = fruits10.filter((item) => item.toUpperCase() === selectedItem.toUpperCase());
// console.log(filterFruits2);

const activity2 = ["Manzana", "Pera", "UVA", "NaranjA", "Sandia", "MELON"];
const selectedLetter = "E";

const resulActivity2 = activity2.filter((fruit) => fruit.toUpperCase().includes(selectedLetter)).map(item => 
    item.toLowerCase()).join(" - ");
console.log(resulActivity2);