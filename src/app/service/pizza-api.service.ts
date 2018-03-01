import { Injectable } from '@angular/core';
import { Pizza } from '../model/pizza.model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PizzaApiService {

  constructor(private http: HttpClient) { 
  }

  getPizzas(): Observable<Pizza[]>{
    let obs = this.http
      .get<Pizza[]>('api/pizzas')
      .map(pizzas => pizzas.slice());

    obs
      .subscribe(pizzas => {
        localStorage['pizzas'] = JSON.stringify(pizzas);
      });

    return obs;
  }

  getPizza(id: number): Observable<Pizza>{
    if (id === 0)
      return new Observable(o =>{
        o.complete()
      });

    return this.http.get<Pizza>(`api/pizzas/${id}`);
  }

  ajouter(): Observable<Pizza[]>{
    let pizza: any = {
      id: -this.getRandomInt(999999999),
      name: '',
      price: 0
    };

    return this.http
      .post<Pizza>('api/pizzas', pizza)
      .switchMap(() => this.getPizzas());
  }

  private getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  supprimer(pizza: Pizza): Observable<Pizza[]> {
    return this.http
      .delete<Pizza>(`api/pizzas/${pizza.id}`)
      .switchMap(() => this.getPizzas());
  }

  searchPizza(search: string): Observable<Pizza[]>{
    return this.http
      .get<Pizza[]>(`api/pizzas/?name=${search}`);
  }
}
