import { Component, Input } from '@angular/core';

@Component({
    // moduleId: module.id,
    selector: 'imp',
    templateUrl: 'input.component.html'
    // ,inputs:['tempName:nome']
    // template:`
    //     <div>JAOoooo</div>
    // `
})
export class InputComponent {
    @Input('nome') tempName: string = "";
    @Input('val') value:string = "";
    constructor() { }
}