export const pokemonIds = [1, 20, 30, 34, 66];

pokemonIds.push(Number('1'));

export const pokemon = {
    id: 1,
    name: 'Coky'
}

// Se utilizan interfaces para obligar que los datos sean de cierto
// tipo por ejemplo el id que sea numerico
// El simbolo de interrogacion es opcional para ese atributo

interface Pokemon {
    id: number,
    name: string,
    age?: number
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur'
}

export const charmander: Pokemon = {
    id: 2,
    name: 'charmander',
    age: 50
}

export const pokemons: Pokemon[] = [];

pokemons.push(charmander, bulbasaur);

console.log(pokemons)
