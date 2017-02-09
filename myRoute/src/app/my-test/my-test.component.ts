import { Component, OnInit, Output, } from '@angular/core';


@Component({
  selector: 'my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.css']
})
export class MyTestComponent implements OnInit {
  addVal;
  myDate;
  myVal;
  livros = [];
  novo;
  val;
  // @Output() jao;
  constructor() { }

  ngOnInit() {
    this.livros = ["Node", "Java", "Angular", "Javascript", "C##", "C++", "C", "Shell Script", "Swift"];
    this.myDate = Date.now();
    this.myVal = 411212131313.213;
  }

  addNovo(novo) {
    console.log(novo);
  }

  addValor(val) {
    this.livros.push(val);
    this.addVal = null;
  }

  obterCursos() {
    if (!this.val) return this.livros;
    var args = this.val.toLowerCase();
    var tmp = this.livros.filter(
      (val) => (val.toLowerCase().indexOf(args) != -1) ? true : false
    );
    return tmp;
  }

}
