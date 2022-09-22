let score = 60;
if (score >= 70) {
    console.log("ganaste")
    // mostrar animacion de ganador
} else {
    console.log("perdiste, ¿quieres intertarlo de nuevo?")
    // reiniciar juego
}

enum WeekDays {
    sunday = "lunes",
    monday = "martes",
    tuesday = "miercoes",
    wednesday = "jueves",
    friday = "viernes",
    saturday = "sabado",
}

let day = 4;
// switch (activeday) {
//     case WeekDays.sunday:
//         console.log(`Hoy es ${activeday}`);
//         // mostrar opciones de comida rápida
//         break;
//     case WeekDays.monday:
//         console.log(`Hoy es ${activeday}`);
//         // mostrar las rutas de tren
//         break;
//     case WeekDays.tuesday:
//         console.log(`Hoy es ${activeday}`);
//         // promos de oxxo
//         break;
//     case WeekDays.wednesday:
//         console.log(`Hoy es ${activeday}`);
//         // mostrar descuento en pizzeria favorita
//         break;
//     case WeekDays.friday:
//         console.log(`Hoy es ${activeday}`);
//         // solicitar uber despues de salir de trabajar.
//         break;
//     default: 
//         console.log("Es fin de semana, NO MOLESTAR");
//         // apagar alarmas
// }