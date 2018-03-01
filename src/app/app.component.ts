import { Component, OnInit } from '@angular/core';
import { Pizza } from './model/pizza.model';
import { PizzaApiService } from './service/pizza-api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'PizzaParty';
  dateCourante = Date.now();
  i:number = 1;
  pizzas: Pizza[];
  pizzaSelected: Pizza;
  observable = Observable.interval(900).map(() => Date.now());

  ngOnInit(){
    this.observable.subscribe(d =>
      this.dateCourante = d);
   }

  changeTitle(title){
    this.title = title;
  }
}
