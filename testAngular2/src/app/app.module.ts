import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { BindComponent } from './bind/bind.component';
import { InputComponent } from './bind/input.component';
import { OutputComponent } from './bind/output.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { DirectiveTestDirective } from './shared/directive-test.directive';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    BindComponent,
    InputComponent,
    OutputComponent,
    CicloComponent,
    MyFirstCompComponent,
    DirectiveTestDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
