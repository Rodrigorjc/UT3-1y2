import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-numero-aleatorio-component',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './numero-aleatorio-component.component.html',
  styleUrl: './numero-aleatorio-component.component.css'
})
export class NumeroAleatorioComponentComponent {
  lista: Array<string> = new Array<string>();
  numero: number = 0;

  numeros() {
    let number;
    for (this.numero; this.numero--;) {
      number = Math.floor(Math.random() * 101);
      this.lista.push(number.toString());
      number = "";
    }
  }
  elimiarLista(){
    this.lista = [];
  }
}
