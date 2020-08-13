/* 
Ejercicio 1
• Plantear la clase Auto de la forma en que se vió
en la clase → especificando variables internas y
métodos
• Implementar en TypeScript 
*/
import * as readline from '../node_modules/readline-sync'

export class Auto{
    private marca: string
    private modelo: string


    constructor(marca:string, modelo: string){
        this.marca = marca;
        this.modelo = modelo;
    }

    public getMarca(): string{
        return this.marca;
    }

    public getModelo(): string{
        return this.modelo;
    }

    public cambiarMarca(): void{
        let nuevaMarca:string = readline.question("Cual es la marca del auto?: ");
        this.marca = nuevaMarca;
        console.log("Marca cambiada!")
    }

    public cambiarModelo(): void{
        let nuevoModelo:string = readline.question("Cual es el modelo del auto?: ");
        this.modelo = nuevoModelo;
        console.log("Modelo cambiado!")
    }
}