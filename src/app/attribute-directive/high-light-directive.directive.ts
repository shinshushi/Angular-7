import { Directive, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appHighLightDirective]'
})
export class HighLightDirectiveDirective {

  constructor(private ele: ElementRef, private rendered2: Renderer2) { 
    // this.ele.nativeElement.style.backgroundColor = "green";
    this.rendered2.setStyle(this.ele.nativeElement, 'background-color', "green");
  }

  @HostListener('mouseenter') SuKienHover(){
    this.rendered2.setStyle(this.ele.nativeElement, 'background-color', "yellow");
  }
  @HostListener('mouseleave') SuKienLeave(){
    this.rendered2.setStyle(this.ele.nativeElement, 'background-color', "green");
  }
  @HostBinding('style.backgroundColor') bgColor:string = "pink";
}
