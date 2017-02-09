import { Component } from '@angular/core';

import { CursosComponent } from './cursos/cursos.component';
import { BindComponent } from './bind/bind.component';
import { CicloComponent } from './ciclo/ciclo.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'App works!';
  mod = JSON.stringify(module);
  valor:number = 30;
  
}
