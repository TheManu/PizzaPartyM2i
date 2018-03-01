import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {LOCALE_ID} from '@angular/core';
registerLocaleData(localeFr);

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaApiService } from './service/pizza-api.service';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FakeApi } from './service/fake-api.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BackgroundDirective } from './directives/background.directive';
import { DropdowntoggleDirective } from './directives/dropdowntoggle.directive';
import { CounterComponent } from './counter/counter.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaListComponent,
    MenuComponent,
    HomeComponent,
    BackgroundDirective,
    DropdowntoggleDirective,
    CounterComponent,
    RegisterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'pizza/:id',
        component: PizzaComponent
      },
      {
        path: 'pizzas',
        component: PizzaListComponent
      },
      {
        path: 'inscription',
        component: RegisterComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ]),
    environment.production ? [] : InMemoryWebApiModule.forRoot(FakeApi)
  ],
  providers: [
    {
      provide: LOCALE_ID, 
      useValue: 'fr-FR'
    }, 
    PizzaApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
