import { Injectable } from "@angular/core";

@Injectable()
export class CursosService {
    public getCursos() {
        let tmp = [];
        let tot = Math.round(Math.random() * 50);
        for (let i = 0; i < tot; i++) {
            tmp.push("IDX_" + i);
        }
        return tmp;
        // return ["Javascript", "C", "C#", "Java"];
    }
}