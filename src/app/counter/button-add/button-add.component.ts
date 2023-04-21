import { Component } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css'],
})
export class ButtonAddComponent {
  contador: number = 0;
  add() {
    this.contador++;
  }
}
