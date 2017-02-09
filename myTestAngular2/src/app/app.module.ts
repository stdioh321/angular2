import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { MyDirDirective } from './my-dir.directive';
import { LinguaoComponent } from './linguao/linguao.component';

import { ServService } from "./linguao/serv.service";
import { SettingsService } from "./shared/settings.service";
import { LogService } from "./shared/log.service";

import { LinguaoModule } from "./linguao/linguao.module";
import { CriaCursoComponent } from './cria-curso/cria-curso.component';
import { CriaCurso2Component } from './cria-curso2/cria-curso2.component';
import { ContentComponent } from './content/content.component';
import { MyPipeComponent } from './my-pipe/my-pipe.component';
import { CamelCasePipe } from './shared/camel-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    MyDirDirective,
    LinguaoComponent,
    CriaCursoComponent,
    CriaCurso2Component,
    ContentComponent,
    MyPipeComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ServService,
    LogService,
    SettingsService,
    // {
    //   provide: LOCALE_ID,
    //   useValue:'pt-BR'
    //   // ,useClass:''
    //   // ,useFactory:''
    // }
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService) => settingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
