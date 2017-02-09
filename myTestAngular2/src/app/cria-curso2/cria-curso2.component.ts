import { Component, OnInit, Input } from '@angular/core';

import { ServService } from '../linguao/serv.service';

@Component({
  selector: 'cria-curso2',
  templateUrl: './cria-curso2.component.html',
  styleUrls: ['./cria-curso2.component.css']
  , providers: [ServService]
})
export class CriaCurso2Component implements OnInit {
  obj = { bd: "" };
  cs: string;
  mytest;
  constructor(private serv: ServService) { }
  list: string[];
  ngOnInit() {
    this.list = this.serv.getList();
    this.serv.evtEmm.subscribe((curso) => {
      console.log(curso);
    });
  }
  kUp(ev) {
    console.log(this.obj);
  }
  onClick(tmp) {
    console.log(tmp);
  }
  onAddCurso(curso: string) {
    // console.log(curso);
    this.serv.addCursos(curso);
    this.cs = "";
    return false;
  }
}
