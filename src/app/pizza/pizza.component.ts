import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from '../model/pizza.model';
import { PizzaApiService } from '../service/pizza-api.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  @Input() pizza:Pizza;
  @Input() selected:boolean = false;
  isHidden = false;

  constructor(
    private api: PizzaApiService,
    private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.pizza = this.getPizzaFake();

    this.route.params.map(params => params['id'])
      .switchMap(id =>
        this.api.getPizza(parseInt(id || 0) || 0))
      .subscribe(p =>
        this.pizza = p || this.getPizzaFake());
  }

  hidePrice(e: Event): void{
    e.stopPropagation();
    this.isHidden = !this.isHidden;
  }

  private getPizzaFake(): Pizza{
    return {
      id: 0,
      name: '',
      price: 0
    };
  }
}
