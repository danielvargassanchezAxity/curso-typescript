const userName = "daniel";
const lastName = "vargas";
const message = "como estás"

let fullName = userName + " " + lastName + " " + "¿" + message + "?";
console.log(fullName);

const secondFullName = `${userName} ${lastName} ¿${message}?`;
console.log(secondFullName);


const HOST = "localhost";
const PORT = 3000;
const DB_USER = "root";
const DB_PASS = "root";

const urlConection = `${HOST}:${PORT}/user=${DB_USER}&password=${DB_PASS}`;
console.log(urlConection);