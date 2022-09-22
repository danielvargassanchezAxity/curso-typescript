class User {
    id: number;
    name: string;
    email: string;
    private _fullName: string = "";

    public get fullName(): string {
        console.log("obteniendo el valor");
        return this._fullName; 
    }
    public set fullName(fullName: string) {
        console.log("asignando valor");
        this._fullName = fullName;
    } 


    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.login();
    }

    login(): void {
        console.log("Loading...")
    }

    logout(): void {
        console.log("Logout...")
    }
}

const objectUser = new User(1, "Daniel", "daniel@email.com");
objectUser.fullName = "Daniel vargas Sanchez";
console.log(objectUser.fullName);