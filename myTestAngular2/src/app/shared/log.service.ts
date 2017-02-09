import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  private static instance: LogService = null;
  items = ["1","2","3","4","5"];
  constructor() { }

  getList(){
    return this.items;
  }
  public static getInstance(){
    if(this.instance == null){
      console.log("New Instance");
      this.instance = new LogService();
    }
    return this.instance;
  }
}
