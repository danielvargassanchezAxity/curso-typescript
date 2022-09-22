namespace DataBaseEntity {
    export class User {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    }
    export const objectUser = new User("Daniel");
    export function createUser(user: User): void {
        console.log("user created from DataBaseEntity");
    }
}

namespace AccessData {
    export class User {
        name: string;
        id: number;
        constructor(name: string, id: number) {
            this.name = name;
            this.id = id;
        }
    }
    export function createUser(user: User): void {
        console.log("user created from accessData");
    }
}
DataBaseEntity.createUser(new DataBaseEntity.User("Daniel"));
AccessData.createUser(new AccessData.User("Daniel", 1));