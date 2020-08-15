/*
• Implementar la clase Televisor y
Decodificador
*/
import {Decodificador} from './decodificador'


class Televisor{
    private isOn :boolean
    private decodificador: Decodificador

    constructor(decodificador){
        this.isOn = false;
        this.decodificador = decodificador;
    }

    public PowerOFFON():void{
        if(this.isOn){
            this.isOn = false;
        }else{
            this.isOn = true;
        }
    }

    public changeChannel(): void{
        this.decodificador.changeChannel();
    }

    public channelUp(): void{
        this.decodificador.channelUp();
    }

    public channelDown(): void{
        this.decodificador.channelDown();
    }

    public volumeUp():void{
        this.decodificador.volumeUp();
    }

    public volumeDown(): void{
        this.decodificador.volumeDown();
    }

}