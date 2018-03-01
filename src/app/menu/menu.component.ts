import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isCollapsed = false;
  @Input() title: string;
  @Output() menuChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.title = localStorage['page'] || 'Home';
  }

  selectionner(title: string)
  {
    this.menuChange.emit(title || '');
  }

  toggleMenu()
  {
    this.isCollapsed = !this.isCollapsed;
  }
}
