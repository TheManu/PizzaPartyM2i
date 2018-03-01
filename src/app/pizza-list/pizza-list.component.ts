import { Component, OnInit } from '@angular/core';
import { Pizza } from '../model/pizza.model';
import { PizzaApiService } from '../service/pizza-api.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styles: [`li {
    cursor: pointer
  }`]
})
export class PizzaListComponent implements OnInit {

  i:number = 1;
  pizzas: Pizza[];
  pizzaSelected: Pizza;

  constructor (private api: PizzaApiService){
    this.pizzaSelected = this.getPizzaFake();
  }

  ngOnInit(){
    localStorage['page'] = 'Pizzas';

    this.pizzaSelected = this.getPizzaFake();
    this.api.getPizzas()
      .subscribe(pizzas => {
        this.pizzas = pizzas;
        this.pizzaSelected = this.pizzas.length > 0 ? this.pizzas[0] : this.getPizzaFake();
      });
  }


  selectionner(pizza: Pizza): void{
    this.pizzaSelected = this.pizzas.find((p) => p.id === pizza.id);
  }

  ajouter(){
    return this.api.ajouter()
      .subscribe(pizzas => {
        this.pizzas = pizzas;       
      });
  }

  supprimer(pizza: Pizza) {
    pizza = pizza || this.pizzaSelected;

    if (pizza){

      this.api.supprimer(pizza)
        .subscribe(pizzas => {
          this.pizzas = pizzas;

          if ((this.pizzaSelected || {id:0}).id === pizza.id) {
            this.pizzaSelected = this.pizzas.length > 0 
              ? this.pizzaSelected = this.pizzas[0]
              : this.getPizzaFake();
          }
        });
    };
  }

  private getPizzaFake(): Pizza{
    return {
      id: 0,
      name: '',
      price: 0
    };
  }
}
