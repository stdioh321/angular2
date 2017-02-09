import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyTestComponent } from './my-test/my-test.component';

import { SettingsService } from './shared/settings.service';
import { MyPipePipe } from './my-pipe.pipe';
import { MyTest2Component } from './my-test2/my-test2.component';
import { MyPipe2Pipe } from './my-pipe2.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MyTestComponent,
    MyPipePipe,
    MyTest2Component,
    MyPipe2Pipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt-BR'
    // },
    SettingsService,
    {
      provide: LOCALE_ID,
      // useValue: "pt-BR",
      deps: [SettingsService],
      useFactory: (settService) => settService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
