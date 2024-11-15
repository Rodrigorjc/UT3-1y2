import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent {
  constructor(private location: Location) {}

  atras(): void {
    this.location.back();
  }

  adelante(): void {
    this.location.forward();
  }
}
