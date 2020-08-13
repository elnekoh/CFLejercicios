/*
Ejercicio 2
• Plantear la clase Monitor
• Implementar en TypeScript
*/
class Monitor {
    private estaPrendido: boolean
    private marca: string

    constructor(marca:string){
        this.marca = marca;
        this.estaPrendido = false;
    }

    public encenderApagar():void{
        if(this.estaPrendido){
            this.estaPrendido = false;
        }else{
            this.estaPrendido = true;
        }
    }

    public getMarca(): string{
        return this.marca;
    }
}