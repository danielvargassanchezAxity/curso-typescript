// function logData(message: string): ClassDecorator {
//     console.log("el parametro recibido del decorador de clase es:" + message);
//     return function(): void {
//         console.log("constructor");
//     }
// }


// @logData('url')
// class User {
//     public firstName: string;
//     public lastName: string;

//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     public getFullName(): string {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const objectUser = new User("daniel","vargas");


// @logData("/dog")
// class Dog {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// const dogOject = new Dog("Kira");



// function logProperty(): PropertyDecorator {
//     return function (): void {
//         console.log("property constructor")
//     }
// }
// class User {
//     @logProperty() public firstName: string;
//     public lastName: string;

//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     public getFullName(): string {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const objectUser = new User("daniel","vargas");
function logMethod(): MethodDecorator {
    return function (): void {
        console.log("method decorator");
    }
}

class User {
    public firstName: string;
    public lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @logMethod()
    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
const objectUser = new User("daniel", "vargas");
objectUser.getFullName();