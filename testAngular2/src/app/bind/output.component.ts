import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    // moduleId: module.id,
    selector: 'output',
    templateUrl: 'output.component.html',
    outputs:["mudouValor"]
})
export class OutputComponent {
    // valor:number = Math.round(Math.random() * 10);
    @Input() valor: number;

    // @Output() mudouValor = new EventEmitter();
     mudouValor = new EventEmitter();

    constructor() { }

    alterValue(val) {
        if (val)
            this.valor++;
        else
            this.valor--;
        this.mudouValor.emit({ novoValor: this.valor });
    }

}