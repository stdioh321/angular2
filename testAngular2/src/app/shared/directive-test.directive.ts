import {
  Directive,
  ElementRef,
  Renderer,
  HostListener,
  HostBinding,
  Input,
  ViewContainerRef,
  TemplateRef

} from '@angular/core';

@Directive({
  selector: '[directiveTest]'
})
export class DirectiveTestDirective {
  @Input() set directiveTest(condition: boolean) {
    if (condition) {
      console.log("OK");
      // this._viewRef.clear();
      console.log(this._viewRef);

    }
    else {
      console.log("NOT OK");
    }
  }

  @HostBinding('style.backgroundColor') backgroundColor = "red";
  // @HostBinding('innerHTML') inner;

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = "green";
    // console.log(this.inner);
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement,
    //   "background-color",
    //   "blue"
    // );
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = "red";
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement,
    //   "background-color",
    //   "white"
    // );
  }
  constructor(

    private _elementRef: ElementRef,
    private _renderer: Renderer
    // ,private _templateRef: TemplateRef<any>
    , private _viewRef: ViewContainerRef
  ) {
    // console.log(this._renderer);
    // console.log("JAO");
    // this._elementRef.nativeElement.style = "background-color: red;";
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      "background-color",
      "yellow");
  }

}
