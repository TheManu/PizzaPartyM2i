import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[bg]'
})
export class BackgroundDirective {
  nativeElement: HTMLElement;
  @Input('bg') color: string = 'yellow';

  constructor(private element: ElementRef) { 
  }

  ngOnInit(){
    this.nativeElement = this.element.nativeElement;
    this.nativeElement.style.backgroundColor = this.color;   
  }

  @HostListener('click') onclick(){
    this.nativeElement.style.backgroundColor = 'red';
  }
}
