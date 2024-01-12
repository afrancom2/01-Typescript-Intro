// Se exportan para poder usarlos en el main.ts

export const name = 'Andres Franco'
export const age: number = 27
export const isValid: boolean = true;

export const templateString = `Esto es un string
multilinea
que puede tener
" comillas dobles
' comillas simples
intectar valores ${ name }
`

console.log(templateString)
