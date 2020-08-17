export class Telefono{
    private estaPrendido:boolean
    private bateriaActual:number
    protected linternaPrendida:boolean

    public constructor(){
        this.estaPrendido = false;
        this.bateriaActual = 0;
        this.linternaPrendida = false;
    }

    public mandarMensaje(msg:string, numero:number):boolean{
        console.log(`enviando "${msg} a el numero ${numero}"`);
        console.log("mensaje enviado");
        return true
    }

    public hacerLlamada(numero:number):void{
        console.log(`llamando a ${numero}`);
    }
}