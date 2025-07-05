import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CalculatorComponent } from './calculator.component';

@Component({
  standalone: true,
  imports: [CalculatorComponent],
  template: `<calculator-button>
               <span class="projected-content underline">Test content</span>
             </calculator-button>`

})
class TestHostComponent {}

describe('CalculatorComponent', () => {

  let fixture: ComponentFixture<CalculatorComponent>;
  let compiled: HTMLElement;
  let component: CalculatorComponent;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
