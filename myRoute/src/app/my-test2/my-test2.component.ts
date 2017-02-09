import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-test2',
  templateUrl: './my-test2.component.html',
  styleUrls: ['./my-test2.component.css']
})
export class MyTest2Component implements OnInit {

  constructor() { }

  @Input() jao = "jao";
  test = "MeuTeste";
  ngOnInit() {
    console.log(this.jao);
  }

}
