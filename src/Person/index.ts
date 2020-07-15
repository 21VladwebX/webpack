abstract class APerson {
    public name: string;

    showName(): string  {
       return this.name;
    }
    changeName?(name: string): void;
}

class Person extends APerson {
    constructor (name:string) {
        super()
    };
    changeName(name:string) {
        this.name = name
    }
}

export default Person
