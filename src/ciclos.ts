let contador = 0;
let salir = false;

while (!salir) {
    console.log("repetición numero:", contador);
    contador++;
    if (contador === 10) {
        salir = true;
    }
}
do {
    console.log("repetición numero:", contador);
    contador++;
    if (contador === 10) {
        salir = true;
    }
} while (!salir)

for (let contador = 0; !salir; contador++) {
    console.log(contador)
    if (contador === 10) {
        salir = true;
    }
}