import {
    Component,
    ElementRef,
    Renderer,
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    OnDestroy,
    Input,
    ViewChild
} from '@angular/core';



@Component({
    // moduleId: module.id,
    selector: 'ciclo',
    templateUrl: 'ciclo.component.html'
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy {

    @Input() valor: number = 10;
    @ViewChild('local') local : HTMLElement;
    del = false;
    valorMais() {
        this.valor += 1;
    }
    constructor(
        private _elementRef: ElementRef,
        private _renderer: Renderer) {
        // console.log("Constructor");
    }
    ngOnInit() {
        console.log("ngOnInit");
        // console.log(this.local);
        console.log(this._elementRef);
    }

    ngOnChanges() {
        // console.log("ngOnChanges");
    }
    ngDoCheck() {
        // console.log("ngDoCheck");
    }
    ngAfterContentInit() {
        // console.log("ngAfterContentInit");
    }
    ngAfterContentChecked() {
        // console.log("ngAfterContentChecked");
    }
    ngAfterViewInit() {
        // console.log("ngAfterViewInit");
    }
    ngOnDestroy() {
        // console.log("ngOnDestroy");
    }
}