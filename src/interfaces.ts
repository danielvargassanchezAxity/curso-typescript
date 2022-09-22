interface Figura {
    base: number;
    altura: number;
    color: string;
    getArea(): number;
    getColor(): string;
}

class Cuadrado implements Figura {
    base: number;
    altura: number;
    color: string;
    constructor(base: number, color: string) {
        this.base = base;
        this.altura = base;
        this.color = color;
    }

    getArea(): number {
        return this.base * this.base;
    }

    getColor(): string {
        return this.color;
    }
}

class Rectangulo implements Figura {
    base: number;
    altura: number;
    color: string;

    constructor(base: number, altura: number, color: string) {
        this.base = base;
        this.altura = altura;
        this.color = color;
    }

    getColor(): string {
        throw new Error("Method not implemented.");
    }

    getArea(): number {
        return this.base * this.altura;
    }
}

const cuadrado = new Cuadrado(20, "#ffffff");
const rectangulo = new Rectangulo(30, 10, "#ffffff");

function printArea(figura: Figura): void {
    console.log(figura.getArea());
}

printArea(cuadrado);
printArea(rectangulo);


class Email {
    title: string = "";
    body: string = "";
    origin: string = "";
    receiver: string = "";
}

interface EmailSender {
    send(email: Email): void;
}

class OutlookSender implements EmailSender {
    send(email: Email): void {
        console.log("conectarse con su servidor");
        console.log("validar que exista el origen y el destino");
        console.log("escaneo del cuerpo y validar que no tenga algun tipo de virus");
        console.log("enviar correo");
    }
}

class YahooSender implements EmailSender {
    send(email: Email): void {
        console.log("conectarse al servidor");
        console.log("enviar correo");
    }
}

function sendMessage(sender: EmailSender, email: Email): void {
    sender.send(email)
}

function sendMessageByOutlook(): void {
    const email = new Email();
    email.title = "enviado desde outlook";
    email.body = "<p>Hola</p>";
    email.origin = "daniel@outlook.com";
    email.receiver = "adriana@outlook.com";
    sendMessage(new OutlookSender(), email);
}

function sendMessageByYahoo(): void {
    const email = new Email();
    email.title = "enviado desde yahoo";
    email.body = "<p>Hola</p>";
    email.origin = "daniel@yahoo.com";
    email.receiver = "adriana@yahoo.com";
    sendMessage(new YahooSender(), email);
}
sendMessageByYahoo();