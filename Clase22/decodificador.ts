import * as readline from '../node_modules/readline-sync'

export class Decodificador{
    private channel :number
    private volume :number

    constructor(){
        this.channel = 1;
        this.volume = 20;
    }

    public changeChannel(): void{
        let newChannel:number;
        while(this.channel < 1){
            newChannel = readline.questionInt("que canal desea ver?: ");
            if(newChannel < 1){
                console.log("Por favorm elija un numero mayor a 1");
            }
        }
        this.channel = newChannel;
    }

    public channelUp(): void{
        this.channel++;
    }

    public channelDown(): void{
        if(this.channel >= 2){
            this.channel--;
        }else{
            console.log("canal minimo!")
        }
    }

    public volumeUp():void{
        if(this.volume <= 100){
                this.volume++;
            }else{
                console.log("Volumen maximo!");
            }
        }

    public volumeDown(): void{
        if(this.volume>=0){
            this.volume--;
        }else{
            console.log("Volumen minimo!");
        }
    }
}