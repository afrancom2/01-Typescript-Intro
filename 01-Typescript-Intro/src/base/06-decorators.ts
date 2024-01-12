const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
        console.log({target})
        console.log(memberName)
        console.log(propertyDescriptor)
        return {
            get() {
                const wrapperFn = (...args: any[]) => {
                    console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
                    //! Llamar la función propiamente con sus argumentos
                    propertyDescriptor.value.apply(this, args);
                }
                return wrapperFn;
            }
        }
    }
}

export class Pokemon {
    constructor(public readonly id: number,
                public name: string) {
    }

    scream () {
        console.log(`${this.name.toUpperCase()}!!!`)
    }

    @Deprecated('Debes usar metodo speak2')
    speak() {
        console.log(`${this.name} ${this.name}!`)
    }

    speak2() {
        console.log(`${this.name} ${this.name}!`)
    }
}

export const rattata = new Pokemon(16, 'Rattata');

rattata.scream();
rattata.speak();