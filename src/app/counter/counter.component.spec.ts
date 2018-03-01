import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as $ from 'jquery';
import { CounterComponent } from './counter.component';

fdescribe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a value', () => {
    expect(component.value).toEqual(0);
  });

  it('should have a increment method', () => {
    expect(component.increment).toBeDefined();
    expect(typeof component.increment).toEqual('function');
  });

  it('increment', () => {
    component.increment();
    expect(component.value).toEqual(1);
  });

  it('should have a decrement method', () => {
    expect(component.decrement).toBeDefined();
    expect(typeof component.decrement).toEqual('function');
  });

  it('increment <= 10', () => {
    component.value = 10;
    component.increment();
    expect(component.value).toEqual(10);
  });

  it('decrement >= 0', () => {
    component.decrement();
    expect(component.value).toEqual(0);
  });

  it('shouled increment when click on + button', () => {
    const element = fixture.nativeElement;
    let $button = $('button.plus', element);

    expect($button[0]).toBeDefined();

    $button.click();
    fixture.detectChanges();

    expect(component.value).toEqual(1);
    expect($('span', element).text()).toEqual('1');
  });

  it('shouled increment when click on - button', () => {
    component.value = 10;
    const element = fixture.nativeElement;
    let $button = $('button.moins', element);

    expect($button[0]).toBeDefined();

    $button.click();
    fixture.detectChanges();

    expect(component.value).toEqual(9);
    expect($('span', element).text()).toEqual('9');
  });
});
