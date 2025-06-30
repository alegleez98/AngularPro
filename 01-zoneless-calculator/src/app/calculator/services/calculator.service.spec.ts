import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";


describe('CalculatorService', () => {

  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  })

  it('should be created', () => {
    expect(service).not.toBeNull();
  });

  it('should be created with default values', () => {
    expect(service.resultText()).toBe('0');
    expect(service.subResultText()).toBe('0');
    expect(service.lastOperator()).toBe('+');
  });

  it('should set resultText to "0" when C is pressed', () => {

    service.resultText.set('123');
    service.subResultText.set('456');
    service.lastOperator.set('*');
    service.construcNumber('C');

    expect(service.resultText()).toBe('0');
    expect(service.subResultText()).toBe('0');
    expect(service.lastOperator()).toBe('+');

  });

  it('should update resultText with number input', () => {

    service.construcNumber('1');
    expect(service.resultText()).toBe('1');

    service.construcNumber('2');
    expect(service.resultText()).toBe('12');

  });

  it('should handler operators correctly', () => {

    service.construcNumber('1');
    service.construcNumber('-');

    expect(service.resultText()).toBe('0');
    expect(service.subResultText()).toBe('1');
    expect(service.lastOperator()).toBe('-');

  });

  it('should calculate result correctly for addition', () => {

    service.construcNumber('1');
    service.construcNumber('+');
    service.construcNumber('2');
    service.construcNumber('=');

    expect(service.resultText()).toBe('3');

  });
  it('should calculate result correctly for subtraction', () => {

    service.construcNumber('3');
    service.construcNumber('-');
    service.construcNumber('1');
    service.construcNumber('=');

    expect(service.resultText()).toBe('2');

  });
  it('should calculate result correctly for multiply', () => {

    service.construcNumber('3');
    service.construcNumber('*');
    service.construcNumber('5');
    service.construcNumber('=');

    expect(service.resultText()).toBe('15');


  });
  it('should calculate result correctly for division', () => {

    service.construcNumber('1');
    service.construcNumber('0');
    service.construcNumber('/');
    service.construcNumber('2');
    service.construcNumber('=');

    expect(service.resultText()).toBe('5');

  });

  it('should handle decimal point correctly', () => {

    service.construcNumber('1');
    service.construcNumber('.');
    service.construcNumber('5');

    expect(service.resultText()).toBe('1.5');
    service.construcNumber('.');
    expect(service.resultText()).toBe('1.5');

  });

  it('should handle decimal point correctly', () => {

    service.construcNumber('0');
    service.construcNumber('.');
    service.construcNumber('5');

    expect(service.resultText()).toBe('0.5');
    service.construcNumber('.');
    expect(service.resultText()).toBe('0.5');

  });



});
