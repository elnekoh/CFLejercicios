import * as readline from '../node_modules/readline-sync'
import {Telefono} from './telefono'

class TelefonoConRadio extends Telefono{
    private frecuenciaActual:number
    
    public constructor(){
        super();
        this.frecuenciaActual=90;
    }

    public verFrecuenciaActual():void{
        console.log(this.frecuenciaActual);
    }

    public cambiarFrecuenciaActual():void{
        let nuevaFrecuencia = readline.questionInt("Ingrese la nueva frecunecia: ");
    }
}