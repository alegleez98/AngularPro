import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should be 2', () => {
    const num1 = 1;
    const num2 = 2;

    const result = num1 + num2;
    expect(result).toBe(3);
  })

  it(`should have the 'zoneless-calculator' title`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('zoneless-calculator');
  });

  it('should render router-outlet', () => {
    expect(compiled.querySelector('router-outlet')).not.toBeNull();
  });

  it('should render router-outlet wrapped with css classes', () => {
    const divElement: HTMLElement | null = compiled.querySelector('div');

    const cssClasses = 'min-w-screen min-h-screen bg-slate-600 flex items-center justify-center px-5 py-5';
    const cssClassesArray = cssClasses.split(' ');
    const divClasses = divElement?.classList.value.split(' ');

    // expect(cssClasses).not.toBeNull();
    // divElement?.classList.forEach(className => {
    //   expect(cssClasses).toContain(className);
    // });
    expect(cssClasses).not.toBeNull();
    cssClassesArray.forEach(className => {
      expect(divClasses).toContain(className);
    });
  })
});
