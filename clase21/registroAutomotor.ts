/*
Ejercicio 1
• Usando la clase Auto: Implementar la clase
RegistroAutomotor con métodos para consultar
por un auto en un listado, borrar, actualizar y dar
de alta
• Partir de función ya implementada para leer
archivos
*/
import {Auto} from './auto'
import * as readline from '../node_modules/readline-sync'


class RegistroAutomotor{
    private autos: Auto[]

    public getListado(): void{
        for(let i=0;i<this.autos.length;i++){
            console.log(`${i+1}). Marca: "${this.autos[i].getMarca()}", modelo: "${this.autos[i].getModelo()}"`)
        }
    }

    public eliminar(): void{
        this.getListado();
        let autoAEliminar: number = readline.questionInt("Que auto desea eliminar?: ");
        if(this.autos[autoAEliminar-1] != undefined){
            this.autos.splice(1,autoAEliminar);
            console.log("Auto eliminado!!")
        }
    }

    public actualizarDatos():void {
        let opcion:string;
        let autoElegido:number;
        this.getListado();
        autoElegido = readline.questionInt("Que auto quiere actualizar?: ");
        if(this.autos[autoElegido-1] != undefined){
            while(opcion != "marca" && opcion != "modelo"){
                opcion = readline.question("Desea cambiar el modelo o la marca de el auto?");
            }
            opcion.toLowerCase;
            if (opcion = "marca"){
                this.autos[autoElegido-1].cambiarMarca();
            }
            if(opcion="modelo"){
                this.autos[autoElegido-1].cambiarModelo();
            }
        }
    }

    public darAlta(): void{
        let marca:string = readline.question("Cual sera el nombre de el auto?: ");
        let modelo:string = readline.question("Cual sera el modelo de el auto?: ");
        let auto: Auto = new Auto(marca, modelo);
        this.autos.push(auto)
    }
}