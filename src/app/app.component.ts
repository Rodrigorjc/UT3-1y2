import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FechaHoraComponentComponent} from './fecha-hora-component/fecha-hora-component.component';
import {NumeroAleatorioComponentComponent} from './numero-aleatorio-component/numero-aleatorio-component.component';
import {HistorialComponent} from './historial/historial.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FechaHoraComponentComponent, NumeroAleatorioComponentComponent, HistorialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UT3Parte1y2';
}
