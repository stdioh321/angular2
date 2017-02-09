import { Component, OnInit } from '@angular/core';

import { ServService } from "./serv.service";

@Component({
  selector: 'linguao',
  templateUrl: './linguao.component.html',
  styleUrls: ['./linguao.component.css']
})
export class LinguaoComponent implements OnInit {
  list: string[];
  constructor(private serv:ServService) { }

  ngOnInit() {
    this.list = this.serv.getList();
  }

}
