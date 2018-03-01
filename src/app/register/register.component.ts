import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hero: Hero = new Hero();
  passConfirmation: string = '';

  constructor() { }

  ngOnInit() {
    localStorage['page'] = 'Inscription';
  }

  onSubmit() { 
    
  }
}
