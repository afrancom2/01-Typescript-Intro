/*

    Forma larga de hacer la creacion de clases

export class Pokemon {
    public id: number;
    public name: string;

    constructor (id: number, name: string) {
        this.id = id;
        this.name = name;
        console.log('constructor iniciado')
    }
}*/

// Forma corta de crear clases solo colocando los accesos de los atributos (public)
export class Pokemon {
    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }
    constructor (
        public readonly id: number,
        public name: string,
        // public imageUrl: string, esto se cambio por un metodo get
    ) {
    }

    // Metodos
    scream() {
        console.log(`${this.name.toUpperCase()}!!!`)
    }
    speak() {
        console.log(`${this.name} ${this.name}`)
    }
}

export const pikachu = new Pokemon(1, 'pikachu');