import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

import {name, age, isValid, templateString} from './base/01-types.ts'
import {bulbasaur, charmander, pokemon, pokemonIds, pokemons} from "./base/02-objects.ts";
import {pikachu} from "./base/03-clases.ts";
import {charmilion} from "./base/03.1-asyncs-methods.ts";
import {caterpie, electrode} from "./base/04-injection.ts";
import {pidgeotto} from "./base/05-decorators.ts";
import {rattata} from "./base/06-decorators.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <p> ${ name + ' ' + age + ' ' + isValid } </p>
    <p> ${ templateString }</p>
    
    <p> ${ pokemonIds } </p>
    <p> ${ pokemon.name } </p>
    <p> ${ bulbasaur.name } </p>
    <p> ${ charmander.age } </p>
    <p> ${ pokemons } </p>
    <p> ${ pikachu.name } </p>
    <p> ${ pikachu.imageUrl } </p>
    <p> ${ pikachu.scream() } </p>
    <p> ${ pikachu.speak() } </p>
    
    <p> ${ charmilion.getMoves() } </p>
    <p> ${ electrode } </p>
    <p> ${ caterpie } </p>
    <p> ${ pidgeotto } </p>
    <p> ${ rattata } </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
