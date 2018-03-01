import { Directive, ElementRef, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[ddtoggle]'
})
export class DropdowntoggleDirective {

  nativeElement: HTMLElement;
  constructor(private element: ElementRef) { 
  }

  ngOnInit(){
    this.nativeElement = this.element.nativeElement;
  }

  @HostListener('click', ['$event']) onclick(ev){
    ev.preventDefault();
    
    /*let e = <HTMLElement>this.nativeElement.parentElement.lastElementChild;
    e.style.display = e.style.display === 'block' ? 'none' : 'block';*/

    let $p = $(this.nativeElement.parentElement);
    $('.dropdown-menu', $p)
      .toggle();
  }
}
