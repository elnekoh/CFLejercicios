import {Telefono} from './telefono'
import {Camara} from './camara'

class TelefonoConCamara extends Telefono{
    private camara:Camara

    constructor(){
        super();
    }

    public sacarFoto():void{
        this.camara.sacarFoto();
    }
}