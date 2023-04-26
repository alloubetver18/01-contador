import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [``],
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  nombre: string = 'Alban';
  contador: number = 17;

  handleCount(value: number) {
    this.contador = value;
  }
}
