
import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
    selector: "cursos-list",
    // template: `
    //     <ul class="list-group">
    //         <li class="list-group-item" *ngFor="let curso of cursos">
    //             {{curso}}
    //         </li>
    //     </ul>
    // `
    templateUrl:"./cursos.component.html"
    , providers: [CursosService]
})

export class CursosComponent {
    cursos;
    constructor(cursosService: CursosService) {
        this.cursos = cursosService.getCursos() || [1, 2, 3];
    }
}