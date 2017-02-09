import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'my-pipe',
  templateUrl: './my-pipe.component.html',
  styleUrls: ['./my-pipe.component.css']
})
export class MyPipeComponent implements OnInit {
  livro: any = {
    name: "Jao",
    date: new Date().getTime()
    , rate: '4.1245'
    , price: 51.10
  };

  prom = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Assincrono"), 3000);
  });

  prom2 = Observable.interval(2000).map(valor => "Assincrono 2");
  

  constructor() { }

  ngOnInit() {
    console.log(this.prom2);
  }

}
