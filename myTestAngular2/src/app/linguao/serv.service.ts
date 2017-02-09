import { Injectable, OnInit, EventEmitter, Output } from '@angular/core';

@Injectable()
export class ServService implements OnInit {
  evtEmm = new EventEmitter();
  cursos: string[] = ["abc", "123", "xyz"];

  constructor() {
    console.log("ServService Constructor");
  }

  ngOnInit() {
    console.log("ServService OnInit");
  }
  getList() {
    return this.cursos;
  }
  getJson() {
    let tmp = [];
    for (let i = 0; i < 20; i++) {
      // tmp[i].user = {};
      tmp[i] = {
        "id": i,
        "name": `jao_${i}`
      };
    }
    return tmp;
  }
  addCursos(curso: string) {
    this.cursos.push(curso);
    this.evtEmm.emit({
      novoCurso: `_${curso}`
    });
  }
}
