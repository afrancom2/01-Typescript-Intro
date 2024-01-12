class NewPokemon {
    constructor(public readonly id: number,
        public name: string) {
    }

    scream () {
        console.log(`NO QUIERO!!!`)
    }

    speak() {
        console.log(`NO HABLAR!`)
    }
}

const MyDecorator = () => {
    return (target: Function) => {
        console.log(target);
        return NewPokemon;
    }
}

@MyDecorator()
export class Pokemon {
    constructor(public readonly id: number,
                public name: string) {
    }

    scream () {
        console.log(`${this.name.toUpperCase()}!!!`)
    }

    speak() {
        console.log(`${this.name} ${this.name}!`)
    }
}

export const pidgeotto = new Pokemon(16, 'Pidgeotto');

pidgeotto.scream();
pidgeotto.speak();