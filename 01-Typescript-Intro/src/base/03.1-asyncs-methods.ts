import axios from 'axios';
import {Move, PokeapiResponse} from "../interfaces/pokeapi-response.interface.ts";


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

    // Metodos asincronos
    scream() {
        console.log(`${this.name.toUpperCase()}!!!`)
    }
    speak() {
        console.log(`${this.name} ${this.name}`)
    }

    async getMoves(): Promise<Move[]> {
        // desestructuracion
        const {data, config, request} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves, config, request);
        return data.moves;
    }
}

export const charmilion = new Pokemon(6, 'Charmilion')
