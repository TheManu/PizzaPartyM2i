import { TestBed, inject } from '@angular/core/testing';

import { PizzaApiService } from './pizza-api.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Pizza } from '../model/pizza.model';

/*describe('PizzaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaApiService]
    });
  });

  it('should be created', inject([PizzaApiService], (service: PizzaApiService) => {
    expect(service).toBeTruthy();
  }));
});*/

fdescribe('Test Ioc', () => {
  it('instancier service simplement', () =>{
    const pizzas = [];
    const PizzaService = new PizzaApiService(<HttpClient><any>{
      get: () => {
        return {
          map: () => new Observable(o => {
            o.next(<Pizza[]>pizzas);
            o.complete();
          })
        };
      }
    });

    PizzaService.getPizzas().subscribe(pizzas_ => expect(pizzas_).toEqual(pizzas));
  })

  it('instancier service', () =>{
    TestBed.configureTestingModule({
      providers: [PizzaApiService, HttpClient],
      imports: [HttpClientModule]
    });
    const PizzaService = TestBed.get(PizzaApiService);

    PizzaService.getPizzas().subscribe(pizzas_ => expect(pizzas_).toEqual([]));
  })

  it('instancier service avec mock', () =>{
    const pizzas = [];
    const FakeHttpClient = jasmine.createSpyObj('HttpClient', ['get']);
    FakeHttpClient.get.and.returnValue(new Observable(o => {
      o.next(<Pizza[]>pizzas);
      o.complete();
    }));

    TestBed.configureTestingModule({
      providers: [ 
        { // Redéf du binding sur HttpClient
          provide: HttpClient, 
          useValue: FakeHttpClient
        }, 
        PizzaApiService
      ],
    });
    const PizzaService = TestBed.get(PizzaApiService);

    PizzaService.getPizzas().subscribe(pizzas_ => expect(pizzas_).toEqual(pizzas));
  })
});