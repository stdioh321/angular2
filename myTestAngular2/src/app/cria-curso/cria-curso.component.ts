import { Component, OnInit } from '@angular/core';

import { ServService } from '../linguao/serv.service';
import { LogService } from '../shared/log.service';

@Component({
  selector: 'cria-curso',
  templateUrl: './cria-curso.component.html',
  styleUrls: ['./cria-curso.component.css']
  // ,providers:[ServService]
})
export class CriaCursoComponent implements OnInit {
  title: string[];
  test = [];
  items;
  constructor(private serv: ServService) { }

  ngOnInit() {
    this.title = this.serv.getList();
    this.test = this.serv.getJson();
    this.items = LogService.getInstance().getList();
  }

}
