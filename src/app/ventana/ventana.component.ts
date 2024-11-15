import {Component, OnDestroy} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-ventana',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './ventana.component.html',
  styleUrl: './ventana.component.css'
})
export class VentanaComponent implements OnDestroy{
  nuevaventana: Window | null = null;
  ancho: number = 0;
  alto: number = 0;

  abrirVentana(): void {
    this.nuevaventana = window.open("", "", "width=500,height=500,resizable=yes");
    this.actualizarResolucion();

    this.nuevaventana?.addEventListener("resize", () => this.actualizarResolucion());
  }

  actualizarResolucion(): void {
    if (this.nuevaventana) {
      this.ancho = this.nuevaventana.innerWidth;
      this.alto = this.nuevaventana.innerHeight;
    }
  }

  cerrarVentana(): void {
    if (this.nuevaventana) {
      this.nuevaventana.close();
      this.nuevaventana = null;
    }
  }

  ngOnDestroy() {
    this.cerrarVentana();
  }


}
