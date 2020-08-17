/*
• Implementar las clases y
métodos que se muestran
• Agregar variables/métodos
adicionales
*/
import * as readline from '../node_modules/readline-sync'

export class Telefono {
    private estaPredido:boolean
    private bateriaActual: number

    public constructor(){
        this.estaPredido == false;
        this.bateriaActual==0;
    }

    public mandarMensaje(): void{
        let mensaje:string = readline.question("Escribir mensaje: ");
        console.log(mensaje);
        console.log();
        console.log("mensaje enviado!");
    }

    public hacerLlamada(): void{
        console.log("no se pudo realizar la llamada");
    }

    public prenderApagar(): void{
        if(this.estaPredido){
            this.estaPredido = false;
        }else{
            if(this.bateriaActual > 0){
                this.estaPredido = true
            }
        }
    }
}