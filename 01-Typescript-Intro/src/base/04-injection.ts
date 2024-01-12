import { PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import {HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter} from "../api/pokeApi.adapter.ts";

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }

    constructor(
        public readonly id: number,
        public name: string,
        // Todo: inyectar dependencias
        private http: HttpAdapter

    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<PokeapiResponse> {
        const data = await this.http.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        console.log( data );
        return data
    }

}

const pokeApi = new PokeApiAdapter();
const pokeApiFetchAdapter = new PokeApiFetchAdapter();
export const electrode = new Pokemon( 4, 'Electrocde', pokeApi);

export const caterpie = new Pokemon( 4, 'Caterpie', pokeApiFetchAdapter);

electrode.getMoves();