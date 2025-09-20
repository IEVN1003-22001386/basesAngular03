import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {
  num1: string = '';
  num2: string = '';
  operacionSeleccionada: string = '';
  resultado: number = 0;

  calcular(): void {
    const n1 = parseInt(this.num1);
    const n2 = parseInt(this.num2);

    if (this.operacionSeleccionada === 'sumar') {
      this.resultado = n1 + n2;
    } else if (this.operacionSeleccionada === 'restar') {
      this.resultado = n1 - n2;
    } else if (this.operacionSeleccionada === 'multiplicar') {
      this.resultado = n1 * n2;
    } else if (this.operacionSeleccionada === 'dividir') {
      this.resultado = n1 / n2;
    } else {
      this.resultado = 0;
    }
  }
}
