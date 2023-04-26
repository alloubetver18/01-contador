import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonDisComponent } from './button-dis/button-dis.component';

describe('CounterComponent Unit', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent, ButtonAddComponent, ButtonDisComponent],
    }).compileComponents();
  });
  //Probar de nuevo con la lección 30 del curso.
  it('se debe crear el componente Counter', () => {
    const fixture = TestBed.createComponent(CounterComponent);

    expect(fixture.componentInstance).toBeTruthy(); /**/
  });

  it('Debe crear el texto Contador: 17', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.nativeElement;
    expect(compiled.querySelector('h1.contador')?.textContent).toEqual(
      'Contador: 17'
    );
  });

  it('valor inicial del contador es 17', () => {
    const counter = new CounterComponent();

    expect(counter.contador).toBe(17);
  });
});

describe('Integration Testing', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent, ButtonAddComponent, ButtonDisComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); /**/

  it('evento click de buttonAdd', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const counterValue = compiled.querySelector('h1.contador')!;

    const btnAdd: HTMLElement =
      fixture.debugElement.nativeElement.querySelector('#add');

    btnAdd.click();

    fixture.detectChanges();

    expect(counterValue.textContent).toEqual('Contador: 18');
  });

  it('evento click de buttonDis', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const counterValue = compiled.querySelector('h1.contador')!;

    const btnDis: HTMLElement =
      fixture.debugElement.nativeElement.querySelector('#dis');

    btnDis.click();
    fixture.detectChanges();

    expect(counterValue.textContent).toEqual('Contador: 16');
  });
});
