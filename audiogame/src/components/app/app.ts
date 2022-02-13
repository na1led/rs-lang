import { AudioGame } from "../pages/audiogame/audiogame";
export class App{
    private container: HTMLElement;
    private audioGame:AudioGame

    constructor(){
        this.container = document.body
        this.audioGame = new AudioGame('audio__game')
    }
    run(){
        const audioGame = this.audioGame.render()
        this.container.append(audioGame)
    }
}