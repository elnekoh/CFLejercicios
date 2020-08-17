import {Telefono} from './telefono'

class TelefonoConCamara extends Telefono{
    public constructor(){
        super();
    }

    public sacarFoto():void {
        console.log("saliste re lindo!");
    }

    public grabarVideo():void{
        console.log("video grabado.")
    }
}