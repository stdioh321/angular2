import { Component } from '@angular/core';

import { InputComponent } from './input.component';
import { OutputComponent } from './output.component';

@Component({
    // moduleId: module.id,
    selector: 'bind',
    // directives: [InputComponent],
    templateUrl: 'bind.component.html',
    // styles: [
    //     `
    //         .high{
    //             border: solid yellow 5px;
    //         }
    //     `
    // ]
    styleUrls: ["bind.component.css"]
    
})
export class BindComponent {
    tmp;
    imgSrc:string="http://1.bp.blogspot.com/-kkEEYNqfWmg/VppqCU65AGI/AAAAAAAACp8/bY-udsWhJek/s1600/1448026963685.png";
    constructor() {
        this.tmp = new Date(Date.now());
    }
    public getValor(): string {
        return "http:///www.google.com";
    }
    public getUrl(): string {
        return "http://vditajai.com.br/wp-content/uploads/2016/02/linux.jpg";
    }

    public cliked(evt) {
        console.log("Clicked", evt);
    }
    alterouValor(evt){
        console.log(evt);    
    }
}