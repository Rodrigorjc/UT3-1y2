import {Component, OnDestroy} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-ventana-en-movimiento',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './ventana-en-movimiento.component.html',
  styleUrl: './ventana-en-movimiento.component.css'
})
export class VentanaEnMovimientoComponent implements OnDestroy{
  nuevaVentana: Window | null = null;
  x: number = 100;
  y: number = 100;

  abrirVentana(): void {
    this.nuevaVentana = window.open("","","width=400,height=400,left=${this.x},top=${this.y}")
  }

  moverVentana(direccion: string): void {
    if (this.nuevaVentana) {
      switch (direccion) {
        case 'arriba':
          this.y -= 100;
          break;
        case 'abajo':
          this.y += 100;
          break;
        case 'izquierda':
          this.x -= 100;
          break;
        case 'derecha':
          this.x += 100;
          break;
      }
      this.nuevaVentana.moveTo(this.x, this.y);
    }
  }

  cerrarVentana(): void {
    if (this.nuevaVentana) {
      this.nuevaVentana.close();
      this.nuevaVentana = null;
    }
  }

  ngOnDestroy(): void {
    this.cerrarVentana();
  }
}
