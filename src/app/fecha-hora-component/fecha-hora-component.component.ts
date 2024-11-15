import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';

@Component({
  selector: 'app-fecha-hora-component',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent
  ],
  templateUrl: './fecha-hora-component.component.html',
  styleUrl: './fecha-hora-component.component.css'
})
export class FechaHoraComponentComponent implements OnInit, OnDestroy{
  fechaActual: string = "";
  horaActual: string = "";
  private intervalo: any;

  ngOnInit() {
    setInterval(() => {
      this.mostrar();
    }, 1000);
  }

  mostrar(){
    this.actualizar() ;
  }

  actualizar(){
    const hoy = new Date();
    this.fechaActual = hoy.toLocaleDateString();
    this.horaActual = hoy.toLocaleTimeString();
  }

  ngOnDestroy() {

  }
}
