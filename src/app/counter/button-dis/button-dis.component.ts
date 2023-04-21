import { Component } from '@angular/core';

@Component({
  selector: 'app-button-dis',
  templateUrl: './button-dis.component.html',
  styleUrls: ['./button-dis.component.css'],
})
export class ButtonDisComponent {
  contador: number = 0;
  dis() {
    this.contador--;
  }
}
