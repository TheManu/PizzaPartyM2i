import { InMemoryDbService } from "angular-in-memory-web-api";
import { Pizza } from "../model/pizza.model";

export class FakeApi implements InMemoryDbService{
    createDb(){
        let i = 1;
        let pizzas: Pizza[] = JSON.parse(localStorage['pizzas'] || 'null') || [
            {
                id: i++,
                name: '4 fromages',
                price: 9.99
            },
            {
                id: i++,
                name: 'Reine',
                price: 12
            },
            {
                id: i++,
                name: 'Orientale',
                price: 14,
            }
        ];

        return {
            pizzas
        };
    }
}