import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import { PizzaApiService } from '../service/pizza-api.service';
import * as $ from 'jquery';
import { Pizza } from '../model/pizza.model';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pizzas: Pizza[];
  observable = Observable.range(1, 10);
  recherche: string = '';
  search = new Subject<string>();

  constructor(private api: PizzaApiService) { }

  ngOnInit() {
    localStorage['page'] = 'Home';
    
    this.observable.subscribe(v =>
      console.log(v));

    this.rechercher();
    this.search
      .filter<string>(searchTerm =>
        (searchTerm || '').length > 1)
      .debounceTime(200)
      .switchMap(searchTerm =>
        this.api.searchPizza(searchTerm))
      .subscribe(pizzas => {
        this.pizzas = pizzas || [];

        if (this.pizzas.length === 1) {
          $('#rechPizza').val(pizzas[0].name);
        }
      });

    this.api.getPizzas().subscribe(pizzas => 
      this.pizzas = pizzas || []);
  }

  rechercher(searchTerm?: string){
    searchTerm = searchTerm || '';
    this.search.next(searchTerm);
  }
}
